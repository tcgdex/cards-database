import fs from 'node:fs'
import path from 'node:path'

import { catalogUrl, legacyReportPaths, relative, reportRoot } from './config'
import type {
	AuditReport,
	AuditResult,
	Candidate,
	CardEntry,
	DuplicateGroup,
	FixProposal,
	FullReport,
	LinkAudit,
	Product,
	ReferenceEntry,
	ReportFixPlan,
	ReportHeadline,
	ReportLink,
	SerializedCandidate,
	SerializedFix,
	SerializedProduct,
	SetDetailReport,
	SetSummary,
	SummaryReport
} from './types'

const actionableStatuses = new Set([
	'duplicate-cross-card',
	'catalog-missing',
	'expansion-mismatch',
	'name-mismatch',
	'details-mismatch',
	'missing-link'
])

const priorityRank: Record<SetSummary['priority'], number> = {
	high: 0,
	medium: 1,
	low: 2,
	none: 3
}

export function serializeProduct(product: Product | undefined): SerializedProduct | undefined {
	if (!product) return undefined
	return {
		idProduct: product.idProduct,
		name: product.name,
		idExpansion: product.idExpansion,
		idMetacard: product.idMetacard
	}
}

export function serializeCandidate(candidate: Candidate, productRanks: Map<number, number>): SerializedCandidate {
	return {
		idProduct: candidate.idProduct,
		name: candidate.name,
		idExpansion: candidate.idExpansion,
		idMetacard: candidate.idMetacard,
		productRank: productRanks.get(candidate.idProduct),
		score: candidate.score,
		matchedDetails: candidate.matchedDetails,
		baseName: candidate.baseName,
		details: candidate.details
	}
}

export function serializeFix(fix: FixProposal): SerializedFix {
	return {
		key: fix.key,
		kind: fix.kind,
		setId: fix.setId,
		code: fix.code,
		file: fix.file,
		location: fix.location,
		referenceOrdinal: fix.referenceOrdinal,
		currentId: fix.currentId,
		proposedId: fix.proposedId,
		confidence: fix.confidence,
		status: fix.status,
		reason: fix.reason,
		duplicateGroupId: fix.duplicateGroupId,
		requiredSets: fix.requiredSets
	}
}

export function clearReportOutput() {
	fs.rmSync(reportRoot, { recursive: true, force: true })
	for (const legacyPath of legacyReportPaths) fs.rmSync(legacyPath, { force: true })
}

function serializeLink(audit: LinkAudit, productRanks: Map<number, number>, includeCandidates: boolean, allCandidates = false): ReportLink {
	const link: ReportLink = {
		key: audit.key,
		setId: audit.setId,
		code: audit.code,
		file: audit.file,
		location: audit.location,
		referenceOrdinal: audit.referenceOrdinal,
		idProduct: audit.idProduct,
		cardRank: audit.cardRank,
		setExpansion: audit.setExpansion,
		status: audit.status,
		reasons: audit.reasons,
		product: serializeProduct(audit.product),
		matchedDetails: audit.matchedDetails,
		candidateCount: audit.candidates.length,
		duplicateGroupId: audit.duplicateGroupId,
		proposedId: audit.fix?.proposedId,
		fixStatus: audit.fix?.status
	}
	if (includeCandidates) {
		const candidates = allCandidates ? audit.candidates : audit.candidates.slice(0, 8)
		link.candidates = candidates.map((candidate) => serializeCandidate(candidate, productRanks))
	}
	return link
}

function emptySetSummary(setId: string): SetSummary {
	return {
		setId,
		cards: 0,
		references: 0,
		duplicateGroups: 0,
		crossCardDuplicateGroups: 0,
		actionRows: 0,
		missingLinks: 0,
		proposedFixes: 0,
		manualReview: 0,
		priority: 'none',
		statuses: {}
	}
}

function incrementStatus(summary: SetSummary, status: string) {
	summary.statuses[status] = (summary.statuses[status] ?? 0) + 1
}

