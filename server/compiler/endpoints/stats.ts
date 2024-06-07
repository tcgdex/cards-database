import { SupportedLanguages } from '../../../interfaces'
import { Set } from '../../../meta/definitions/api'
import { FileFunction } from '../compilerInterfaces'
import { getCards } from '../utils/cardUtil'
import { getSeries } from '../utils/serieUtil'
import { getSets, setToSetSingle } from '../utils/setUtil'

interface Stats {
	count: number
	total: number
	images: number
	sets: Record<string, Record<string, {name: string, count: number, images: number}>>
}

const fn: FileFunction = async (lang: SupportedLanguages) => {
	const stats: Partial<Stats> = {}
	stats.count = (await getCards(lang)).length
	// temporary fix until a better solution is found
	const referenceLang = ['ja', 'ko', 'zh-tw', 'id', 'th', 'zh-cn'].includes(lang) ? 'ja' : 'en'

	const langSets = await Promise.all(await getSets(undefined, lang).then((sets) => sets.map(async (set) => await setToSetSingle(set, lang))))
	const englishSets = await Promise.all(await getSets(undefined, referenceLang).then((sets) => sets.map(async (set) => await setToSetSingle(set, referenceLang))))
	function max(lSet?: Set, refSet?: Set) {
		if (!lSet) return refSet!.cardCount.total
		if (!refSet) return lSet.cardCount.total
		if (lSet.cardCount.total > refSet.cardCount.total) {
			return lSet.cardCount.total
		}
		return refSet.cardCount.total
	}
	stats.total = langSets.reduce((p, set) => p + max(set, englishSets.find((s) => set.id === s.id)), 0)
	stats.images = langSets.reduce((p1, set) => p1 + (set.cards.reduce((p2, card) => p2 + (card.image ? 1 : 0), 0)), 0)
	stats.sets = {}

	const series = await getSeries(lang)

	for (const serie of series) {
		stats.sets[serie.id] = {}
		for (const set of langSets.filter((set) => set.serie.id === serie.id)) {
			stats.sets[serie.id][set.id] = {
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
