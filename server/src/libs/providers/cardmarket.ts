import { objectOmit } from '@dzeio/object-util'

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
let dataCache: Map<number, PriceGuide> = new Map()

export async function updateDatas(): Promise<boolean> {
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

	dataCache = new Map(data.priceGuides.map((pg) => [pg.idProduct, pg]))
	lastUpdate = new Date(data.createdAt)
	lastFetch = new Date()

	return true
}

export async function getCardMarketPrice(card: { thirdParty: { cardmarket?: number }}): Promise<any> {
	if (!dataCache || typeof card.thirdParty?.cardmarket !== 'number') {
		return null
	}
	const input = dataCache.get(card.thirdParty!.cardmarket)
	if (!input) {
		return null
	}
	return Object.assign({
		updated: lastUpdate!.toISOString(),
		unit: 'EUR'
	}, objectOmit(input, 'idProduct', 'idCategory'))

}
