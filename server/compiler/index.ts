/* eslint-disable max-statements */
import { FileFunction } from './compilerInterfaces'
import { promises as fs } from 'fs'
import { fetchRemoteFile } from './utils/util'
import { objectValues } from '@dzeio/object-util'
import { SupportedLanguages } from '../../interfaces'

const LANGS: Array<SupportedLanguages> = ['en', 'fr', 'es', 'it', 'pt', 'de']

const DIST_FOLDER = './generated'

;(async () => {
	const paths = (await fs.readdir('./compiler/endpoints')).filter((p) => p.endsWith('.ts'))

	// Prefetch the pictures at the start as it can bug because of bad connection
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
			const fn = (await import(`./endpoints/${file}`)).default as FileFunction

			// Run the function
			console.log(file, 'Running...')
			const item = await fn(lang)

			// Write to file
			await fs.writeFile(`${folder}/${file.replace('.ts', '')}.json`, JSON.stringify(
				item
			))

			console.log(file, 'Finished!')
		}
	}

	// Finally copy definitions files to the public folder :D
	for await (const file of await fs.readdir('../meta/definitions')) {
		await fs.copyFile('../meta/definitions/' + file, './public/v2/' + file)
	}

})()
