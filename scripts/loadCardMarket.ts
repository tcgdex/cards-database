import fs from 'fs/promises'
import path from 'path'
import { glob } from 'glob'
import { objectGet } from '@dzeio/object-util'
import { extractFile } from './utils/ts-extract-utils'
import { Set } from '../interfaces'

/**
 * Example usage : `bun meta/scripts/check-missing.ts "data/*\/*\/*.ts" thirdParty.cardmarket`
 */

try {

	// Load groups.json
	console.log('Loading Products')
	const baseFolder = 'var/models/cardmarket'
	await fs.mkdir(baseFolder, { recursive: true })

	const products = await fetch(`https://downloads.s3.cardmarket.com/productCatalog/productList/products_singles_6.json`)
		.then((it) => it.json())
	await fs.writeFile(`${baseFolder}/products_singles.json`, JSON.stringify(products))

	console.log('done')

} catch (error) {
	console.error('Error:', error.message)
	process.exit(1)
}
