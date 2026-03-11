import type { Serie as SDKSerie, SupportedLanguages } from '@tcgdex/sdk'
import { executeQuery, type Query } from '../../libs/QueryEngine/filter'

import dataTMP from '../../../generated/series.json'
import { CompiledSerie } from '../../../../scripts/compiler/interfaces'
import { objectKeys } from '@dzeio/object-util'
import { Version } from '../../interfaces'
import { loadSet } from './Set'
import type { Serie, SerieResume, SetResume } from '../../api'

// Compile data subsets
const list: Record<string, CompiledSerie> = {}
const langLists: Record<string, Array<CompiledSerie>> = {}

const data = dataTMP as Array<CompiledSerie>

data.forEach((it) => {
	list[it.id.toLowerCase()] = it
	objectKeys(it.name).forEach((lang) => {
		langLists[lang] ??= []
		langLists[lang].push(it)
	})
})

export async function getAllSeries(lang: SupportedLanguages, version: Version = 'full'): Promise<Array<Serie>> {
	return (await Promise.all((langLists[lang]).map((it) => loadSerie(it.id, lang, version))))
		.filter((it) => !!it)
}

export async function findSeries(lang: SupportedLanguages, query: Query<Serie>) {
	return executeQuery(await getAllSeries(lang), query).data
}


export async function loadSerie(id: string, lang: SupportedLanguages, version?: Version): Promise<Serie | undefined>
export async function loadSerie(id: string, lang: SupportedLanguages, version: 'brief'): Promise<SerieResume | undefined>
export async function loadSerie(id: string, lang: SupportedLanguages, version: Version = 'full'): Promise<Serie | SerieResume | undefined> {
	const serie = langLists[lang].find((it) => it.id.toLowerCase() === id.toLowerCase())
	if (!serie) {
		return undefined
	}
	const brief = {
		id: serie.id,
		name: serie.name[lang]!
	} satisfies SerieResume
	if (version === 'brief') {
		return brief
	}
	return {
		...serie,
		...brief,
		// @ts-expect-error
		firstSet: await loadSet(serie.firstSet, lang, 'brief'),
		// @ts-expect-error
		lastSet: await loadSet(serie.lastSet, lang, 'brief'),
		// @ts-expect-error
		sets: await Promise.all(serie.sets.map<SetResume>((it) => loadSet(it, lang, 'brief')))
	} satisfies Serie
}

export async function findOneSerie(lang: SupportedLanguages, query: Query<SDKSerie>) {
	const res = await findSeries(lang, query)
	if (res.length === 0) {
		return undefined
	}
	return res[0]
}

export function serieToBrief(set: Serie): SerieResume {
	return {
		id: set.id,
		name: set.name,
		logo: set.logo
	}
}
