/* eslint-disable sort-keys */
import pathLib from 'node:path'
import { Card, Set, SupportedLanguages, Types, variant_detailed, VariantStamps, VariantType } from '../../../interfaces'
import { CardResume, Card as CardSingle, variant_detailed as ApiVariantDetailed } from '../../../meta/definitions/api'
import { getSet, setToSetSimple } from './setUtil'
import translate from './translationUtil'
import { DB_PATH, cardIsLegal, fetchRemoteFile, getDataFolder, getLastEdit, resolveText, smartGlob } from './util'
import { objectMap, objectPick } from '@dzeio/object-util'
import { formatVariant, variantToIdentifier } from "./variantUtil.ts";
import { existsSync } from "fs";
import { directoryExists } from "./directoryUtil.ts";

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

function variantsDetailedToVariants(variants_detailed: Array<variant_detailed>): CardSingle['variants'] {
	return {
		firstEdition: variants_detailed?.some((variant) => variant.stamp?.some((stamp) => stamp === '1st-edition')) ?? false,
		holo: variants_detailed?.some((variant) => variant.type === 'holo') ?? false,
		normal: variants_detailed?.some((variant) => variant.type === 'normal') ?? false,
		reverse: variants_detailed?.some((variant) => variant.type === 'reverse') ?? false,
		wPromo: variants_detailed?.some((variant) => variant.stamp?.some((stamp) => stamp === 'w-Promo' as VariantStamps)) ?? false
	}
}

function variantsToVariantsDetailed(variants: CardSingle['variants'],lang: SupportedLanguages): Array<ApiVariantDetailed> {
	const result: Array<ApiVariantDetailed> = [];
	const addVariant = (type: string, stamps: string[] = []) => {
		result.push({
			type: type as VariantType,
			size: translate('variantSize', "standard", lang) as any,
			stamp: stamps.length > 0 ? stamps as Array<VariantStamps> : undefined,
			variantId: "generated"
		});
	};

	if (typeof variants?.normal === 'boolean' ? variants.normal : true) {
		addVariant('normal');
		if (variants?.firstEdition) addVariant('normal', ['1st-edition']);
		if (variants?.wPromo) addVariant('normal', ['w-Promo']);
	}
	if (typeof variants?.reverse === 'boolean' ? variants.reverse : false) {
		addVariant('reverse');
		if (variants?.firstEdition) addVariant('reverse', ['1st-edition']);
	}
	if (typeof variants?.holo === 'boolean' ? variants.holo : false) {
		addVariant('holo');
		if (variants?.firstEdition) addVariant('holo', ['1st-edition']);
	}

	return result.length > 0 ? result : undefined;
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

		variants : Array.isArray(card.variants) ?
			variantsDetailedToVariants(card.variants) : {
			firstEdition: typeof card.variants?.firstEdition === 'boolean' ? card.variants.firstEdition : false,
			holo: typeof card.variants?.holo === 'boolean' ? card.variants.holo : false,
			normal: typeof card.variants?.normal === 'boolean' ? card.variants.normal : true,
			reverse: typeof card.variants?.reverse === 'boolean' ? card.variants.reverse : false,
			wPromo: typeof card.variants?.wPromo === 'boolean' ? card.variants.wPromo : false
		},

		variants_detailed: Array.isArray(card.variants)
			? await Promise.all(card.variants.map(async (variant, index) => {
				const variantId = variantToIdentifier(variant);
				let formattedVariant = formatVariant(variant,lang)

				return {
					...formattedVariant,
					variantId
				} as ApiVariantDetailed
			}))
			: variantsToVariantsDetailed(card.variants, lang),

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
		updated: await getCardLastEdit(localId, card, lang),

		thirdParty: card.thirdParty
	}
}

interface CardFileLocation {
	/** path usable with dynamic import() from this file's location */
	importPath: string
	/** path matching the git-tracked relative path used by getLastEdit's cache */
	gitPath: string
}

class CardNotFoundError extends Error {}

