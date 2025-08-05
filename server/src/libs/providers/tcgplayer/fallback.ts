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

let lastFetch: Date | undefined = undefined
let variantsCache: Map<number, Array<Result['subTypeName']>> = new Map()
let dataCache: Map<`${number}-${Result['subTypeName']}`, Result> = new Map()
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

		const data = await res.json()

		// console.log('data:', data)
		for (const item of data.results) {
			dataCache.set(`${item.productId}-${item.subTypeName}`, item)
			const variants = variantsCache.get(item.productId) ?? []
			if (!variants.includes(item.subTypeName)) {
				variants.push(item.subTypeName)
				variantsCache.set(item.productId, variants)
			}
		}
	}

	lastFetch = new Date()
	lastUpdate = updated

	return true
}

const variantMapping = {
	Normal: 'normal',
	'Reverse Holofoil': 'reverse',
	'Holofoil': 'holo'
} as const satisfies Record<Result['subTypeName'], string>

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
	const variants = variantsCache.get(card.thirdParty.tcgplayer!)
	if (!variants) {
		return null
	}
	const res: NonNullable<Awaited<ReturnType<typeof getTCGPlayerPrice>>> = {
		updated: (lastUpdate ?? lastFetch).toISOString(),
		unit: 'USD'
	}
	for (const variant of variants) {
		const input = dataCache.get(`${card.thirdParty!.tcgplayer}-${variant}`)
		if (!input) {
			continue
		}
		res[variantMapping[variant] as 'normal'] = objectOmit(input, 'productId', 'subTypeName')
	}
	// if (!input) {
	// 	return null
	// }
	return res
}
