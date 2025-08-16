export interface Root<T = Result> {
	success: boolean
	errors: any[]
	results: T[]
}

export interface Result {
	productId: number
	lowPrice: number
	midPrice: number
	highPrice: number
	marketPrice?: number
	directLowPrice?: number
	subTypeName: 'Normal' | 'Reverse Holofoil' | 'Holofoil'
}


interface BearerResponse {
	access_token: string
	token_type: 'bearer'
	expires_in: number
	userName: string
	'.issues': string
	'.expires': string
}

export default class TCGPlayer {
	private bearer: BearerResponse & { expires: Date } | undefined = undefined
	public category = {
		listConditions: async (categoryId: number) => {
			return await this.fetch<{
				conditionId: number
				name: string
				abbreviation: string
				displayOrder: number
			}>(`/catalog/categories/${categoryId}/conditions`)
		},
		listLanguages: async (categoryId: number) => {
			return await this.fetch<{
				languageId: number
				name: string
				abbr: string
			}>(`/catalog/categories/${categoryId}/languages`)
		},
		listPrintings: async (categoryId: number) => {
			return await this.fetch<{
				printingId: number
				name: string
				displayOrder: number
				modifiedOn: Date
			}>(`/catalog/categories/${categoryId}/printings`)
		}
	}
	public product = {
		listSKUs: async (productId: number) => {
			return await this.fetch<{
				skuId: number
				productId: number
				languageId: number
				printingId: number
				conditionId: number
			}>(`/catalog/products/${productId}/skus`)

		}
	}
	public price = {
		groupProduct: async (product: number) => {
			return await this.fetch<{
				"productId": number
				"lowPrice": number
				"midPrice": number
				"highPrice": number
				"marketPrice": number
				"directLowPrice": number
				"subTypeName": string
			}>(`/pricing/product/${product}`)
		},
		listForProducts: async (...productIds: Array<number>) => {
			return await this.fetch<{
				"productId": number
				"lowPrice": number
				"midPrice": number
				"highPrice": number
				"marketPrice": number
				"directLowPrice": number
				"subTypeName": string
			}>(`/pricing/product/${productIds.join(',')}`)
		},
		listForSKUs: async (...SKUIds: Array<number>) => {
			return await this.fetch<{
				"skuId": number,
				"lowPrice": number,
				"lowestShipping": number,
				"lowestListingPrice": number,
				"marketPrice": number,
				"directLowPrice": number
			}>(`/pricing/sku/${SKUIds.join(',')}`)
		}
	}

	private async getToken() {

		if (typeof this.bearer === 'undefined' || this.bearer.expires < new Date()) {
			const now = new Date()
			const res = await fetch('https://api.tcgplayer.com/token', {
				method: 'POST',
				headers: {
					'User-Agent': 'TCG-Collection'
				},
				body: new URLSearchParams({
					'grant_type': 'client_credentials',
					'client_id': process.env.TCGPLAYER_CLIENT_ID!,
					'client_secret': process.env.TCGPLAYER_CLIENT_SECRET!
				})
			})

			if (res.status >= 400) {
				console.error(await res.text())
				throw new Error('error connecting to TCGPlayer')
			}

			const json = await res.json() as BearerResponse
			this.bearer = json as any
			now.setTime(now.getTime() + this.bearer!.expires_in)
			this.bearer!.expires = now
		}

		return this.bearer?.access_token
	}

	private async fetch<T = Result>(path: string): Promise<Root<T>> {
		const res = await fetch('https://api.tcgplayer.com' + path, {
			headers: {
				'accept': 'application/json',
				'User-Agent': process.env.TCGPLAYER_CLIENT_NAME!,
				'Authorization': `bearer ${await this.getToken()}`
			}
		})
		const text = await res.text()
		let json: any
		try {
			json = JSON.parse(text)
		} catch (e) {
			throw new Error(text)
		}
		if (res.status >= 400) {
			console.error('error getting', path)
			if (json.message) {
				throw new Error(json.message)
			}
			throw new Error(JSON.stringify(json))
		}

		return json
		// .then((res) => res.json() as Promise<Root<T>>)
	}
}
