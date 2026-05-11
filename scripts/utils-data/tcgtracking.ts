import fs from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

/**
 * TCGTracking Open TCG API base URL.
 *
 * This replaces the old TCGCSV fetch source for pricing data,
 * but does not remove the old TCGCSV scripts yet.
 */
export const TCGTRACKING_API_BASE_URL = 'https://tcgtracking.com/tcgapi/v1'

/**
 * TCGTracking category IDs.
 *
 * 3  = Pokémon
 * 85 = Pokémon Japan
 *
 * These are used only to fetch pricing data.
 * They do not decide card variants, finishes, or canonical card data.
 */
export const TCGTRACKING_CATEGORIES = {
	pokemon: 3,
	pokemonJapan: 85,
} as const

export type TCGTrackingCategoryId =
	(typeof TCGTRACKING_CATEGORIES)[keyof typeof TCGTRACKING_CATEGORIES]

/**
 * The cached pricing record is intentionally loose because TCGTracking may expose
 * price records with short keys, long keys, or nested response wrappers.
 *
 * The preload script stores the original raw JSON as-is.
 * Normalisation happens when reading the cache later.
 */
export type TCGTrackingRawPricingResponse = unknown

export interface TCGTrackingSetCacheTarget {
	categoryId: TCGTrackingCategoryId

	/**
	 * Existing TCGDex / TCGPlayer set ID.
	 *
	 * This is used for cache file naming so the updater can still look up pricing
	 * by card.set.thirdParty.tcgplayer.
	 */
	tcgplayerSetId: number

	/**
	 * Optional TCGTracking set ID override.
	 *
	 * This is used only when fetching from TCGTracking if their set ID differs
	 * from the existing TCGDex / TCGPlayer set ID.
	 *
	 * Example:
	 * - TCGDex Black Bolt set ID: 22325
	 * - TCGTracking Black Bolt set ID: 24325
	 */
	tcgTrackingSetId?: number

	sourceFile: string
}

/**
 * Cached TCGTracking pricing file written by scripts/preloadTCGTracking.ts.
 *
 * Real cache shape:
 *
 *   data.prices[tcgplayerProductId].tcg[priceType].low
 *   data.prices[tcgplayerProductId].tcg[priceType].market
 *
 * Example priceType values from the uploaded cache include:
 *
 *   Normal
 *   Holofoil
 *   Reverse Holofoil
 */
export interface CachedTCGTrackingPricingFile {
	source: 'tcgtracking'
	categoryId: TCGTrackingCategoryId

	/**
	 * Existing TCGDex / TCGPlayer set ID.
	 *
	 * This should match card.set.thirdParty.tcgplayer.
	 */
	tcgplayerSetId: number

	/**
	 * Actual TCGTracking set ID used when fetching.
	 *
	 * Usually the same as tcgplayerSetId, but can differ for sets such as
	 * Black Bolt.
	 *
     * Known missing TCGTracking pricing endpoints:
     *
     * - DP trainer Kit (Manaphy), TCGPlayer set ID 609
     * - DP trainer Kit (Lucario), TCGPlayer set ID 610
     *
     * TCGTracking search currently returns no matching set for:
     * "DP Trainer Kit Manaphy/Lucario"
     *
     * These should fall back to existing/TCGCSV pricing.
     */
	tcgTrackingSetId?: number

	sourceFile: string
	fetchedAt: string
	data: {
		set_id: number
		updated?: string
		prices?: Record<string, TCGTrackingProductPricing>
	}
}

export interface TCGTrackingProductPricing {
	tcg?: Record<string, TCGTrackingVariantPrice>
}

export interface TCGTrackingVariantPrice {
	low?: number
	market?: number
}

export interface ResolvedTCGTrackingPrice {
	productId: number
	priceType: string
	low?: number
	market?: number
}

/**
 * CHANGE:
 * Added a dedicated TCGTracking cache folder.
 *
 * This avoids changing the old TCGCSV cache:
 *
 *   var/models/tcgplayer/...
 *
 * New cache:
 *
 *   var/models/tcgtracking/category-3/pricing/{setId}.json
 *   var/models/tcgtracking/category-85/pricing/{setId}.json
 *
 * IMPORTANT:
 * The {setId}.json filename should use the existing TCGDex / TCGPlayer set ID,
 * not the override ID. This keeps the updater compatible with existing card data.
 */
export function getTCGTrackingPricingCacheFile(
	categoryId: TCGTrackingCategoryId,
	tcgplayerSetId: number,
): string {
	return path.join(
		process.cwd(),
		'var',
		'models',
		'tcgtracking',
		`category-${categoryId}`,
		'pricing',
		`${tcgplayerSetId}.json`,
	)
}

