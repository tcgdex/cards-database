import { Set, Serie as DBSerie } from '../../interfaces'
import { globSync } from 'glob'
import { extractCached } from '../utils/ts-extract-utils'
import fs from 'node:fs'
import { objectClean, objectKeys } from '@dzeio/object-util'
import { getLastEdit } from './providers/git'
import Queue from '@dzeio/queue'
import { normalizeLanguages } from './libs/translation'
import { getAsset, getHashs } from './providers/assets'
import { CompiledSet } from './interfaces'
await getHashs()
type DBSet = Set

const files = globSync('{data,data-asia}/*/*.ts')

let counter = 0
let lastPrint = 0
function addToCounter() {
	counter++
	if (counter >= lastPrint + 100) {
		lastPrint = counter
		console.log(`Processed ${Math.round((counter / files.length) * 100)}% (${counter}/${files.length}) sets`)
	}
}

const queue = new Queue(50, 5)
queue.start()

const out: Array<CompiledSet> = []
for (const file of files) {
	await queue.add((async () => {
		const setPath = file.slice(0, file.lastIndexOf('/')) + '.ts'
		const set: DBSet = await extractCached(file)
		const localId = file.slice(file.lastIndexOf('/') + 1, file.lastIndexOf('.'))
		const serie: DBSerie = await extractCached(setPath)
		const cards = globSync(`{data,data-asia}/{${serie.name.en},${serie.id}}/{${set.name.en},${set.id}}/*.ts`)

		const langs = objectKeys(set.name)

		const res: CompiledSet = {
			...set,
			serie: serie.id,
			logo: await getAsset(langs, serie.id, set.id, 'logo'),
			symbol: await getAsset('univ' as 'en', serie.id, set.id, 'symbol'),
			cards: cards.map((it) => set.id + '-' + it.slice(it.lastIndexOf('/') + 1, it.lastIndexOf('.'))),
			releaseDate: normalizeLanguages(set.releaseDate, langs),
			updated: await getLastEdit(file)
		}

		// remove undefined
		objectClean(res)

		out.push(res)
	})().finally(() => {
		void addToCounter()
	}))
}
await queue.waitEnd()


await fs.promises.mkdir('./server/generated', { recursive: true })
await fs.promises.writeFile('./server/generated/sets.json', JSON.stringify(out))
console.log(`Done processing sets`)
