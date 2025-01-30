/* eslint-disable sort-keys */
import { exec } from 'child_process'
import { Card, Set, SupportedLanguages, Types } from '../../../interfaces'
import { CardResume, Card as CardSingle } from '../../../meta/definitions/api'
import { getSet, setToSetSimple } from './setUtil'
import translate from './translationUtil'
import { DB_PATH, cardIsLegal, fetchRemoteFile, getDataFolder, getLastEdit, smartGlob } from './util'
import { objectRemap, objectSize } from '@dzeio/object-util'

export async function getCardPictures(cardId: string, card: Card, lang: SupportedLanguages): Promise<string | undefined> {
	try {
		const file = await fetchRemoteFile('https://assets.tcgdex.net/datas.json')
		const fileExists = Boolean(file[lang]?.[card.set.serie.id]?.[card.set.id]?.[cardId])
		if (fileExists) {
			return `https://assets.tcgdex.net/${lang}/${card.set.serie.id}/${card.set.id}/${cardId}`
		}
	} catch {
		return undefined
	}
	return undefined
}

export async function cardToCardSimple(id: string, card: Card, lang: SupportedLanguages): Promise<CardResume> {
	const cardName = card.name[lang]
	if (!cardName) {
		throw new Error(`Card (${card.set.id}-${id}) has no name in (${lang})`)
	}
	const img = await getCardPictures(id, card, lang)
	return {
		id: `${card.set.id}-${id}`,
		image: img,
		localId: id,
		name: cardName
	}
}

// eslint-disable-next-line max-lines-per-function
export async function cardToCardSingle(localId: string, card: Card, lang: SupportedLanguages): Promise<CardSingle> {
	const image = await getCardPictures(localId, card, lang)

	if (!card.name[lang]) {
		throw new Error(`Card (${localId}) dont exist in (${lang})`)
	}

	const set = card.set

	const pullRates: CardSingle['pullRates'] = {}

	if (set.pullRates) {
		for (const type of Object.keys(set.pullRates)) {
			const value = set.pullRates[type]
			pullRates[type] = {
				rate: value.rate,
				slots: await Promise.all(value.slots.map(async (it) => it[card.rarity] ? await getPullRate(set, card, it[card.rarity], lang) : 0)),
				total_slots: await Promise.all(value.slots.map(async (it) => it[card.rarity] ? await getPullRate(set, card, it[card.rarity] * (value.rate / 100), lang) : 0)),
			}
		}
	}

	return {
		category: translate('category', card.category, lang) as any,
		id: `${card.set.id}-${localId}`,
		illustrator: card.illustrator,
		image,
		localId,
		name: card.name[lang] as string,

		rarity: translate('rarity', card.rarity, lang) as any,
		set: await setToSetSimple(card.set, lang),
		variants: {
			firstEdition: typeof card.variants?.firstEdition === 'boolean' ? card.variants.firstEdition : false,
			holo: typeof card.variants?.holo === 'boolean' ? card.variants.holo : true,
			normal: typeof card.variants?.normal === 'boolean' ? card.variants.normal : true,
			reverse: typeof card.variants?.reverse === 'boolean' ? card.variants.reverse : true,
			wPromo: typeof card.variants?.wPromo === 'boolean' ? card.variants.wPromo : false
		},

		boosters: card.boosters,
		pullRates: objectSize(pullRates) > 0 ? pullRates : undefined,

		dexId: card.dexId,
		hp: card.hp,
		types: card.types?.map((t) => translate('types', t, lang)) as Array<Types>,
		evolveFrom: card.evolveFrom && card.evolveFrom[lang],
		weight: card.weight,
		description: card.description ? card.description[lang] as string : undefined,
		level: card.level,
		stage: translate('stage', card.stage, lang) as any,
		suffix: translate('suffix', card.suffix, lang) as any,
		item: card.item ? {
			name: card.item.name[lang] as string,
			effect: card.item.effect[lang] as string
		} : undefined,

		abilities: card.abilities?.map((el) => ({
			type: translate('abilityType', el.type, lang) as any,
			name: el.name[lang] as string,
			effect: el.effect[lang] as string
		})),

		attacks: card.attacks?.map((el) => ({
			cost: el.cost?.map((t) => translate('types', t, lang)) as Array<Types>,
			name: el.name[lang] as string,
			effect: el.effect ? el.effect[lang] : undefined,
			damage: el.damage
		})),
		weaknesses: card.weaknesses?.map((el) => ({
			type: translate('types', el.type, lang) as Types,
			value: el.value
		})),

		resistances: card.resistances?.map((el) => ({
			type: translate('types', el.type, lang) as Types,
			value: el.value
		})),

		retreat: card.retreat,

		effect: card.effect ? card.effect[lang] : undefined,

		trainerType: translate('trainerType', card.trainerType, lang) as any,
		energyType: translate('energyType', card.energyType, lang) as any,
		regulationMark: card.regulationMark,

		legal: {
			standard: cardIsLegal('standard', card, localId),
			expanded: cardIsLegal('expanded', card, localId)
		},
		updated: await getCardLastEdit(localId, card, lang)
	}
}

