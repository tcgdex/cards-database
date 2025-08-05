import de from '../../../generated/de/cards.json'
import en from '../../../generated/en/cards.json'
import es from '../../../generated/es/cards.json'
import esmx from '../../../generated/es-mx/cards.json'
import fr from '../../../generated/fr/cards.json'
import id from '../../../generated/id/cards.json'
import it from '../../../generated/it/cards.json'
import ja from '../../../generated/ja/cards.json'
import ko from '../../../generated/ko/cards.json'
import nl from '../../../generated/nl/cards.json'
import pl from '../../../generated/pl/cards.json'
import ptbr from '../../../generated/pt-br/cards.json'
import ptpt from '../../../generated/pt-pt/cards.json'
import pt from '../../../generated/pt/cards.json'
import ru from '../../../generated/ru/cards.json'
import th from '../../../generated/th/cards.json'
import zhcn from '../../../generated/zh-cn/cards.json'
import zhtw from '../../../generated/zh-tw/cards.json'
import { SupportedLanguages } from '@tcgdex/sdk'
import type { CardResume, Card as SDKCard } from '@tcgdex/sdk'
import { executeQuery, type Query } from '../../libs/QueryEngine/filter'
import { objectOmit } from '@dzeio/object-util'
import { getCardMarketPrice } from '../../libs/providers/cardmarket'
import { getTCGPlayerPrice } from '../../libs/providers/tcgplayer'

const cards = {
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

type MappedCard = any // (typeof en)[number]

export type Card = SDKCard

export async function getAllCards(lang: SupportedLanguages): Promise<Array<SDKCard>> {
	return Promise.all((cards[lang] as Array<MappedCard>).map(transformCard))
}

async function transformCard(card: MappedCard): Promise<SDKCard> {
	console.time('cardmarket')
	const cardmarket = await getCardMarketPrice(card)
	console.timeEnd('cardmarket')
	console.time('tcgplayer')
	const tcgplayer = await getTCGPlayerPrice(card)
	console.timeEnd('tcgplayer')
	return {
		...objectOmit(card, 'thirdParty'),
		pricing: {
			cardmarket: cardmarket,
			tcgplayer: tcgplayer
		}
	}
}

export async function findCards(lang: SupportedLanguages, query: Query<SDKCard>) {
	return executeQuery(await getAllCards(lang), query).data
}

export async function findOneCard(lang: SupportedLanguages, query: Query<SDKCard>) {
	const res = await findCards(lang, query)
	if (res.length === 0) {
		return undefined
	}
	return res[0]
}

export function toBrief(card: SDKCard): CardResume {
	return {
		id: card.id,
		localId: card.localId,
		name: card.name,
		image: card.image
	}
}
