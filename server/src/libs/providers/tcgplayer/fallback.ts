import { objectOmit } from '@dzeio/object-util'
import { sets } from '../../../V2/Components/Set'
import TCGPlayer from './TCGPlayer'

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
	subTypeName: string
}

let cache: Record<number, Record<string, Result>> = {}
let lastFetch: Date | undefined = undefined
let lastUpdate: Date | undefined = undefined
export async function updateTCGPlayerDatas(): Promise<boolean> {

	// only fetch at max, once an hour
	if (lastFetch && lastFetch.getTime() > new Date().getTime() - 3600000) {
		return false
	}

	// check if it has updated yet
	const updated = await fetch('https://tcgcsv.com/last-updated.txt')
		.then((it) => it.text())
		.then((it) => new Date(it))

	if (lastUpdate === updated) {
		lastFetch = new Date()
		return false
	}

	const products = sets.en
		.filter((it) => it?.thirdParty?.tcgplayer)
		.map((it) => it!.thirdParty!.tcgplayer)

	for (const product of products) {
		const res = await fetch(`https://tcgcsv.com/tcgplayer/3/${product}/prices`)

		if (res.status >= 400) {
			console.warn(`couldn\'t load TCGplayer datas for ${product} :(` + await res.text())
			continue
		}

		const data = await res.json() as Awaited<ReturnType<TCGPlayer['price']['listForProducts']>>

		for (const item of data.results) {
			const cacheItem = cache[item.productId] ?? {}

			if (!(item.subTypeName in cacheItem)) {
				const type = item.subTypeName.toLowerCase().replaceAll(' ', '-')
				cacheItem[type] = objectOmit(item, 'subTypeName')
			}
			cache[item.productId] = cacheItem
		}
	}

	lastFetch = new Date()
	lastUpdate = updated

	return true
}

export async function getTCGPlayerPrice(card: { thirdParty: { tcgplayer?: number } }): Promise<{
	unit: 'USD',
	updated: string
	normal?: Omit<Result | 'subTypeName'>
	reverse?: Omit<Result | 'subTypeName'>
	holo?: Omit<Result | 'subTypeName'>
} | null> {
	if (!lastFetch || typeof card.thirdParty?.tcgplayer !== 'number') {
		return null
	}
	const variants = cache[card.thirdParty.tcgplayer!]
	if (!variants) {
		return null
	}
	const res: NonNullable<Awaited<ReturnType<typeof getTCGPlayerPrice>>> = {
		updated: (lastUpdate ?? lastFetch).toISOString(),
		unit: 'USD',
		...variants
	}
	return res
}
