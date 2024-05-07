import { objectLoop } from '@dzeio/object-util'
import { Serie as SDKSerie, SerieResume, SupportedLanguages } from '@tcgdex/sdk'
import { Query } from '../../interfaces'
import { handlePagination, handleSort, handleValidation } from '../../util'
import Set from './Set'

import en from '../../../generated/en/series.json'
import fr from '../../../generated/fr/series.json'
import es from '../../../generated/es/series.json'
import it from '../../../generated/it/series.json'
import pt from '../../../generated/pt/series.json'
import ptbr from '../../../generated/pt-br/series.json'
import ptpt from '../../../generated/pt-pt/series.json'
import de from '../../../generated/de/series.json'
import nl from '../../../generated/nl/series.json'
import pl from '../../../generated/pl/series.json'
import ru from '../../../generated/ru/series.json'
import ja from '../../../generated/ja/series.json'
import ko from '../../../generated/ko/series.json'
import zhtw from '../../../generated/zh-tw/series.json'
import id from '../../../generated/id/series.json'
import th from '../../../generated/th/series.json'
import zhcn from '../../../generated/zh-cn/series.json'


const series = {
	'en': en,
	'fr': fr,
	'es': es,
	'it': it,
	'pt': pt,
	'pt-br': ptbr,
	'pt-pt': ptpt,
	'de': de,
	'nl': nl,
	'pl': pl,
	'ru': ru,
	'ja': ja,
	'ko': ko,
	'zh-tw': zhtw,
	'id': id,
	'th': th,
	'zh-cn': zhcn,
} as const

type LocalSerie = Omit<SDKSerie, 'sets'> & {sets: () => Array<Set>}

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

	public sets(): Array<Set> {
		return this.serie.sets.map((s) => Set.findOne(this.lang, {filters: { id: s.id }}) as Set)
	}

	public static getAll(lang: SupportedLanguages): Array<SDKSerie> {
		return series[lang]
	}

	public static find(lang: SupportedLanguages, query: Query<SDKSerie>) {
		return handlePagination(handleSort(handleValidation(this.getAll(lang), query), query), query)
			.map((it) => new Serie(lang, it))
	}

	public static findOne(lang: SupportedLanguages, query: Query<SDKSerie>) {
		const res = handleValidation(this.getAll(lang), query)
		if (res.length === 0) {
			return undefined
		}
		return new Serie(lang, res[0])
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
