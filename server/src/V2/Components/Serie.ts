import type { Serie as SDKSerie, SerieResume, SupportedLanguages } from '@tcgdex/sdk'
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

type MappedSerie = any // (typeof en)[number]

export async function getAllSeries(lang: SupportedLanguages): Promise<Array<SDKSerie>> {
	return Promise.all((series[lang] as Array<MappedSerie>).map(transformSerie))
}

async function transformSerie(serie: MappedSerie): Promise<SDKSerie> {
	return serie
}

export async function findSeries(lang: SupportedLanguages, query: Query<SDKSerie>) {
	return executeQuery(await getAllSeries(lang), query).data
}

export async function findOneSerie(lang: SupportedLanguages, query: Query<SDKSerie>) {
	const res = await findSeries(lang, query)
	if (res.length === 0) {
		return undefined
	}
	return res[0]
}

export function serieToBrief(set: SDKSerie): SerieResume {
	return {
		id: set.id,
		name: set.name,
		logo: set.logo
	}
}
