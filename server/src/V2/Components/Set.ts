import type { Set as SDKSet, SetResume, SupportedLanguages } from '@tcgdex/sdk'
import { executeQuery, type Query } from '../../libs/QueryEngine/filter'
import { objectOmit } from '@dzeio/object-util'

import de from '../../../generated/de/sets.json'
import en from '../../../generated/en/sets.json'
import es from '../../../generated/es/sets.json'
import esmx from '../../../generated/es-mx/sets.json'
import fr from '../../../generated/fr/sets.json'
import id from '../../../generated/id/sets.json'
import it from '../../../generated/it/sets.json'
import ja from '../../../generated/ja/sets.json'
import ko from '../../../generated/ko/sets.json'
import nl from '../../../generated/nl/sets.json'
import pl from '../../../generated/pl/sets.json'
import ptbr from '../../../generated/pt-br/sets.json'
import ptpt from '../../../generated/pt-pt/sets.json'
import pt from '../../../generated/pt/sets.json'
import ru from '../../../generated/ru/sets.json'
import th from '../../../generated/th/sets.json'
import zhcn from '../../../generated/zh-cn/sets.json'
import zhtw from '../../../generated/zh-tw/sets.json'

export const sets = {
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

type MappedSet = any // (typeof en)[number]

export async function getAllSets(lang: SupportedLanguages): Promise<Array<SDKSet>> {
	return Promise.all((sets[lang] as Array<MappedSet>).map(transformSet))
}

async function transformSet(set: MappedSet): Promise<SDKSet> {
	return {
		...objectOmit(set, 'thirdParty'),
		// pricing: {
		// 	cardmarket: await getCardMarketPrice(card),
		// 	tcgplayer: await getTCGPlayerPrice(card)
		// }
	}
}

export async function findSets(lang: SupportedLanguages, query: Query<SDKSet>) {
	return executeQuery(await getAllSets(lang), query).data
}

export async function findOneSet(lang: SupportedLanguages, query: Query<SDKSet>) {
	const res = await findSets(lang, query)
	if (res.length === 0) {
		return undefined
	}
	return res[0]
}

export function setToBrief(set: SDKSet): SetResume {
	return {
		id: set.id,
		name: set.name,
		logo: set.logo,
		symbol: set.symbol,
		abbreviation: set.abbreviation,
		cardCount: {
			total: set.cardCount.total,
			official: set.cardCount.official
		}
	}
}
