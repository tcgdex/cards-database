import { relative } from './config'
import { getProductRanks, productById, splitProductName } from './catalog'
import { addCardmarketProperty, addThirdPartyObject } from './references'
import {
	buildAssignments,
	cardDetails,
	detailMatch,
	findCandidates,
	getCardRanks,
	nameScore,
	suggestCandidate
} from './matching'
import { buildReport } from './report'
import type {
	Assignment,
	AuditResult,
	CandidateSuggestion,
	CardEntry,
	CardmarketReference,
	Candidate,
	DuplicateGroup,
	FixProposal,
	LinkAudit,
	LinkStatus,
	Product,
	ReferenceEntry
} from './types'
import type { ProgressTracker } from './progress'

function getBaseStatus(reasons: string[], hasSetExpansion: boolean): LinkStatus {
	if (reasons.includes('catalog-missing')) return 'catalog-missing'
	if (reasons.includes('expansion-mismatch')) return 'expansion-mismatch'
	if (reasons.includes('name-mismatch')) return 'name-mismatch'
	if (reasons.includes('details-mismatch')) return 'details-mismatch'
	if (!hasSetExpansion) return 'unverifiable'
	return 'valid'
}

function validateCardmarketReference(card: CardEntry, reference: CardmarketReference, productIndex: Map<number, Product>) {
	const product = productIndex.get(reference.idProduct)
	const reasons: string[] = []
	const matchedDetails: string[] = []
	if (!product) {
		reasons.push('catalog-missing')
	} else {
		const expansion = card.set.thirdParty?.cardmarket
		if (!expansion) reasons.push('missing-set-expansion')
		else if (product.idExpansion !== expansion) reasons.push('expansion-mismatch')
		const { baseName, details } = splitProductName(product.name)
		if (nameScore(card.data, baseName) === 0) reasons.push('name-mismatch')
		const expectedDetails = cardDetails(card.data)
		matchedDetails.push(...expectedDetails.filter((expected) => details.some((actual) => detailMatch(expected, actual))))
		if (expectedDetails.length > 0 && matchedDetails.length !== expectedDetails.length) reasons.push('details-mismatch')
	}
	return {
		idProduct: reference.idProduct,
		setExpansion: card.set.thirdParty?.cardmarket,
		status: getBaseStatus(reasons, Boolean(card.set.thirdParty?.cardmarket)),
		reasons,
		product,
		matchedDetails
	}
}

export function makeDuplicateGroups(references: ReferenceEntry[], audits: Map<string, LinkAudit>): DuplicateGroup[] {
	const byProduct = new Map<number, ReferenceEntry[]>()
	for (const entry of references) {
		const group = byProduct.get(entry.reference.idProduct) ?? []
		group.push(entry)
		byProduct.set(entry.reference.idProduct, group)
	}
	const groups: DuplicateGroup[] = []
	for (const [idProduct, entries] of byProduct) {
		if (entries.length < 2) continue
		const codeSet = new Set(entries.map((entry) => entry.card.code))
		const classification = codeSet.size > 1 ? 'duplicate-cross-card' : 'same-card-variant-reuse'
		const group: DuplicateGroup = {
			idProduct,
			classification,
			setIds: [...new Set(entries.map((entry) => entry.card.set.id))].sort(),
			references: entries.map((entry) => ({
				key: entry.key,
				setId: entry.card.set.id,
				code: entry.card.code,
				file: relative(entry.card.filePath),
				location: entry.reference.location
			}))
		}
		groups.push(group)
		for (const entry of entries) {
			const audit = audits.get(entry.key)
			if (!audit) continue
			audit.duplicateGroupId = idProduct
			audit.reasons.push(classification)
			audit.status = classification
		}
	}
	return groups.sort((left, right) => left.idProduct - right.idProduct)
}

function getMissingLinkAudit(card: CardEntry, cardRank: number | undefined, candidates: Candidate[], productRanks: Map<number, number>, assignment: Assignment | undefined) {
	const setExpansion = card.set.thirdParty?.cardmarket
	if (!setExpansion) {
		return {
			audit: {
				key: `${relative(card.filePath)}#missing`,
				setId: card.set.id,
				code: card.code,
				file: relative(card.filePath),
				cardRank,
				status: 'unverifiable' as const,
				reasons: ['missing-set-expansion'],
				matchedDetails: [],
				candidates: []
			},
			suggestion: { reason: 'missing-set-expansion', candidates: [] }
		}
	}
	const suggestion = suggestCandidate(card, candidates, productRanks, assignment)
	return {
		audit: {
			key: `${relative(card.filePath)}#missing`,
			setId: card.set.id,
			code: card.code,
			file: relative(card.filePath),
			cardRank,
			setExpansion,
			status: 'missing-link' as const,
			reasons: ['missing-link'],
			matchedDetails: [],
			candidates
		},
		suggestion
	}
}

