import { Card as DBCard, Set as DBSet, Serie as DBSerie, Languages, SupportedLanguages } from '../../interfaces'
import { globSync } from 'glob'
import { extractCached } from '../utils/ts-extract-utils'
import fs from 'node:fs'
import { objectClean, objectKeys } from '@dzeio/object-util'
import { getLastEdit } from './providers/git'
import Queue from '@dzeio/queue'
import { translate, validateLanguages } from './libs/translation'
import { getAsset } from './providers/assets'

import { getHashs } from './providers/assets'
import { CompiledCard } from './interfaces'
import { cardIsLegal } from './libs/legalUtils'

await getHashs()

//
// const files = globSync('data/*/*/*.ts')
const files = globSync('{data,data-asia}/*/*/*.ts')

let counter = 0
let lastPrint = 0
function addToCounter() {
	counter++
	if (counter >= lastPrint + 1000) {
		lastPrint = counter
		console.log(`Processed ${Math.round((counter / files.length) * 100)}% (${counter}/${files.length}) cards`)
	}
}

const queue = new Queue(500, 20)
queue.start()

const out: Array<CompiledCard> = []
for (const file of files) {
	await queue.add((async () => {
		const setPath = file.slice(0, file.lastIndexOf('/')) + '.ts'
		const card: DBCard = await extractCached(file)
		const localId = decodeURIComponent(file.slice(file.lastIndexOf('/') + 1, file.lastIndexOf('.')))
		const set: DBSet = await extractCached(setPath)
		const seriePath = setPath.slice(0, setPath.lastIndexOf('/')) + '.ts'
		const serie: DBSerie = await extractCached(seriePath)

		const langs = objectKeys(card.name)
		const id = `${set.id}-${localId}`

		const res: CompiledCard = {
			...card,
			id: id,
			image: await getAsset(langs, serie.id, set.id, localId),
			localId: localId,
			rarity: translate('rarity', card.rarity ?? 'None', langs),
			category: translate('category', card.category, langs),
			types: card.types?.map((type) => translate('types', type, langs)),
			abilities: card.abilities?.map((ability) => ({
				...ability,
				name: validateLanguages(ability.name, langs),
				effect: validateLanguages(ability.effect, langs),
				type: translate('abilityType', ability.type, langs)
			})),
			attacks: card.attacks?.map((attack) => ({
				...attack,
				name: validateLanguages(attack.name, langs),
				effect: validateLanguages(attack.effect, langs),
				cost: attack.cost?.map((type) => translate('types', type, langs))
			})),
			weaknesses: card.weaknesses?.map((it) => ({
				...it,
				type: translate('types', it.type, langs)
			})),
			resistances: card.weaknesses?.map((it) => ({
				...it,
				type: translate('types', it.type, langs)
			})),
			stage: card.stage ? translate('stage', card.stage, langs) : undefined,
			suffix: card.suffix ? translate('suffix', card.suffix, langs) : undefined,
			trainerType: card.trainerType ? translate('trainerType', card.trainerType, langs) : undefined,
			energyType: card.energyType ? translate('energyType', card.energyType, langs) : undefined,
			set: set.id,
			legal: {
				standard: cardIsLegal('standard', card, id),
				expanded: cardIsLegal('expanded', card, id)
			},
			updated: await getLastEdit(file)
		}

		// remove undefined
		objectClean(res)

		out.push(res)
	})()
		.catch(() => {
			console.warn("error processing card :( skipping...")
			void addToCounter()
		})
		.finally(() => {
			void addToCounter()
		}))
}
await queue.waitEnd()


await fs.promises.mkdir('./server/generated', { recursive: true })
await fs.promises.writeFile('./server/generated/cards.json', JSON.stringify(out))
console.log(`Done processing cards`)