function updatePriority(summary: SetSummary) {
	if (summary.crossCardDuplicateGroups > 0 || summary.statuses['catalog-missing'] || summary.statuses['expansion-mismatch'] || summary.statuses['name-mismatch'] || summary.statuses['details-mismatch']) {
		summary.priority = 'high'
	} else if (summary.missingLinks > 0 || summary.proposedFixes > 0 || summary.manualReview > 0) {
		summary.priority = 'medium'
	} else if (summary.statuses['same-card-variant-reuse'] || summary.statuses.unverifiable) {
		summary.priority = 'low'
	}
}

export function buildReport(cards: Map<string, CardEntry>, references: ReferenceEntry[], audits: Map<string, LinkAudit>, duplicateGroups: DuplicateGroup[], fixes: FixProposal[], productCount: number, fetchedAt: string, productRanks: Map<number, number>): AuditReport {
	const sets: Record<string, SetSummary> = {}
	for (const card of cards.values()) {
		const summary = sets[card.set.id] ?? emptySetSummary(card.set.id)
		summary.cards++
		summary.references += card.sourceInfo.references.length
		sets[card.set.id] = summary
	}
	for (const audit of audits.values()) {
		const summary = sets[audit.setId]
		incrementStatus(summary, audit.status)
		if (actionableStatuses.has(audit.status)) summary.actionRows++
		if (audit.status === 'missing-link') summary.missingLinks++
	}
	for (const group of duplicateGroups) {
		for (const setId of group.setIds) {
			sets[setId].duplicateGroups++
			if (group.classification === 'duplicate-cross-card') sets[setId].crossCardDuplicateGroups++
		}
	}
	for (const fix of fixes) {
		const summary = sets[fix.setId]
		if (fix.status === 'proposed') summary.proposedFixes++
		else summary.manualReview++
	}
	for (const summary of Object.values(sets)) updatePriority(summary)

	const links = [...audits.values()]
		.sort((left, right) => left.file.localeCompare(right.file) || (left.referenceOrdinal ?? -1) - (right.referenceOrdinal ?? -1))
		.map((audit) => serializeLink(audit, productRanks, false))
	const crossCardDuplicateGroups = duplicateGroups.filter((group) => group.classification === 'duplicate-cross-card').length
	const sameCardVariantReuseGroups = duplicateGroups.filter((group) => group.classification === 'same-card-variant-reuse').length
	const validLinks = [...audits.values()].filter((audit) => audit.status === 'valid').length
	const sameCardVariantReuseLinks = [...audits.values()].filter((audit) => audit.status === 'same-card-variant-reuse').length
	const invalidLinks = [...audits.values()].filter((audit) => actionableStatuses.has(audit.status)).length
	const proposedFixes = fixes.filter((fix) => fix.status === 'proposed').length
	const manualReview = fixes.filter((fix) => fix.status !== 'proposed').length
	return {
		mode: 'audit',
		catalog: { url: catalogUrl, productCount, fetchedAt },
		summary: {
			cardsScanned: cards.size,
			referencesScanned: references.length,
			cardsWithoutLinks: [...cards.values()].filter((card) => card.sourceInfo.references.length === 0).length,
			duplicateGroups: duplicateGroups.length,
			crossCardDuplicateGroups,
			sameCardVariantReuseGroups,
			validLinks,
			sameCardVariantReuseLinks,
			invalidLinks,
			proposedFixes,
			manualReview
		},
		sets: Object.fromEntries(Object.entries(sets).sort(([left], [right]) => left.localeCompare(right))),
		duplicateGroups,
		links,
		fixes: fixes.map(serializeFix)
	}
}

