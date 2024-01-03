import { objectLoop } from '@dzeio/object-util'
import { CardResume, Card as SDKCard, SupportedLanguages } from '@tcgdex/sdk'
import { Query } from '../../interfaces'
import { handlePagination, handleSort, handleValidation } from '../../util'
import Set from './Set'

type LocalCard = Omit<SDKCard, 'set'> & {set: () => Set}

interface variants {
	normal?: boolean;
	reverse?: boolean;
	holo?: boolean;
	firstEdition?: boolean;
}

export default class Card implements LocalCard {
	illustrator?: string | undefined
	rarity!: string
	category!: string
	variants?: variants | undefined
	dexId?: number[] | undefined
	hp?: number | undefined
	types?: string[] | undefined
	evolveFrom?: string | undefined
	weight?: string | undefined
	description?: string | undefined
	level?: string | number | undefined
	stage?: string | undefined
	suffix?: string | undefined
	item?: { name: string; effect: string } | undefined
	abilities?: { type: string; name: string; effect: string }[] | undefined
	attacks?: { cost?: string[] | undefined; name: string; effect?: string | undefined; damage?: string | number | undefined }[] | undefined
	weaknesses?: { type: string; value?: string | undefined }[] | undefined
	resistances?: { type: string; value?: string | undefined }[] | undefined
	retreat?: number | undefined
	effect?: string | undefined
	trainerType?: string | undefined
	energyType?: string | undefined
	regulationMark?: string | undefined
	legal!: { standard: boolean; expanded: boolean }
	id!: string
	localId!: string
	name!: string
	image?: string | undefined

	public constructor(
		private lang: SupportedLanguages,
		private card: SDKCard
	) {
		objectLoop(card, (it, key) => {
			if (key === 'set') {
				return
			}
			this[key as 'id'] = it as string
		})
	}

	public set(): Set {
		return Set.findOne(this.lang, {filters: { id: this.card.set.id }}) as Set
	}

	public static getAll(lang: SupportedLanguages): Array<SDKCard> {
		return require(`../../../generated/${lang}/cards.json`)
	}

	public static find(lang: SupportedLanguages, query: Query<SDKCard>) {
		return handlePagination(handleSort(handleValidation(this.getAll(lang), query), query), query)
			.map((it) => new Card(lang, it))
	}

	public static findOne(lang: SupportedLanguages, query: Query<SDKCard>) {
		const res = handleValidation(this.getAll(lang), query)
		if (res.length === 0) {
			return undefined
		}
		return new Card(lang, res[0])
	}

	public resume(): CardResume {
		return {
			id: this.id,
			localId: this.localId,
			name: this.name,
			image: this.image
		}
	}

	public full(): SDKCard {
		return this.card
	}

}
