import { executeQuery, type Query } from '../../libs/QueryEngine/filter'
import { objectOmit } from '@dzeio/object-util'
import type tcgdexSet from '../model/Set'
import de from '../../../generated/de/sets.json'
import en from '../../../generated/en/sets.json'
import es from '../../../generated/es/sets.json'
import esmx from '../../../generated/es-mx/sets.json'
import fr from '../../../generated/fr/sets.json'
import id from '../../../generated/id/sets.json'
import it from '../../../generated/it/sets.json'
import ja from '../../../generated/ja/sets.json'
import ko from '../../../generated/ko/sets.json'
import nl from '../../../generated/nl/sets.json'
import pl from '../../../generated/pl/sets.json'
import ptbr from '../../../generated/pt-br/sets.json'
import ptpt from '../../../generated/pt-pt/sets.json'
import pt from '../../../generated/pt/sets.json'
import ru from '../../../generated/ru/sets.json'
import th from '../../../generated/th/sets.json'
import zhcn from '../../../generated/zh-cn/sets.json'
import zhtw from '../../../generated/zh-tw/sets.json'
import { SupportedLanguages } from "@tcgdex/sdk"
import Cache from "@cachex/memory";
import { getSerieById } from "./Serie";
import { getCardById } from "../../V2/Components/Card";

export const sets = {
	en: en,
	fr: fr,
	es: es,
	'es-mx': esmx,
	it: it,
	pt: pt,
	'pt-br': ptbr,
	'pt-pt': ptpt,
	de: de,
	nl: nl,
	pl: pl,
	ru: ru,
	ja: ja,
	ko: ko,
	'zh-tw': zhtw,
	id: id,
	th: th,
	'zh-cn': zhcn,
} as const

const cache = new Cache()

type MappedSet = any // (typeof en)[number]

export async function getAllSets(lang: SupportedLanguages): Promise<Array<tcgdexSet>> {
	return Promise.all((sets[lang] as Array<MappedSet>).map(transformSet))
}

async function transformSet(set: MappedSet): Promise<tcgdexSet> {
	return {
		...objectOmit(set, 'thirdParty'),
		// pricing: {
		// 	cardmarket: await getCardMarketPrice(card),
		// 	tcgplayer: await getTCGPlayerPrice(card)
		// }
	}
}

async function loadSet(lang: SupportedLanguages, id: string): Promise<tcgdexSet | null> {
	const key = id.toLowerCase()
	const value = cache.get<tcgdexSet>(key)

	// expect the cache to be present
	if (value) {
		return value
	}

	const set = sets[lang].find((it) => it.id.toLowerCase() === key)
	if (!set) {
		return null
	}

	const serie = await getSerieById(lang, set.serie.id);

	let cards = []
	for (const card of set.cards) {
		let d_card = await getCardById(lang, card.id)
		if (d_card) {
			cards.push(d_card)
		}
	}

	const res = {
		...objectOmit(set),
		cards: cards,
		serie: serie
	} as MappedSet

	cache.set(key, res, 60 * 60)
	return res
}

export async function getSetById(lang: SupportedLanguages, id: string) {
	return loadSet(lang, id)
}

export async function findSets(lang: SupportedLanguages, query: Query<tcgdexSet>) {
	return executeQuery(await getAllSets(lang), query).data
}

export async function findOneSet(lang: SupportedLanguages, query: Query<tcgdexSet>) {
	const res = await findSets(lang, query)
	if (res.length === 0) {
		return undefined
	}
	return res[0]
}