export function buildSummary(report: AuditReport): SummaryReport {
	const statusCounts: Record<string, number> = {}
	for (const link of report.links) statusCounts[link.status] = (statusCounts[link.status] ?? 0) + 1
	const fixPlan: ReportFixPlan = {
		statuses: { proposed: 0, ambiguous: 0, 'blocked-by-collision': 0, 'blocked-by-scope': 0 },
		confidence: {},
		kinds: { replace: 0, add: 0 }
	}
	for (const fix of report.fixes) {
		fixPlan.statuses[fix.status]++
		fixPlan.kinds[fix.kind]++
		if (fix.confidence) fixPlan.confidence[fix.confidence] = (fixPlan.confidence[fix.confidence] ?? 0) + 1
	}
	const duplicateReferences = statusCounts['duplicate-cross-card'] ?? 0
	const catalogValidationFailures = (statusCounts['catalog-missing'] ?? 0) + (statusCounts['expansion-mismatch'] ?? 0) + (statusCounts['name-mismatch'] ?? 0) + (statusCounts['details-mismatch'] ?? 0)
	const headline: ReportHeadline = {
		result: report.summary.invalidLinks > 0 || report.summary.manualReview > 0 ? 'needs-review' : 'clean',
		actionRows: report.summary.invalidLinks,
		crossCardDuplicateGroups: report.summary.crossCardDuplicateGroups,
		crossCardDuplicateReferences: duplicateReferences,
		catalogValidationFailures,
		missingLinks: statusCounts['missing-link'] ?? 0,
		proposedFixes: report.summary.proposedFixes,
		manualReview: report.summary.manualReview
	}
	const sets = Object.values(report.sets).sort((left, right) => priorityRank[left.priority] - priorityRank[right.priority] || right.actionRows - left.actionRows || right.manualReview - left.manualReview || left.setId.localeCompare(right.setId))
	return {
		mode: 'summary',
		run: { ...report.catalog, scope: 'data' },
		headline,
		statusCounts,
		fixPlan,
		sets,
		artifacts: { markdown: 'summary.md', json: 'summary.json', sets: 'sets' }
	}
}

function needsDetail(summary: SetSummary): boolean {
	return summary.priority !== 'none' && (summary.actionRows > 0 || summary.proposedFixes > 0 || summary.manualReview > 0)
}

function buildSetDetailReport(setSummary: SetSummary, report: AuditReport, audits: Map<string, LinkAudit>, fixes: FixProposal[], productRanks: Map<number, number>): SetDetailReport {
	const findings = [...audits.values()]
		.filter((audit) => audit.setId === setSummary.setId && actionableStatuses.has(audit.status))
		.sort((left, right) => left.status.localeCompare(right.status) || left.file.localeCompare(right.file) || (left.referenceOrdinal ?? -1) - (right.referenceOrdinal ?? -1))
		.map((audit) => serializeLink(audit, productRanks, true))
	return {
		mode: 'set',
		set: setSummary,
		duplicateGroups: report.duplicateGroups.filter((group) => group.classification === 'duplicate-cross-card' && group.setIds.includes(setSummary.setId)),
		findings,
		fixes: fixes.filter((fix) => fix.setId === setSummary.setId).map(serializeFix)
	}
}

function formatCount(value: number): string {
	return value.toLocaleString('en-US')
}

