import { Set, SupportedLanguages } from '../../../meta/definitions/database'
import { fetchRemoteFile, FileListCard, FileListItem, FileListSet, loadDatabase, setIsLegal } from './util'
import { cardToCardSimple, getCards } from './cardUtil'
import { SetResume, Set as SetSingle } from '../../../meta/definitions/api'
interface t {
	[key: string]: Set
}

export function isSetAvailable(set: FileListSet, lang: SupportedLanguages): boolean {
	return lang in set.data.name // && lang in set.serie.name
}

export function isSet(it: FileListItem): it is FileListSet {
	return it.type === 'set'
}

export async function getSets(serie = '*', lang: SupportedLanguages): Promise<Array<FileListSet>> {
	// Fetch sets
	return (await loadDatabase())
		.filter(isSet)
		// Filter sets
		.filter((it) => serie === '*' || it.parent.data.id === serie)
		.filter((it) => isSetAvailable(it, lang))
		// Sort sets by release date
		.sort((a, b) => a.data.releaseDate > b.data.releaseDate ? 1 : -1)
}

export async function getSetPictures(set: FileListSet, lang: SupportedLanguages): Promise<[string | undefined, string | undefined]> {
	try {
		const file = await fetchRemoteFile('https://assets.tcgdex.net/datas.json')
		const logoExists = file[lang]?.[set.data.serie]?.[set.data.id]?.logo ? `https://assets.tcgdex.net/${lang}/${set.data.serie}/${set.data.id}/logo` : undefined
		const symbolExists = file.univ?.[set.data.serie]?.[set.data.id]?.symbol ? `https://assets.tcgdex.net/univ/${set.data.serie}/${set.data.id}/symbol` : undefined
		return [
			logoExists,
			symbolExists
		]
	} catch (e) {
		return [undefined, undefined]
	}
}

export async function setToSetSimple(setFile: FileListSet, lang: SupportedLanguages): Promise<SetResume> {
	const set = setFile.data
	const cards = await getCards(lang, set.id)
	const pics = await getSetPictures(setFile, lang)
	return {
		cardCount: {
			official: set.cardCount,
			total: Math.max(set.cardCount, cards.length)
		},
		id: set.id,
		logo: pics[0],
		name: set.name[lang] as string,
		symbol: pics[1]
	}
}

export async function setToSetSingle(setFile: FileListSet, lang: SupportedLanguages): Promise<SetSingle> {
	const set = setFile.data
	const cards: Array<[string, FileListCard]> = (await getCards(lang, set.id))
		.map((it) => [it[0], it[1]])
	const serie = setFile.parent.data
	const pics = await getSetPictures(setFile, lang)
	return {
		cardCount: {
			firstEd: cards.reduce((count, card) => count + (card[1].data.variants?.firstEdition ? 1 : 0), 0),
			holo: cards.reduce((count, card) => count + (card[1].data.variants?.holo ? 1 : 0), 0),
			normal: cards.reduce((count, card) => count + (card[1].data.variants?.normal ? 1 : 0), 0),
			official: set.cardCount,
			reverse: cards.reduce((count, card) => count + (card[1].data.variants?.reverse ? 1 : 0), 0),
			total: Math.max(set.cardCount, cards.length)
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
