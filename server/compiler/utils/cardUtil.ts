/* eslint-disable sort-keys */
import { exec } from 'child_process'
import { Card, Set, SupportedLanguages, Types } from '../../../interfaces'
import { CardResume, Card as CardSingle } from '../../../meta/definitions/api'
import { getSet, setToSetSimple } from './setUtil'
import translate from './translationUtil'
import { DB_PATH, cardIsLegal, fetchRemoteFile, getDataFolder, getLastEdit, resolveText, smartGlob } from './util'
import { objectMap, objectPick } from '@dzeio/object-util'

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
	const cardName = resolveText(card.name, lang)
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

	return {
		category: translate('category', card.category, lang) as any,
		id: `${card.set.id}-${localId}`,
		illustrator: card.illustrator,
		image,
		localId,
		name: resolveText(card.name, lang) as string,

		rarity: translate('rarity', card.rarity, lang) as any,
		set: await setToSetSimple(card.set, lang),
		variants: {
			firstEdition: typeof card.variants?.firstEdition === 'boolean' ? card.variants.firstEdition : false,
			holo: typeof card.variants?.holo === 'boolean' ? card.variants.holo : true,
			normal: typeof card.variants?.normal === 'boolean' ? card.variants.normal : true,
			reverse: typeof card.variants?.reverse === 'boolean' ? card.variants.reverse : true,
			wPromo: typeof card.variants?.wPromo === 'boolean' ? card.variants.wPromo : false
		},


		dexId: card.dexId,
		hp: card.hp,
		types: card.types?.map((t) => translate('types', t, lang)) as Array<Types>,
		evolveFrom: card.evolveFrom && resolveText(card.evolveFrom, lang),
		weight: card.weight,
		description: card.description ? resolveText(card.description, lang) as string : undefined,
		level: card.level,
		stage: translate('stage', card.stage, lang) as any,
		suffix: translate('suffix', card.suffix, lang) as any,
		item: card.item ? {
			name: resolveText(card.item.name, lang),
			effect: resolveText(card.item.effect, lang)
		} : undefined,

		abilities: card.abilities?.map((el) => ({
			type: translate('abilityType', el.type, lang) as any,
			name: resolveText(el.name, lang),
			effect: resolveText(el.effect, lang)
		})),

		attacks: card.attacks?.map((el) => ({
			cost: el.cost?.map((t) => translate('types', t, lang)) as Array<Types>,
			name: resolveText(el.name, lang) as string,
			effect: el.effect ? resolveText(el.effect, lang) : undefined,
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

		effect: card.effect ? resolveText(card.effect, lang) : undefined,

		trainerType: translate('trainerType', card.trainerType, lang) as any,
		energyType: translate('energyType', card.energyType, lang) as any,
		regulationMark: card.regulationMark,

		legal: {
			standard: cardIsLegal('standard', card, localId),
			expanded: cardIsLegal('expanded', card, localId)
		},
		boosters: card.boosters ? objectMap(objectPick(card.set.boosters, ...card.boosters), (booster, id) => ({
			id: `boo_${card.set.id}-${id}`,
			name: resolveText(booster.name, lang),
			// images will be coming soon...
		})) : undefined,
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