/**
 *
 * @param setName the setname of the card
 * @param id the local id of the card
 * @returns [the local id, the Card object]
 */
export async function getCard(set: Set, id: string, lang: SupportedLanguages): Promise<Card> {
	try {
		return (await import(`../../${DB_PATH}/${getDataFolder(lang)}/${set.serie.name.en ?? set.serie.name[lang]}/${set.name.en ?? set.name[lang]}/${id}.ts`)).default
	} catch {
		return (await import(`../../${DB_PATH}/${getDataFolder(lang)}/${set.serie.id}/${set.id}/${id}.ts`)).default
	}
}

function arrayIntersect(first: Array<string>, second: Array<string>) {
	return !!first.find((it) => second.includes(it))
}

async function getPullRate(set: Set, card: Card, totalRate: number, lang: SupportedLanguages) {
	const otherCards = await getCards(lang, set)
		.then((cards) => cards
			.map((it) => it[1])
			// filter cards with same rarity
			// exclude cards that is only avialable in other boosters
			.filter((it) => it.rarity === card.rarity && (!it.boosters || !card.boosters || arrayIntersect(card.boosters, it.boosters)))
		)
	const count = otherCards.length // remove one to exclude current card as it ill match itself

	return 1 * (totalRate / 100) / count * 100
}

/**
 * Get cards filtered by the language they are available in
 * @param lang the language of the cards
 * @param set the set to filter in (optional)
 * @returns An array with the 0 = localId, 1 = Card Object
 */
export async function getCards(lang: SupportedLanguages, set?: Set): Promise<Array<[string, Card]>> {
	let cards = await smartGlob(`${DB_PATH}/${getDataFolder(lang)}/${(set && (set.serie.name.en ?? set.serie.name[lang])) ?? '*'}/${(set && (set.name.en ?? set.name[lang])) ?? '*'}/*.ts`)
	if (cards.length === 0) {
		cards = await smartGlob(`${DB_PATH}/${getDataFolder(lang)}/${(set && set.serie.id) ?? '*'}/${(set && set.id) ?? '*'}/*.ts`)
	}
	const list: Array<[string, Card]> = []
	for (const path of cards) {
		let items = path.split('/')
		items = items.slice(items.length - 3)

		// get the card id
		let id = items[2]
		id = id.substring(0, id.lastIndexOf('.'))

		// get it's set name
		const setName = items[1]

		// get it's serie name
		const serieName = items[0]

		const set = await getSet(setName, serieName, lang)

		if (!(lang in set.name)) {
			continue
		}

		// console.log(path, id, set, lang)
		const c = await getCard(set, id, lang)
		if (!c.name[lang]) {
			continue
		}
		list.push([id, c])
	}

	// Sort by id when possible
	return list.sort(([a], [b]) => {
		const ra = parseInt(a, 10)
		const rb = parseInt(b, 10)
		if (!isNaN(ra) && !isNaN(rb)) {
			return ra - rb
		}
		return a >= b ? 1 : -1
	})
}

export async function getCardLastEdit(localId: string, card: Card, lang: SupportedLanguages): Promise<string> {
	try {
		const path = `../${getDataFolder(lang)}/${card.set.serie.name.en}/${card.set.name.en ?? card.set.name.fr}/${localId}.ts`
		return getLastEdit(path)
	} catch (e) {
		try {
			const path = `../${getDataFolder(lang)}/${card.set.serie.id}/${card.set.id}/${localId}.ts`
			return getLastEdit(path)
		} catch (e2) {
			console.error(card)
			console.error(e)
			throw e2
		}
	}
}
