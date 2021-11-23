import { DB_PATH, smartGlob } from './util'
import { setToSetSimple, getSets } from './setUtil'
import { Serie, SupportedLanguages, Set } from '../../../interfaces'
import { Serie as SerieSingle, SerieResume } from '../../../meta/definitions/api'

export async function getSerie(name: string): Promise<Serie> {
	return (await import(`../../${DB_PATH}/data/${name}.js`)).default
}

export async function isSerieAvailable(serie: Serie, lang: SupportedLanguages): Promise<boolean> {
	if (!serie.name[lang]) {
		return false
	}
	const sets = await getSets(serie.name.en, lang)
	return sets.length > 0
}

export async function getSeries(lang: SupportedLanguages): Promise<Array<Serie>> {
	let series: Array<Serie> = (await Promise.all((await smartGlob(`${DB_PATH}/data/*.js`))
		// Find Serie's name
		.map((it) => it.substring(it.lastIndexOf('/') + 1, it.length - 3))
		// Fetch the Serie
		.map((it) => getSerie(it))))
		// Filter the serie if no name's exists in the selected lang
		.filter((serie) => Boolean(serie.name[lang]))

	// Filter available series
	const isAvailable = await Promise.all(series.map((serie) => isSerieAvailable(serie, lang)))
	series = series.filter((_, index) => isAvailable[index])

	// Sort series by the first set release date
	const tmp: Array<[Serie, Set | undefined]> = await Promise.all(series.map(async (it) => [
		it,
		(await getSets(it.name.en, lang))
			.reduce<Set | undefined>((p, c) => p ? p.releaseDate < c.releaseDate ? p : c : c, undefined) as Set
	] as [Serie, Set]))

	return tmp.sort((a, b) => (a[1] ? a[1].releaseDate : '0') > (b[1] ? b[1].releaseDate : '0') ? 1 : -1).map((it) => it[0])
}

export async function serieToSerieSimple(serie: Serie, lang: SupportedLanguages): Promise<SerieResume> {
	const setsTmp = await getSets(serie.name.en, lang)
	const sets = await Promise.all(setsTmp
		.sort((a, b) => a.releaseDate > b.releaseDate ? 1 : -1)
		.map((el) => setToSetSimple(el, lang)))
	const logo = sets.find((set) => set.logo)?.logo
	return {
		id: serie.id,
		logo,
		name: serie.name[lang] as string
	}
}

export async function serieToSerieSingle(serie: Serie, lang: SupportedLanguages): Promise<SerieSingle> {
	const setsTmp = await getSets(serie.name.en, lang)
	const sets = await Promise.all(setsTmp
		.sort((a, b) => a.releaseDate > b.releaseDate ? 1 : -1)
		.map((el) => setToSetSimple(el, lang)))
	const logo = sets.find((set) => set.logo)?.logo

	// Final data
	return {
		id: serie.id,
		logo,
		name: serie.name[lang] as string,
		sets
	}
}
