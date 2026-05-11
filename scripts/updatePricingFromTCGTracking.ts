import fs from 'node:fs/promises'
import path from 'node:path'

import {
	getCategoryIdForSetFile,
	getTCGTrackingPricingCacheFile,
	toImportUrl,
	type TCGTrackingCategoryId,
} from './utils-data/tcgtracking'

interface TCGDexSet {
	id?: string
	name?: Record<string, string>
	serie?: {
		id?: string
		name?: Record<string, string>
	}
	thirdParty?: {
		tcgplayer?: number
		cardmarket?: number
	}
}

interface TCGDexVariant {
	type?: string
	subtype?: string
	size?: string
	stamp?: string[]
	foil?: string
	thirdParty?: {
		tcgplayer?: number
		cardmarket?: number
	}
}

interface TCGDexCard {
	name?: Record<string, string>
	set?: TCGDexSet
	thirdParty?: {
		tcgplayer?: number
		cardmarket?: number
	}
	variants?: Record<string, boolean> | TCGDexVariant[]
}

interface TCGDexCardModule {
	default?: TCGDexCard
}

interface CachedTCGTrackingPricingFile {
	source: 'tcgtracking'
	categoryId: TCGTrackingCategoryId
	tcgplayerSetId: number
	sourceFile: string
	fetchedAt: string
	data: {
		set_id: number
		updated?: string
		prices?: Record<string, TCGTrackingProductPricing>
	}
}

interface TCGTrackingProductPricing {
	tcg?: Record<string, TCGTrackingPriceBucket>
}

interface TCGTrackingPriceBucket {
	low?: number
	market?: number
}

interface TCGCSVPricesResult {
	productId: number
	lowPrice: number | null
	midPrice: number | null
	highPrice: number | null
	marketPrice: number | null
	directLowPrice: number | null
	subTypeName: string
}

interface TCGCSVPricesFile {
	totalItems: number
	success: boolean
	errors: unknown[]
	results: TCGCSVPricesResult[]
}

interface ResolvedPrice {
	productId: number
	priceType: string
	low?: number
	market?: number
}

interface ResolvedCardPrice {
	cardId: string
	cardFile: string
	cardName?: string
	setId?: string
	setName?: string
	categoryId: number
	tcgplayerSetId: number
	sourceUpdated?: string
	sourceFetchedAt: string
	prices: ResolvedCardPriceEntry[]
}

interface ResolvedCardPriceEntry {
	target: 'card' | 'variant'
	variantIndex?: number
	variant?: {
		type?: string
		subtype?: string
		size?: string
		stamp?: string[]
		foil?: string
	}
	tcgplayerProductId: number
	priceType: string
	low?: number
	market?: number
}

interface MissingPrice {
	cardId: string
	cardFile: string
	cardName?: string
	setId?: string
	setName?: string
	categoryId?: number
	tcgplayerSetId?: number
	tcgplayerProductId?: number
	target: 'card' | 'variant' | 'set-cache'
	variantIndex?: number
	reason:
		| 'missing-card-tcgplayer-id'
		| 'missing-variant-tcgplayer-id'
		| 'missing-set-tcgplayer-id'
		| 'missing-cache'
		| 'missing-product-price'
		| 'missing-tcg-prices'
}

interface CountByReason {
	reason: MissingPrice['reason']
	count: number
}

interface MissingCacheSummary {
	categoryId?: number
	tcgplayerSetId?: number
	setId?: string
	setName?: string
	count: number
}

interface CountByTarget {
	target: ResolvedCardPriceEntry['target']
	count: number
}

interface CountByPriceType {
	priceType: string
	count: number
}

