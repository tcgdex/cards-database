import { objectLoop } from '@dzeio/object-util'
import { CardResume, Card as SDKCard, SupportedLanguages } from '@tcgdex/sdk'
import { Query } from '../../interfaces'
import { handlePagination, handleSort, handleValidation } from '../../util'
import Set from './Set'

import en from '../../../generated/en/cards.json'
import fr from '../../../generated/fr/cards.json'
import es from '../../../generated/es/cards.json'
import it from '../../../generated/it/cards.json'
import pt from '../../../generated/pt/cards.json'
import ptbr from '../../../generated/pt-br/cards.json'
import ptpt from '../../../generated/pt-pt/cards.json'
import de from '../../../generated/de/cards.json'
import nl from '../../../generated/nl/cards.json'
import pl from '../../../generated/pl/cards.json'
import ru from '../../../generated/ru/cards.json'
import ja from '../../../generated/ja/cards.json'
import ko from '../../../generated/ko/cards.json'
import zhtw from '../../../generated/zh-tw/cards.json'
import id from '../../../generated/id/cards.json'
import th from '../../../generated/th/cards.json'
import zhcn from '../../../generated/zh-cn/cards.json'

const cards = {
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
		return cards[lang]
	}

	public static find(lang: SupportedLanguages, query: Query<SDKCard>) {
		return handlePagination(handleSort(handleValidation(this.getAll(lang), query), query), query)
			.map((it) => new Card(lang, it))
	}

	public static findOne(lang: SupportedLanguages, query: Query<SDKCard>) {
		const res = handleSort(handleValidation(this.getAll(lang), query), query)
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
