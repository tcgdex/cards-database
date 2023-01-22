import { Serie, Set, SupportedLanguages } from '../../../interfaces'
import { DB_PATH, fetchRemoteFile, realPath, setIsLegal, smartGlob } from './util'
import { cardToCardSimple, getCards } from './cardUtil'
import { SetResume, Set as SetSingle } from '../../../meta/definitions/api'
import fs from 'fs/promises'
import { objectValues } from '@dzeio/object-util'
import { getSerie } from './serieUtil'
interface t {
	[key: string]: Set
}

const setCache: t = {}

let sets: Array<Omit<Set, 'serie'> & {serie: Serie}> | null = null
export async function loadSets() {
	const rawSets = (await smartGlob(realPath(__dirname, `../../../data/*/*.json`)))
	sets = []
	for (const rawSet of rawSets) {
		const set: Set = JSON.parse(await fs.readFile(rawSet, 'utf-8'))

		sets.push({...set, serie: await getSerie(set.serie)})
	}
}

export function isSetAvailable(set: Set, lang: SupportedLanguages): boolean {
	return lang in set.name // && lang in set.serie.name
}

/**
 * Return the set
 * @param name the name of the set
 */
export async function getSet(name: string, serie?: string): Promise<Set & {serie: Serie}> {
	if (!sets) {
		await loadSets()
	}
	const set = sets?.find((it) => it.id === name || objectValues(it.name).includes(name))
	if (!set) {
		throw new Error(`Set not found! (${name}, ${serie})`)
	}
	return set
}

// Dont use cache as it wont necessary have them all
export async function getSets(serie = '*', lang: SupportedLanguages): Promise<Array<Set>> {
	// list sets names
	const rawSets = (await smartGlob(realPath(__dirname, `../../../data/${serie}/*.json`))).map((set) => set.substring(set.lastIndexOf('/') + 1, set.lastIndexOf('.')))
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
		const logoExists = file[lang]?.[set.serie]?.[set.id]?.logo ? `https://assets.tcgdex.net/${lang}/${set.serie}/${set.id}/logo` : undefined
		const symbolExists = file.univ?.[set.serie]?.[set.id]?.symbol ? `https://assets.tcgdex.net/univ/${set.serie}/${set.id}/symbol` : undefined
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
	const serie = await getSerie(set.serie)
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
			id: set.serie,
			name: serie.name[lang] as string
		},
		symbol: pics[1],
		tcgOnline: set.tcgOnline
	}
}
