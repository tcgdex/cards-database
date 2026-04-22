import { objectRemap } from '@dzeio/object-util'
import { StatsFs } from 'node:fs'
import fs from 'node:fs/promises'
import cardsDB from '../../server/generated/cards.json'
import seriesDB from '../../server/generated/series.json'
import setsDB from '../../server/generated/sets.json'

type Stats = Record<string /* lang */, {
	count: number
	total: number
	images: number
	sets: Record<
		string /* serie id */,
		Record<
			string /* set id */,
			{
				name: string
				count: number
				images: number
			}
		>
	>
}>

const langs = {
	// calculate en & ja first
	'en': 'English',
	'ja': 'Japanese',

	// the others
	'zh-cn': 'Chinese (simplified)',
	'zh-tw': 'Chinese (traditionnal)',
	'nl': 'Dutch',
	'fr': 'French',
	'de': 'German',
	'id': 'Indonesian',
	'it': 'Italian',
	'ko': 'Korean',
	'pl': 'Polish',
	'pt': 'Portuguese (Brazil)',
	// 'pt-br': 'Portuguese (brazil)',
	'pt-pt': 'Portuguese (Portugal)',
	'ru': 'Russian',
	'es': 'Spanish',
	'th': 'Thai',
	'es-mx': 'Spanish (Latin America)'
} as const

const maxSets: Record<string, number> = objectRemap(setsDB, (set, _) => {
	return {
		key: set.id,
		value: set.cardCount.official > set.cards.length ? set.cardCount.official : set.cards.length
	}
})

console.log(maxSets)


const out: Stats = {}
console.log('calculating statistics for the project status page')
for (const lang of Object.keys(langs)) {
	console.log('processing language', lang)
	const stats: Partial<Stats[string]> = {}
	const cardsInLang = (cardsDB as Array<any>).filter((it) => it.name[lang])
	stats.count = cardsInLang.length
	stats.total = 0
	stats.images = cardsInLang.filter((it) => it.image[lang]).length
	// console.log(cardsInLang)

	const series = seriesDB.filter((it) => it.name[lang])
	stats.sets = objectRemap(series, (serie, _) => {
		console.log('processing serie', serie.id)
		const sets = setsDB.filter((it) => it.name[lang] && it.serie === serie.id)
		return {
			key: serie.id as string,
			value: objectRemap(sets, (set, _) => {
				console.log('processing set', set.id)
				stats.total += maxSets[set.id] ?? 0
				return {
					key: set.id,
					value: {
						name: set.name[lang],
						count: set.cards.length,
						images: cardsInLang.filter((it) => it.id && set.cards.includes(it.id)).length
					}
				}
			})
		}
	})
	out[lang] = stats as Stats[string]
}

// calculate totals
for (const lang of Object.keys(langs)) {

}

await fs.mkdir('./server/generated', { recursive: true })
await fs.writeFile('./server/generated/stats.json', JSON.stringify(out))
console.log(`Done processing cards`)
