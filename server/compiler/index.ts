/* eslint-disable max-statements */
import { promises as fs } from 'fs'
import { SupportedLanguages } from '../../interfaces'
import { FileFunction } from './compilerInterfaces'
import { fetchRemoteFile, loadLastEdits } from './utils/util'

const LANGS: Array<SupportedLanguages> = [
	'en', 'fr', 'es', 'it', 'pt', 'pt-br', 'pt-pt', 'de', 'nl', 'pl', 'ru',
	'ja', 'ko', 'zh-tw', 'id', 'th', 'zh-cn'
]

const DIST_FOLDER = './generated'

;(async () => {
	const paths = (await fs.readdir('./compiler/endpoints')).filter((p) => p.endsWith('.ts'))

	// Prefetch the pictures at the start as it can bug because of bad connection
	console.log('1. Prefetching pictures datas')
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
			await fs.mkdir(folder, { recursive: true })

			// Import the """Endpoint"""
			const fn = (await import(`./endpoints/${file}`)).default as FileFunction

			// Run the function
			console.log('      ', 'Compiling', lang, file)
			const item = await fn(lang)

			// Write to file
			await fs.writeFile(`${folder}/${file.replace('.ts', '')}.json`, JSON.stringify(
				item
			))

			console.log(`${(++progressIndex / (LANGS.length * paths.length) * 100).toFixed(2).padStart(5, '0')}%`, 'Compiled ', lang, file)
		}
	}

	console.log('4. Copying static files to public folder')
	// Finally copy definitions files to the public folder :D
	for await (const file of await fs.readdir('../meta/definitions')) {
		await fs.copyFile('../meta/definitions/' + file, './public/v2/' + file)
	}

})()
