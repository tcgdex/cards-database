import type { Result, TCGPlayerAPI } from './interface'
import TCGCSV from './tcgcsv'
import TCGPlayer from './tcgplayer'
import { sets } from '../../../V2/Components/Set'
import { objectOmit } from '@dzeio/object-util'
import TCGPlayerProxy from './proxy'
import cluster from 'node:cluster'
import ClusterUtils from '../../threadUtils'

let cache: Record<number, Record<string, Result> & { updated: string }> = {}
let lastFetch: Date | undefined = undefined

export async function updateTCGPlayerDatas(): Promise<boolean> {
	// disable queries on secondary elements
	if (!cluster.isPrimary) {
		return true
	}

	// only fetch at max, once an hour
	if (lastFetch && lastFetch.getTime() > new Date().getTime() - 3600000) {
		return false
	}

	const products = sets.en
		.filter((it) => it?.thirdParty?.tcgplayer)
		.map((it) => it!.thirdParty!.tcgplayer)

	const provider = getTCGPlayer()


	for (const product of products) {
		try {
			const data = await provider.pricing.group(product!)

			for (const item of data.results) {
				const cacheItem = cache[item.productId] ?? {}
				cacheItem.updated = data.updated ?? new Date().toISOString()

				if (!(item.subTypeName in cacheItem)) {
					const type = item.subTypeName.toLowerCase().replaceAll(' ', '-')
					cacheItem[type] = objectOmit(item, 'subTypeName')
				}
				cache[item.productId] = cacheItem
			}

		} catch (error) {
			console.warn(`couldn\'t load TCGplayer datas for ${product} :( ${error}`)
			continue
		}
	}

	lastFetch = new Date()

	return true
}

export async function getTCGPlayerPrice(card: { thirdParty: { tcgplayer?: number } }): Promise<{
	unit: 'USD',
	updated: string
	normal?: Omit<Result, 'subTypeName'>
	reverse?: Omit<Result, 'subTypeName'>
	holo?: Omit<Result, 'subTypeName'>
} | null> {

	if (!cluster.isPrimary) {
		return (await ClusterUtils.sendAndReceive({ type: 'getTCGPlayerPrice', data: card }, `getTCGPlayerPrice-${card.thirdParty.tcgplayer}`))
			.data as any
	}

	if (!lastFetch || typeof card.thirdParty?.tcgplayer !== 'number') {
		return null
	}
	const variants = cache[card.thirdParty.tcgplayer!]
	if (!variants) {
		return null
	}
	const res: NonNullable<Awaited<ReturnType<typeof getTCGPlayerPrice>>> = {
		unit: 'USD',
		...variants
	}
	return res
}

export function getTCGPlayer(): TCGPlayerAPI {
	try {
		return TCGPlayerProxy.getInstance()
	} catch { }
	try {
		return TCGPlayer.getInstance()
	} catch {
		return TCGCSV.getInstance()
	}
}
