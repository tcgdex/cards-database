import path from 'node:path'
import { pathToFileURL } from 'node:url'

/**
 * TCGTracking Open TCG API base URL.
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

export type TCGTrackingRawPricingResponse = unknown

export interface TCGTrackingProductPricing {
	tcg?: Record<string, TCGTrackingVariantPrice>
}

export interface TCGTrackingVariantPrice {
	low?: number
	market?: number
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
