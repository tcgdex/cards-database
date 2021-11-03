import { objectLoop } from '@dzeio/object-util'
import { Set as SDKSet, SetResume, SupportedLanguages } from '@tcgdex/sdk'
import Card from './Card'
import { Pagination } from '../../interfaces'
import Serie from './Serie'

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
			this[key as 'id'] = it
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
		return Serie.findOne(this.lang, {id: this.set.serie.id}) as Serie
	}

	public cards(): Array<Card> {
		return this.set.cards.map((s) => Card.findOne(this.lang, {id: s.id}) as Card)
	}

	public static find(lang: SupportedLanguages, params: Partial<Record<keyof SDKSet, any>> = {}, pagination?: Pagination) {
		let list = (require(`../../generated/${lang}/sets.json`) as Array<SDKSet>)
			.filter((c) => objectLoop(params, (it, key) => {
				return c[key as 'id'].includes(it)
			}))
		if (pagination) {
			list = list
				.splice(pagination.count * pagination.page - 1, pagination.count)
		}
		return list.map((it) => new Set(lang, it))
	}

	public static findOne(lang: SupportedLanguages, params: Partial<Record<keyof Set, any>> = {}) {
		const res = (require(`../../generated/${lang}/sets.json`) as Array<SDKSet>).find((c) => {
			return objectLoop(params, (it, key) => {
				return c[key as 'id'].includes(it)
			})
		})
		if (!res) {
			return undefined
		}
		return new Set(lang, res)
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
