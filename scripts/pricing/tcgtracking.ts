import {
	fetchTCGTrackingSetPricing,
	fetchTCGTrackingSetProducts,
	type TCGTrackingCategoryId,
	type TCGTrackingProductPricing,
	type TCGTrackingSetProduct,
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

// productId → product metadata (CardTrader ID, sealed flag)
type ProductMeta = { cardtraderId: number | null; isSealed: boolean }

function isSealed(product: TCGTrackingSetProduct): boolean {
	const ct = product.cardtrader ?? []
	return ct.length > 0 && ct.every((entry) => entry.product_type !== 'single')
}

export class TCGTrackingProvider implements PricingProvider {
	readonly name = 'tcgtracking' as const

	private pricingCache = new TTLCache<string, SetPricingResponse>()
	private productsCache = new TTLCache<string, Map<number, ProductMeta>>()
	private inflight = new Map<string, Promise<SetPricingResponse | null>>()

	async getPrices(input: {
		categoryId: number
		tcgplayerSetId: number
		tcgplayerProductId: number
	}): Promise<ResolvedPrice[]> {
		const [setPricing, productsMeta] = await Promise.all([
			this.loadSet(input.categoryId as TCGTrackingCategoryId, input.tcgplayerSetId),
			this.loadProducts(input.categoryId as TCGTrackingCategoryId, input.tcgplayerSetId),
		])

		if (!setPricing) {
			return []
		}

		const productPricing = setPricing.prices[String(input.tcgplayerProductId)]

		if (!productPricing?.tcg) {
			return []
		}

		const meta = productsMeta?.get(input.tcgplayerProductId)

		return Object.entries(productPricing.tcg)
			.map(([priceType, price]) => ({
				source: 'tcgtracking' as const,
				productId: input.tcgplayerProductId,
				priceType,
				low: price.low,
				market: price.market,
				cardtraderId: meta?.cardtraderId ?? undefined,
				isSealed: meta?.isSealed,
			}))
			.filter(
				(price) =>
					typeof price.low === 'number' || typeof price.market === 'number',
			)
	}

	private async loadProducts(
		categoryId: TCGTrackingCategoryId,
		tcgplayerSetId: number,
	): Promise<Map<number, ProductMeta> | null> {
		const cacheKey = `${categoryId}:${tcgplayerSetId}`
		const cached = this.productsCache.get(cacheKey)
		if (cached !== undefined) return cached

		try {
			const fetchSetId = TCGTRACKING_SET_ID_OVERRIDES[tcgplayerSetId] ?? tcgplayerSetId
			const data = await fetchTCGTrackingSetProducts(categoryId, fetchSetId)
			const map = new Map<number, ProductMeta>()

			for (const product of data.products) {
				map.set(product.id, {
					cardtraderId: product.cardtrader_id,
					isSealed: isSealed(product),
				})
			}

			this.productsCache.set(cacheKey, map, PRICING_TTL_MS)
			return map
		} catch (error) {
			console.warn(
				`TCGTracking: failed to load products for category ${categoryId}, set ${tcgplayerSetId}: ${getErrorMessage(error)}`,
			)
			return null
		}
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
