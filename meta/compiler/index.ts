/* eslint-disable max-statements */
import { Endpoint } from './compilerInterfaces'
import { promises as fs } from 'fs'
import { fetchRemoteFile } from './utils/util'
import { config } from 'dotenv'

config()

const LANGS = ['en', 'fr', 'es', 'it', 'pt', 'de']

const DIST_FOLDER = '../../dist'

;(async () => {
	const paths = (await fs.readdir('./endpoints')).filter((p) => p.endsWith('.ts'))

	console.log('Prefetching pictures')
	await fetchRemoteFile('https://assets.tcgdex.net/datas.json')

	// Delete dist folder to be sure to have a clean base
	try {
		await fs.rm(DIST_FOLDER, {recursive: true})
	} catch {}


	console.log('Let\'s GO !')

	// Process each languages
	for await (const lang of LANGS) {
		console.log('Processing', lang)
		// loop through """endpoints"""
		for await (const file of paths) {

			// final folder path
			const folder = `${DIST_FOLDER}/${lang}`

			// Make the folder
			await fs.mkdir(folder, {recursive: true})

			// Import the """Endpoint"""
			const Ep = (await import(`./endpoints/${file}`)).default

			const endpoint = new Ep(lang) as Endpoint

			console.log(file, 'Running Common')
			let common: any | null = null

			if (endpoint.common) {
				common = await endpoint.common()
			}

			console.log(file, 'Running Item')
			const item = await endpoint.item(common)

			// Write to file
			await fs.writeFile(`${folder}/${file.replace('.ts', '')}.json`, JSON.stringify(item))

			console.log(file, 'Finished Item')
		}
	}


})()
