import { objectLoop } from '@dzeio/object-util'
import { Card as SDKCard, CardResume, SupportedLanguages } from '@tcgdex/sdk'
import Set from './Set'
import { Pagination } from '../../interfaces'

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
			this[key as 'id'] = it
		})
	}


	public set(): Set {
		return Set.findOne(this.lang, {id: this.card.set.id}) as Set
	}

	public static find(lang: SupportedLanguages, params: Partial<Record<keyof SDKCard, any>> = {}, pagination?: Pagination) {
		let list : Array<SDKCard> = (require(`../../../generated/${lang}/cards.json`) as Array<SDKCard>)
		.filter((c) => objectLoop(params, (it, key) => {
			if (typeof it === "string") {
				return c[key as 'localId'].toLowerCase().includes(it.toLowerCase())
			}
			return c[key as 'localId'].includes(it)
		}))
		if (pagination) {
			list = list
				.splice(pagination.count * pagination.page - 1, pagination.count)
		}
		return list.map((it) => new Card(lang, it))
	}

	public static raw(lang: SupportedLanguages): Array<SDKCard> {
		return require(`../../../generated/${lang}/cards.json`)
	}

	public static findOne(lang: SupportedLanguages, params: Partial<Record<keyof SDKCard, any>> = {}) {
		const res = (require(`../../../generated/${lang}/cards.json`) as Array<SDKCard>).find((c) => {
			return objectLoop(params, (it, key) => {
				if (key === 'set') {
					return c['set'].id.includes(it) || c['set'].name.includes(it)
				}
				if (typeof it === "string") {
					return c[key as 'localId'].toLowerCase().includes(it.toLowerCase())
				}
				return c[key as 'localId'].includes(it)
			})
		})
		if (!res) {
			return undefined
		}
		return new Card(lang, res)
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
