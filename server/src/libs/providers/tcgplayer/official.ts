import { objectOmit } from '@dzeio/object-util'
import { sets } from '../../../V2/Components/Set'
import TCGPlayer from './TCGPlayer'
import list from './product-skus.mapping.json'

const tcgplayer = new TCGPlayer()

type Result = Awaited<ReturnType<typeof TCGPlayer['prototype']['price']['groupProduct']>>

let cache: Record<number, Record<string, Result['results'][number]>> = {}
let lastFetch: Date | undefined = undefined
export async function updateTCGPlayerDatas(): Promise<boolean> {


	// only fetch at max, once an hour
	if (lastFetch && lastFetch.getTime() > new Date().getTime() - 3600000) {
		return false
	}

	const products = sets.en
		.filter((it) => it?.thirdParty?.tcgplayer)
		.map((it) => it!.thirdParty!.tcgplayer)

	for (const product of products) {
		if (!product) {
			continue
		}
		let data: Awaited<ReturnType<typeof TCGPlayer['prototype']['price']['groupProduct']>>
		try {
			data = await tcgplayer.price.groupProduct(product)
		} catch {
			continue
		}

		for (const item of data.results) {
			const cacheItem = cache[item.productId] ?? {}

			if (!(item.subTypeName in cacheItem)) {
				const type = item.subTypeName.toLowerCase().replaceAll(' ', '-')
				cacheItem[type] = objectOmit(item, 'productId', 'subTypeName')
			}
			cache[item.productId] = cacheItem
		}
	}

	lastFetch = new Date()

	return true
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

export async function listSKUs(card: { thirdParty: { tcgplayer?: number } }): Promise<any> {
	if (!card.thirdParty.tcgplayer) {
		return null
	}
	const skus: Array<{ sku: number }> = (list as any)[card.thirdParty.tcgplayer]
	const res = await tcgplayer.price.listForSKUs(...skus.map((it) => it.sku))
	return res.results.map((it) => ({
		...objectOmit(it, 'skuId'),
		...skus.find((sku) => sku.sku === it.skuId)
	}))
}
