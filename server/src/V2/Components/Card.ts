import Cache from '@cachex/memory'
import type { CardResume, Card as SDKCard } from '@tcgdex/sdk'
import { SupportedLanguages } from '@tcgdex/sdk'
import de from '../../../generated/de/cards.json'
import en from '../../../generated/en/cards.json'
import esmx from '../../../generated/es-mx/cards.json'
import es from '../../../generated/es/cards.json'
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
import { getCardMarketPrice } from '../../libs/providers/cardmarket'
import { getTCGPlayerPrice } from '../../libs/providers/tcgplayer'
import { executeQuery, type Query } from '../../libs/QueryEngine/filter'
import { deepOmit } from "../../util";

// any is CompiledCard that is currently not mapped correctly
const list: Record<`${string | any}${SupportedLanguages | string}`, any> = {}

// @ts-ignore ts can't load file
en.forEach((it) => list[`${it.id.toLowerCase()}en`] = it)
// @ts-ignore ts can't load file
fr.forEach((it) => list[`${it.id.toLowerCase()}fr`] = it)
// @ts-ignore ts can't load file
es.forEach((it) => list[`${it.id.toLowerCase()}es`] = it)
esmx.forEach((it) => list[`${it.id.toLowerCase()}es-mx`] = it)
// @ts-ignore ts can't load file
it.forEach((it) => list[`${it.id.toLowerCase()}it`] = it)
// @ts-ignore ts can't load file
pt.forEach((it) => list[`${it.id.toLowerCase()}pt`] = it)
ptbr.forEach((it) => list[`${it.id.toLowerCase()}pt-br`] = it)
// @ts-expect-error there is currently not cards here
ptpt.forEach((it) => list[`${it.id.toLowerCase()}pt-pt`] = it)
// @ts-ignore ts can't load file
de.forEach((it) => list[`${it.id.toLowerCase()}de`] = it)
// @ts-expect-error there is currently not cards here
nl.forEach((it) => list[`${it.id.toLowerCase()}nl`] = it)
// @ts-expect-error there is currently not cards here
pl.forEach((it) => list[`${it.id.toLowerCase()}pl`] = it)
// @ts-expect-error there is currently not cards here
ru.forEach((it) => list[`${it.id.toLowerCase()}ru`] = it)
ja.forEach((it) => list[`${it.id.toLowerCase()}ja`] = it)
// @ts-expect-error there is currently not cards here
ko.forEach((it) => list[`${it.id.toLowerCase()}ko`] = it)
// @ts-ignore ts can't load file
zhtw.forEach((it) => list[`${it.id.toLowerCase()}zh-tw`] = it)
id.forEach((it) => list[`${it.id.toLowerCase()}id`] = it)
th.forEach((it) => list[`${it.id.toLowerCase()}th`] = it)
zhcn.forEach((it) => list[`${it.id.toLowerCase()}zh-cn`] = it)

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

const cache = new Cache()

type MappedCard = SDKCard // (typeof en)[number]

export type Card = SDKCard

export async function getAllCards(lang: SupportedLanguages): Promise<Array<SDKCard>> {
	return Promise.all((cards[lang] as Array<MappedCard>).map((it) => loadCard(lang, it.id))) as Promise<Array<SDKCard>>
}

export function getCompiledCard(lang: SupportedLanguages, id: string): any {
	const key = `${id}${lang}`.toLowerCase() as `${any}${string}`
	return list[key]
}


/**
 * Reconstruct the root-level pricing payload from variants[0].thirdParty
 * for cards migrated away from root thirdParty (see
 * `scripts/export/move_root_thirdparty_to_variant_zero.py`). Falls back to
 * the first variant carrying a populated pricing block when variants[0] has
 * no pricing yet (e.g. unpopulated at compile time), so that the API
 * response never loses the deprecated root `pricing` field for clients that
 * still rely on it.
 */
function resolveRootPricingFromVariants(variantsDetailed: any[] | undefined): { cardmarket: any; tcgplayer: any } | null {
	const variants = variantsDetailed ?? []
	if (variants.length === 0) {
		return null
	}
	const hasPricing = (v: any) => v && v.pricing && (v.pricing.cardmarket || v.pricing.tcgplayer)
	const primary = hasPricing(variants[0]) ? variants[0] : variants.find(hasPricing)
	if (!primary) {
		return null
	}
	return { cardmarket: primary.pricing.cardmarket ?? null, tcgplayer: primary.pricing.tcgplayer ?? null }
}

/**
 * Function that do the hard work of loading the card with the external processors
 *
 * It should run once until it's timeout runout :D
 * @param lang
 * @param id
 */
async function loadCard(lang: SupportedLanguages, id: string): Promise<SDKCard | null> {
	const key = `${id}${lang}`.toLowerCase()
	const value = cache.get<SDKCard>(key)

	// expect the cache to be present
	if (value) {
		return value
	}
	// console.time(`loading card ${id}${lang}`)

	// console.time('fetching DB')
	// @ts-expect-error flemme
	const card = list[key]
	if (!card) {
		return null
	}
	// console.timeEnd('fetching DB')

	// Populate variants prices
	for (const variant of card.variants_detailed ?? []) {
		if (variant.thirdParty) {
			const [cardmarket, tcgplayer] = await Promise.all([
				getCardMarketPrice(variant),
				getTCGPlayerPrice(variant),
			]);
			variant.pricing = { cardmarket, tcgplayer };
		}
	}

	// console.time('loading providers')
	// Root-level pricing is reconstructed from variants[0].thirdParty for
	// cards migrated by ``scripts/export/move_root_thirdparty_to_variant_zero.py``
	// (root thirdParty is now @deprecated on the Card interface). Legacy
	// cards that still hold root ``thirdParty`` (object-variant shape, promos,
	// trainer kits) fall through to the provider lookups below.
	let cardmarket: any = null
	let tcgplayer: any = null

	const rootFromVariants = resolveRootPricingFromVariants(card.variants_detailed)
	if (rootFromVariants) {
		({ cardmarket, tcgplayer } = rootFromVariants)
	} else if (card.thirdParty) {
		// Legacy retro-compat path: root thirdParty still carries the ids.
		[cardmarket, tcgplayer] = await Promise.all([
			getCardMarketPrice(card),
			getTCGPlayerPrice(card),
		])
	}

	// console.timeEnd('loading providers')
	// console.time('remapping card')
	const res = {
		...deepOmit(card, 'thirdParty'),
		pricing: {
			cardmarket: cardmarket,
			tcgplayer: tcgplayer
		}
	} as SDKCard
	// console.timeEnd('remapping card')

	cache.set(key, res, 60 * 60)
	// console.timeEnd(`loading card ${id}${lang}`)
	return res
}

export async function getCardById(lang: SupportedLanguages, id: string) {
	return loadCard(lang, id)
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
