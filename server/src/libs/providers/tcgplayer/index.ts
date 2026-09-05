import type { Result, TCGPlayerAPI } from './interface'
import * as TCGTrackingBackend from './tcgtracking'
import TCGCSV from './tcgcsv'
import TCGPlayer from './tcgplayer'
import TCGPlayerProxy from './proxy'
import { sets } from '../../../V2/Components/Set'
import { objectOmit } from '@dzeio/object-util'
import cluster from 'node:cluster'
import ClusterUtils from '../../threadUtils'

// ---------------------------------------------------------------------------
// Backend selection for TCGPlayer pricing
//
// Default: TCGCSV (public TCGPlayer cache, no credentials required)
// TCGPLAYER_PROXY or TCGPLAYER_CLIENT_*: official TCGPlayer API (proxy or direct)
//
// TCGTracking always runs in tandem regardless of the pricing backend —
// it contributes CardTrader IDs, sealed flags, and its own price data.
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Pricing mode — controls which fields are returned per request
// ---------------------------------------------------------------------------

/**
 * Controls which data is included in the tcgplayer pricing response.
 *
 * - `full`         (default) TCGCSV price variants + cardtraderId + isSealed
 * - `prices`       TCGCSV price variants only — strips all TCGTracking fields
 * - `tcgtracking`  TCGTracking price variants + cardtraderId + isSealed
 * - `meta`         cardtraderId + isSealed only — no prices
 * - `none`         Omits tcgplayer pricing entirely
 */
export type PricingMode = 'full' | 'prices' | 'tcgtracking' | 'meta' | 'none'

export const PRICING_MODES: ReadonlyArray<PricingMode> = ['full', 'prices', 'tcgtracking', 'meta', 'none']

// ---------------------------------------------------------------------------
// Worker cache (filled by primary broadcast)
// ---------------------------------------------------------------------------

type CacheEntry = Record<string, unknown> & {
	updated: string
	cardtraderId?: number
	isSealed?: boolean
	/** TCGTracking price variants — keyed the same way as TCGCSV top-level variants */
	tcgtracking?: Record<string, unknown>
}

let cache: Record<number, CacheEntry> = {}
let lastFetch: Date | undefined = undefined

export function fillTCGPlayerCache(data: typeof cache) {
	lastFetch = new Date()
	cache = data
}

// ---------------------------------------------------------------------------
// Primary: load pricing + TCGTracking metadata, broadcast merged result
// ---------------------------------------------------------------------------

export async function updateTCGPlayerDatas(): Promise<boolean> {
	if (!cluster.isPrimary) {
		return true
	}

	if (lastFetch && Date.now() - lastFetch.getTime() < 3_600_000) {
		return false
	}

	if (process.env.TCGPLAYER_CLIENT_ID || process.env.TCGPLAYER_PROXY) {
		console.log('loading official TCGPlayer backend')
	} else {
		console.log('loading TCGCSV backend')
	}
	console.log('TCGTracking running in tandem (CardTrader IDs + sealed flags + prices)')

	// Run pricing fetch and TCGTracking metadata fetch in parallel
	const [pricingResult, tcgTrackingResult] = await Promise.allSettled([
		loadPricingCache(),
		TCGTrackingBackend.updateTCGPlayerDatas(),
	])

	if (pricingResult.status === 'rejected') {
		console.warn('TCGPlayer pricing load failed:', pricingResult.reason)
	}

	// Merge TCGTracking data into the pricing cache:
	//   - cardtraderId + isSealed (metadata)
	//   - price variants stored under entry.tcgtracking (for ?pricing=tcgtracking)
	const tcgCache = TCGTrackingBackend.getCache()
	for (const [productIdStr, metaByType] of Object.entries(tcgCache)) {
		const productId = Number(productIdStr)
		const pricingEntry = cache[productId]
		if (!pricingEntry) continue

		// Metadata — take from first entry (shared across all price types)
		const firstEntry = Object.values(metaByType)[0]
		if (firstEntry) {
			if (firstEntry.cardtraderId != null) {
				pricingEntry.cardtraderId = firstEntry.cardtraderId
			}
			if (firstEntry.isSealed != null) {
				pricingEntry.isSealed = firstEntry.isSealed
			}
		}

		// TCGTracking price variants — store under tcgtracking sub-key
		const tcgVariants: Record<string, unknown> = {}
		for (const [priceType, priceData] of Object.entries(metaByType)) {
			tcgVariants[priceType] = {
				productId: priceData.productId,
				lowPrice: priceData.lowPrice,
				midPrice: priceData.midPrice,
				highPrice: priceData.highPrice,
				marketPrice: priceData.marketPrice,
			}
		}
		if (Object.keys(tcgVariants).length > 0) {
			pricingEntry.tcgtracking = tcgVariants
		}
	}

	if (tcgTrackingResult.status === 'rejected') {
		console.warn('TCGTracking metadata load failed:', tcgTrackingResult.reason)
	}

	lastFetch = new Date()
	ClusterUtils.broadcard({ type: 'tcgplayer-update', data: cache })
	return true
}