function renderSummaryMarkdown(summary: SummaryReport): string {
	const lines = [
		'# Cardmarket Audit Summary',
		'',
		`Result: **${summary.headline.result}**`,
		`Generated: ${summary.run.fetchedAt}`,
		`Catalog products: ${formatCount(summary.run.productCount)}`,
		`Scope: ${summary.run.scope}`,
		'',
		'## Headline',
		'',
		'| Metric | Count |',
		'| --- | ---: |',
		`| Action rows | ${formatCount(summary.headline.actionRows)} |`,
		`| Cross-card duplicate groups | ${formatCount(summary.headline.crossCardDuplicateGroups)} |`,
		`| Cross-card duplicate references | ${formatCount(summary.headline.crossCardDuplicateReferences)} |`,
		`| Catalog validation failures | ${formatCount(summary.headline.catalogValidationFailures)} |`,
		`| Missing links | ${formatCount(summary.headline.missingLinks)} |`,
		`| Safe proposals | ${formatCount(summary.headline.proposedFixes)} |`,
		`| Manual review | ${formatCount(summary.headline.manualReview)} |`,
		'',
		'## Link Status',
		'',
		'| Status | Count |',
		'| --- | ---: |',
		...Object.entries(summary.statusCounts).sort(([left], [right]) => left.localeCompare(right)).map(([status, count]) => `| ${status} | ${formatCount(count)} |`),
		'',
		'## Fix Plan',
		'',
		'| Fix status | Count |',
		'| --- | ---: |',
		...Object.entries(summary.fixPlan.statuses).map(([status, count]) => `| ${status} | ${formatCount(count)} |`),
		'',
		'Confidence: ' + Object.entries(summary.fixPlan.confidence).map(([confidence, count]) => `${confidence}=${formatCount(count)}`).join(', '),
		'Kinds: ' + Object.entries(summary.fixPlan.kinds).map(([kind, count]) => `${kind}=${formatCount(count)}`).join(', '),
		'',
		'## Sets Needing Attention',
		'',
		'| Priority | Set | Action rows | Duplicate groups | Safe fixes | Manual review | Missing links | Detail |',
		'| --- | --- | ---: | ---: | ---: | ---: | ---: | --- |'
	]
	for (const set of summary.sets.filter(needsDetail)) {
		lines.push(`| ${set.priority} | ${set.setId} | ${formatCount(set.actionRows)} | ${formatCount(set.crossCardDuplicateGroups)} | ${formatCount(set.proposedFixes)} | ${formatCount(set.manualReview)} | ${formatCount(set.missingLinks)} | [sets/${set.setId}.md](sets/${set.setId}.md) |`)
	}
	if (!summary.sets.some(needsDetail)) lines.push('| none | No sets require review | 0 | 0 | 0 | 0 | 0 | - |')
	lines.push('', '## Workflow', '', 'Review the highest-priority set files first. Apply only reviewed proposals with `bun run cardmarket:apply -- --set <set-id>`, then rerun the global audit.', '')
	return `${lines.join('\n')}\n`
}

function renderSetMarkdown(detail: SetDetailReport): string {
	const lines = [
		`# Cardmarket Audit: ${detail.set.setId}`,
		'',
		`Priority: **${detail.set.priority}**`,
		'',
		'| Metric | Count |',
		'| --- | ---: |',
		`| Cards | ${formatCount(detail.set.cards)} |`,
		`| References | ${formatCount(detail.set.references)} |`,
		`| Action rows | ${formatCount(detail.set.actionRows)} |`,
		`| Cross-card duplicate groups | ${formatCount(detail.set.crossCardDuplicateGroups)} |`,
		`| Safe fixes | ${formatCount(detail.set.proposedFixes)} |`,
		`| Manual review | ${formatCount(detail.set.manualReview)} |`,
		`| Missing links | ${formatCount(detail.set.missingLinks)} |`,
		'',
		'## Duplicate Groups',
		'',
		'| Product ID | References | Sets |',
		'| ---: | --- | --- |'
	]
	for (const group of detail.duplicateGroups) {
		lines.push(`| ${group.idProduct} | ${group.references.map((reference) => `${reference.code} (${reference.location})`).join('; ')} | ${group.setIds.join(', ')} |`)
	}
	if (detail.duplicateGroups.length === 0) lines.push('| - | None | - |')
	lines.push('', '## Findings', '', '| Status | Card | Current ID | Proposed ID | Fix | Reason |', '| --- | --- | ---: | ---: | --- | --- |')
	for (const finding of detail.findings) {
		lines.push(`| ${finding.status} | [${finding.code}](${relative(finding.file)}) | ${finding.idProduct ?? '-'} | ${finding.proposedId ?? '-'} | ${finding.fixStatus ?? '-'} | ${finding.reasons.join(', ')} |`)
	}
	if (detail.findings.length === 0) lines.push('| - | None | - | - | - | - |')
	lines.push('', '## Fixes', '', '| Card | Kind | Current ID | Proposed ID | Confidence | Status | Reason |', '| --- | --- | ---: | ---: | --- | --- | --- |')
	for (const fix of detail.fixes) lines.push(`| ${fix.code} | ${fix.kind} | ${fix.currentId ?? '-'} | ${fix.proposedId ?? '-'} | ${fix.confidence ?? '-'} | ${fix.status} | ${fix.reason} |`)
	if (detail.fixes.length === 0) lines.push('| - | - | - | - | - | - | None |')
	lines.push('', '## Candidate Evidence', '')
	for (const finding of detail.findings.filter((finding) => finding.candidates && finding.candidates.length > 0)) {
		lines.push(`### ${finding.code}`, '', `Current: ${finding.idProduct ?? 'missing'}; candidate count: ${finding.candidateCount}`, '', '| Product ID | Name | Rank | Score | Matched details |', '| ---: | --- | ---: | ---: | --- |')
		for (const candidate of finding.candidates ?? []) lines.push(`| ${candidate.idProduct} | ${candidate.name} | ${candidate.productRank ?? '-'} | ${candidate.score} | ${candidate.matchedDetails.join(', ') || '-'} |`)
		lines.push('')
	}
	if (!detail.findings.some((finding) => finding.candidates && finding.candidates.length > 0)) lines.push('No candidate evidence was needed for the findings in this set.', '')
	return `${lines.join('\n')}\n`
}