interface PricingUpdateReport {
	createdAt: string
	mode: 'dry-run' | 'apply'
	summary: {
		cardFilesScanned: number
		cardFilesWithPrices: number
		priceEntriesResolved: number
		missing: number

		/**
		 * CHANGE:
		 * This is the number of card records that could not find a cache file.
		 *
		 * It is not the number of unique missing cache files.
		 */
		missingCacheRecords: number

		/**
		 * CHANGE:
		 * This is the actual number of unique set cache files missing.
		 */
		uniqueMissingCaches: number

		outputWritten: boolean
	}
	resolvedByTarget: CountByTarget[]
	priceTypes: CountByPriceType[]
	missingByReason: CountByReason[]
	missingCaches: MissingCacheSummary[]
	resolved: ResolvedCardPrice[]
	missing: MissingPrice[]
}

/**
 * Controls which pricing source is primary.
 *
 * tcgtracking (default): TCGTracking is primary; TCGCSV cache is used as fallback
 *   when TCGTracking has no data for a set.
 * tcgcsv: TCGCSV-only; skips TCGTracking cache entirely.
 * tcgtracking-only: TCGTracking only; no TCGCSV fallback.
 *
 * Set via environment variable:
 *   PRICING_SOURCE=tcgtracking bun scripts/updatePricingFromTCGTracking.ts --apply
 */
const PRICING_SOURCE = (process.env.PRICING_SOURCE ?? 'tcgtracking') as
	| 'tcgtracking'
	| 'tcgcsv'
	| 'tcgtracking-only'

/**
 * CHANGE:
 * Added TCGTracking pricing resolver.
 *
 * This script:
 * - reads cached TCGTracking pricing files created by preloadTCGTracking.ts
 * - reads existing TCGDex card files
 * - uses existing thirdParty.tcgplayer IDs
 * - resolves prices from TCGTracking
 * - writes a resolved pricing artifact when --apply is used
 *
 * This script does NOT:
 * - create variants
 * - remap variants
 * - edit card source files
 * - remove TCGCSV fallback
 *
 * Why:
 * TCGTracking pricing cache is keyed by existing TCGPlayer product IDs:
 *
 *   data.prices[tcgplayerProductId].tcg[priceType].market
 *   data.prices[tcgplayerProductId].tcg[priceType].low
 */
async function main(): Promise<void> {
	const mode = getMode()

	const cardFiles = await findCardFiles([
		path.join(process.cwd(), 'data'),
		path.join(process.cwd(), 'data-asia'),
	])

	const resolved: ResolvedCardPrice[] = []
	const missing: MissingPrice[] = []

	let missingCacheRecords = 0
	let priceEntriesResolved = 0

	const cacheByKey = new Map<string, CachedTCGTrackingPricingFile | null>()

	for (const cardFile of cardFiles) {
		const cardId = getCardIdFromFile(cardFile)
		const cardModule = (await import(toImportUrl(cardFile))) as TCGDexCardModule
		const card = cardModule.default

		if (!card) {
			continue
		}

		const categoryId = getCategoryIdForSetFile(cardFile)
		const tcgplayerSetId = card.set?.thirdParty?.tcgplayer
		const cardName = getEnglishName(card.name)
		const setId = card.set?.id
		const setName = getEnglishName(card.set?.name)

		if (typeof tcgplayerSetId !== 'number') {
			missing.push({
				cardId,
				cardFile: normalizePathForReport(cardFile),
				cardName,
				setId,
				setName,
				categoryId,
				target: 'set-cache',
				reason: 'missing-set-tcgplayer-id',
			})
			continue
		}

		const cache = await getCachedPricingFile({
			categoryId,
			tcgplayerSetId,
			cacheByKey,
		})

		if (!cache) {
			missingCacheRecords += 1

			missing.push({
				cardId,
				cardFile: normalizePathForReport(cardFile),
				cardName,
				setId,
				setName,
				categoryId,
				tcgplayerSetId,
				target: 'set-cache',
				reason: 'missing-cache',
			})
			continue
		}

		const cardPriceEntries = resolvePricesForCard({
			card,
			cardId,
			cardFile,
			cardName,
			setId,
			setName,
			categoryId,
			tcgplayerSetId,
			cache,
			missing,
		})

		if (cardPriceEntries.length === 0) {
			continue
		}

		priceEntriesResolved += cardPriceEntries.length

		resolved.push({
			cardId,
			cardFile: normalizePathForReport(cardFile),
			cardName,
			setId,
			setName,
			categoryId,
			tcgplayerSetId,
			sourceUpdated: cache.data.updated,
			sourceFetchedAt: cache.fetchedAt,
			prices: cardPriceEntries,
		})
	}

	const missingByReason = groupMissingByReason(missing)
	const missingCaches = groupMissingCaches(missing)
	const resolvedByTarget = groupResolvedByTarget(resolved)
	const priceTypes = groupPriceTypes(resolved)

	const report: PricingUpdateReport = {
		createdAt: new Date().toISOString(),
		mode,
		summary: {
			cardFilesScanned: cardFiles.length,
			cardFilesWithPrices: resolved.length,
			priceEntriesResolved,
			missing: missing.length,
			missingCacheRecords,
			uniqueMissingCaches: missingCaches.length,
			outputWritten: mode === 'apply',
		},
		resolvedByTarget,
		priceTypes,
		missingByReason,
		missingCaches,
		resolved,
		missing,
	}

	await writeReport(report)

	if (mode === 'apply') {
		await writeResolvedPricingArtifact(resolved)
	}

	printSummary(report)
}

