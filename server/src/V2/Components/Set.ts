import type { Set as SDKSet, SetResume, SupportedLanguages } from '@tcgdex/sdk'
import { executeQuery, type Query } from '../../libs/QueryEngine/filter'
import { objectKeys, objectOmit } from '@dzeio/object-util'

import dataTMP from '../../../generated/sets.json'
import { CompiledSet } from '../../../../scripts/compiler/interfaces'
import { Version } from '../../interfaces'
import { loadCard } from './Card'
import { Set } from '../../api'
import { loadSerie } from './Serie'

const data = dataTMP as Array<CompiledSet>

// Compile data subsets
const list: Record<string, CompiledSet> = {}
export const langLists: Record<string, Array<CompiledSet>> = {}

data.forEach((it) => {
	list[it.id.toLowerCase()] = it
	objectKeys(it.name).forEach((lang) => {
		langLists[lang] ??= []
		langLists[lang].push(it)
	})
})

export async function getAllSets(lang: SupportedLanguages, version: Version = 'full'): Promise<Array<SDKSet>> {
	return Promise.all((langLists[lang] as Array<CompiledSet>).map((it) => transformSet(it, lang, version as 'full')))
}


async function transformSet(set: CompiledSet, lang: SupportedLanguages, version?: 'full'): Promise<SDKSet>
async function transformSet(set: CompiledSet, lang: SupportedLanguages, version: 'brief'): Promise<SetResume>
async function transformSet(set: CompiledSet, lang: SupportedLanguages, version: Version = 'full'): Promise<SDKSet | SetResume> {
	const brief = {
		id: set.id,
		name: set.name[lang]!,
		logo: set.logo?.[lang],
		symbol: set.symbol,
		cardCount: {
			total: set.cards.length,
			official: set.cardCount.official
		}
	}
	if (version === 'brief') {
		return brief
	}
	return {
		...objectOmit(set, 'thirdParty'),
		...brief,
		releaseDate: set.releaseDate[lang]!,
		// @ts-expect-error tmp handle of error :D
		cards: await Promise.all(set.cards.map((it) => loadCard(lang, it, 'brief'))),
		serie: (await loadSerie(set.serie, lang, 'brief'))!
	} satisfies Set
}

export async function findSets(lang: SupportedLanguages, query: Query<SDKSet>, version: Version = 'full') {
	return executeQuery(await getAllSets(lang, version), query).data
}

export async function findOneSet(lang: SupportedLanguages, query: Query<SDKSet>) {
	const res = await findSets(lang, query)
	if (res.length === 0) {
		return undefined
	}
	return res[0]
}

export async function loadSet(id: string, lang: SupportedLanguages, version: 'full'): Promise<SDKSet | null>
export async function loadSet(id: string, lang: SupportedLanguages, version: 'brief'): Promise<SetResume | null>
export async function loadSet(id: string, lang: SupportedLanguages, version: Version = 'full'): Promise<SDKSet | SetResume | null> {
	const tmp = langLists[lang].find((it) => it.id.toLowerCase() === id.toLowerCase())
	if (!tmp) {
		return null
	}
	return transformSet(tmp, lang, version as 'full')
}

export function setToBrief(set: SDKSet): SetResume {
	return {
		id: set.id,
		name: set.name,
		logo: set.logo,
		symbol: set.symbol,
		cardCount: {
			total: set.cardCount.total,
			official: set.cardCount.official
		}
	}
}
