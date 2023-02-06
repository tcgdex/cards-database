import { Serie as SerieSingle, SerieResume } from '../../../meta/definitions/api'
import { SupportedLanguages } from '../../../meta/definitions/database'
import { getSets, setToSetSimple } from './setUtil'
import { FileListItem, FileListSerie, FileListSet, loadDatabase } from './util'

export async function isSerieAvailable(serie: FileListSerie, lang: SupportedLanguages): Promise<boolean> {
	if (!serie.data.name[lang]) {
		return false
	}
	const sets = await getSets(serie.data.id, lang)
	return sets.length > 0
}

export function isSerie(serie: FileListItem): serie is FileListSerie {
	return serie.type === 'serie'
}

export async function getSeries(lang: SupportedLanguages): Promise<Array<FileListSerie>> {

	let series = (await loadDatabase())
		.filter<FileListSerie>(isSerie)

	// Filter available series
	const isAvailable = await Promise.all(series.map((serie) => isSerieAvailable(serie, lang)))
	series = series.filter((_, index) => isAvailable[index])

	// Sort series by the first set release date
	const tmp: Array<[FileListSerie, FileListSet | undefined]> = await Promise.all(series.map(async (it) => [
		it,
		(await getSets(it.data.id, lang))
			.reduce<FileListSet | undefined>((p, c) => p ? p.data.releaseDate < c.data.releaseDate ? p : c : c, undefined) as FileListSet
	] as [FileListSerie, FileListSet]))

	return tmp.sort((a, b) => (a[1] ? a[1].data.releaseDate : '0') > (b[1] ? b[1].data.releaseDate : '0') ? 1 : -1).map((it) => it[0])
}

export async function serieToSerieSimple(serieFile: FileListSerie, lang: SupportedLanguages): Promise<SerieResume> {
	const serie = serieFile.data
	const setsTmp = await getSets(serie.id, lang)
	const sets = await Promise.all(setsTmp
		.map((el) => setToSetSimple(el, lang)))
	const logo = sets.find((set) => set.logo)?.logo
	return {
		id: serie.id,
		logo,
		name: serie.name[lang] as string
	}
}

export async function serieToSerieSingle(serieFile: FileListSerie, lang: SupportedLanguages): Promise<SerieSingle> {
	const serie = serieFile.data
	const setsTmp = await getSets(serie.id, lang)
	const sets = await Promise.all(setsTmp
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
