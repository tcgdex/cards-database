import { sets } from '../../../V2/Components/Set'
import {
	buildTCGTrackingBaseUrl,
	buildTCGTrackingHeaders,
	type TCGTrackingSetProduct,
} from '../../../../../scripts/utils-data/tcgtracking'

/**
 * TCGTracking sometimes exposes a set under a different ID than the
 * existing TCGDex / TCGPlayer set ID.
 */
const TCGTRACKING_SET_ID_OVERRIDES: Record<number, number> = {
	// Black Bolt: TCGDex/TCGPlayer ID 22325, TCGTracking ID 24325
	22325: 24325,
}

interface SetPricingResponse {
	set_id: number
	updated: string
	prices: Record<string, {
		tcg?: Record<string, { low?: number; market?: number }>
	}>
}

interface SetProductsResponse {
	set_id: number
	products: TCGTrackingSetProduct[]
}

export interface ProductMeta {
	cardtraderId: number | null
	isSealed: boolean
}

export interface PriceResult {
	productId: number
	lowPrice: number
	midPrice: number
	highPrice: number
	marketPrice?: number
	directLowPrice?: number
	cardtraderId?: number
	isSealed?: boolean
}

// productId → normalised-price-type → PriceResult
let cache: Record<number, Record<string, PriceResult>> = {}
let lastFetch: Date | undefined = undefined

export function getCache(): Record<number, Record<string, PriceResult>> {
	return cache
}

export function fillCache(data: Record<number, Record<string, PriceResult>>): void {
	cache = data
	lastFetch = new Date()
}

function isSealed(product: TCGTrackingSetProduct): boolean {
	const ct = product.cardtrader ?? []
	return ct.length > 0 && ct.every((entry) => entry.product_type !== 'single')
}

export async function updateTCGPlayerDatas(): Promise<boolean> {
	// Refresh at most once per hour
	if (lastFetch && Date.now() - lastFetch.getTime() < 3_600_000) {
		return false
	}

	const setIds = sets.en
		.filter((it) => it?.thirdParty?.tcgplayer)
		.map((it) => it!.thirdParty!.tcgplayer!)

	const newCache: Record<number, Record<string, PriceResult>> = {}
	let loaded = 0
	let failed = 0

	for (const setId of setIds) {
		const fetchSetId = TCGTRACKING_SET_ID_OVERRIDES[setId] ?? setId

		try {
			const [pricingRes, productsRes] = await Promise.all([
				fetch(
					`${buildTCGTrackingBaseUrl()}/3/sets/${fetchSetId}/pricing`,
					{ headers: buildTCGTrackingHeaders() },
				),
				fetch(
					`${buildTCGTrackingBaseUrl()}/3/sets/${fetchSetId}`,
					{ headers: buildTCGTrackingHeaders() },
				),
			])

			if (!pricingRes.ok) {
				failed++
				console.warn(`TCGTracking: set ${fetchSetId} pricing returned ${pricingRes.status}`)
				continue
			}

			const pricingData = (await pricingRes.json()) as SetPricingResponse

			// Build per-product metadata map from the products response
			const metaMap = new Map<number, ProductMeta>()
			if (productsRes.ok) {
				const productsData = (await productsRes.json()) as SetProductsResponse
				for (const product of productsData.products ?? []) {
					metaMap.set(product.id, {
						cardtraderId: product.cardtrader_id,
						isSealed: isSealed(product),
					})
				}
			}

			for (const [productIdStr, productPricing] of Object.entries(pricingData.prices ?? {})) {
				const productId = Number(productIdStr)
				if (!productPricing.tcg) continue

				const meta = metaMap.get(productId)
				const productCache: Record<string, PriceResult> = {}

				for (const [priceType, price] of Object.entries(productPricing.tcg)) {
					const key = priceType.toLowerCase().replaceAll(' ', '-')

					if (typeof price.low === 'number' || typeof price.market === 'number') {
						productCache[key] = {
							productId,
							lowPrice: price.low ?? 0,
							midPrice: 0,
							highPrice: 0,
							marketPrice: price.market,
							cardtraderId: meta?.cardtraderId ?? undefined,
							isSealed: meta?.isSealed,
						}
					}
				}

				if (Object.keys(productCache).length > 0) {
					newCache[productId] = productCache
				}
			}

			loaded++
		} catch (error) {
			failed++
			console.warn(
				`TCGTracking: failed to load set ${fetchSetId}: ${error instanceof Error ? error.message : String(error)}`,
			)
		}
	}

	cache = newCache
	lastFetch = new Date()
	console.log(`TCGTracking: loaded ${loaded} sets, ${failed} failed`)
	return true
}

export async function getTCGPlayerPrice(card: { thirdParty: { tcgplayer?: number } }): Promise<{
	unit: 'USD'
	updated: string
	[key: string]: unknown
} | null> {
	if (!lastFetch || typeof card.thirdParty?.tcgplayer !== 'number') {
		return null
	}

	const variants = cache[card.thirdParty.tcgplayer]
	if (!variants) return null

	return {
		updated: lastFetch.toISOString(),
		unit: 'USD',
		...variants,
	}
}
