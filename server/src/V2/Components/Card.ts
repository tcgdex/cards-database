import Cache from '@cachex/memory'
import { objectClean, objectKeys, objectOmit } from '@dzeio/object-util'
import { SupportedLanguages } from '@tcgdex/sdk'
import type { Card, CardResume } from '../../api'
import dataTMP from '../../../generated/cards.json'
import type { CompiledCard } from '../../../../scripts/compiler/interfaces'
import { getCardMarketPrice } from '../../libs/providers/cardmarket'
import { getTCGPlayerPrice } from '../../libs/providers/tcgplayer'
import { executeQuery, type Query } from '../../libs/QueryEngine/filter'
import { findOneSet, loadSet } from './Set'
import { Version } from '../../interfaces'

const data = dataTMP as Array<CompiledCard>

// Compile data subsets
const list: Record<string, CompiledCard> = {}
const langLists: Record<string, Array<CompiledCard>> = {}

data.forEach((it) => {
	list[it.id.toLowerCase()] = it
	objectKeys(it.name).forEach((lang) => {
		langLists[lang] ??= []
		langLists[lang].push(it)
	})
})

// setup cache
const cache = new Cache()

export async function getAllCards(lang: SupportedLanguages, version: Version = 'full'): Promise<Array<Card>> {
	return Promise.all((langLists[lang]).map((it) => loadCard(lang, it.id, version as 'full'))) as Promise<Array<Card>>
}

export function getCompiledCard(lang: SupportedLanguages, id: string): any {
	return list[id.toLowerCase()]
}

/**
 * Function that do the hard work of loading the card with the external processors
 *
 * It should run once until it's timeout runout :D
 * @param lang
 * @param id
 */
async function loadCard(lang: SupportedLanguages, id: string, version?: 'full'): Promise<Card | null>
async function loadCard(lang: SupportedLanguages, id: string, version: 'brief'): Promise<CardResume | null>
async function loadCard(lang: SupportedLanguages, id: string, version: 'full' | 'brief' = 'full'): Promise<Card | CardResume | null> {
	if (version === 'brief') {
		const card = list[id]
		if (!card) {
			return null
		}
		return {
			// resume
			id: card.id,
			localId: card.localId,
			name: card.name[lang]!,
			image: card.image?.[lang],
		}
	}
	const key = `${id}${lang}`.toLowerCase()
	const value = cache.get<Card>(key)

	// expect the cache to be present
	if (value) {
		return value
	}
	// console.time(`loading card ${id}${lang}`)

	// console.time('fetching DB')
	const card = list[id]
	if (!card) {
		return null
	}
	// console.timeEnd('fetching DB')

	// console.time('loading providers')
	const [cardmarket, tcgplayer] = await Promise.all([
		getCardMarketPrice(card),
		getTCGPlayerPrice(card),
	])
	// console.timeEnd('loading providers')
	// console.time('remapping card')
	const res = {
		// resume
		id: card.id,
		localId: card.localId,
		name: card.name[lang]!,
		image: card.image?.[lang],

		// full
		illustrator: card.illustrator,
		rarity: card.rarity[lang]!,
		category: card.category[lang]!,
		//variants: card.variants,
		// variants_detailed: card.variants,
		// set: await findOneSet(lang, query),
		dexId: card.dexId,
		hp: card.hp,
		types: card.types?.map((it) => it[lang]!),
		evolveFrom: card.evolveFrom?.[lang],
		weight: card.weight,
		description: card.description?.[lang],
		level: card.level,
		stage: card.stage?.[lang],
		suffix: card.suffix?.[lang],
		item: card.item ? {
			name: card.item.name[lang]!,
			effect: card.item.effect[lang]!
		} : undefined,
		abilities: card.abilities?.map((it) => ({
			type: it.type[lang]!,
			name: it.name[lang]!,
			effect: it.effect[lang]!
		})),
		attacks: card.attacks?.map((it) => ({
			cost: it.cost?.map((cost) => cost[lang]!),
			name: it.name[lang]!,
			effect: it.effect?.[lang],
			damage: it.damage
		})),
		weaknesses: card.weaknesses?.map((it) => ({
			type: it.type[lang]!,
			value: it.value
		})),
		resistances: card.resistances?.map((it) => ({
			type: it.type[lang]!,
			value: it.value
		})),
		retreat: card.retreat,
		effect: card.effect?.[lang],
		trainerType: card.trainerType?.[lang],
		energyType: card.energyType?.[lang],
		regulationMark: card.regulationMark,
		legal: card.legal,

		updated: card.updated,

		set: await loadSet(card.set, lang, 'brief'),

		pricing: {
			cardmarket: cardmarket,
			tcgplayer: tcgplayer
		}
	} satisfies Card
	// console.timeEnd('remapping card')

	// console.time('cleaning card')
	objectClean(res)
	// console.timeEnd('cleaning card')

	cache.set(key, res, 60 * 60)
	// console.timeEnd(`loading card ${id}${lang}`)
	return res
}

export async function getCardById(lang: SupportedLanguages, id: string) {
	return loadCard(lang, id)
}

export async function findCards(lang: SupportedLanguages, query: Query<Card>, version: Version = 'full') {
	return executeQuery(await getAllCards(lang), query).data
}

export async function findOneCard(lang: SupportedLanguages, query: Query<Card>) {
	const res = await findCards(lang, query)
	if (res.length === 0) {
		return undefined
	}
	return res[0]
}

export function toBrief(card: Card): CardResume {
	return {
		id: card.id,
		localId: card.localId,
		name: card.name,
		image: card.image
	}
}
