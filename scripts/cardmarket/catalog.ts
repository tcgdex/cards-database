import type { Product } from './types'

export async function readJson(url: string): Promise<any> {
	return fetch(url, {
		headers: {
			accept: 'application/json',
			'user-agent': 'cards-database-cardmarket-audit'
		}
	}).then(async (response) => {
		if (!response.ok) throw new Error(`${url} returned ${response.status}`)
		return response.json()
	})
}

export function getProducts(rawCatalog: any): Product[] {
	if (!Array.isArray(rawCatalog?.products)) throw new Error('Cardmarket catalog has no products array')
	return rawCatalog.products.filter((product: Product) => {
		return Number.isInteger(product.idProduct) && Number.isInteger(product.idExpansion) && typeof product.name === 'string'
	})
}

export function getProductRanks(products: Product[]): Map<number, number> {
	const byExpansion = new Map<number, Product[]>()
	for (const product of products) {
		const expansionProducts = byExpansion.get(product.idExpansion) ?? []
		expansionProducts.push(product)
		byExpansion.set(product.idExpansion, expansionProducts)
	}
	const ranks = new Map<number, number>()
	for (const expansionProducts of byExpansion.values()) {
		expansionProducts.sort((left, right) => left.idProduct - right.idProduct)
		expansionProducts.forEach((product, index) => ranks.set(product.idProduct, index + 1))
	}
	return ranks
}

export function splitProductName(name: string): { baseName: string; details: string[] } {
	const match = name.match(/^(.*?)\s*\[([^\]]+)\]\s*$/)
	if (!match) return { baseName: name.trim(), details: [] }
	return {
		baseName: match[1].trim(),
		details: match[2].split('|').map((detail) => detail.trim()).filter(Boolean)
	}
}

export function productById(products: Product[]): Map<number, Product> {
	return new Map(products.map((product) => [product.idProduct, product]))
}
