import { objectKeys, objectLoop } from '@dzeio/object-util'
import { Card as SDKCard } from '@tcgdex/sdk'
import apicache from 'apicache'
import express from 'express'
import { Query } from '../../interfaces'
import { betterSorter, checkLanguage, sendError, unique } from '../../util'
import Card from '../Components/Card'
import Serie from '../Components/Serie'
import Set from '../Components/Set'

const server = express.Router()

const endpointToField: Record<string, keyof SDKCard> = {
	"categories": 'category',
	'energy-types': 'energyType',
	"hp": 'hp',
	'illustrators': 'illustrator',
	"rarities": 'rarity',
	'regulation-marks': 'regulationMark',
	"retreats": 'retreat',
	"stages": "stage",
	"suffixes": "suffix",
	"trainer-types": "trainerType",

	// fields that need special care
	'dex-ids': 'dexId',
	"sets": "set",
	"types": "types",
	"variants": "variants",
}

server
	// Midleware that handle caching
	.use(apicache.middleware('1 day', (req: Request) => req.method === 'GET', {}))

	// .get('/cache/performance', (req, res) => {
	// 	res.json(apicache.getPerformance())
	// })

	// // add route to display cache index
	// .get('/cache/index', (req, res) => {
	// 	res.json(apicache.getIndex())
	// })

	// Midleware that handle url transformation
	.use((req, _, next) => {
		// this is ugly BUT it fix the problem with + not becoming spaces
		req.url = req.url.replace(/\+/g, ' ')
		next()
	})

	// handle Query builder
	.use((req, _, next) => {
		const items: Query = {
			filters: undefined,
			sort: undefined,
			pagination: undefined
		}

		objectLoop(req.query as Record<string, string | Array<string>>, (value: string | Array<string>, key: string) => {
			if (!key.includes(':')) {
				key = 'filters:' + key
			}
			const [cat, item] = key.split(':', 2) as ['filters', string]
			if (!items[cat]) {
				items[cat] = {}
			}
			const finalValue = Array.isArray(value) ? value.map((it) => isNaN(parseInt(it)) ? it : parseInt(it)) : isNaN(parseInt(value)) ? value : parseInt(value)
			// @ts-expect-error normal behavior
			items[cat][item] = finalValue

		})
		console.log(items)
		// @ts-expect-error normal behavior
		req.advQuery = items

		next()
	})


	/**
	 * Listing Endpoint
	 * ex: /v2/en/cards
	 */
	.get('/:lang/:endpoint', (req, res): void => {
		let { lang, endpoint } = req.params

		// @ts-expect-error normal behavior
		const query: Query = req.advQuery

		if (endpoint.endsWith('.json')) {
			endpoint = endpoint.replace('.json', '')
		}

		if (!checkLanguage(lang)) {
			return sendError('LanguageNotFoundError', res, lang)
		}

		let result: any

		switch (endpoint) {
			case 'cards':
				result = Card
					.find(lang, query)
					.map((c) => c.resume())
				break

			case 'sets':
				result = Set
					.find(lang, query)
					.map((c) => c.resume())
				break
			case 'series':
				result = Serie
					.find(lang, query)
					.map((c) => c.resume())
				break
			case 'categories':
			case "energy-types":
			case "hp":
			case "illustrators":
			case "rarities":
			case "regulation-marks":
			case "retreats":
			case "series":
			case "stages":
			case "suffixes":
			case "trainer-types":
				result = unique(
					Card.getAll(lang)
						.map((c) => c[endpointToField[endpoint]] as string)
						.filter((c) => c)
				).sort(betterSorter)
				break
			case "types":
			case "dex-ids":
				result = unique(
					Card.getAll(lang)
						.map((c) => c[endpointToField[endpoint]] as Array<string>)
						.filter((c) => c)
						.reduce((p, c) => [...p, ...c], [] as Array<string>)
				).sort(betterSorter)
				break
			case "variants":
				result = unique(
					Card.getAll(lang)
						.map((c) => objectKeys(c.variants ?? {}) as Array<string>)
						.filter((c) => c)
						.reduce((p, c) => [...p, ...c], [] as Array<string>)
				).sort()
				break
			default:
				sendError('EndpointNotFoundError', res, endpoint)
				return
		}

		if (!result) {
			sendError('NotFoundError', res)
		}
		res.json(result)
	})

	/**
	 * Listing Endpoint
	 * ex: /v2/en/cards/base1-1
	 */
	.get('/:lang/:endpoint/:id', (req, res) => {
		let { id, lang, endpoint } = req.params

		if (id.endsWith('.json')) {
			id = id.replace('.json', '')
		}

		id = id.toLowerCase()

		if (!checkLanguage(lang)) {
			return sendError('LanguageNotFoundError', res, lang)
		}

		let result: any | undefined
		switch (endpoint) {
			case 'cards':
				result = Card.findOne(lang, { filters: { id }})?.full()
				if (!result) {
					result = Card.findOne(lang, { filters: { name: id }})?.full()
				}
				break

			case 'sets':
				result = Set.findOne(lang, { filters: { id }})?.full()
				if (!result) {
					result = Set.findOne(lang, {filters: { name: id }})?.full()
				}
				break

			case 'series':
				result = Serie.findOne(lang, { filters: { id }})?.full()
				if (!result) {
					result = Serie.findOne(lang, { filters: { name: id }})?.full()
				}
				break
			default:
				result = {
					name: id,
					cards: Card.find(lang, {[endpointToField[endpoint]]: id})
					.map((c) => c.resume())
				}
		}
		if (!result) {
			return res.status(404).send({error: "Endpoint or id not found"})
		}
		return res.send(result)

	})

	/**
	 * sub id Endpoint (for the set endpoint only currently)
	 * ex: /v2/en/sets/base1/1
	 */
	.get('/:lang/:endpoint/:id/:subid', (req, res) => {
		let { id, lang, endpoint, subid } = req.params

		if (subid.endsWith('.json')) {
			subid = subid.replace('.json', '')
		}

		id = id.toLowerCase()
		subid = subid.toLowerCase()

		if (!checkLanguage(lang)) {
			return sendError('LanguageNotFoundError', res, lang)
		}

		let result: any | undefined

		switch (endpoint) {
			case 'sets':
				result = Card
					.findOne(lang, { filters: { localId: subid, set: id }})?.full()
				break
		}
		if (!result) {
			return sendError('NotFoundError', res)
		}
		return res.send(result)
	})

export default server