/**
 * Finds card files.
 *
 * Set files are shallow:
 *
 *   data/Serie/Set.ts
 *
 * Card files are deeper:
 *
 *   data/Serie/Set/Card.ts
 */
async function findCardFiles(rootFolders: string[]): Promise<string[]> {
	const files: string[] = []

	for (const rootFolder of rootFolders) {
		const exists = await pathExists(rootFolder)

		if (!exists) {
			continue
		}

		await walk(rootFolder, files)
	}

	return files.filter((file) => {
		if (!file.endsWith('.ts')) {
			return false
		}

		const relative = path.relative(process.cwd(), file).replace(/\\/g, '/')
		const parts = relative.split('/')

		// data/Serie/Set/Card.ts
		// data-asia/Serie/Set/Card.ts
		return (
			(parts[0] === 'data' || parts[0] === 'data-asia') &&
			parts.length === 4
		)
	})
}

async function walk(folder: string, files: string[]): Promise<void> {
	const entries = await fs.readdir(folder, {
		withFileTypes: true,
	})

	for (const entry of entries) {
		const fullPath = path.join(folder, entry.name)

		if (entry.isDirectory()) {
			await walk(fullPath, files)
			continue
		}

		files.push(fullPath)
	}
}

async function getCachedPricingFile({
	categoryId,
	tcgplayerSetId,
	cacheByKey,
}: {
	categoryId: TCGTrackingCategoryId
	tcgplayerSetId: number
	cacheByKey: Map<string, CachedTCGTrackingPricingFile | null>
}): Promise<CachedTCGTrackingPricingFile | null> {
	const key = `${categoryId}:${tcgplayerSetId}`

	if (cacheByKey.has(key)) {
		return cacheByKey.get(key) ?? null
	}

	if (PRICING_SOURCE !== 'tcgcsv') {
		const cacheFile = getTCGTrackingPricingCacheFile(categoryId, tcgplayerSetId)

		try {
			const raw = await fs.readFile(cacheFile, 'utf8')
			const parsed = JSON.parse(raw) as CachedTCGTrackingPricingFile

			cacheByKey.set(key, parsed)

			return parsed
		} catch (error) {
			if (!isNodeError(error) || error.code !== 'ENOENT') {
				throw error
			}
		}
	}

	// Fall back to TCGCSV cache unless explicitly using tcgtracking-only.
	if (PRICING_SOURCE !== 'tcgtracking-only') {
		const fallback = await readTCGCSVPricingCache(categoryId, tcgplayerSetId)

		cacheByKey.set(key, fallback)

		return fallback
	}

	cacheByKey.set(key, null)

	return null
}

