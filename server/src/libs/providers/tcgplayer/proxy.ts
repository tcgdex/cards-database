/* eslint-disable arrow-body-style */
import type { Result, SKUResult, TCGPlayerAPI, TCGPlayerResponse } from './interface'
import MemoryCache from '@cachex/memory'

const TCGPLAYER_PROXY = process.env.TCGPLAYER_PROXY!
const USER_AGENT = process.env.USER_AGENT
const TCGPLAYER_PROXY_API_KEY = process.env.TCGPLAYER_PROXY_API_KEY!

interface BearerResponse {
	'access_token': string
	'token_type': 'bearer'
	'expires_in': number
	'userName': string
	'.issues': string
	'.expires': string
}

const cache = new MemoryCache()

export default class TCGPlayerProxy implements TCGPlayerAPI {

	private static instance: TCGPlayerProxy | undefined

	public pricing = {
		marketprices: () => { throw new Error('method unavailable in TCGCSV') },
		sku: (...skuIds: Array<number>) => {
			return this.fetch<SKUResult>(`/pricing/sku/${skuIds.join(',')}`)
		},
		group: async (groupId: number): Promise<TCGPlayerResponse> => {
			return this.fetch(`/pricing/group/${groupId}`)
		},
		product: async (...productIds: Array<number>): Promise<TCGPlayerResponse> => {
			return this.fetch(`/pricing/product/${productIds.join(',')}`)
		},
		buy: {
			sku: () => { throw new Error('method unavailable in TCGCSV') },
			group: () => { throw new Error('method unavailable in TCGCSV') },
			product: () => { throw new Error('method unavailable in TCGCSV') },
		}
	}

	private bearer: BearerResponse & { expires: Date } | undefined = undefined

	private constructor() {
		if (
			!TCGPLAYER_PROXY
		) {
			throw new Error('TCGPLAYER_CLIENT_NAME,TCGPLAYER_CLIENT_ID,TCGPLAYER_CLIENT_SECRET are not set')
		}
	}

	public static getInstance() {
		return this.instance ??= new TCGPlayerProxy()
	}

	private async fetch<T = Result>(path: string): Promise<TCGPlayerResponse<T>> {
		if (cache.get(path)) {
			return cache.get(path)!
		}

		// setup headers
		const headers: Record<string, string> = {
			'accept': 'application/json',
			'User-Agent': USER_AGENT ?? 'tcgdex-server',
		}
		if (TCGPLAYER_PROXY_API_KEY) {
			headers.Authorization = `bearer ${TCGPLAYER_PROXY_API_KEY}`
		}

		const res = await fetch(TCGPLAYER_PROXY + path, {
			headers: headers
		})
		const text = await res.text()
		let json: TCGPlayerResponse<T>
		try {
			json = JSON.parse(text) as TCGPlayerResponse<T>
		} catch (_) {
			throw new Error(text)
		}
		if (res.status >= 400) {
			console.error('error getting', path)
			if (json.errors.length > 0) {
				throw new Error(json.errors.join(', '))
			}
			throw new Error(JSON.stringify(json))
		}

		json.updated = new Date().toISOString()

		// cache request for 30 minutes
		cache.set(path, json, 1800)

		return json
	}
}
