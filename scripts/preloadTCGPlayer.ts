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
	console.log('Loading groups')
	const baseFolder = 'var/models/tcgplayer'
	await fs.mkdir(baseFolder, { recursive: true })

	const products = await fetch(`https://tcgcsv.com/tcgplayer/3/groups`)
		.then((it) => it.json())
	await fs.writeFile(`${baseFolder}/groups.json`, JSON.stringify(products))

	// Load products
	console.log('Loading products...')
	// Find all matching files
	const files = await glob('data/*/*.ts', {
		cwd: process.cwd()
	})

	const ids: Array<number> = []
	for (const file of files) {
		const setData: Set = extractFile(file)
		if (setData.thirdParty?.tcgplayer) {
			ids.push(setData.thirdParty.tcgplayer)
		}
	}

	const folder = baseFolder + '/products'
	await fs.mkdir(folder, { recursive: true })

	for (const id of ids) {
		console.log('Loading product', id)
		const products = await fetch(`https://tcgcsv.com/tcgplayer/3/${id}/products`)
			.then((it) => it.json())
		await fs.writeFile(`${folder}/${id}.json`, JSON.stringify(products))
	}

	console.log('done')

} catch (error) {
	console.error('Error:', error.message)
	process.exit(1)
}
