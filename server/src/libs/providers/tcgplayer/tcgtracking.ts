import { sets } from '../../../V2/Components/Set'

const TCGTRACKING_API_BASE_URL = 'https://tcgtracking.com/tcgapi/v1'

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

export interface PriceResult {
	productId: number
	lowPrice: number
	midPrice: number
	highPrice: number
	marketPrice?: number
	directLowPrice?: number
}

// productId → normalised-price-type → PriceResult
let cache: Record<number, Record<string, PriceResult>> = {}
let lastFetch: Date | undefined = undefined

export async function updateTCGPlayerDatas(): Promise<boolean> {
	// Refresh at most once per hour
	if (lastFetch && Date.now() - lastFetch.getTime() < 3600000) {
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
			const res = await fetch(
				`${TCGTRACKING_API_BASE_URL}/3/sets/${fetchSetId}/pricing`,
				{ headers: { Accept: 'application/json' } },
			)

			if (!res.ok) {
				failed++
				console.warn(
					`TCGTracking: set ${fetchSetId} returned ${res.status} ${res.statusText}`,
				)
				continue
			}

			const data = (await res.json()) as SetPricingResponse

			for (const [productIdStr, productPricing] of Object.entries(data.prices ?? {})) {
				const productId = Number(productIdStr)

				if (!productPricing.tcg) {
					continue
				}

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

	if (!variants) {
		return null
	}

	return {
		updated: lastFetch.toISOString(),
		unit: 'USD',
		...variants,
	}
}
