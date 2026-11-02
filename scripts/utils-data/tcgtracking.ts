import path from 'node:path'
import { pathToFileURL } from 'node:url'

/**
 * Returns the TCGTracking API base URL.
 *
 * When `TCGPLAYER_PROXY` is set the proxy is used as the base so all external
 * traffic routes through the same self-hosted proxy as TCGPlayer requests.
 * Falls back to the public TCGTracking endpoint when no proxy is configured.
 */
export function buildTCGTrackingBaseUrl(): string {
	const proxy = process.env.TCGPLAYER_PROXY
	return proxy ? `${proxy}/tcgapi/v1` : 'https://tcgtracking.com/tcgapi/v1'
}

/**
 * Returns the headers to send with every TCGTracking API request.
 *
 * Mirrors the auth used by `TCGPlayerProxy` so the self-hosted proxy can
 * validate requests from both callers uniformly.
 */
export function buildTCGTrackingHeaders(): Record<string, string> {
	const headers: Record<string, string> = {
		Accept: 'application/json',
	}

	const userAgent = process.env.USER_AGENT
	if (userAgent) {
		headers['User-Agent'] = userAgent
	}

	const apiKey = process.env.TCGPLAYER_PROXY_API_KEY
	if (apiKey) {
		headers.Authorization = `bearer ${apiKey}`
	}

	return headers
}


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

export type TCGTrackingRawPricingResponse = unknown

export interface TCGTrackingProductPricing {
	tcg?: Record<string, TCGTrackingVariantPrice>
}

export interface TCGTrackingVariantPrice {
	low?: number
	market?: number
}

export interface TCGTrackingCardTraderEntry {
	id: number
	product_type: string
}

export interface TCGTrackingSetProduct {
	id: number
	name: string
	number: string | null
	cardtrader_id: number | null
	cardtrader: TCGTrackingCardTraderEntry[] | null
}

export interface TCGTrackingSetProductsResponse {
	set_id: number
	set_name: string
	products: TCGTrackingSetProduct[]
}

export async function fetchTCGTrackingSetProducts(
	categoryId: TCGTrackingCategoryId,
	tcgTrackingSetId: number,
): Promise<TCGTrackingSetProductsResponse> {
	const url = `${buildTCGTrackingBaseUrl()}/${categoryId}/sets/${tcgTrackingSetId}`
	const response = await fetch(url, { headers: buildTCGTrackingHeaders() })

	if (!response.ok) {
		throw new Error(
			`TCGTracking products fetch failed for category ${categoryId}, set ${tcgTrackingSetId}: ${response.status} ${response.statusText}`,
		)
	}

	return response.json() as Promise<TCGTrackingSetProductsResponse>
}

export async function fetchTCGTrackingSetPricing(
	categoryId: TCGTrackingCategoryId,
	tcgTrackingSetId: number,
): Promise<TCGTrackingRawPricingResponse> {
	const url = `${buildTCGTrackingBaseUrl()}/${categoryId}/sets/${tcgTrackingSetId}/pricing`

	const response = await fetch(url, { headers: buildTCGTrackingHeaders() })

	if (!response.ok) {
		throw new Error(
			`TCGTracking pricing fetch failed for category ${categoryId}, set ${tcgTrackingSetId}: ${response.status} ${response.statusText}`,
		)
	}

	return response.json()
}

/**
 * Converts a filesystem path into a valid file URL for dynamic import.
 *
 * A literal ? inside an import URL is treated as the start of a query string
 * unless it is encoded. pathToFileURL handles that correctly.
 */
export function toImportUrl(filePath: string): string {
	return pathToFileURL(path.resolve(filePath)).href
}

/**
 * Decides which TCGTracking category to use based on the file location.
 * Only used for selecting the pricing source category, not for card data.
 */
export function getCategoryIdForSetFile(filePath: string): TCGTrackingCategoryId {
	const normalized = filePath.replace(/\\/g, '/')

	if (normalized.includes('/data-asia/')) {
		return TCGTRACKING_CATEGORIES.pokemonJapan
	}

	return TCGTRACKING_CATEGORIES.pokemon
}
