import type { SupportedLanguages } from '@tcgdex/sdk'
import { executeQuery, type Query } from '../../libs/QueryEngine/filter'

import de from '../../../generated/de/pokedex.json'
import en from '../../../generated/en/pokedex.json'
import es from '../../../generated/es/pokedex.json'
import esmx from '../../../generated/es-mx/pokedex.json'
import fr from '../../../generated/fr/pokedex.json'
import id from '../../../generated/id/pokedex.json'
import it from '../../../generated/it/pokedex.json'
import ja from '../../../generated/ja/pokedex.json'
import ko from '../../../generated/ko/pokedex.json'
import nl from '../../../generated/nl/pokedex.json'
import pl from '../../../generated/pl/pokedex.json'
import ptbr from '../../../generated/pt-br/pokedex.json'
import ptpt from '../../../generated/pt-pt/pokedex.json'
import pt from '../../../generated/pt/pokedex.json'
import ru from '../../../generated/ru/pokedex.json'
import th from '../../../generated/th/pokedex.json'
import zhcn from '../../../generated/zh-cn/pokedex.json'
import zhtw from '../../../generated/zh-tw/pokedex.json'

/**
 * Pokédex species entry as returned by the API
 */
export interface PokedexSpecies {
	dexId: number
	name: string
	englishName: string
	forms: Array<string>
	image: string
	evolvesFrom: number | null
	evolvesTo: Array<number>
}

/**
 * Brief summary for list endpoints
 */
export interface PokedexSpeciesResume {
	dexId: number
	name: string
	image: string
	evolvesFrom: number | null
	evolvesTo: Array<number>
}

const pokedex = {
	en: en,
	fr: fr,
	es: es,
	'es-mx': esmx,
	it: it,
	pt: pt,
	'pt-br': ptbr,
	'pt-pt': ptpt,
	de: de,
	nl: nl,
	pl: pl,
	ru: ru,
	ja: ja,
	ko: ko,
	'zh-tw': zhtw,
	id: id,
	th: th,
	'zh-cn': zhcn,
} as const

type MappedSpecies = (typeof en)[number]

/**
 * Get all Pokémon species for a given language
 */
export async function getAllSpecies(lang: SupportedLanguages): Promise<Array<PokedexSpecies>> {
	return (pokedex[lang] as Array<MappedSpecies>).map(transformSpecies)
}

function transformSpecies(species: MappedSpecies): PokedexSpecies {
	return {
		dexId: species.dexId,
		name: species.name,
		englishName: species.englishName,
		forms: species.forms,
		image: species.image,
		evolvesFrom: species.evolvesFrom,
		evolvesTo: species.evolvesTo
	}
}

/**
 * Find species matching a query
 */
export async function findSpecies(lang: SupportedLanguages, query: Query<PokedexSpecies>) {
	return executeQuery(await getAllSpecies(lang), query).data
}

/**
 * Find a single species by query
 */
export async function findOneSpecies(lang: SupportedLanguages, query: Query<PokedexSpecies>) {
	const res = await findSpecies(lang, query)
	if (res.length === 0) {
		return undefined
	}
	return res[0]
}

/**
 * Get a species by Dex ID
 */
export async function getSpeciesByDexId(lang: SupportedLanguages, dexId: number): Promise<PokedexSpecies | undefined> {
	const all = await getAllSpecies(lang)
	return all.find((s) => s.dexId === dexId)
}

/**
 * Convert to brief format for list responses
 */
export function speciesToBrief(species: PokedexSpecies): PokedexSpeciesResume {
	return {
		dexId: species.dexId,
		name: species.name,
		image: species.image,
		evolvesFrom: species.evolvesFrom,
		evolvesTo: species.evolvesTo
	}
}