// ---------------------------------------------------------------------------
// Workers: price lookup (from locally filled cache)
// ---------------------------------------------------------------------------

export async function getTCGPlayerPrice(
	card: { thirdParty: { tcgplayer?: number } },
	mode: PricingMode = 'full',
): Promise<{ unit: 'USD'; updated: string; [key: string]: unknown } | null> {
	if (mode === 'none') return null
	if (!lastFetch || typeof card.thirdParty?.tcgplayer !== 'number') return null

	const entry = cache[card.thirdParty.tcgplayer]
	if (!entry) return null

	const { updated, cardtraderId, isSealed, tcgtracking, ...csvVariants } = entry

	switch (mode) {
		case 'prices':
			// TCGCSV price variants only — no meta, no TCGTracking prices
			return { unit: 'USD', updated, ...csvVariants }

		case 'tcgtracking':
			// TCGTracking price variants + meta; return null if no TCGTracking data
			if (!tcgtracking) return null
			return { unit: 'USD', updated, ...tcgtracking, cardtraderId, isSealed }

		case 'meta':
			// cardtraderId + isSealed only; return null if neither is present
			if (cardtraderId == null && isSealed == null) return null
			return { unit: 'USD', updated, cardtraderId, isSealed }

		case 'full':
		default:
			return { unit: 'USD', ...entry }
	}
}

// ---------------------------------------------------------------------------
// TCGPlayer API factory (proxy > official > TCGCSV)
// ---------------------------------------------------------------------------

export function getTCGPlayer(): TCGPlayerAPI {
	try {
		return TCGPlayerProxy.getInstance()
	} catch {}
	try {
		return TCGPlayer.getInstance()
	} catch {
		return TCGCSV.getInstance()
	}
}

// ---------------------------------------------------------------------------
// Internal: fetch TCGPlayer pricing into module-level cache
// ---------------------------------------------------------------------------

async function loadPricingCache(): Promise<void> {
	const provider = getTCGPlayer()
	const products = sets.en
		.filter((it) => it?.thirdParty?.tcgplayer)
		.map((it) => it!.thirdParty!.tcgplayer)

	const newCache: typeof cache = {}

	for (const product of products) {
		try {
			const data = await provider.pricing.group(product!)

			for (const item of data.results) {
				const cacheItem: CacheEntry = newCache[item.productId] ?? { updated: data.updated ?? new Date().toISOString() }
				cacheItem.updated = data.updated ?? new Date().toISOString()
				const type = item.subTypeName.toLowerCase().replaceAll(' ', '-')
				cacheItem[type] = objectOmit(item as Result, 'subTypeName')
				newCache[item.productId] = cacheItem
			}
		} catch (error) {
			const msg = error instanceof Error ? error.message : String(error)
			console.warn(`couldn't load TCGPlayer data for set ${product}: ${msg.slice(0, 120)}`)
		}
	}

	cache = newCache
}
