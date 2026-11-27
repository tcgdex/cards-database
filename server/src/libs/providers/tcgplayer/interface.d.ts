export interface TCGPlayerResponse<T = Result> {
	updated?: string
	success: boolean
	errors: Array<unknown>
	results: Array<T>
}

export interface SKUResult {
	skuId: number
	lowPrice: number
	lowestShipping: number
	lowestListingPrice: number
	marketPrice: number
	directLowPrice: number
}

export interface Result {
	productId: number
	lowPrice: number
	midPrice: number
	highPrice: number
	marketPrice?: number
	directLowPrice?: number
	subTypeName: 'Normal' | 'Reverse Holofoil' | 'Holofoil'
	/** CardTrader product ID, sourced from TCGTracking. */
	cardtraderId?: number
	/** True when the product is a sealed item (booster box, ETB, bundle, etc.). */
	isSealed?: boolean
}

export interface TCGPlayerAPI {
	pricing: {
		/**
		 * Gets the current Market Price for the specified SKU.
		 * @param productconditionId the SKU
		 * @returns the sku pricing
		 */
		marketprices: (productconditionId: number) => Promise<TCGPlayerResponse<SKUResult>>
		group: (groupId: number) => Promise<TCGPlayerResponse>
		product: (...productIds: Array<number>) => Promise<TCGPlayerResponse>
		sku: (...skuIds: Array<number>) => Promise<TCGPlayerResponse<SKUResult>>
		buy: {
			product: (productIds: number | Array<number>) => Promise<TCGPlayerResponse>
			sku: (skuIds: number | Array<number>) => Promise<TCGPlayerResponse>
			group: (groupId: number) => Promise<TCGPlayerResponse>
		}
	}
}
