/* eslint-disable sort-keys */
import { setToSetSimple } from './setUtil'
import { cardIsLegal, fetchRemoteFile, smartGlob } from './util'
import { Set, SupportedLanguages, Card, Types } from '../../../interfaces'
import { Card as CardSingle, CardResume } from '@tcgdex/sdk/dist/types/interfaces'
import translate from './translationUtil'

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
			reverse: typeof card.variants?.reverse === 'boolean' ? card.variants.reverse : true
		},


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
		}

	}
}

/**
 *
 * @param setName the setname of the card
 * @param id the local id of the card
 * @returns [the local id, the Card object]
 */
export async function getCard(serie: string, setName: string, id: string): Promise<Card> {
	return (await import(`../db/data/${serie}/${setName}/${id}.js`)).default
}

export async function getCards(lang: SupportedLanguages, set?: Set): Promise<Array<[string, Card]>> {
	const cards = await smartGlob(`./db/data/${(set && set.serie.name.en) ?? '*'}/${(set && set.name.en) ?? '*'}/*.js`)
	const list: Array<[string, Card]> = []
	for (const path of cards) {
		const id = path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'))
		const setName = (set && set.name.en) ?? (() => {
			const part1 = path.substr(0, path.lastIndexOf(id) - 1)
			return part1.substr(part1.lastIndexOf('/') + 1)
		})()
		const serieName = (set && set.serie.name.en) ?? (() => {
			const part1 = path.substr(0, path.lastIndexOf(setName) - 1)
			return part1.substr(part1.lastIndexOf('/') + 1)
		})()
		// console.log(path, id, setName)
		const c = await getCard(serieName, setName, id)
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