export async function ensureParentFolder(filePath: string): Promise<void> {
	await fs.mkdir(path.dirname(filePath), { recursive: true })
}

export async function writeJsonFile(filePath: string, data: unknown): Promise<void> {
	await ensureParentFolder(filePath)

	await fs.writeFile(
		filePath,
		`${JSON.stringify(data, null, '\t')}\n`,
		'utf8',
	)
}

export async function readJsonFile<T = unknown>(filePath: string): Promise<T | null> {
	try {
		const raw = await fs.readFile(filePath, 'utf8')
		return JSON.parse(raw) as T
	} catch (error) {
		if (isNodeError(error) && error.code === 'ENOENT') {
			return null
		}

		throw error
	}
}

export function isNodeError(error: unknown): error is NodeJS.ErrnoException {
	return error instanceof Error && 'code' in error
}

export async function fetchTCGTrackingSetPricing(
	categoryId: TCGTrackingCategoryId,
	tcgTrackingSetId: number,
): Promise<TCGTrackingRawPricingResponse> {
	const url = `${TCGTRACKING_API_BASE_URL}/${categoryId}/sets/${tcgTrackingSetId}/pricing`

	const response = await fetch(url, {
		headers: {
			Accept: 'application/json',
		},
	})

	if (!response.ok) {
		throw new Error(
			`TCGTracking pricing fetch failed for category ${categoryId}, set ${tcgTrackingSetId}: ${response.status} ${response.statusText}`,
		)
	}

	return response.json()
}

/**
 * Small delay to avoid hammering the API when fetching many sets.
 *
 * TCGTracking is CDN-backed, but keeping this polite makes the script safer
 * for repeated maintainer use and CI.
 */
export async function sleep(ms: number): Promise<void> {
	await new Promise((resolve) => {
		setTimeout(resolve, ms)
	})
}

/**
 * CHANGE:
 * Converts a filesystem path into a valid file URL for dynamic import.
 *
 * The previous manual file:/// conversion broke on paths with special characters.
 *
 * Example broken path:
 *
 *   H:\cards-database\data\EX\Unseen Forces Unown Collection\?.ts
 *
 * A literal ? inside an import URL is treated as the start of a query string unless
 * it is encoded. pathToFileURL handles that correctly.
 */
export function toImportUrl(filePath: string): string {
	return pathToFileURL(path.resolve(filePath)).href
}

/**
 * Decide which TCGTracking category to use based on the file location.
 *
 * CHANGE:
 * This is only for selecting the pricing source category.
 * It does not change card data or map variants.
 */
export function getCategoryIdForSetFile(filePath: string): TCGTrackingCategoryId {
	const normalized = filePath.replace(/\\/g, '/')

	if (normalized.includes('/data-asia/')) {
		return TCGTRACKING_CATEGORIES.pokemonJapan
	}

	return TCGTRACKING_CATEGORIES.pokemon
}

/**
 * Reads a cached TCGTracking pricing file.
 */
export async function readTCGTrackingPricingCache(
	categoryId: TCGTrackingCategoryId,
	tcgplayerSetId: number,
): Promise<CachedTCGTrackingPricingFile | null> {
	const cacheFile = getTCGTrackingPricingCacheFile(categoryId, tcgplayerSetId)

	return readJsonFile<CachedTCGTrackingPricingFile>(cacheFile)
}

/**
 * Finds prices for an existing TCGPlayer product ID.
 *
 * This does not decide what variants exist.
 * It only returns the price buckets TCGTracking has for that product.
 */
export function getPricesForTCGPlayerProduct(
	cache: CachedTCGTrackingPricingFile,
	tcgplayerProductId: number,
): ResolvedTCGTrackingPrice[] {
	const productPricing = cache.data.prices?.[String(tcgplayerProductId)]

	if (!productPricing?.tcg) {
		return []
	}

	return Object.entries(productPricing.tcg)
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

/**
 * Gets the best single price for a product.
 *
 * Preference:
 * 1. market
 * 2. low
 *
 * This is useful if the current TCGDex pricing shape only stores one price value.
 */
export function getBestPriceForTCGPlayerProduct(
	cache: CachedTCGTrackingPricingFile,
	tcgplayerProductId: number,
): ResolvedTCGTrackingPrice | null {
	const prices = getPricesForTCGPlayerProduct(cache, tcgplayerProductId)

	const withMarket = prices.find((price) => typeof price.market === 'number')

	if (withMarket) {
		return withMarket
	}

	const withLow = prices.find((price) => typeof price.low === 'number')

	return withLow ?? null
}