export function writeReports(result: AuditResult, includeFull: boolean): SummaryReport {
	fs.mkdirSync(path.join(reportRoot, 'sets'), { recursive: true })
	const summary = buildSummary(result.report)
	for (const setSummary of summary.sets.filter(needsDetail)) {
		const detail = buildSetDetailReport(setSummary, result.report, result.audits, result.fixes, result.productRanks)
		fs.writeFileSync(path.join(reportRoot, 'sets', `${setSummary.setId}.json`), `${JSON.stringify(detail, null, 2)}\n`)
		fs.writeFileSync(path.join(reportRoot, 'sets', `${setSummary.setId}.md`), renderSetMarkdown(detail))
	}
	if (includeFull) {
		summary.artifacts.full = 'full-report.json'
		const full: FullReport = {
			...result.report,
			links: [...result.audits.values()]
				.sort((left, right) => left.file.localeCompare(right.file) || (left.referenceOrdinal ?? -1) - (right.referenceOrdinal ?? -1))
				.map((audit) => serializeLink(audit, result.productRanks, true, true) as ReportLink & { candidates: SerializedCandidate[] })
		}
		fs.writeFileSync(path.join(reportRoot, 'full-report.json'), `${JSON.stringify(full, null, 2)}\n`)
	}
	fs.writeFileSync(path.join(reportRoot, 'summary.json'), `${JSON.stringify(summary, null, 2)}\n`)
	fs.writeFileSync(path.join(reportRoot, 'summary.md'), renderSummaryMarkdown(summary))
	return summary
}

export function formatConsoleSummary(summary: SummaryReport): string {
	return [
		`Cardmarket audit: ${summary.headline.result}`,
		`Action rows: ${formatCount(summary.headline.actionRows)}`,
		`Cross-card duplicates: ${formatCount(summary.headline.crossCardDuplicateGroups)} groups / ${formatCount(summary.headline.crossCardDuplicateReferences)} references`,
		`Catalog validation failures: ${formatCount(summary.headline.catalogValidationFailures)}`,
		`Missing links: ${formatCount(summary.headline.missingLinks)}`,
		`Safe proposals: ${formatCount(summary.headline.proposedFixes)}`,
		`Manual review: ${formatCount(summary.headline.manualReview)}`,
		`Summary: ${path.join(reportRoot, 'summary.md')}`
	].join('\n')
}