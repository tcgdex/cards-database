import fs from 'node:fs/promises'
import path from 'node:path'

interface ResolvedPricingEntry {
	target: 'card' | 'variant'
	tcgplayerProductId: number
	priceType: string
	low?: number
	market?: number
}

interface ResolvedPricingCard {
	cardId: string
	sourceFetchedAt: string
	sourceUpdated?: string
	prices: ResolvedPricingEntry[]
}

interface ResolvedPricingFile {
	source: 'tcgtracking'
	createdAt: string
	cards: ResolvedPricingCard[]
}

export interface PriceResult {
	productId: number
	lowPrice: number
	midPrice: number
	highPrice: number
	marketPrice?: number
	directLowPrice?: number
}

// Index: productId → normalised-price-type → PriceResult
let cache: Record<number, Record<string, PriceResult>> = {}
let lastLoaded: Date | undefined = undefined
let lastUpdated: string | undefined = undefined

// Can be overridden via TCGTRACKING_PRICING_PATH env var for Docker / custom setups.
// Default: one level above the server directory (standard repo layout).
const RESOLVED_PRICING_PATH = process.env.TCGTRACKING_PRICING_PATH ?? path.join(
	process.cwd(),
	'..',
	'var',
	'models',
	'tcgtracking',
	'resolved-pricing.json',
)

export async function updateTCGPlayerDatas(): Promise<boolean> {
	try {
		const stat = await fs.stat(RESOLVED_PRICING_PATH)

		// Skip reload when file hasn't changed since last load
		if (lastLoaded && stat.mtimeMs <= lastLoaded.getTime()) {
			return false
		}

		const raw = await fs.readFile(RESOLVED_PRICING_PATH, 'utf8')
		const data = JSON.parse(raw) as ResolvedPricingFile

		if (data.source !== 'tcgtracking') {
			console.warn('TCGTracking: unexpected source in resolved-pricing.json:', data.source)
			return false
		}

		const newCache: Record<number, Record<string, PriceResult>> = {}

		for (const card of data.cards) {
			for (const price of card.prices) {
				const productId = price.tcgplayerProductId
				const key = price.priceType.toLowerCase().replaceAll(' ', '-')

				if (!newCache[productId]) {
					newCache[productId] = {}
				}

				newCache[productId][key] = {
					productId,
					lowPrice: price.low ?? 0,
					midPrice: 0,
					highPrice: 0,
					marketPrice: price.market,
				}
			}
		}

		cache = newCache
		lastLoaded = new Date()
		lastUpdated = data.createdAt

		return true
	} catch (error) {
		if (isNodeError(error) && error.code === 'ENOENT') {
			console.warn('TCGTracking: resolved-pricing.json not found:', RESOLVED_PRICING_PATH)
			return false
		}
		throw error
	}
}

export async function getTCGPlayerPrice(card: { thirdParty: { tcgplayer?: number } }): Promise<{
	unit: 'USD'
	updated: string
	[key: string]: unknown
} | null> {
	if (!lastLoaded || typeof card.thirdParty?.tcgplayer !== 'number') {
		return null
	}

	const variants = cache[card.thirdParty.tcgplayer]

	if (!variants) {
		return null
	}

	return {
		updated: lastUpdated ?? lastLoaded.toISOString(),
		unit: 'USD',
		...variants,
	}
}

function isNodeError(error: unknown): error is NodeJS.ErrnoException {
	return error instanceof Error && 'code' in error
}
