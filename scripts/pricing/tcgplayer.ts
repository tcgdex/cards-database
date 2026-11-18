import { TTLCache } from './cache'
import type { PricingProvider, ResolvedPrice } from './types'

// Same TTL as TCGTracking — prices update daily
const PRICING_TTL_MS = 12 * 60 * 60 * 1000

interface TCGCSVPricesResult {
	productId: number
	lowPrice: number | null
	marketPrice: number | null
	subTypeName: string
}

interface TCGCSVPricesFile {
	success: boolean
	results: TCGCSVPricesResult[]
}

type ProductPriceMap = Map<string, { low?: number; market?: number }>

export class TCGPlayerProvider implements PricingProvider {
	readonly name = 'tcgplayer' as const

	// productId → normalised-price-type → prices
	private cache = new TTLCache<number, ProductPriceMap>()
	// Deduplicate concurrent fetches for the same set
	private inflight = new Map<number, Promise<void>>()

	async getPrices(input: {
		categoryId: number
		tcgplayerSetId: number
		tcgplayerProductId: number
	}): Promise<ResolvedPrice[]> {
		const productPricing = await this.loadProduct(
			input.tcgplayerSetId,
			input.tcgplayerProductId,
		)

		if (!productPricing) {
			return []
		}

		const result: ResolvedPrice[] = []

		for (const [priceType, price] of productPricing) {
			if (typeof price.low === 'number' || typeof price.market === 'number') {
				result.push({
					source: 'tcgplayer',
					productId: input.tcgplayerProductId,
					priceType,
					low: price.low,
					market: price.market,
				})
			}
		}

		return result
	}

	private async loadProduct(
		tcgplayerSetId: number,
		tcgplayerProductId: number,
	): Promise<ProductPriceMap | null> {
		if (this.cache.has(tcgplayerProductId)) {
			return this.cache.get(tcgplayerProductId) ?? null
		}

		// Fetch the whole set so all products in it are cached together
		let pending = this.inflight.get(tcgplayerSetId)

		if (!pending) {
			pending = this.fetchSet(tcgplayerSetId)
			this.inflight.set(tcgplayerSetId, pending)
		}

		try {
			await pending
		} finally {
			this.inflight.delete(tcgplayerSetId)
		}

		return this.cache.get(tcgplayerProductId) ?? null
	}

	private async fetchSet(tcgplayerSetId: number): Promise<void> {
		const userAgent = process.env.TCGCSV_USER_AGENT

		if (!userAgent) {
			return
		}

		try {
			const res = await fetch(
				`https://tcgcsv.com/tcgplayer/3/${tcgplayerSetId}/prices`,
				{ headers: { 'User-Agent': userAgent } },
			)

			if (!res.ok) {
				console.warn(
					`TCGPlayer: set ${tcgplayerSetId} returned ${res.status} ${res.statusText}`,
				)
				return
			}

			const data = (await res.json()) as TCGCSVPricesFile

			for (const result of data.results ?? []) {
				const priceType = result.subTypeName.toLowerCase().replaceAll(' ', '-')
				const map: ProductPriceMap = this.cache.get(result.productId) ?? new Map()

				map.set(priceType, {
					low: result.lowPrice ?? undefined,
					market: result.marketPrice ?? undefined,
				})

				this.cache.set(result.productId, map, PRICING_TTL_MS)
			}
		} catch (error) {
			console.warn(
				`TCGPlayer: failed to load set ${tcgplayerSetId}: ${error instanceof Error ? error.message : String(error)}`,
			)
		}
	}
}
