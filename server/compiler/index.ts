/* eslint-disable max-statements */
import { existsSync, promises as fs } from 'fs'
import { SupportedLanguages } from '../../interfaces'
import { FileFunction } from './compilerInterfaces'
import cards from './endpoints/cards'
import series from './endpoints/series'
import sets from './endpoints/sets'
import { fetchRemoteFile, loadLastEdits } from './utils/util'

const LANGS: Array<SupportedLanguages> = [
	'en', 'de', 'es', 'fr', 'it', 'pt-br', 'zh-tw', 'ja', 'ko'
]

const DIST_FOLDER = './generated'
const ENDPOINTS: Record<string, FileFunction> = {
	'cards.ts': cards,
	'series.ts': series,
	'sets.ts': sets,
}

;(async () => {
	const paths = (await fs.readdir('./compiler/endpoints')).filter((p) => p.endsWith('.ts'))

	// Prefetch the pictures at the start as it can bug because of bad connection
	console.log('1. Loading remote sources')
	await fetchRemoteFile('https://assets.tcgdex.net/datas.json')

	// Delete dist folder to be sure to have a clean base
	try {
		await fs.rm(DIST_FOLDER, {recursive: true})
	} catch {}

	console.log('\n2. Loading informations from GIT')
	await loadLastEdits()

	console.log('\n3. Compiling Files')

	// Process each languages
	let progressIndex = 0
	for await (const lang of LANGS) {
		// loop through """endpoints"""
		for await (const file of paths) {

			// final folder path
			const folder = `${DIST_FOLDER}/${lang}`

			// console.log('files1:', await fs.readdir('.'))
			// console.log('files2:', await fs.readdir(DIST_FOLDER))
			// console.log('files3:', await fs.readdir(folder))

			// Make the folder
			try {
				await fs.mkdir(folder, { recursive: true })
			} catch {
				// idk why it throws when file is present even if nodejs says it should not throw...
				// maybe Bun changed how the throws works...
			}

			// Import the """Endpoint"""
			const fn = ENDPOINTS[file]
			if (!fn) throw new Error(`Unknown compiler endpoint: ${file}`)

			// Run the function
			console.log('      ', 'Compiling', lang, file)
			const item = await fn(lang)
			if (Array.isArray(item) && item.length === 0) {
				throw new Error(`Compiler endpoint produced no records: ${lang}/${file}`)
			}

			// Write to file
			await fs.writeFile(`${folder}/${file.replace('.ts', '')}.json`, JSON.stringify(
				item
			))

			console.log(`${(++progressIndex / (LANGS.length * paths.length) * 100).toFixed(2).padStart(5, '0')}%`, 'Compiled ', lang, file)
		}
	}

	await fs.copyFile('../data/Pokémon TCG Pocket/packs/vee-vee-eevee-pack.json', `${DIST_FOLDER}/vee-vee-eevee-pack.json`)

	console.log('4. Copying static files to public folder')
	// Finally copy definitions files to the public folder :D
	for await (const file of await fs.readdir('../meta/definitions')) {
		await fs.copyFile('../meta/definitions/' + file, './public/v2/' + file)
	}

})()