/**
 * Reads a TCGCSV price cache file (var/models/tcgplayer/prices/{setId}.json)
 * and converts it to the CachedTCGTrackingPricingFile shape so the same
 * resolver can consume it without changes.
 *
 * Populated by: bun scripts/preloadTCGPlayer.ts  (pricing:preload:backup)
 */
async function readTCGCSVPricingCache(
	categoryId: TCGTrackingCategoryId,
	tcgplayerSetId: number,
): Promise<CachedTCGTrackingPricingFile | null> {
	const cacheFile = path.join(
		process.cwd(),
		'var',
		'models',
		'tcgplayer',
		'prices',
		`${tcgplayerSetId}.json`,
	)

	try {
		const raw = await fs.readFile(cacheFile, 'utf8')
		const tcgcsv = JSON.parse(raw) as TCGCSVPricesFile

		if (!tcgcsv.success || !tcgcsv.results?.length) {
			return null
		}

		const prices: Record<string, { tcg: Record<string, TCGTrackingPriceBucket> }> = {}

		for (const result of tcgcsv.results) {
			const id = String(result.productId)

			if (!prices[id]) {
				prices[id] = { tcg: {} }
			}

			const subType = result.subTypeName || 'Normal'

			prices[id].tcg[subType] = {
				low: result.lowPrice ?? undefined,
				market: result.marketPrice ?? undefined,
			}
		}

		return {
			source: 'tcgtracking',
			categoryId,
			tcgplayerSetId,
			sourceFile: `tcgcsv-fallback:${tcgplayerSetId}`,
			fetchedAt: new Date().toISOString(),
			data: {
				set_id: tcgplayerSetId,
				prices,
			},
		}
	} catch (error) {
		if (isNodeError(error) && error.code === 'ENOENT') {
			return null
		}

		throw error
	}
}

function resolvePricesForCard({
	card,
	cardId,
	cardFile,
	cardName,
	setId,
	setName,
	categoryId,
	tcgplayerSetId,
	cache,
	missing,
}: {
	card: TCGDexCard
	cardId: string
	cardFile: string
	cardName?: string
	setId?: string
	setName?: string
	categoryId: number
	tcgplayerSetId: number
	cache: CachedTCGTrackingPricingFile
	missing: MissingPrice[]
}): ResolvedCardPriceEntry[] {
	const entries: ResolvedCardPriceEntry[] = []

	/**
	 * If card.variants is an array, the repo is using detailed variants.
	 * In that case, prefer variant-level thirdParty.tcgplayer IDs.
	 */
	if (Array.isArray(card.variants)) {
		card.variants.forEach((variant, variantIndex) => {
			const tcgplayerProductId = variant.thirdParty?.tcgplayer

			if (typeof tcgplayerProductId !== 'number') {
				missing.push({
					cardId,
					cardFile: normalizePathForReport(cardFile),
					cardName,
					setId,
					setName,
					categoryId,
					tcgplayerSetId,
					target: 'variant',
					variantIndex,
					reason: 'missing-variant-tcgplayer-id',
				})

				return
			}

			const prices = getPricesForProduct(cache, tcgplayerProductId)

			if (prices.length === 0) {
				missing.push({
					cardId,
					cardFile: normalizePathForReport(cardFile),
					cardName,
					setId,
					setName,
					categoryId,
					tcgplayerSetId,
					tcgplayerProductId,
					target: 'variant',
					variantIndex,
					reason: 'missing-product-price',
				})

				return
			}

			for (const price of prices) {
				entries.push({
					target: 'variant',
					variantIndex,
					variant: {
						type: variant.type,
						subtype: variant.subtype,
						size: variant.size,
						stamp: variant.stamp,
						foil: variant.foil,
					},
					tcgplayerProductId,
					priceType: price.priceType,
					low: price.low,
					market: price.market,
				})
			}
		})

		return entries
	}

	/**
	 * If card.variants is not an array, use the card-level product ID.
	 * This keeps compatibility with older card files.
	 */
	const tcgplayerProductId = card.thirdParty?.tcgplayer

	if (typeof tcgplayerProductId !== 'number') {
		missing.push({
			cardId,
			cardFile: normalizePathForReport(cardFile),
			cardName,
			setId,
			setName,
			categoryId,
			tcgplayerSetId,
			target: 'card',
			reason: 'missing-card-tcgplayer-id',
		})

		return entries
	}

	const prices = getPricesForProduct(cache, tcgplayerProductId)

	if (prices.length === 0) {
		missing.push({
			cardId,
			cardFile: normalizePathForReport(cardFile),
			cardName,
			setId,
			setName,
			categoryId,
			tcgplayerSetId,
			tcgplayerProductId,
			target: 'card',
			reason: 'missing-product-price',
		})

		return entries
	}

	for (const price of prices) {
		entries.push({
			target: 'card',
			tcgplayerProductId,
			priceType: price.priceType,
			low: price.low,
			market: price.market,
		})
	}

	return entries
}

