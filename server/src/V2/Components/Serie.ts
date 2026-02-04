import type { Serie as SDKSerie, SerieResume, SupportedLanguages } from '@tcgdex/sdk'
import { executeQuery, type Query } from '../../libs/QueryEngine/filter'

import series from '../../../generated/series.json'
import { CompiledSerie } from '../../../../scripts/compiler/interfaces'
import { objectKeys } from '@dzeio/object-util'
import { Version } from '../../interfaces'
import { loadSet } from './Set'
import Cache from '@cachex/memory'
import type { Serie } from '../../api'

// Compile data subsets
const list: Record<string, CompiledSerie> = {}
const langLists: Record<string, Array<CompiledSerie>> = {}

series.forEach((it) => {
	list[it.id.toLowerCase()] = it
	objectKeys(it.name).forEach((lang) => {
		langLists[lang] ??= []
		langLists[lang].push(it)
	})
})

// setup cache
const cache = new Cache()

type MappedSerie = any // (typeof en)[number]

export async function getAllSeries(lang: SupportedLanguages, version: Version = 'full'): Promise<Array<SDKSerie>> {
	return (await Promise.all((langLists[lang] as Array<MappedSerie>).map((it) => loadSerie(it.id, lang, version))))
		.filter((it) => !!it)
}

export async function findSeries(lang: SupportedLanguages, query: Query<SDKSerie>) {
	return executeQuery(await getAllSeries(lang), query).data
}


export async function loadSerie(id: string, lang: SupportedLanguages, version?: Version): Promise<CompiledSerie | null>
export async function loadSerie(id: string, lang: SupportedLanguages, version: 'brief'): Promise<SerieResume | null>
export async function loadSerie(id: string, lang: SupportedLanguages, version: Version = 'full'): Promise<CompiledSerie | SerieResume | null> {
	const serie = langLists[lang].find((it) => it.id.toLowerCase() === id.toLowerCase())
	if (!serie) {
		return null
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
		sets: await Promise.all(serie.sets.map((it) => loadSet(it, lang, 'brief')))
	} satisfies Serie
}

export async function findOneSerie(lang: SupportedLanguages, query: Query<SDKSerie>) {
	const res = await findSeries(lang, query)
	if (res.length === 0) {
		return undefined
	}
	return res[0]
}

export function serieToBrief(set: CompiledSerie): SerieResume {
	return {
		id: set.id,
		name: set.name,
		logo: set.logo
	}
}
