import type { SupportedLanguages } from '@tcgdex/sdk'
import { executeQuery, type Query } from '../../libs/QueryEngine/filter'

import de from '../../../generated/de/series.json'
import en from '../../../generated/en/series.json'
import es from '../../../generated/es/series.json'
import esmx from '../../../generated/es-mx/series.json'
import fr from '../../../generated/fr/series.json'
import id from '../../../generated/id/series.json'
import it from '../../../generated/it/series.json'
import ja from '../../../generated/ja/series.json'
import ko from '../../../generated/ko/series.json'
import nl from '../../../generated/nl/series.json'
import pl from '../../../generated/pl/series.json'
import ptbr from '../../../generated/pt-br/series.json'
import ptpt from '../../../generated/pt-pt/series.json'
import pt from '../../../generated/pt/series.json'
import ru from '../../../generated/ru/series.json'
import th from '../../../generated/th/series.json'
import zhcn from '../../../generated/zh-cn/series.json'
import zhtw from '../../../generated/zh-tw/series.json'
import Cache from "@cachex/memory";
import type Serie from "../model/Serie";
import { objectOmit } from "@dzeio/object-util";
import { getSetById } from "./Set";

const series = {
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

type MappedSerie = any // (typeof en)[number]

export async function getAllSeries(lang: SupportedLanguages): Promise<Array<Serie>> {
	return Promise.all((series[lang] as Array<MappedSerie>).map((serie) => transformSerie(lang, serie)))
}

async function transformSerie(lang: SupportedLanguages ,serie: MappedSerie): Promise<Serie> {
	let sets = []

	for (const set of serie.sets) {
		let d_set = await getSetById(lang, set.id)
		if (d_set) {
			sets.push(d_set)
		}
	}

	serie.sets = sets

	return serie
}

export async function findSeries(lang: SupportedLanguages, query: Query<Serie>) {
	return executeQuery(await getAllSeries(lang), query).data
}

async function loadSerie(lang: SupportedLanguages, id: string): Promise<Serie | null> {
	const key = id.toLowerCase()
	const value = cache.get<Serie>(key)

	// expect the cache to be present
	if (value) {
		return value
	}

	const serie = series[lang].find((it) => it.id.toLowerCase() === key)
	if (!serie) {
		return null
	}

	const res = {
		...objectOmit(serie, 'sets'),
	} as MappedSerie

	cache.set(key, res, 60 * 60)
	return res
}

export async function getSerieById(lang: SupportedLanguages, id: string) {
	return loadSerie(lang, id)
}


export async function findOneSerie(lang: SupportedLanguages, query: Query<Serie>) {
	const res = await findSeries(lang, query)
	if (res.length === 0) {
		return undefined
	}
	return res[0]
}