function getPricesForProduct(
	cache: CachedTCGTrackingPricingFile,
	tcgplayerProductId: number,
): ResolvedPrice[] {
	const product = cache.data.prices?.[String(tcgplayerProductId)]

	if (!product) {
		return []
	}

	if (!product.tcg) {
		return []
	}

	return Object.entries(product.tcg)
		.map(([priceType, price]) => ({
			productId: tcgplayerProductId,
			priceType,
			low: price.low,
			market: price.market,
		}))
		.filter((price) => {
			return typeof price.low === 'number' || typeof price.market === 'number'
		})
}

function groupMissingByReason(missing: MissingPrice[]): CountByReason[] {
	const counts = new Map<MissingPrice['reason'], number>()

	for (const item of missing) {
		counts.set(item.reason, (counts.get(item.reason) ?? 0) + 1)
	}

	return Array.from(counts.entries())
		.map(([reason, count]) => ({
			reason,
			count,
		}))
		.sort((a, b) => b.count - a.count)
}

function groupMissingCaches(missing: MissingPrice[]): MissingCacheSummary[] {
	const groups = new Map<string, MissingCacheSummary>()

	for (const item of missing) {
		if (item.reason !== 'missing-cache') {
			continue
		}

		const key = `${item.categoryId ?? 'unknown'}:${item.tcgplayerSetId ?? 'unknown'}`
		const existing = groups.get(key)

		if (existing) {
			existing.count += 1
			continue
		}

		groups.set(key, {
			categoryId: item.categoryId,
			tcgplayerSetId: item.tcgplayerSetId,
			setId: item.setId,
			setName: item.setName,
			count: 1,
		})
	}

	return Array.from(groups.values()).sort((a, b) => b.count - a.count)
}

function groupResolvedByTarget(resolved: ResolvedCardPrice[]): CountByTarget[] {
	const counts = new Map<ResolvedCardPriceEntry['target'], number>()

	for (const card of resolved) {
		for (const price of card.prices) {
			counts.set(price.target, (counts.get(price.target) ?? 0) + 1)
		}
	}

	return Array.from(counts.entries())
		.map(([target, count]) => ({
			target,
			count,
		}))
		.sort((a, b) => b.count - a.count)
}

function groupPriceTypes(resolved: ResolvedCardPrice[]): CountByPriceType[] {
	const counts = new Map<string, number>()

	for (const card of resolved) {
		for (const price of card.prices) {
			counts.set(price.priceType, (counts.get(price.priceType) ?? 0) + 1)
		}
	}

	return Array.from(counts.entries())
		.map(([priceType, count]) => ({
			priceType,
			count,
		}))
		.sort((a, b) => b.count - a.count)
}

async function writeReport(report: PricingUpdateReport): Promise<void> {
	const reportFile = path.join(
		process.cwd(),
		'var',
		'reports',
		'tcgtracking-pricing-update.json',
	)

	await fs.mkdir(path.dirname(reportFile), {
		recursive: true,
	})

	await fs.writeFile(
		reportFile,
		`${JSON.stringify(report, null, '\t')}\n`,
		'utf8',
	)
}

