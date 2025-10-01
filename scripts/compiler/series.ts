import { Serie as DBSerie, Set as DBSet, Languages, SupportedLanguages } from '../../interfaces'
import { globSync } from 'glob'
import { extractCached } from '../utils/ts-extract-utils'
import fs from 'node:fs'
import { objectClean, objectKeys } from '@dzeio/object-util'
import { getLastEdit } from './providers/git'
import Queue from '@dzeio/queue'
import { translate } from './libs/translation'
import { getHashs } from './providers/assets'
import { CompiledSerie } from './interfaces'

await getHashs()

const files = globSync('{data,data-asia}/*.ts')

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
		// const localId = file.slice(file.lastIndexOf('/') + 1, file.lastIndexOf('.'))
		// const serie: DBSerie = await extractCached(setPath)
		const setsList = globSync(`{data,data-asia}/{${serie.name.en},${serie.id}}/*.ts`)

		const langs = objectKeys(serie.name)

		const sets = await Promise.all(
			setsList.map((setPath) => extractCached(setPath) as Promise<DBSet>)
		)
		const firstSet = sets.reduce((c, p) => c.releaseDate > p.releaseDate ? c : p)

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
	})().finally(() => {
		void addToCounter()
	}))
}
await queue.waitEnd()


await fs.promises.mkdir('./server/generated', { recursive: true })
await fs.promises.writeFile('./server/generated/series.json', JSON.stringify(out))
console.log(`Done processing series`)
