import { objectOmit } from '@dzeio/object-util'
import { sets } from '../../../V2/Components/Set'

export interface Root {
	success: boolean
	errors: any[]
	results: Result[]
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

let bearer: BearerResponse & { expires: Date } | undefined = undefined

async function getToken() {
	if (typeof bearer === 'undefined' || bearer.expires < new Date()) {
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
		}).then((it) => it.json())
		bearer = res
		now.setTime(now.getTime() + bearer!.expires_in)
		bearer!.expires = now
	}

	return bearer?.access_token
}

let cache: Record<number, Record<string, Result>> = {}
let lastFetch: Date | undefined = undefined
export async function updateTCGPlayerDatas(): Promise<boolean> {

	const token = await getToken()

	// only fetch at max, once an hour
	if (lastFetch && lastFetch.getTime() > new Date().getTime() - 3600000) {
		return false
	}

	const products = sets.en
		.filter((it) => it?.thirdParty?.tcgplayer)
		.map((it) => it!.thirdParty!.tcgplayer)

	for (const product of products) {
		const data = await fetch(`https://api.tcgplayer.com/pricing/group/${product}`, {
			headers: {
				'accept': 'application/json',
				'User-Agent': process.env.TCGPLAYER_CLIENT_NAME!,
				'Authorization': `bearer ${token}`
			}
		})
			.then((res) => res.json() as Promise<Root>)
		for (const item of data.results) {
			const cacheItem = cache[item.productId] ?? {}

			if (!(item.subTypeName in cacheItem)) {
				cacheItem[variantMapping[item.subTypeName] ?? item.subTypeName] = objectOmit(item, 'productId', 'subTypeName')
			}
			cache[item.productId] = cacheItem
		}
	}

	lastFetch = new Date()

	return true
}

const variantMapping: Record<string, string> = {
	Normal: 'normal',
	'Reverse Holofoil': 'reverse',
	'Holofoil': 'holo'
}

export async function getTCGPlayerPrice(card: { thirdParty: { tcgplayer?: number } }): Promise<{
	unit: 'USD',
	updated: string
	normal?: Omit<Result, 'productId' | 'subTypeName'>
	reverse?: Omit<Result, 'productId' | 'subTypeName'>
	holo?: Omit<Result, 'productId' | 'subTypeName'>
} | null> {
	if (!lastFetch || typeof card.thirdParty?.tcgplayer !== 'number') {
		return null
	}
	const variants = cache[card.thirdParty.tcgplayer!]
	if (!variants) {
		return null
	}
	const res: NonNullable<Awaited<ReturnType<typeof getTCGPlayerPrice>>> = {
		updated: lastFetch.toISOString(),
		unit: 'USD',
		...variants
	}
	return res
}
