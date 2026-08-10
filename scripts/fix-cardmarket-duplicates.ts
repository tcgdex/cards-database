/**
 * Repairs and audits the Cardmarket duplicate assignments from issue #1936.
 *
 * See fix-cardmarket-duplicates.md for the workflow, manual maps, and reuse
 * limitations. The default mode is a dry run; pass --apply only after
 * reviewing var/cardmarket-duplicates-report.json.
 */
import fs from 'node:fs'
import path from 'node:path'
import { globSync } from 'glob'

import { extractFile } from './utils/ts-extract-utils'

type Product = {
	idProduct: number
	name: string
	idExpansion: number
	idMetacard?: number
}

type CardEntry = {
	code: string
	filePath: string
	data: any
	set: any
}

type IssueEntry = {
	idProduct: number
	codes: string[]
}

type Candidate = Product & {
	score: number
	matchedDetails: string[]
	baseName: string
	details: string[]
}

type Assignment = {
	idProduct: number
	candidates: Candidate[]
}

const root = process.cwd()
const dataRoot = path.join(root, 'data')
const issueUrl = 'https://api.github.com/repos/tcgdex/cards-database/issues/1936'
const catalogUrl = 'https://downloads.s3.cardmarket.com/productCatalog/productList/products_singles_6.json'
const reportPath = path.join(root, 'var', 'cardmarket-duplicates-report.json')

const manualAssignments: Record<string, number> = {
	'ecard1-35': 274910,
	'ecard1-45': 274920,
	'ecard1-52': 274927,
	'ecard1-55': 274930,
	'ecard1-57': 274932,
	'ecard1-58': 274933,
	'ecard1-62': 274937,
	'ecard1-70': 274945,
	'dp7-SH3': 278296,
	'ex13-103': 277073,
	'ex13-104': 277074,
	'pl1-SH6': 278420,
	'pl3-48': 278739,
	'hgss1-26': 278998,
	'hgss2-94': 279250,
	'hgss2-95': 279251,
	'hgss3-88': 279341,
	'hgss3-87': 279340,
	'hgss3-89': 279342,
	'hgss3-90': 279343,
	'sm8-60': 364940,
	'sm8-161': 365797,
	'xyp-XY65': 289796,
	'xyp-XY93': 289795,
	'xyp-XY147': 291587,
	'xyp-XY195': 295179,
	'cel25-2': 576790,
	'cel25-10': 576791,
	'cel25cc-CC020': 576747,
	'cel25cc-CC021': 576755,
	'2021swsh-4': 538808,
	'2021swsh-5': 538818,
	'2021swsh-15': 538918,
	'2021swsh-16': 538928,
	'2021swsh-20': 538968,
	'2021swsh-21': 538978
}

const manualReplacements: Record<string, Record<number, number>> = {
	'ecard1-35': { 274878: 274910 },
	'ecard1-45': { 274886: 274920 },
	'ecard1-52': { 274892: 274927 },
	'ecard1-55': { 274894: 274930 },
	'ecard1-57': { 274896: 274932 },
	'ecard1-58': { 274897: 274933 },
	'ecard1-62': { 274901: 274937 },
	'ecard1-70': { 274907: 274945 },
	'ex13-103': { 277081: 277073 },
	'ex13-104': { 277048: 277074 },
	'hgss3-88': { 86553: 279341 },
	'hgss3-87': { 279341: 279340 },
	'2021swsh-5': { 538808: 538818 },
	'2021swsh-16': { 538918: 538928 },
	'2021swsh-21': { 538968: 538978 },
	'cel25-2': { 576747: 576790 },
	'cel25-10': { 576755: 576791 },
	'xyp-XY195': { 291575: 295179 }
}

const manualVariantAssignments: Record<string, number[]> = {
	'2021swsh-21': [538978, 538983]
}