async function resolveCardFile(set: Set, id: string, lang: SupportedLanguages): Promise<CardFileLocation> {
	const dataFolder = getDataFolder(lang)

	/** perform a search using the readable string first and fallback to ids if not matched */
	const bases = [
		{ serie: set.serie.name.en ?? set.serie.name[lang], setName: set.name.en ?? set.name[lang] },
		{ serie: set.serie.id, setName: set.id }
	]

	for (const { serie, setName } of bases) {
		const flatImportPath = `../../${DB_PATH}/${dataFolder}/${serie}/${setName}/${id}.ts`
		const dirRelativePath = `../../${DB_PATH}/${dataFolder}/${serie}/${setName}/${id}`
		const hasDirectory = directoryExists(dirRelativePath)

		let flatExists = true
		try {
			await import(flatImportPath)
		} catch {
			flatExists = false
		}

		if (flatExists && hasDirectory) {
			throw new Error(
				`Card (${serie}/${setName}/${id}) has both a flat file (${id}.ts) and a directory (${id}/) defined — only one is allowed`
			)
		}

		if (flatExists) {
			return {
				importPath: flatImportPath,
				gitPath: `../${dataFolder}/${serie}/${setName}/${id}.ts`
			}
		}

		if (!hasDirectory) {
			continue
		}

		const files = await smartGlob(`${DB_PATH}/${dataFolder}/${serie}/${setName}/${id}/*.ts`)
		const matches: Array<CardFileLocation> = []
		for (const file of files.sort()) {
			const fileName = pathLib.basename(file)
			try {
				const importPath = `../../${DB_PATH}/${dataFolder}/${serie}/${setName}/${id}/${fileName}`
				const card = (await import(importPath)).default as Card
				if (card.name?.[lang]) {
					matches.push({ importPath, gitPath: `../${dataFolder}/${serie}/${setName}/${id}/${fileName}` })
				}
			} catch {
			}
		}

		if (matches.length > 1) {
			throw new Error(
				`Card (${serie}/${setName}/${id}) has conflicting definitions for lang (${lang}) in files: ` +
				matches.map((m) => m.gitPath).join(', ')
			)
		}
		if (matches.length === 1) {
			return matches[0]
		}
	}
	throw new CardNotFoundError(`Card (${id}) not found for lang (${lang})`)
}

/**
 *
 * @param setName the setname of the card
 * @param id the local id of the card
 * @returns [the local id, the Card object]
 */
export async function getCard(set: Set, id: string, lang: SupportedLanguages): Promise<Card> {
		const { importPath } = await resolveCardFile(set, id, lang)
		return (await import(importPath)).default
}

/**
 * Get cards filtered by the language they are available in
 * @param lang the language of the cards
 * @param set the set to filter in (optional)
 * @returns An array with the 0 = localId, 1 = Card Object
 */
export async function getCards(lang: SupportedLanguages, set?: Set): Promise<Array<[string, Card]>> {
	const serieByName = (set && (set.serie.name.en ?? set.serie.name[lang])) ?? '*'
	const setByName = (set && (set.name.en ?? set.name[lang])) ?? '*'
	const serieById = (set && set.serie.id) ?? '*'
	const setById = (set && set.id) ?? '*'

	let flatCards = await smartGlob(`${DB_PATH}/${getDataFolder(lang)}/${serieByName}/${setByName}/*.ts`)
	let dirCards = await smartGlob(`${DB_PATH}/${getDataFolder(lang)}/${serieByName}/${setByName}/*/*.ts`)
	if (flatCards.length === 0 && dirCards.length === 0) {
		flatCards = await smartGlob(`${DB_PATH}/${getDataFolder(lang)}/${serieById}/${setById}/*.ts`)
		dirCards = await smartGlob(`${DB_PATH}/${getDataFolder(lang)}/${serieById}/${setById}/*/*.ts`)
	}

	const list: Array<[string, Card]> = []

	for (const path of flatCards) {
		try {
			let items = path.split(pathLib.sep)
			items = items.slice(items.length - 3)
			let id = items[2]
			id = id.substring(0, id.lastIndexOf('.'))
			const setName = items[1]
			const serieName = items[0]

			const resolvedSet = await getSet(setName, serieName, lang)
			if (!(lang in resolvedSet.name)) continue

			const c = await getCard(resolvedSet, id, lang)
			if (!c.name[lang]) continue
			list.push([id, c])
		} catch (e) {
			if (e instanceof CardNotFoundError) {
				continue
			}
			throw e
		}
	}

	const dirIds = new Map<string, { serieName: string; setName: string, id:string }>()
	for (const path of dirCards) {
		let items = path.split(pathLib.sep)
		items = items.slice(items.length - 4)
		const serieName = items[0]
		const setName = items[1]
		const id = items[2]
		const key = `${serieName}/${setName}/${id}`
		if (!dirIds.has(key)) {
			dirIds.set(key, { serieName, setName, id })
		}
	}

	for (const [, { serieName, setName, id }] of dirIds) {
		const resolvedSet = await getSet(setName, serieName, lang)
		if (!(lang in resolvedSet.name)) continue

		try {
			const c = await getCard(resolvedSet, id, lang)
			if (!c.name[lang]) continue
			list.push([id, c])
		} catch (e) {
			if (e instanceof CardNotFoundError) continue
			throw e
		}
	}

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
		const { gitPath } = await resolveCardFile(card.set, localId, lang)
		return getLastEdit(gitPath)
	} catch (e) {
		console.error(card)
		console.error(e)
		throw e
	}
}
