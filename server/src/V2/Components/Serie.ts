import { objectLoop } from '@dzeio/object-util'
import type { Serie as SDKSerie, SerieResume, SupportedLanguages } from '@tcgdex/sdk'
import { executeQuery, type Query } from '../../libs/QueryEngine/filter'
import { findOneSet } from './Set'

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

type LocalSerie = Omit<SDKSerie, 'sets'> & {sets: () => Array<TCGSet>}

export default class Serie implements LocalSerie {

	id!: string
	name!: string
	logo?: string | undefined

	public constructor(
		private lang: SupportedLanguages,
		private serie: SDKSerie
	) {
		objectLoop(serie, (it, key) => {
			if (key === 'sets') {
				return
			}
			this[key as 'id'] = it as string
		})
	}

	public async sets(): Array<TCGSet> {
		return Promise.all(this.serie.sets.map((s) => findOneSet(this.lang, { id: s.id })))
	}

	public static getAll(lang: SupportedLanguages): Array<SDKSerie> {
		return series[lang]
	}

	public static find(lang: SupportedLanguages, query: Query<SDKSerie>) {
		return executeQuery(Serie.getAll(lang), query).data.map((it) => new Serie(lang, it))
	}

	public static findOne(lang: SupportedLanguages, query: Query<SDKSerie>) {
		const res = Serie.find(lang, query)
		if (res.length === 0) {
			return undefined
		}
		return res[0]
	}

	public resume(): SerieResume {
		return {
			id: this.id,
			name: this.name,
			logo: this.logo
		}
	}

	public full(): SDKSerie {
		return this.serie
	}
}
