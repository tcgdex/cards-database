import { objectLoop } from '@dzeio/object-util'
import { Set as SDKSet, SetResume, SupportedLanguages } from '@tcgdex/sdk'
import { Query } from '../../interfaces'
import { handlePagination, handleSort, handleValidation } from '../../util'
import Card from './Card'
import Serie from './Serie'

import en from '../../../generated/en/sets.json'
import fr from '../../../generated/fr/sets.json'
import es from '../../../generated/es/sets.json'
import it from '../../../generated/it/sets.json'
import pt from '../../../generated/pt/sets.json'
import ptbr from '../../../generated/pt-br/sets.json'
import ptpt from '../../../generated/pt-pt/sets.json'
import de from '../../../generated/de/sets.json'
import nl from '../../../generated/nl/sets.json'
import pl from '../../../generated/pl/sets.json'
import ru from '../../../generated/ru/sets.json'
import ja from '../../../generated/ja/sets.json'
import ko from '../../../generated/ko/sets.json'
import zhtw from '../../../generated/zh-tw/sets.json'
import id from '../../../generated/id/sets.json'
import th from '../../../generated/th/sets.json'
import zhcn from '../../../generated/zh-cn/sets.json'

const sets = {
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

interface variants {
	normal?: boolean;
	reverse?: boolean;
	holo?: boolean;
	firstEdition?: boolean;
}

type LocalSet = {serie: () => Serie, cards: () => Array<Card>} & Omit<SDKSet, 'serie' | 'cards'>

export default class Set implements LocalSet {

	public constructor(
		private lang: SupportedLanguages,
		private set: SDKSet
	) {
		objectLoop(set, (it, key) => {
			if (key === 'serie' || key === 'cards') {
				return
			}
			this[key as 'tcgOnline'] = it as string
		})
	}

	tcgOnline?: string | undefined
	variants?: variants | undefined
	releaseDate!: string
	legal!: { standard: boolean; expanded: boolean }
	cardCount!: { total: number; official: number; normal: number; reverse: number; holo: number; firstEd?: number | undefined }
	id!: string
	name!: string
	logo?: string | undefined
	symbol?: string | undefined

	public serie(): Serie {
		return Serie.findOne(this.lang, {filters: { id: this.set.serie.id }}) as Serie
	}

	public cards(): Array<Card> {
		return this.set.cards.map((s) => Card.findOne(this.lang, { filters: { id: s.id }}) as Card)
	}

	public static getAll(lang: SupportedLanguages): Array<SDKSet> {
		return sets[lang]
	}

	public static find(lang: SupportedLanguages, query: Query<SDKSet>) {
		return handlePagination(handleSort(handleValidation(this.getAll(lang), query), query), query)
			.map((it) => new Set(lang, it))
	}

	public static findOne(lang: SupportedLanguages, query: Query<SDKSet>) {
		const res = handleValidation(this.getAll(lang), query)
		if (res.length === 0) {
			return undefined
		}
		return new Set(lang, res[0])
	}

	public resume(): SetResume {
		return {
			id: this.id,
			name: this.name,
			logo: this.logo,
			symbol: this.symbol,
			cardCount: {
				total: this.cardCount.total,
				official: this.cardCount.official
			}
		}
	}

	public full(): SDKSet {
		return this.set
	}

}
