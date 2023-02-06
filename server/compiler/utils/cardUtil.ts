/* eslint-disable sort-keys */
import { setToSetSimple } from './setUtil'
import { cardIsLegal, fetchRemoteFile, FileListCard, FileListItem, loadDatabase } from './util'
import { SupportedLanguages, Types } from '../../../meta/definitions/database'
import { Card as CardSingle, CardResume } from '../../../meta/definitions/api'
import translate from './translationUtil'

export async function getCardPictures(cardId: string, card: FileListCard, lang: SupportedLanguages): Promise<string | undefined> {
	try {
		const file = await fetchRemoteFile('https://assets.tcgdex.net/datas.json')
		const set = card.parent
		const fileExists = Boolean(file[lang]?.[set.data.serie]?.[set.data.id]?.[cardId])
		if (fileExists) {
			return `https://assets.tcgdex.net/${lang}/${set.data.serie}/${card.data.set}/${cardId}`
		}
	} catch {
		return undefined
	}
	return undefined
}

export async function cardToCardSimple(id: string, card: FileListCard, lang: SupportedLanguages): Promise<CardResume> {
	const cardName = card.data.name[lang]
	if (!cardName) {
		throw new Error(`Card (${card.path}) has no name in (${lang})`)
	}
	const img = await getCardPictures(id, card, lang)
	return {
		id: `${card.data.set}-${id}`,
		image: img,
		localId: id,
		name: cardName
	}
}

// eslint-disable-next-line max-lines-per-function
export async function cardToCardSingle(localId: string, cardFile: FileListCard, lang: SupportedLanguages): Promise<CardSingle> {
	const card = cardFile.data
	const image = await getCardPictures(localId, cardFile, lang)

	if (!card.name[lang]) {
		throw new Error(`Card (${localId}) dont exist in (${lang})`)
	}

	return {
		category: translate('category', card.category, lang) as any,
		id: `${card.set}-${localId}`,
		illustrator: card.illustrator,
		image,
		localId,
		name: card.name[lang] as string,

		rarity: translate('rarity', card.rarity, lang) as any,
		set: await setToSetSimple(cardFile.parent, lang),
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

export function cardIsAvailable(card: FileListCard, lang: SupportedLanguages) {
	return card.data.name[lang] && card.parent.data.name[lang] && card.parent.parent.data.name[lang]
}

export function isCard(file: FileListItem): file is FileListCard {
	return file.type === 'card'
}

export function getLocalId(file: FileListCard): string {
	return file.path.slice(file.path.lastIndexOf('/') + 1, file.path.length - 5)
}

/**
 * Get cards filtered by the language they are available in
 * @param lang the language of the cards
 * @param set the set to filter in (optional)
 * @returns An array with the 0 = localId, 1 = Card Object
 */
export async function getCards(lang: SupportedLanguages, setId?: string): Promise<Array<[string, FileListCard]>> {
	const cards = ((await loadDatabase())
		.filter((it) => isCard(it) && cardIsAvailable(it as FileListCard, lang) && (!setId || (it as FileListCard).parent.data.id === setId)) as Array<FileListCard>)
		.map<[string, FileListCard]>((it) => [getLocalId(it), it])
	return cards
	// Sort by id when possible
	return cards.sort(([a], [b]) => {
		const ra = parseInt(a, 10)
		const rb = parseInt(b, 10)
		if (!isNaN(ra) && !isNaN(rb)) {
			return ra - rb
		}
		return a >= b ? 1 : -1
	})
}
