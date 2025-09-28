import type { Set as SDKSet, SetResume, SupportedLanguages } from '@tcgdex/sdk'
import { executeQuery, type Query } from '../../libs/QueryEngine/filter'
import { objectKeys, objectOmit } from '@dzeio/object-util'

import dataTMP from '../../../generated/sets.json'
import { CompiledSet } from '../../../../scripts/compiler/interfaces'
import { Version } from '../../interfaces'

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

type MappedSet = any // (typeof en)[number]

export async function getAllSets(lang: SupportedLanguages, version: Version = 'full'): Promise<Array<SDKSet>> {
	return Promise.all((langLists[lang] as Array<MappedSet>).map((it) => transformSet(it, lang, version as 'full')))
}


async function transformSet(set: MappedSet, lang: SupportedLanguages, version?: 'full'): Promise<SDKSet>
async function transformSet(set: MappedSet, lang: SupportedLanguages, version: 'brief'): Promise<SetResume>
async function transformSet(set: MappedSet, lang: SupportedLanguages, version: Version = 'full'): Promise<SDKSet | SetResume> {
	if (version === 'brief') {
		return {
			id: set.id,
			name: set.name[lang]!,
			logo: set.logo[lang]!,
			symbol: set.symbol,
			cardCount: {
				total: set.cardCount.total,
				official: set.cardCount.official
			}
		}
	}
	return {
		...objectOmit(set, 'thirdParty'),
		// pricing: {
		// 	cardmarket: await getCardMarketPrice(card),
		// 	tcgplayer: await getTCGPlayerPrice(card)
		// }
	}
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

export async function loadSet(id: string, lang: SupportedLanguages, version: 'full'): Promise<SDKSet>
export async function loadSet(id: string, lang: SupportedLanguages, version: 'brief'): Promise<SetResume>
export async function loadSet(id: string, lang: SupportedLanguages, version: Version = 'full'): Promise<SDKSet | SetResume> {
	const tmp = langLists[lang].find((it) => it.id === id)
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
