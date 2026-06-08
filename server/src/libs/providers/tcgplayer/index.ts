import * as OfficialTCGPlayer from './official'
import * as Fallback from './fallback'
import * as TCGTracking from './tcgtracking'
import type RFC7807 from '../../RFCs/RFC7807'

type Source = typeof OfficialTCGPlayer | typeof Fallback | typeof TCGTracking

let source: Source

if (
	process.env.TCGPLAYER_CLIENT_ID
	&& process.env.TCGPLAYER_CLIENT_SECRET
	&& process.env.TCGPLAYER_CLIENT_NAME
) {
	console.log('loading official TCGPlayer backend')
	source = OfficialTCGPlayer
} else if (process.env.PRICING_SOURCE === 'tcgcsv') {
	console.log('loading fallback TCGPlayer backend')
	source = Fallback
} else {
	// TCGTracking is the default — reads from var/models/tcgtracking/resolved-pricing.json
	// Set PRICING_SOURCE=tcgcsv to revert to the old live TCGCSV fetch.
	console.log('loading TCGTracking backend')
	source = TCGTracking
}
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

export function fillTCGPlayerCache(data: typeof cache) {
	lastFetch = new Date()
	cache = data
}

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
	ClusterUtils.broadcard({
		type: 'tcgplayer-update',
		data: cache
	})

	return true
}

export async function getTCGPlayerPrice(card: { thirdParty: { tcgplayer?: number } }): Promise<{
	unit: 'USD',
	updated: string
	normal?: Omit<Result, 'subTypeName'>
	reverse?: Omit<Result, 'subTypeName'>
	holo?: Omit<Result, 'subTypeName'>
} | null> {
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
