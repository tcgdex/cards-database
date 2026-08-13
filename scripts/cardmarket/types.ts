export type Product = {
	idProduct: number
	name: string
	idExpansion: number
	idMetacard?: number
}

export type CardmarketReference = {
	idProduct: number
	location: string
	referenceOrdinal: number
	sourceStart: number
	sourceEnd: number
}

export type ObjectLayout = {
	start: number
	closePosition: number
	lastPropertyEnd?: number
	betweenLastAndClose: string
	propertyIndent: string
	closeIndent: string
	newline: string
	hasProperties: boolean
	hasTrailingComma: boolean
}

export type CardSourceInfo = {
	references: CardmarketReference[]
	cardObject?: ObjectLayout
	topLevelThirdParty?: ObjectLayout
}

export type CardEntry = {
	code: string
	filePath: string
	source: string
	data: any
	set: any
	sourceInfo: CardSourceInfo
}

export type Candidate = Product & {
	score: number
	matchedDetails: string[]
	baseName: string
	details: string[]
}

export type Assignment = {
	candidate: Candidate
	candidates: Candidate[]
	groupSize: number
}

export type CandidateSuggestion = {
	candidate?: Candidate
	confidence?: 'rank' | 'score' | 'group-position' | 'unique-candidate'
	reason: string
	candidates: Candidate[]
}

export type LinkStatus =
	| 'valid'
	| 'duplicate-cross-card'
	| 'same-card-variant-reuse'
	| 'catalog-missing'
	| 'expansion-mismatch'
	| 'name-mismatch'
	| 'details-mismatch'
	| 'missing-link'
	| 'unverifiable'

export type FixStatus = 'proposed' | 'ambiguous' | 'blocked-by-collision' | 'blocked-by-scope'

export type SourceEdit = {
	start: number
	end: number
	replacement: string
}

export type FixProposal = {
	key: string
	kind: 'replace' | 'add'
	setId: string
	code: string
	file: string
	location: string
	referenceOrdinal?: number
	currentId?: number
	proposedId?: number
	confidence?: CandidateSuggestion['confidence']
	status: FixStatus
	reason: string
	duplicateGroupId?: number
	requiredSets: string[]
	candidates: Candidate[]
	edit: SourceEdit
}

export type LinkAudit = {
	key: string
	setId: string
	code: string
	file: string
	location?: string
	referenceOrdinal?: number
	idProduct?: number
	cardRank?: number
	setExpansion?: number
	status: LinkStatus
	reasons: string[]
	product?: Product
	matchedDetails: string[]
	candidates: Candidate[]
	duplicateGroupId?: number
	fix?: FixProposal
}

export type ReferenceEntry = {
	key: string
	card: CardEntry
	reference: CardmarketReference
}

export type DuplicateGroup = {
	idProduct: number
	classification: 'duplicate-cross-card' | 'same-card-variant-reuse'
	setIds: string[]
	references: Array<{
		key: string
		setId: string
		code: string
		file: string
		location: string
	}>
}

export type SetSummary = {
	setId: string
	cards: number
	references: number
	duplicateGroups: number
	crossCardDuplicateGroups: number
	actionRows: number
	missingLinks: number
	proposedFixes: number
	manualReview: number
	priority: 'high' | 'medium' | 'low' | 'none'
	statuses: Record<string, number>
}

export type SerializedProduct = {
	idProduct: number
	name: string
	idExpansion: number
	idMetacard?: number
}

export type SerializedCandidate = SerializedProduct & {
	productRank?: number
	score: number
	matchedDetails: string[]
	baseName: string
	details: string[]
}

export type SerializedFix = {
	key: string
	kind: 'replace' | 'add'
	setId: string
	code: string
	file: string
	location: string
	referenceOrdinal?: number
	currentId?: number
	proposedId?: number
	confidence?: CandidateSuggestion['confidence']
	status: FixStatus
	reason: string
	duplicateGroupId?: number
	requiredSets: string[]
}

export type ReportLink = Omit<LinkAudit, 'candidates' | 'product' | 'fix'> & {
	product?: SerializedProduct
	candidateCount: number
	candidates?: SerializedCandidate[]
	proposedId?: number
	fixStatus?: FixStatus
}

export type AuditReport = {
	mode: 'audit'
	catalog: {
		url: string
		productCount: number
		fetchedAt: string
	}
	summary: {
		cardsScanned: number
		referencesScanned: number
		cardsWithoutLinks: number
		duplicateGroups: number
		crossCardDuplicateGroups: number
		sameCardVariantReuseGroups: number
		validLinks: number
		sameCardVariantReuseLinks: number
		invalidLinks: number
		proposedFixes: number
		manualReview: number
	}
	sets: Record<string, SetSummary>
	duplicateGroups: DuplicateGroup[]
	links: ReportLink[]
	fixes: SerializedFix[]
}

export type ReportHeadline = {
	result: 'clean' | 'needs-review'
	actionRows: number
	crossCardDuplicateGroups: number
	crossCardDuplicateReferences: number
	catalogValidationFailures: number
	missingLinks: number
	proposedFixes: number
	manualReview: number
}

export type ReportFixPlan = {
	statuses: Record<FixStatus, number>
	confidence: Record<string, number>
	kinds: Record<'replace' | 'add', number>
}

export type SummaryReport = {
	mode: 'summary'
	run: AuditReport['catalog'] & { scope: 'data' }
	headline: ReportHeadline
	statusCounts: Record<string, number>
	fixPlan: ReportFixPlan
	sets: SetSummary[]
	artifacts: {
		markdown: string
		json: string
		sets: string
		full?: string
	}
}

export type SetDetailReport = {
	mode: 'set'
	set: SetSummary
	duplicateGroups: DuplicateGroup[]
	findings: ReportLink[]
	fixes: SerializedFix[]
}

export type FullReport = Omit<AuditReport, 'links'> & {
	links: Array<ReportLink & { candidates: SerializedCandidate[] }>
}

export type AuditResult = {
	report: AuditReport
	audits: Map<string, LinkAudit>
	cards: Map<string, CardEntry>
	references: ReferenceEntry[]
	productRanks: Map<number, number>
	fixes: FixProposal[]
}

export type Options = {
	apply: boolean
	all: boolean
	full: boolean
	sets: Set<string>
}
