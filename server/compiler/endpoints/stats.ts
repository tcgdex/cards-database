import { getSets, setToSetSingle } from '../utils/setUtil'
import { SupportedLanguages } from '../../../meta/definitions/database'
import { FileFunction } from '../compilerInterfaces'
import { getCards } from '../utils/cardUtil'
import { getSeries } from '../utils/serieUtil'

interface Stats {
	count: number
	total: number
	images: number
	sets: Record<string, Record<string, {name: string, count: number, images: number}>>
}

const fn: FileFunction = async (lang: SupportedLanguages) => {
	const stats: Partial<Stats> = {}
	stats.count = (await getCards(lang)).length

	const langSets = await Promise.all(await getSets(undefined, lang).then((sets) => sets.map(async (set) => await setToSetSingle(set, lang))))
	const englishSets = await Promise.all(await getSets(undefined, 'en').then((sets) => sets.map(async (set) => await setToSetSingle(set, 'en'))))
	stats.total = langSets.reduce((p, set) => p + (englishSets.find((s) => set.id === s.id)?.cardCount?.total ?? 0), 0)
	stats.images = langSets.reduce((p1, set) => p1 + (set.cards.reduce((p2, card) => p2 + (card.image ? 1 : 0), 0)), 0)
	stats.sets = {}

	const series = await getSeries(lang)

	for (const serie of series) {
		stats.sets[serie.data.id] = {}
		for (const set of langSets.filter((set) => set.serie.id === serie.data.id)) {
			stats.sets[serie.data.id][set.id] = {
				name: set.name,
				count: set.cards.length,
				images: set.cards.reduce((p, card) => p + (card.image ? 1 : 0), 0)
			}
		}
	}


	//const sts = await Promise.all(sets.map((set) => getCards(lang, set)))
	return stats
}

export default fn
