import {
	fetchTCGTrackingSetPricing,
	type TCGTrackingCategoryId,
	type TCGTrackingProductPricing,
} from '../utils-data/tcgtracking'
import { TTLCache } from './cache'
import type { PricingProvider, ResolvedPrice } from './types'

// Prices update daily ~8 AM EST; 12-hour TTL means at most one stale window per day
const PRICING_TTL_MS = 12 * 60 * 60 * 1000

/**
 * TCGTracking sometimes exposes a set under a different ID than the
 * existing TCGDex / TCGPlayer set ID.
 *
 * Key:   existing TCGDex / TCGPlayer set ID
 * Value: TCGTracking set ID used for API fetching
 *
 * Lookups are still keyed by the original TCGDex ID so getPrices()
 * stays compatible with existing card data.
 */
const TCGTRACKING_SET_ID_OVERRIDES: Record<number, number> = {
	// Black Bolt: TCGDex/TCGPlayer ID 22325, TCGTracking ID 24325
	22325: 24325,
}

interface SetPricingResponse {
	set_id: number
	updated: string
	prices: Record<string, TCGTrackingProductPricing>
}

export class TCGTrackingProvider implements PricingProvider {
	readonly name = 'tcgtracking' as const

	private pricingCache = new TTLCache<string, SetPricingResponse>()
	private inflight = new Map<string, Promise<SetPricingResponse | null>>()

	async getPrices(input: {
		categoryId: number
		tcgplayerSetId: number
		tcgplayerProductId: number
	}): Promise<ResolvedPrice[]> {
		const setPricing = await this.loadSet(
			input.categoryId as TCGTrackingCategoryId,
			input.tcgplayerSetId,
		)

		if (!setPricing) {
			return []
		}

		const productPricing = setPricing.prices[String(input.tcgplayerProductId)]

		if (!productPricing?.tcg) {
			return []
		}

		return Object.entries(productPricing.tcg)
			.map(([priceType, price]) => ({
				source: 'tcgtracking' as const,
				productId: input.tcgplayerProductId,
				priceType,
				low: price.low,
				market: price.market,
			}))
			.filter(
				(price) =>
					typeof price.low === 'number' || typeof price.market === 'number',
			)
	}

	private async loadSet(
		categoryId: TCGTrackingCategoryId,
		tcgplayerSetId: number,
	): Promise<SetPricingResponse | null> {
		const cacheKey = `${categoryId}:${tcgplayerSetId}`
		const cached = this.pricingCache.get(cacheKey)

		if (cached !== undefined) {
			return cached
		}

		let pending = this.inflight.get(cacheKey)

		if (!pending) {
			pending = this.fetchSet(categoryId, tcgplayerSetId, cacheKey)
			this.inflight.set(cacheKey, pending)
		}

		try {
			return await pending
		} finally {
			this.inflight.delete(cacheKey)
		}
	}

	private async fetchSet(
		categoryId: TCGTrackingCategoryId,
		tcgplayerSetId: number,
		cacheKey: string,
	): Promise<SetPricingResponse | null> {
		const fetchSetId = TCGTRACKING_SET_ID_OVERRIDES[tcgplayerSetId] ?? tcgplayerSetId

		try {
			const data = (await fetchTCGTrackingSetPricing(
				categoryId,
				fetchSetId,
			)) as SetPricingResponse

			this.pricingCache.set(cacheKey, data, PRICING_TTL_MS)

			return data
		} catch (error) {
			console.warn(
				`TCGTracking: failed to load pricing for category ${categoryId}, set ${fetchSetId}: ${getErrorMessage(error)}`,
			)

			return null
		}
	}
}

function getErrorMessage(error: unknown): string {
	return error instanceof Error ? error.message : String(error)
}
