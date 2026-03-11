import type { SupportedLanguages } from '@tcgdex/sdk'
import { executeQuery, type Query } from '../../libs/QueryEngine/filter'
import { objectKeys, objectOmit } from '@dzeio/object-util'

import dataTMP from '../../../generated/sets.json'
import { CompiledSet } from '../../../../scripts/compiler/interfaces'
import { Version } from '../../interfaces'
import { loadCard } from './Card'
import { Set as SDKSet, SetResume, CardResume } from '../../api'
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
	return Promise.all((langLists[lang] as Array<CompiledSet>).map((it) => loadSet(it.id, lang, version as 'full') as Promise<SDKSet>))
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

export async function loadSet(id: string, lang: SupportedLanguages, version: 'full'): Promise<SDKSet | undefined>
export async function loadSet(id: string, lang: SupportedLanguages, version: 'brief'): Promise<SetResume | undefined>
export async function loadSet(id: string, lang: SupportedLanguages, version: Version = 'full'): Promise<SDKSet | SetResume | undefined> {
	const set = langLists[lang].find((it) => it.id.toLowerCase() === id.toLowerCase())
	if (!set) {
		return undefined
	}
	const brief = {
		id: set.id,
		name: set.name[lang]!,
		logo: set.logo?.[lang],
		symbol: set.symbol,
		cardCount: {
			total: set.cards.length,
			official: set.cardCount.official
		}
	} satisfies SetResume
	if (version === 'brief') {
		return brief
	}
	return {
		...objectOmit(set, 'thirdParty'),
		...brief,
		releaseDate: set.releaseDate[lang]!,
		cards: await Promise.all(set.cards.map((it) => loadCard(lang, it, 'brief') as Promise<CardResume>)),
		serie: (await loadSerie(set.serie, lang, 'brief'))!,
		boosters: set.boosters?.map((it) => ({
			id: it.id,
			name: it.name[lang]!
		}))
	} satisfies SDKSet
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
