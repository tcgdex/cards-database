import { objectClean, objectKeys } from '@dzeio/object-util'
import Queue from '@dzeio/queue'
import { globSync } from 'glob'
import fs from 'node:fs/promises'
import { Set as DBSet } from 'models/database/set'
import { Serie as DBSerie } from 'models/database/serie'
import { extractCached } from './utils/ts-extract-utils'
import { CompiledSerie } from './interfaces'
import { translate } from './libs/translation'
import { getHashs } from './providers/assets'
import { getLastEdit } from './providers/git'

await getHashs()

const files = globSync('data/*/*.ts')

let counter = 0
let lastPrint = 0
function addToCounter() {
	counter++
	if (counter >= lastPrint + 5) {
		lastPrint = counter
		console.log(`Processed ${Math.round((counter / files.length) * 100)}% (${counter}/${files.length}) series`)
	}
}

const queue = new Queue(5, 5)
queue.start()

const out: Array<CompiledSerie> = []
for (const file of files) {
	await queue.add((async () => {
		// const setPath = file.slice(0, file.lastIndexOf('/')) + '.ts'
		const serie: DBSerie = await extractCached(file)
		if (!serie.id || serie.id === 'null') {
			console.log('skipping serie, missing id')
			return
		}
		// const localId = file.slice(file.lastIndexOf('/') + 1, file.lastIndexOf('.'))
		// const serie: DBSerie = await extractCached(setPath)
		const setsList = globSync(`data/*/{${serie.name.en},${serie.id}}/*.ts`)

		const langs = objectKeys(serie.name)

		const sets = await Promise.all(
			setsList.map((setPath) => extractCached(setPath) as Promise<DBSet>)
		)

		if (sets.length === 0) {
			return
		}

		const firstSet = sets.reduce((c, p) => c.releaseDate < p.releaseDate ? c : p)

		const res: CompiledSerie = {
			...serie,
			sets: sets.map((it) => it.id),
			firstSet: firstSet.id,
			lastSet: sets.reduce((c, p) => c.releaseDate > p.releaseDate ? c : p).id,
			releaseDate: firstSet.releaseDate,
			energies: serie.energies?.map((it) => translate('types', it, langs)),
			// releaseDate: normalizeLanguages(serie.releaseDate, langs),
			updated: await getLastEdit(file)
		}

		// remove undefined
		objectClean(res)

		out.push(res)
	})().catch((it) => {
		console.error('error processing', file)
		throw it
	}).finally(() => {
		void addToCounter()
	}))
}
await queue.waitEnd()


await fs.mkdir('./server/generated', { recursive: true })
await fs.writeFile('./server/generated/series.json', JSON.stringify(out))
console.log(`Done processing series`)
