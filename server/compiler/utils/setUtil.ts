import { Set, SupportedLanguages } from '../../../interfaces'
import { DB_PATH, fetchRemoteFile, setIsLegal, smartGlob } from './util'
import { cardToCardSimple, getCards } from './cardUtil'
import { SetResume, Set as SetSingle } from '../../../meta/definitions/api'

interface t {
	[key: string]: Set
}

const setCache: t = {}

export function isSetAvailable(set: Set, lang: SupportedLanguages): boolean {
	return lang in set.name && lang in set.serie.name
}

/**
 * Return the set
 * @param name the name of the set (don't include.js/.ts)
 */
export async function getSet(name: string, serie = '*'): Promise<Set> {
	if (!setCache[name]) {
		try {
			const [path] = await smartGlob(`${DB_PATH}/data/${serie}/${name}.js`)
			setCache[name] = (await import('../../' + path)).default
		} catch (error) {
			console.error(error)
			console.error(`Error trying to import importing (${`db/data/${serie}/${name}.js`})`)
			process.exit(1)
		}
	}
	return setCache[name]
}

// Dont use cache as it wont necessary have them all
export async function getSets(serie = '*', lang: SupportedLanguages): Promise<Array<Set>> {
	// list sets names
	const rawSets = (await smartGlob(`${DB_PATH}/data/${serie}/*.js`)).map((set) => set.substring(set.lastIndexOf('/') + 1, set.lastIndexOf('.')))
	// Fetch sets
	const sets = (await Promise.all(rawSets.map((set) => getSet(set, serie))))
		// Filter sets
		.filter((set) => isSetAvailable(set, lang))
		// Sort sets by release date
		.sort((a, b) => a.releaseDate > b.releaseDate ? 1 : -1)
	return sets
}

export async function getSetPictures(set: Set, lang: SupportedLanguages): Promise<[string | undefined, string | undefined]> {
	try {
		const file = await fetchRemoteFile('https://assets.tcgdex.net/datas.json')
		const logoExists = file[lang]?.[set.serie.id]?.[set.id]?.logo ? `https://assets.tcgdex.net/${lang}/${set.serie.id}/${set.id}/logo` : undefined
		const symbolExists = file.univ?.[set.serie.id]?.[set.id]?.symbol ? `https://assets.tcgdex.net/univ/${set.serie.id}/${set.id}/symbol` : undefined
		return [
			logoExists,
			symbolExists
		]
	} catch {
		return [undefined, undefined]
	}
}

export async function setToSetSimple(set: Set, lang: SupportedLanguages): Promise<SetResume> {
	const cards = await getCards(lang, set)
	const pics = await getSetPictures(set, lang)
	return {
		cardCount: {
			official: set.cardCount.official,
			total: Math.max(set.cardCount.official, cards.length)
		},
		id: set.id,
		logo: pics[0],
		name: set.name[lang] as string,
		symbol: pics[1]
	}
}

export async function setToSetSingle(set: Set, lang: SupportedLanguages): Promise<SetSingle> {
	const cards = await getCards(lang, set)
	const pics = await getSetPictures(set, lang)
	return {
		cardCount: {
			firstEd: cards.reduce((count, card) => count + (card[1].variants?.firstEdition ? 1 : 0), 0),
			holo: cards.reduce((count, card) => count + (card[1].variants?.holo ? 1 : 0), 0),
			normal: cards.reduce((count, card) => count + (card[1].variants?.normal ? 1 : 0), 0),
			official: set.cardCount.official,
			reverse: cards.reduce((count, card) => count + (card[1].variants?.reverse ? 1 : 0), 0),
			total: Math.max(set.cardCount.official, cards.length)
		},
		cards: await Promise.all(cards.map(([id, card]) => cardToCardSimple(id, card, lang))),
		id: set.id,
		legal: {
			expanded: setIsLegal('expanded', set),
			standard: setIsLegal('standard', set)
		},
		logo: pics[0],
		name: set.name[lang] as string,
		releaseDate: set.releaseDate,
		serie: {
			id: set.serie.id,
			name: set.serie.name[lang] as string
		},
		symbol: pics[1],
		tcgOnline: set.tcgOnline
	}
}
