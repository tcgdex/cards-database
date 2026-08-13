import { getProductRanks, splitProductName } from './catalog'
import type { Assignment, Candidate, CandidateSuggestion, CardEntry, Product } from './types'
import type { ProgressCallback } from './progress'

export function normalize(value: unknown): string {
	return String(value ?? '')
		.toLowerCase()
		.replace(/[’']/g, '')
		.replace(/&/g, ' and ')
		.replace(/[^a-z0-9]+/g, ' ')
		.trim()
}

export function collectorPart(code: string): string {
	return code.slice(code.lastIndexOf('-') + 1)
}

export function numericCollectorNumber(code: string): number | undefined {
	const part = collectorPart(code)
	return /^\d+$/.test(part) ? Number(part) : undefined
}

export function collectorSortKey(code: string): string {
	const part = collectorPart(code)
	const numeric = part.match(/^(\d+)([a-z]*)$/i)
	if (numeric) return `0-${numeric[1].padStart(4, '0')}-${numeric[2].toLowerCase()}`
	const prefixed = part.match(/^([a-z]+)(\d+)([a-z]*)$/i)
	if (prefixed) return `1-${prefixed[1].toLowerCase()}-${prefixed[2].padStart(4, '0')}-${prefixed[3].toLowerCase()}`
	return `2-${part.toLowerCase()}`
}

export function getCardRanks(cards: Map<string, CardEntry>): Map<string, number> {
	const bySet = new Map<string, CardEntry[]>()
	for (const card of cards.values()) {
		const setCards = bySet.get(card.set.id) ?? []
		setCards.push(card)
		bySet.set(card.set.id, setCards)
	}
	const ranks = new Map<string, number>()
	for (const setCards of bySet.values()) {
		setCards.sort((left, right) => collectorSortKey(left.code).localeCompare(collectorSortKey(right.code)))
		setCards.forEach((card, index) => ranks.set(card.code, index + 1))
	}
	return ranks
}

export function cardNames(card: any): string[] {
	const names = [card.name?.en]
	if (card.suffix && card.name?.en && !normalize(card.name.en).endsWith(normalize(card.suffix))) {
		names.push(`${card.name.en} ${card.suffix}`)
	}
	return names.filter(Boolean)
}

export function cardDetails(card: any): string[] {
	const details: string[] = []
	for (const ability of card.abilities ?? []) {
		if (ability.name?.en) details.push(ability.name.en)
	}
	for (const attack of card.attacks ?? []) {
		if (attack.name?.en) details.push(attack.name.en)
	}
	return details
}

export function nameScore(card: any, baseName: string): number {
	const normalizedBase = normalize(baseName)
	const names = cardNames(card).map(normalize)
	if (names.includes(normalizedBase)) return 100
	if (names.some((name) => normalizedBase.startsWith(`${name} `))) return 90
	if (names.some((name) => name.startsWith(`${normalizedBase} `))) return 80
	return 0
}

export function detailMatch(expected: string, actual: string): boolean {
	const left = normalize(expected)
	const right = normalize(actual)
	return left === right || left.startsWith(`${right} `) || right.startsWith(`${left} `)
}

export function findCandidates(card: CardEntry, products: Product[]): Candidate[] {
	const expansion = card.set.thirdParty?.cardmarket
	if (!expansion) return []
	const expectedDetails = cardDetails(card.data)
	const candidates: Candidate[] = []
	for (const product of products) {
		if (product.idExpansion !== expansion) continue
		const { baseName, details } = splitProductName(product.name)
		const score = nameScore(card.data, baseName)
		if (score === 0) continue
		const matchedDetails = expectedDetails.filter((expected) => details.some((actual) => detailMatch(expected, actual)))
		const detailScore = matchedDetails.length * 100
		const completenessScore = expectedDetails.length > 0 && matchedDetails.length === expectedDetails.length ? 250 : 0
		candidates.push({
			...product,
			score: score + detailScore + completenessScore,
			matchedDetails,
			baseName,
			details
		})
	}
	return candidates.sort((left, right) => right.score - left.score || left.idProduct - right.idProduct)
}

export function cardSignature(card: CardEntry): string {
	const names = cardNames(card.data).map(normalize).sort().join('|')
	const details = cardDetails(card.data).map(normalize).sort().join('|')
	return `${card.set.thirdParty?.cardmarket ?? 'none'}|${names}|${details}`
}

export function exactCandidates(card: CardEntry, products: Product[]): Candidate[] {
	const expectedDetails = cardDetails(card.data)
	return findCandidates(card, products).filter((candidate) => candidate.matchedDetails.length === expectedDetails.length)
}

export function buildAssignments(cards: Map<string, CardEntry>, products: Product[], onProgress?: ProgressCallback): Map<string, Assignment> {
	const groups = new Map<string, { card: CardEntry; candidates: Candidate[] }[]>()
	const cardEntries = [...cards.values()]
	for (const [index, card] of cardEntries.entries()) {
		const candidates = exactCandidates(card, products)
		if (candidates.length > 0) {
			const group = groups.get(cardSignature(card)) ?? []
			group.push({ card, candidates })
			groups.set(cardSignature(card), group)
		}
		onProgress?.(index + 1)
	}

	const assignments = new Map<string, Assignment>()
	for (const group of groups.values()) {
		const cardsInGroup = group
			.map((entry) => entry.card)
			.sort((left, right) => collectorSortKey(left.code).localeCompare(collectorSortKey(right.code)))
		const candidatesById = new Map<number, Candidate>()
		for (const entry of group) {
			for (const candidate of entry.candidates) candidatesById.set(candidate.idProduct, candidate)
		}
		const candidates = [...candidatesById.values()].sort((left, right) => left.idProduct - right.idProduct)
		if (candidates.length < cardsInGroup.length) continue
		for (let index = 0; index < cardsInGroup.length; index++) {
			assignments.set(cardsInGroup[index].code, {
				candidate: candidates[index],
				candidates,
				groupSize: cardsInGroup.length
			})
		}
	}
	return assignments
}

export function suggestCandidate(card: CardEntry, candidates: Candidate[], productRanks: Map<number, number>, assignment?: Assignment): CandidateSuggestion {
	if (assignment && (assignment.groupSize > 1 || assignment.candidates.length === 1)) {
		return {
			candidate: assignment.candidate,
			confidence: assignment.groupSize > 1 ? 'group-position' : 'unique-candidate',
			reason: assignment.groupSize > 1 ? 'group-position' : 'unique-candidate',
			candidates: assignment.candidates
		}
	}
	const collectorNumber = numericCollectorNumber(card.code)
	const rankMatches = collectorNumber === undefined
		? []
		: candidates.filter((candidate) => productRanks.get(candidate.idProduct) === collectorNumber)
	if (rankMatches.length === 1) {
		return { candidate: rankMatches[0], confidence: 'rank', reason: 'collector-rank', candidates }
	}
	const bestScore = candidates[0]?.score
	const best = candidates.filter((candidate) => candidate.score === bestScore)
	if (best.length === 1 && bestScore >= 350) {
		return { candidate: best[0], confidence: 'score', reason: 'unique-score', candidates }
	}
	return { reason: candidates.length === 0 ? 'no-candidates' : 'ambiguous-candidates', candidates }
}

export { getProductRanks }