function normalize(value: unknown): string {
	return String(value ?? '')
		.toLowerCase()
		.replace(/[’']/g, '')
		.replace(/&/g, ' and ')
		.replace(/[^a-z0-9]+/g, ' ')
		.trim()
}

function relative(filePath: string): string {
	return path.relative(root, filePath).replaceAll(path.sep, '/')
}

function readJson(url: string): Promise<any> {
	return fetch(url, {
		headers: {
			accept: 'application/json',
			'user-agent': 'cards-database-cardmarket-migration'
		}
	}).then(async (response) => {
		if (!response.ok) {
			throw new Error(`${url} returned ${response.status}`)
		}
		return response.json()
	})
}

function getSetImport(filePath: string): string | undefined {
	const source = fs.readFileSync(filePath, 'utf8')
	const importPath = source.match(/import\s+Set\s+from\s+(['"])(.*)\1/)?.[2]
	return importPath?.replaceAll("\\'", "'")
}

function isSetFile(filePath: string): boolean {
	const source = fs.readFileSync(filePath, 'utf8')
	return /\bid:\s*["'][^"']+["']/.test(source) && /\bcardCount\s*:/.test(source)
}

function getProducts(rawCatalog: any): Product[] {
	return rawCatalog.products.filter((product: Product) => {
		return Number.isInteger(product.idProduct) && Number.isInteger(product.idExpansion) && typeof product.name === 'string'
	})
}

function parseIssue(body: string): IssueEntry[] {
	const entries: IssueEntry[] = []
	for (const line of body.split(/\r?\n/)) {
		if (!/^\|\s*\d+\s*\|/.test(line)) continue
		const columns = line.split('|').slice(1, -1).map((column) => column.trim())
		const idProduct = Number(columns[0])
		const codes = columns[3]?.split(',').map((code) => code.trim()).filter(Boolean) ?? []
		if (Number.isInteger(idProduct) && codes.length > 0) {
			entries.push({ idProduct, codes })
		}
	}
	return entries
}

function loadSets(files: string[]): Map<string, any> {
	const sets = new Map<string, any>()
	for (const filePath of files) {
		if (!isSetFile(filePath)) continue
		const set = extractFile(filePath)
		if (set?.id) sets.set(path.normalize(filePath), set)
	}
	return sets
}

function loadCards(files: string[], sets: Map<string, any>): Map<string, CardEntry> {
	const cards = new Map<string, CardEntry>()
	for (const filePath of files) {
		if (isSetFile(filePath)) continue
		const setImport = getSetImport(filePath)
		if (!setImport) continue
		const setPath = path.normalize(path.resolve(path.dirname(filePath), `${setImport}.ts`))
		const set = sets.get(setPath)
		if (!set?.id) continue
		const code = `${set.id}-${path.basename(filePath, '.ts')}`
		const data = extractFile(filePath)
		if (data) cards.set(code, { code, filePath, data, set })
	}
	return cards
}

function collectorPart(code: string): string {
	return code.slice(code.lastIndexOf('-') + 1)
}

function numericCollectorNumber(code: string): number | undefined {
	const part = collectorPart(code)
	return /^\d+$/.test(part) ? Number(part) : undefined
}

function collectorSortKey(code: string): string {
	const part = collectorPart(code)
	const numeric = part.match(/^(\d+)([a-z]*)$/i)
	if (numeric) return `0-${numeric[1].padStart(4, '0')}-${numeric[2].toLowerCase()}`
	const prefixed = part.match(/^([a-z]+)(\d+)([a-z]*)$/i)
	if (prefixed) return `1-${prefixed[1].toLowerCase()}-${prefixed[2].padStart(4, '0')}-${prefixed[3].toLowerCase()}`
	return `2-${part.toLowerCase()}`
}

function getCardRanks(cards: Map<string, CardEntry>): Map<string, number> {
	const bySet = new Map<string, CardEntry[]>()
	for (const card of cards.values()) {
		const setId = card.code.slice(0, card.code.lastIndexOf('-'))
		const setCards = bySet.get(setId) ?? []
		setCards.push(card)
		bySet.set(setId, setCards)
	}
	const ranks = new Map<string, number>()
	for (const setCards of bySet.values()) {
		setCards.sort((left, right) => collectorSortKey(left.code).localeCompare(collectorSortKey(right.code)))
		setCards.forEach((card, index) => ranks.set(card.code, index + 1))
	}
	return ranks
}

function getProductRanks(products: Product[]): Map<number, number> {
	const byExpansion = new Map<number, Product[]>()
	for (const product of products) {
		const expansionProducts = byExpansion.get(product.idExpansion) ?? []
		expansionProducts.push(product)
		byExpansion.set(product.idExpansion, expansionProducts)
	}
	const ranks = new Map<number, number>()
	for (const expansionProducts of byExpansion.values()) {
		expansionProducts.sort((left, right) => left.idProduct - right.idProduct)
		expansionProducts.forEach((product, index) => ranks.set(product.idProduct, index + 1))
	}
	return ranks
}

function splitProductName(name: string): { baseName: string; details: string[] } {
	const match = name.match(/^(.*?)\s*\[([^\]]+)\]\s*$/)
	if (!match) return { baseName: name.trim(), details: [] }
	return {
		baseName: match[1].trim(),
		details: match[2].split('|').map((detail) => detail.trim()).filter(Boolean)
	}
}

function cardNames(card: any): string[] {
	const names = [card.name?.en]
	if (card.suffix && card.name?.en && !normalize(card.name.en).endsWith(normalize(card.suffix))) {
		names.push(`${card.name.en} ${card.suffix}`)
	}
	return names.filter(Boolean)
}

function cardDetails(card: any): string[] {
	const details: string[] = []
	for (const ability of card.abilities ?? []) {
		if (ability.name?.en) details.push(ability.name.en)
	}
	for (const attack of card.attacks ?? []) {
		if (attack.name?.en) details.push(attack.name.en)
	}
	return details
}

function nameScore(card: any, baseName: string): number {
	const normalizedBase = normalize(baseName)
	const names = cardNames(card).map(normalize)
	if (names.includes(normalizedBase)) return 100
	if (names.some((name) => normalizedBase.startsWith(`${name} `))) return 90
	if (names.some((name) => name.startsWith(`${normalizedBase} `))) return 80
	return 0
}

function detailMatch(expected: string, actual: string): boolean {
	const left = normalize(expected)
	const right = normalize(actual)
	return left === right || left.startsWith(`${right} `) || right.startsWith(`${left} `)
}

function findCandidates(card: CardEntry, products: Product[], preferredExpansions: Set<number>): Candidate[] {
	const expectedDetails = cardDetails(card.data)
	const candidates: Candidate[] = []
	for (const product of products) {
		if (!preferredExpansions.has(product.idExpansion)) continue
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

function getCurrentIds(filePath: string): number[] {
	const source = fs.readFileSync(filePath, 'utf8')
	return [...source.matchAll(/cardmarket\s*:\s*(\d+)/g)].map((match) => Number(match[1])).filter((id, index, ids) => ids.indexOf(id) === index)
}

function cardSignature(card: CardEntry): string {
	const names = cardNames(card.data).map(normalize).sort().join('|')
	const details = cardDetails(card.data).map(normalize).sort().join('|')
	return `${card.set.thirdParty?.cardmarket ?? 'none'}|${names}|${details}`
}

function exactCandidates(card: CardEntry, products: Product[]): Candidate[] {
	const expansion = card.set.thirdParty?.cardmarket
	if (!expansion) return []
	const expectedDetails = cardDetails(card.data)
	return findCandidates(card, products, new Set([expansion])).filter((candidate) => {
		return candidate.matchedDetails.length === expectedDetails.length
	})
}

function buildAssignments(cards: Map<string, CardEntry>, products: Product[]): Map<string, Assignment> {
	const groups = new Map<string, { card: CardEntry; candidates: Candidate[] }[]>()
	for (const card of cards.values()) {
		const candidates = exactCandidates(card, products)
		if (candidates.length === 0) continue
		const signature = cardSignature(card)
		const group = groups.get(signature) ?? []
		group.push({ card, candidates })
		groups.set(signature, group)
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
				idProduct: candidates[index].idProduct,
				candidates
			})
		}
	}
	return assignments
}

function makeReport(issue: IssueEntry[], cards: Map<string, CardEntry>, products: Product[], assignments: Map<string, Assignment>) {
	const productById = new Map(products.map((product) => [product.idProduct, product]))
	const cardRanks = getCardRanks(cards)
	const productRanks = getProductRanks(products)
	const rows: any[] = []
	for (const group of issue) {
		for (const code of group.codes) {
			const card = cards.get(code)
			if (!card) {
				rows.push({ code, reportedId: group.idProduct, status: 'missing-file' })
				continue
			}
			const currentIds = getCurrentIds(card.filePath)
			const expansions = new Set<number>()
			if (card.set.thirdParty?.cardmarket) expansions.add(card.set.thirdParty.cardmarket)
			const candidates = findCandidates(card, products, expansions)
			const assignment = assignments.get(code)
			const manualId = manualAssignments[code]
			const collectorNumber = numericCollectorNumber(code)
			const rankMatches = collectorNumber === undefined
				? []
				: candidates.filter((candidate) => productRanks.get(candidate.idProduct) === collectorNumber)
			const rankedCandidates = assignment?.candidates ?? (rankMatches.length === 1 ? rankMatches : candidates)
			const bestScore = candidates[0]?.score
			const inferredId = manualId ?? assignment?.idProduct
			const inferredCandidate = candidates.find((candidate) => candidate.idProduct === inferredId)
			const best = inferredCandidate
				? [inferredCandidate]
				: assignment
				? [assignment.candidates.find((candidate) => candidate.idProduct === assignment.idProduct)!]
				: rankMatches.length === 1
				? rankMatches
				: candidates.filter((candidate) => candidate.score === bestScore)
			const hasReportedId = currentIds.includes(group.idProduct)
			const status = inferredId !== undefined
				? 'resolved'
				: best.length === 1 && (rankMatches.length === 1 || bestScore >= 350)
					? 'resolved'
					: candidates.length === 0
						? 'missing-product'
						: 'ambiguous'
			rows.push({
				code,
				file: relative(card.filePath),
				cardRank: cardRanks.get(code),
				reportedId: group.idProduct,
				currentIds,
				hasReportedId,
				status,
				resolvedId: inferredId ?? (best.length === 1 && (rankMatches.length === 1 || bestScore >= 350) ? best[0].idProduct : undefined),
				candidates: rankedCandidates.slice(0, 8).map((candidate) => ({
					idProduct: candidate.idProduct,
					name: candidate.name,
					idExpansion: candidate.idExpansion,
					idMetacard: candidate.idMetacard,
					productRank: productRanks.get(candidate.idProduct),
					score: candidate.score,
					matchedDetails: candidate.matchedDetails
				}))
			})
		}
	}
	return rows
}

function applyReport(rows: any[]) {
	const changes = rows.filter((row) => {
		if (row.status !== 'resolved' || row.resolvedId === undefined) return false
		if (manualReplacements[row.code]) return Object.keys(manualReplacements[row.code]).length > 0
		return row.hasReportedId && row.resolvedId !== row.reportedId
	})
	for (const row of changes) {
		const filePath = path.join(root, row.file)
		const source = fs.readFileSync(filePath, 'utf8')
		const replacements = manualReplacements[row.code] ?? { [row.reportedId]: row.resolvedId }
		let updated = source
		for (const [oldId, newId] of Object.entries(replacements)) {
			const pattern = new RegExp(`(cardmarket\\s*:\\s*)${oldId}(\\b)`, 'g')
			updated = updated.replace(pattern, `$1${newId}$2`)
		}
		const variantAssignments = manualVariantAssignments[row.code]
		if (variantAssignments) {
			let variantIndex = 0
			updated = updated.replace(/(cardmarket\\s*:\\s*)\d+(\\b)/g, (_match, prefix, suffix) => {
				const id = variantAssignments[variantIndex++]
				return `${prefix}${id ?? variantAssignments[variantAssignments.length - 1]}${suffix}`
			})
		}
		if (updated === source) {
			const expectedIds = Object.values(replacements)
			if (!expectedIds.every((id) => new RegExp(`cardmarket\\s*:\\s*${id}\\b`).test(source))) {
				throw new Error(`Could not update ${row.file}`)
			}
			continue
		}
		fs.writeFileSync(filePath, updated)
	}

	const missing = rows.filter((row) => row.code === 'hgss1-26' && row.resolvedId === 278998)
	for (const row of missing) {
		const filePath = path.join(root, row.file)
		const source = fs.readFileSync(filePath, 'utf8')
		if (new RegExp(`cardmarket\\s*:\\s*${row.resolvedId}\\b`).test(source)) continue
		const updated = source.replace(/(tcgplayer:\s*\d+,?\r?\n)(\s*\})/g, `$1\t\t\t\tcardmarket: ${row.resolvedId},\n$2`)
		if (updated === source) throw new Error(`Could not add Cardmarket ID to ${row.file}`)
		fs.writeFileSync(filePath, updated)
	}
	return changes.length
}

async function main() {
	const files = globSync('data/**/*.ts', { absolute: true, nodir: true })
	const sets = loadSets(files)
	const cards = loadCards(files, sets)
	const issue = parseIssue((await readJson(issueUrl)).body)
	const products = getProducts(await readJson(catalogUrl))
	const assignments = buildAssignments(cards, products)
	const rows = makeReport(issue, cards, products, assignments)

	fs.mkdirSync(path.dirname(reportPath), { recursive: true })
	fs.writeFileSync(reportPath, `${JSON.stringify(rows, null, 2)}\n`)

	const counts = rows.reduce<Record<string, number>>((result, row) => {
		result[row.status] = (result[row.status] ?? 0) + 1
		return result
	}, {})
	console.log(JSON.stringify({ issueGroups: issue.length, issueCards: rows.length, cardsLoaded: cards.size, products: products.length, counts, report: relative(reportPath) }, null, 2))

	if (process.argv.includes('--apply')) {
		if (rows.some((row) => row.status === 'ambiguous' || row.status === 'missing-product' || row.status === 'missing-file')) {
			throw new Error('Refusing to apply while the report contains unresolved rows')
		}
		console.log(`Updated ${applyReport(rows)} card files`)
	}
}

main().catch((error) => {
	console.error(error)
	process.exitCode = 1
})