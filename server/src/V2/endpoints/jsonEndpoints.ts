import { objectKeys } from '@dzeio/object-util'
import type { Card as SDKCard, SupportedLanguages } from '@tcgdex/sdk'
import apicache from 'apicache'
import express, { type Request, type Response } from 'express'
import { Errors, sendError } from '../../libs/Errors'
import type { Query } from '../../libs/QueryEngine/filter'
import { recordToQuery } from '../../libs/QueryEngine/parsers'
import { betterSorter, checkLanguage, unique } from '../../util'
import { getAllCards, findOneCard, findCards, toBrief, getCardById, getCompiledCard } from '../Components/Card'
import { findOneSet, findSets, setToBrief } from '../Components/Set'
import { findOneSerie, findSeries, serieToBrief } from '../Components/Serie'
import { findOneSpecies, findSpecies, getSpeciesByDexId, speciesToBrief } from '../Components/Pokedex'
import { listSKUs } from '../../libs/providers/tcgplayer'

type CustomRequest = Request & {
	/**
	 * disable caching
	 */
	DO_NOT_CACHE?: boolean
	advQuery?: Query
}

const server = express.Router()

const endpointToField: Record<string, keyof SDKCard> = {
	categories: 'category',
	'energy-types': 'energyType',
	hp: 'hp',
	illustrators: 'illustrator',
	rarities: 'rarity',
	'regulation-marks': 'regulationMark',
	retreats: 'retreat',
	stages: "stage",
	suffixes: "suffix",
	"trainer-types": "trainerType",

	// fields that need special care
	'dex-ids': 'dexId',
	sets: "set",
	types: "types",
	variants: "variants",
}

function flattenQueryValues(value: unknown): Array<string> {
	if (typeof value === 'undefined' || value === null) {
		return []
	}
	if (Array.isArray(value)) {
		return value.flatMap((entry) => flattenQueryValues(entry))
	}

	const raw = value.toString()
	const separator = raw.includes('|') ? '|' : ','
	return raw
		.split(separator)
		.map((segment) => segment.trim())
		.filter((segment) => segment.length > 0)
}

function parseDexIdFilters(...values: Array<unknown>): { dexIds: Array<number>, invalid: Array<string> } {
	const tokens = values.flatMap((value) => flattenQueryValues(value))
	const dexIds = new Set<number>()
	const invalid = new Set<string>()

	for (const token of tokens) {
		const parsed = Number.parseInt(token, 10)
		if (Number.isNaN(parsed)) {
			invalid.add(token)
		} else {
			dexIds.add(parsed)
		}
	}

	return {
		dexIds: Array.from(dexIds),
		invalid: Array.from(invalid)
	}
}

function parseTypeFilters(...values: Array<unknown>): { normalized: Array<string>, labels: Array<string> } {
	const tokens = values.flatMap((value) => flattenQueryValues(value))
	const normalized = new Map<string, string>()

	for (const token of tokens) {
		const lower = token.toLowerCase()
		if (!normalized.has(lower)) {
			normalized.set(lower, toTitleCase(token))
		}
	}

	return {
		normalized: Array.from(normalized.keys()),
		labels: Array.from(normalized.values()),
	}
}

function toTitleCase(value: string): string {
	const trimmed = value.trim()
	if (!trimmed) {
		return ''
	}
	return trimmed
		.split(/[\s-]+/)
		.map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1).toLowerCase())
		.join(' ')
}

function parsePositiveInt(value: unknown, fallback: number): number {
	if (typeof value === 'number' && Number.isFinite(value)) {
		return value > 0 ? Math.trunc(value) : fallback
	}
	if (typeof value === 'string' && value.trim().length > 0) {
		const parsed = Number.parseInt(value, 10)
		return Number.isNaN(parsed) || parsed <= 0 ? fallback : parsed
	}
	return fallback
}

