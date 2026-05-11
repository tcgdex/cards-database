export type PricingSourceName = 'tcgtracking' | 'tcgplayer'

export interface ResolvedPrice {
	source: PricingSourceName
	productId: number
	priceType: string
	low?: number
	market?: number
}

export interface PricingProvider {
	name: PricingSourceName
	getPrices(input: {
		categoryId: number
		tcgplayerSetId: number
		tcgplayerProductId: number
	}): Promise<ResolvedPrice[]>
}
