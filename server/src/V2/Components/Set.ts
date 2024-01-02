import { objectLoop } from '@dzeio/object-util'
import { Set as SDKSet, SetResume, SupportedLanguages } from '@tcgdex/sdk'
import { Query } from '../../interfaces'
import { handlePagination, handleSort, handleValidation } from '../../util'
import Card from './Card'
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
		return require(`../../../generated/${lang}/sets.json`)
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
