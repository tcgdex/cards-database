/* eslint-disable arrow-body-style */
import type { Result, SKUResult, TCGPlayerAPI, TCGPlayerResponse } from './interface'
import MemoryCache from '@cachex/memory'

const TCGPLAYER_CLIENT_NAME = process.env.TCGPLAYER_CLIENT_NAME!
const TCGPLAYER_CLIENT_ID = process.env.TCGPLAYER_CLIENT_ID!
const TCGPLAYER_CLIENT_SECRET = process.env.TCGPLAYER_CLIENT_SECRET!

interface BearerResponse {
	'access_token': string
	'token_type': 'bearer'
	'expires_in': number
	'userName': string
	'.issues': string
	'.expires': string
}

const cache = new MemoryCache()

export default class TCGPlayer implements TCGPlayerAPI {

	private static instance: TCGPlayer | undefined

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
			!TCGPLAYER_CLIENT_NAME
			|| !TCGPLAYER_CLIENT_ID
			|| !TCGPLAYER_CLIENT_SECRET
		) {
			throw new Error('TCGPLAYER_CLIENT_NAME,TCGPLAYER_CLIENT_ID,TCGPLAYER_CLIENT_SECRET are not set')
		}
	}

	public static getInstance() {
		return this.instance ??= new TCGPlayer()
	}

	private async getToken() {

		if (typeof this.bearer === 'undefined' || this.bearer.expires < new Date()) {
			const now = new Date()
			const res = await fetch('https://api.tcgplayer.com/token', {
				method: 'POST',
				headers: {
					'User-Agent': TCGPLAYER_CLIENT_NAME
				},
				body: new URLSearchParams({
					grant_type: 'client_credentials',
					client_id: TCGPLAYER_CLIENT_ID,
					client_secret: TCGPLAYER_CLIENT_SECRET
				})
			})

			if (res.status >= 400) {
				console.error(await res.text())
				throw new Error('error connecting to TCGPlayer')
			}

			const json = await res.json() as BearerResponse
			now.setTime(now.getTime() + json.expires_in)
			this.bearer = Object.assign({ expires: now }, json)
		}

		return this.bearer.access_token
	}

	private async fetch<T = Result>(path: string): Promise<TCGPlayerResponse<T>> {
		if (cache.get(path)) {
			return cache.get(path)!
		}
		const res = await fetch('https://api.tcgplayer.com' + path, {
			headers: {
				'accept': 'application/json',
				'User-Agent': TCGPLAYER_CLIENT_NAME,
				'Authorization': `bearer ${await this.getToken()}`
			}
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