function createFixProposal(card: CardEntry, audit: LinkAudit, suggestion: CandidateSuggestion, duplicateGroup: DuplicateGroup | undefined): FixProposal {
	const requiredSets = duplicateGroup?.setIds ?? [card.set.id]
	const base = {
		key: audit.key,
		setId: card.set.id,
		code: card.code,
		file: relative(card.filePath),
		location: audit.location ?? 'thirdParty.cardmarket',
		referenceOrdinal: audit.referenceOrdinal,
		confidence: suggestion.confidence,
		status: 'ambiguous' as const,
		reason: suggestion.reason,
		duplicateGroupId: audit.duplicateGroupId,
		requiredSets,
		candidates: suggestion.candidates
	}
	if (!suggestion.candidate) {
		return {
			...base,
			kind: audit.idProduct === undefined ? 'add' : 'replace',
			currentId: audit.idProduct,
			edit: { start: 0, end: 0, replacement: '' }
		}
	}
	if (audit.idProduct !== undefined) {
		if (suggestion.candidate.idProduct === audit.idProduct) {
			return {
				...base,
				kind: 'replace',
				currentId: audit.idProduct,
				proposedId: suggestion.candidate.idProduct,
				reason: 'suggestion-matches-current',
				edit: { start: 0, end: 0, replacement: '' }
			}
		}
		const reference = card.sourceInfo.references.find((item) => item.referenceOrdinal === audit.referenceOrdinal)
		if (!reference) {
			return {
				...base,
				kind: 'replace',
				currentId: audit.idProduct,
				proposedId: suggestion.candidate.idProduct,
				reason: 'source-reference-not-found',
				edit: { start: 0, end: 0, replacement: '' }
			}
		}
		return {
			...base,
			kind: 'replace',
			currentId: audit.idProduct,
			proposedId: suggestion.candidate.idProduct,
			status: 'proposed',
			reason: suggestion.reason,
			edit: { start: reference.sourceStart, end: reference.sourceEnd, replacement: String(suggestion.candidate.idProduct) }
		}
	}
	if (!card.sourceInfo.topLevelThirdParty) {
		const canAddThirdParty = audit.idProduct === undefined &&
			card.sourceInfo.cardObject &&
			(suggestion.confidence === 'unique-candidate' || suggestion.confidence === 'rank' || suggestion.confidence === 'score')
		if (canAddThirdParty) {
			return {
				...base,
				kind: 'add',
				proposedId: suggestion.candidate.idProduct,
				status: 'proposed',
				reason: suggestion.reason,
				edit: addThirdPartyObject(card.source, card.sourceInfo.cardObject!, suggestion.candidate.idProduct)
			}
		}
		return {
			...base,
			kind: 'add',
			proposedId: suggestion.candidate.idProduct,
			reason: 'top-level-third-party-object-not-found',
			edit: { start: 0, end: 0, replacement: '' }
		}
	}
	return {
		...base,
		kind: 'add',
		proposedId: suggestion.candidate.idProduct,
		status: 'proposed',
		reason: suggestion.reason,
		edit: addCardmarketProperty(card.source, card.sourceInfo.topLevelThirdParty, suggestion.candidate.idProduct)
	}
}

function validateProposalCollisions(proposals: FixProposal[], references: ReferenceEntry[]) {
	const finalByKey = new Map<string, { idProduct: number; code: string }>()
	for (const entry of references) {
		finalByKey.set(entry.key, { idProduct: entry.reference.idProduct, code: entry.card.code })
	}
	for (const proposal of proposals) {
		if (proposal.status !== 'proposed' || proposal.proposedId === undefined) continue
		finalByKey.set(proposal.key, { idProduct: proposal.proposedId, code: proposal.code })
	}
	const ownersByProduct = new Map<number, Set<string>>()
	for (const owner of finalByKey.values()) {
		const owners = ownersByProduct.get(owner.idProduct) ?? new Set<string>()
		owners.add(owner.code)
		ownersByProduct.set(owner.idProduct, owners)
	}
	for (const proposal of proposals) {
		if (proposal.status !== 'proposed' || proposal.proposedId === undefined) continue
		if ((ownersByProduct.get(proposal.proposedId)?.size ?? 0) > 1) {
			proposal.status = 'blocked-by-collision'
			proposal.reason = 'proposed-id-would-remain-duplicated'
		}
	}
}

