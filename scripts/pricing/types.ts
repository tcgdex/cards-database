export type PricingSourceName = 'tcgtracking' | 'tcgplayer'

export interface ResolvedPrice {
	source: PricingSourceName
	productId: number
	priceType: string
	low?: number
	market?: number
	/** CardTrader product ID sourced from TCGTracking. */
	cardtraderId?: number
	/** True when the product is a sealed item (booster box, ETB, bundle, etc.). */
	isSealed?: boolean
}

export interface PricingProvider {
	name: PricingSourceName
	getPrices(input: {
		categoryId: number
		tcgplayerSetId: number
		tcgplayerProductId: number
	}): Promise<ResolvedPrice[]>
}
