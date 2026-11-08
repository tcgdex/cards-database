import { objectOmit } from '@dzeio/object-util'
import cluster from 'node:cluster'
import ClusterUtils from '../threadUtils'

interface Root {
	version: number
	createdAt: string
	priceGuides: PriceGuide[]
}

interface PriceGuide {
	idProduct: number
	idCategory: number
	avg?: number
	low?: number
	trend?: number
	avg1?: number
	avg7?: number
	avg30?: number
	"avg-holo"?: number
	"low-holo"?: number
	"trend-holo"?: number
	"avg1-holo"?: number
	"avg7-holo"?: number
	"avg30-holo"?: number
}

const SUPPORTED_VERSION = 1



let lastUpdate: Date | undefined = undefined
let lastFetch: Date | undefined = undefined
let dataCache: Array<PriceGuide> = []

export function fillCardMarketDatas(data: typeof dataCache) {
	lastFetch = new Date()
	lastUpdate = new Date()
	dataCache = data
}

export async function updateDatas(): Promise<boolean> {
	// disable queries on secondary elements
	if (!cluster.isPrimary) {
		return true
	}

	// only fetch at max, once an hour
	if (lastFetch && lastFetch.getTime() > new Date().getTime() - 3600000) {
		return false
	}

	const data = await fetch('https://downloads.s3.cardmarket.com/productCatalog/priceGuide/price_guide_6.json')
		.then((res) => res.json() as Promise<Root>)

	if (data.version !== SUPPORTED_VERSION) {
		console.error(`Unsupported version: ${data.version}`)
		return false
	}

	const tmp: Array<any> = []
	for (const it of data.priceGuides) {
		tmp[it.idProduct] = it
	}

	dataCache = tmp
	lastUpdate = new Date(data.createdAt)
	lastFetch = new Date()
	ClusterUtils.broadcard({
		type: 'cardmarket-update',
		data: dataCache
	})

	return true
}

export async function getCardMarketPrice(card: { thirdParty: { cardmarket?: number } }): Promise<any> {
	const id = card.thirdParty?.cardmarket
	if (typeof id !== 'number') {
		return null
	}

	if (!dataCache) {
		return null
	}
	const input = dataCache[id]
	if (!input) {
		return null
	}
	return Object.assign({
		updated: lastUpdate!.toISOString(),
		unit: 'EUR'
	}, objectOmit(input, 'idCategory'))

}