export function makeAudit(cards: Map<string, CardEntry>, products: Product[], fetchedAt: string, progress?: ProgressTracker): AuditResult {
	const productIndex = productById(products)
	const productRanks = getProductRanks(products)
	const cardRanks = getCardRanks(cards)
	const assignments = buildAssignments(cards, products, progress?.start('Resolving candidate groups', cards.size))
	const references: ReferenceEntry[] = []
	const audits = new Map<string, LinkAudit>()
	const candidatesByCode = new Map<string, Candidate[]>()
	const cardEntries = [...cards.values()]
	const candidateProgress = progress?.start('Matching cards to catalog products', cardEntries.length)
	for (const [index, card] of cardEntries.entries()) {
		candidatesByCode.set(card.code, findCandidates(card, products))
		for (const reference of card.sourceInfo.references) references.push({ key: `${relative(card.filePath)}#${reference.referenceOrdinal}`, card, reference })
		candidateProgress?.(index + 1)
	}

	const validationProgress = progress?.start('Validating Cardmarket references', cardEntries.length)
	for (const [index, card] of cardEntries.entries()) {
		const candidates = candidatesByCode.get(card.code) ?? []
		if (card.sourceInfo.references.length === 0) {
			const { audit } = getMissingLinkAudit(card, cardRanks.get(card.code), candidates, productRanks, assignments.get(card.code))
			audits.set(audit.key, audit)
			validationProgress?.(index + 1)
			continue
		}
		for (const reference of card.sourceInfo.references) {
			const key = `${relative(card.filePath)}#${reference.referenceOrdinal}`
			const validation = validateCardmarketReference(card, reference, productIndex)
			audits.set(key, {
				key,
				setId: card.set.id,
				code: card.code,
				file: relative(card.filePath),
				location: reference.location,
				referenceOrdinal: reference.referenceOrdinal,
				cardRank: cardRanks.get(card.code),
				...validation,
				candidates
			})
		}
		validationProgress?.(index + 1)
	}

	const duplicateGroups = makeDuplicateGroups(references, audits)
	const duplicateById = new Map(duplicateGroups.map((group) => [group.idProduct, group]))
	const fixes: FixProposal[] = []
	const proposalProgress = progress?.start('Generating fix proposals', audits.size)
	for (const [index, audit] of [...audits.values()].entries()) {
		const needsFix = audit.status === 'duplicate-cross-card' || audit.status === 'catalog-missing' || audit.status === 'expansion-mismatch' || audit.status === 'name-mismatch' || audit.status === 'details-mismatch' || audit.status === 'missing-link'
		if (!needsFix) {
			proposalProgress?.(index + 1)
			continue
		}
		const card = cards.get(audit.code)
		if (!card) {
			proposalProgress?.(index + 1)
			continue
		}
		const suggestion = suggestCandidate(card, audit.candidates, productRanks, assignments.get(card.code))
		if (card.sourceInfo.references.length > 1 && audit.idProduct !== undefined) {
			suggestion.candidate = undefined
			suggestion.confidence = undefined
			suggestion.reason = 'multiple-cardmarket-references-in-card-file'
		}
		const proposal = createFixProposal(card, audit, suggestion, audit.idProduct === undefined ? undefined : duplicateById.get(audit.idProduct))
		if (proposal.status === 'proposed') fixes.push(proposal)
		audit.fix = proposal
		proposalProgress?.(index + 1)
	}
	validateProposalCollisions(fixes, references)
	const allFixes = [...audits.values()].map((audit) => audit.fix).filter((fix): fix is FixProposal => Boolean(fix))
	const report = buildReport(cards, references, audits, duplicateGroups, allFixes, products.length, fetchedAt, productRanks)
	return { report, audits, cards, references, productRanks, fixes: allFixes }
}