server
	// Midleware that handle caching only in production and on GET requests
	.use(apicache.middleware('1 day', (req: CustomRequest, res: Response) => !req.DO_NOT_CACHE && res.statusCode < 400 && process.env.NODE_ENV === 'production' && req.method === 'GET', {}))

	// .get('/cache/performance', (req, res) => {
	// 	res.json(apicache.getPerformance())
	// })

	// // add route to display cache index
	// .get('/cache/index', (req, res) => {
	// 	res.json(apicache.getIndex())
	// })

	// Midleware that handle url transformation
	.use((req: CustomRequest, _, next) => {
		// this is ugly BUT it fix the problem with + not becoming spaces
		req.url = req.url.replace(/\+/g, ' ')
		next()
	})

	// handle Query builder
	.use((req: CustomRequest, _, next) => {
		// handle no query
		if (!req.query) {
			next()
			return
		}

		req.advQuery = recordToQuery(req.query as Record<string, string | Array<string>>)

		next()
	})

	/**
	 * Allows the user to fetch a random card/set/serie from the database
	 */
	.get('/:lang/random/:what', async (req: CustomRequest, res): Promise<void> => {
		const { lang, what } = req.params

		if (!checkLanguage(lang)) {
			sendError(Errors.LANGUAGE_INVALID, res, { lang })
			return
		}

		// biome-ignore lint/style/noNonNullAssertion: <explanation>
		const query: Query = req.advQuery!

		let data: Array<SDKCard | any> = []
		switch (what.toLowerCase()) {
			case 'card':
				data = await findCards(lang, query)
				break
			case 'set':
				data = await findSets(lang, query)
				break
			case 'serie':
				data = await findSeries(lang, query)
				break
			case 'pokedex':
				data = await findSpecies(lang, query)
				break
			default:
				sendError(Errors.NOT_FOUND, res, { details: `You can only run random requests on "card", "set", "serie" or "pokedex" while you did on "${what}"` })
				return
		}
		const item = Math.min(data.length - 1, Math.max(0, Math.round(Math.random() * data.length)))
		req.DO_NOT_CACHE = true
		res.json(data[item])
	})


	/**
	 * Search cards by Pokémon type and/or Pokédex ID
	 */
	.get('/:lang/pokemon/search', async (req: CustomRequest, res) => {
		const { lang } = req.params

		if (!checkLanguage(lang)) {
			sendError(Errors.LANGUAGE_INVALID, res, { lang })
			return
		}

		const dexFilters = parseDexIdFilters(req.query.dexId, req.query.dexIds)
		if (dexFilters.invalid.length > 0) {
			sendError(Errors.INVALID_QUERY, res, { details: `Invalid dexId values: ${dexFilters.invalid.join(', ')}` })
			return
		}

		const typeFilters = parseTypeFilters(req.query.type, req.query.types)

		if (dexFilters.dexIds.length === 0 && typeFilters.normalized.length === 0) {
			sendError(Errors.INVALID_QUERY, res, { details: 'You must supply at least one dexId or type filter' })
			return
		}

		const page = parsePositiveInt(req.query.page ?? req.query['pagination:page'], 1)
		const pageSize = Math.min(Math.max(parsePositiveInt(
			req.query.pageSize ?? req.query.limit ?? req.query['pagination:itemsPerPage'],
			50
		), 1), 100)

		const dexIdSet = new Set(dexFilters.dexIds)
		const typeSet = new Set(typeFilters.normalized.map((value) => value.toLowerCase()))

		const cards = await getAllCards(lang as SupportedLanguages)
		const filteredCards = cards.filter((card) => {
			const matchesDex = dexIdSet.size === 0 || (card.dexId?.some((dex) => dexIdSet.has(dex)) ?? false)
			const matchesTypes = typeSet.size === 0 || (card.types?.some((cardType) => cardType && typeSet.has(cardType.toLowerCase())) ?? false)
			return matchesDex && matchesTypes
		})

		const total = filteredCards.length
		const totalPages = total === 0 ? 0 : Math.ceil(total / pageSize)
		const safePage = totalPages === 0 ? 1 : Math.min(page, totalPages)
		const startIndex = Math.max(safePage - 1, 0) * pageSize
		const pagedCards = filteredCards.slice(startIndex, startIndex + pageSize).map(toBrief)

		res.json({
			filters: {
				dexIds: dexFilters.dexIds,
				types: typeFilters.labels,
			},
			pagination: {
				page: safePage,
				pageSize,
				total,
				totalPages,
			},
			cards: pagedCards,
		})
	})


	/**
	 * Listing Endpoint
	 * ex: /v2/en/cards
	 */
	.get('/:lang/:endpoint', async (req: CustomRequest, res): Promise<void> => {
		let { lang, endpoint } = req.params

		const query: Query = req.advQuery ?? {}

		if (endpoint.endsWith('.json')) {
			endpoint = endpoint.replace('.json', '')
		}

		if (!checkLanguage(lang)) {
			sendError(Errors.LANGUAGE_INVALID, res, { lang })
			return
		}

		let result: unknown

		switch (endpoint) {
			case 'cards': {
				if ('set' in query) {
					const tmp = query.set
					delete query.set
					query.$or = [{
						'set.id': tmp
					}, {
						'set.name': tmp
					}]
				}
				result = (await findCards(lang, query))
					.map(toBrief)
				break
			}

			case 'sets': {
				if ('serie' in query) {
					const tmp = query.serie
					delete query.serie
					query.$or = [{
						'serie.id': tmp
					}, {
						'serie.name': tmp
					}]
				}
				result = (await findSets(lang, query)).map(setToBrief)
				break
			}
			case 'series':
				result = (await findSeries(lang, query))
					.map(serieToBrief)
				break

			case 'pokedex':
				result = (await findSpecies(lang, query))
					.map(speciesToBrief)
				break

			case 'categories':
			case "energy-types":
			case "hp":
			case "illustrators":
			case "rarities":
			case "regulation-marks":
			case "retreats":
			case "stages":
			case "suffixes":
			case "trainer-types":
				result = unique(
					(await getAllCards(lang))
						.map((c) => c[endpointToField[endpoint]] as string)
						.filter((c) => c)
				).sort(betterSorter)
				break
			case "types":
			case "dex-ids":
				result = unique(
					(await getAllCards(lang))
						.map((c) => c[endpointToField[endpoint]] as Array<string>)
						.filter((c) => c)
						.reduce((p, c) => [...p, ...c], [] as Array<string>)
				).sort(betterSorter)
				break
			case "variants":
				result = unique(
					(await getAllCards(lang))
						.map((c) => objectKeys(c.variants ?? {}) as Array<string>)
						.filter((c) => c)
						.reduce((p, c) => [...p, ...c], [] as Array<string>)
				).sort()
				break
			default:
				sendError(Errors.NOT_FOUND, res, { endpoint })
				return
		}

		if (!result) {
			sendError(Errors.NOT_FOUND, res)
		}
		res.json(result)
	})

	/**
	 * Listing Endpoint
	 * ex: /v2/en/cards/base1-1
	 */
	.get('/:lang/:endpoint/:id', async (req: CustomRequest, res) => {
		// console.time('request')
		let { id, lang, endpoint } = req.params

		if (id.endsWith('.json')) {
			id = id.replace('.json', '')
		}

		id = id.toLowerCase()

		if (!checkLanguage(lang)) {
			return sendError(Errors.LANGUAGE_INVALID, res, { lang })
		}

		let result: unknown
		switch (endpoint) {
			case 'cards':
				// console.time('card')
				result = await getCardById(lang, id)
				if (!result) {
					result = await findOneCard(lang, { name: id })
				}
				// console.timeEnd('card')
				break

			case 'sets':
				result = await findOneSet(lang, { id })
				if (!result) {
					result = await findOneSet(lang, { name: id })
				}
				break

			case 'series':
				result = await findOneSerie(lang, { id })
				if (!result) {
					result = await findOneSerie(lang, { name: id })
				}
				break

			case 'pokedex': {
				// Allow lookup by dexId number or name
				const dexId = parseInt(id, 10)
				if (!isNaN(dexId)) {
					result = await getSpeciesByDexId(lang, dexId)
				}
				if (!result) {
					// Try by name
					result = await findOneSpecies(lang, { name: id })
				}
				if (!result) {
					// Try by English name
					result = await findOneSpecies(lang, { englishName: id })
				}
				break
			}

			case 'dex-ids': {
				result = {
					name: parseInt(id, 10),
					// @ts-expect-error current behavior is normal
					cards: (await findCards(lang, { dexId: { $eq: parseInt(id, 10) }}))
						.map(toBrief)
				}
				break
			}
			default:
				if (!endpointToField[endpoint]) {
					break
				}
				result = {
					name: id,
					cards: (await findCards(lang, { [endpointToField[endpoint]]: id }))
						.map(toBrief)
				}
		}

		// console.timeEnd('request')
		if (!result) {
			sendError(Errors.NOT_FOUND, res)
			return
		}
		return res.send(result)

	})

	/**
	 * sub id Endpoint (for the set endpoint only currently)
	 * ex: /v2/en/sets/base1/1
	 */
	.get('/:lang/:endpoint/:id/:subid', async (req: CustomRequest, res) => {
		let { id, lang, endpoint, subid } = req.params

		if (subid.endsWith('.json')) {
			subid = subid.replace('.json', '')
		}

		id = id.toLowerCase()
		subid = subid.toLowerCase()

		if (!checkLanguage(lang)) {
			return sendError(Errors.LANGUAGE_INVALID, res, { lang })
		}

		let result: unknown
		switch (endpoint) {
			case 'cards':
				if (subid === 'skus') {
					result = await listSKUs(getCompiledCard(lang, id))
				}
				break
			case 'sets':
				// allow the dev to use a non prefixed value like `10` instead of `010` for newer sets
				// @ts-expect-error normal behavior until the filtering is more fiable
				result = await findOneCard(lang, { localId: { $or: [subid.padStart(3, '0'), subid] }, $or: [{ 'set.id': id }, { 'set.name': id }] })
				break
		}
		if (!result) {
			return sendError(Errors.NOT_FOUND, res)
		}
		return res.send(result)
	})

export default server