/**
 * CHANGE:
 * This writes the resolved pricing artifact consumed by the next integration step.
 *
 * It intentionally does not mutate card source files because the current source files
 * store marketplace IDs, while pricing should be generated from the cached provider data.
 */
async function writeResolvedPricingArtifact(
	resolved: ResolvedCardPrice[],
): Promise<void> {
	const outputFile = path.join(
		process.cwd(),
		'var',
		'models',
		'tcgtracking',
		'resolved-pricing.json',
	)

	await fs.mkdir(path.dirname(outputFile), {
		recursive: true,
	})

	await fs.writeFile(
		outputFile,
		`${JSON.stringify(
			{
				source: 'tcgtracking',
				createdAt: new Date().toISOString(),
				cards: resolved,
			},
			null,
			'\t',
		)}\n`,
		'utf8',
	)
}

function printSummary(report: PricingUpdateReport): void {
	console.log('')
	console.log('TCGTracking pricing update complete.')
	console.log(`Mode:                   ${report.mode}`)
	console.log(`Pricing source:         ${PRICING_SOURCE}`)
	console.log(`Card files scanned:     ${report.summary.cardFilesScanned}`)
	console.log(`Cards with prices:      ${report.summary.cardFilesWithPrices}`)
	console.log(`Price entries resolved: ${report.summary.priceEntriesResolved}`)
	console.log(`Missing records:        ${report.summary.missing}`)
	console.log(`Missing cache records:  ${report.summary.missingCacheRecords}`)
	console.log(`Unique missing caches:  ${report.summary.uniqueMissingCaches}`)
	console.log(`Output written:         ${report.summary.outputWritten ? 'yes' : 'no'}`)

	if (report.resolvedByTarget.length > 0) {
		console.log('')
		console.log('Resolved by target:')

		for (const item of report.resolvedByTarget) {
			console.log(`- ${item.target}: ${item.count}`)
		}
	}

	if (report.priceTypes.length > 0) {
		console.log('')
		console.log('Resolved price types:')

		for (const item of report.priceTypes.slice(0, 20)) {
			console.log(`- ${item.priceType}: ${item.count}`)
		}
	}

	if (report.missingByReason.length > 0) {
		console.log('')
		console.log('Missing by reason:')

		for (const item of report.missingByReason) {
			console.log(`- ${item.reason}: ${item.count}`)
		}
	}

	if (report.missingCaches.length > 0) {
		console.log('')
		console.log('Missing cache sets:')

		for (const item of report.missingCaches.slice(0, 20)) {
			console.log(
				`- ${item.setName ?? item.setId ?? 'Unknown set'} (${item.tcgplayerSetId ?? 'unknown'}): ${item.count}`,
			)
		}
	}

	console.log('')
	console.log('Report:')
	console.log('var/reports/tcgtracking-pricing-update.json')

	if (report.mode === 'apply') {
		console.log('')
		console.log('Resolved pricing artifact:')
		console.log('var/models/tcgtracking/resolved-pricing.json')
	}
}

function getMode(): 'dry-run' | 'apply' {
	if (process.argv.includes('--apply')) {
		return 'apply'
	}

	return 'dry-run'
}

async function pathExists(filePath: string): Promise<boolean> {
	try {
		await fs.access(filePath)
		return true
	} catch {
		return false
	}
}

function getCardIdFromFile(filePath: string): string {
	const filename = path.basename(filePath)
	return filename.slice(0, filename.lastIndexOf('.'))
}

function getEnglishName(value?: Record<string, string>): string | undefined {
	return value?.en ?? Object.values(value ?? {})[0]
}

function normalizePathForReport(filePath: string): string {
	return path.relative(process.cwd(), filePath).replace(/\\/g, '/')
}

function isNodeError(error: unknown): error is NodeJS.ErrnoException {
	return error instanceof Error && 'code' in error
}

main().catch((error) => {
	console.error(error)
	process.exitCode = 1
})