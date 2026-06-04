/* eslint-disable arrow-body-style */
import type { TCGPlayerAPI, TCGPlayerResponse } from './interface'

const TCGCSV_USER_AGENT = 'tcgdex-server/' + process.env.USER_AGENT ?? process.env.TCGCSV_USER_AGENT!
const POKEMON_GROUP = 3
const ONE_HOUR = 3_600_000

export default class TCGCSV implements TCGPlayerAPI {

	private static instance: TCGCSV | undefined

	public pricing = {
		marketprices: () => { throw new Error('method unavailable in TCGCSV') },
		sku: () => { throw new Error('method unavailable in TCGCSV') },
		group: async (groupId: number): Promise<TCGPlayerResponse> => {
			return this.fetch(`/tcgplayer/${POKEMON_GROUP}/${groupId}/prices`)
		},
		product: async (...productIds: Array<number>): Promise<TCGPlayerResponse> => {
			if (productIds.length > 1) {
				const total: TCGPlayerResponse = {
					success: true,
					errors: [],
					results: []
				}
				for (const id of productIds) {
					const tmp = await this.pricing.product(id)
					if (!tmp.success) {
						return tmp
					}
					total.results.push(...tmp.results)
				}
				return total
			}
			return this.fetch(`/tcgplayer/${POKEMON_GROUP}/${productIds[0]}/prices`)
		},
		buy: {
			sku: () => { throw new Error('method unavailable in TCGCSV') },
			group: () => { throw new Error('method unavailable in TCGCSV') },
			product: () => { throw new Error('method unavailable in TCGCSV') },
		}
	}


	private lastUpdated: string | undefined
	private lastUpdatedCheck = 0


	private cache: Record<string, unknown> = {}


	private constructor() {
		if (!TCGCSV_USER_AGENT) {
			throw new Error('TCGCSV_USER_AGENT is not set')
		}
	}

	public static getInstance() {
		return this.instance ??= new TCGCSV()
	}

	private async fetch<T>(path: string): Promise<TCGPlayerResponse<T>> {
		const now = new Date().getTime()

		if (!this.lastUpdated || (now - this.lastUpdatedCheck) > ONE_HOUR) {
			const date = await fetch('https://tcgcsv.com/last-updated.txt', {
				headers: { 'User-Agent': TCGCSV_USER_AGENT }
			}).then((it) => it.text())
			this.lastUpdatedCheck = now
			if (this.lastUpdated !== date) {
				// clear cache
				this.cache = {}
			}
			this.lastUpdated = date
		}

		// check cache
		if (this.cache[path]) {
			return this.cache[path] as TCGPlayerResponse<T>
		}

		// fetch from remote
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const json = await fetch(`https://tcgcsv.com${path}`, {
			headers: { 'User-Agent': TCGCSV_USER_AGENT }
		})
			.then(async (res) => {

				if (res.status >= 400) {
					throw new Error(`error fetching from TCGCSV ${path} (${await res.text()})`)
				}

				return res.json() as Promise<TCGPlayerResponse<T>>
			})

		json.updated = this.lastUpdated

		this.cache[path] = json

		return json
	}
}
