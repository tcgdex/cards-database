import { objectKeys, objectLoop } from '@dzeio/object-util'
import { Card as SDKCard } from '@tcgdex/sdk'
import apicache from 'apicache'
import express, { Request } from 'express'
import { Query } from '../../interfaces'
import { Errors, sendError } from '../../libs/Errors'
import { betterSorter, checkLanguage, unique } from '../../util'
import Card from '../Components/Card'
import Serie from '../Components/Serie'
import Set from '../Components/Set'

type CustomRequest = Request & {
	/**
	 * disable caching
	 */
	DO_NOT_CACHE?: boolean
	advQuery?: Query<any>
}

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
	// Midleware that handle caching only in production and on GET requests
	.use(apicache.middleware('1 day', (req: CustomRequest, res: Response) => !req.DO_NOT_CACHE && res.status < 400 && process.env.NODE_ENV === 'production' && req.method === 'GET', {}))

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

		req.advQuery = items

		next()
	})

	/**
	 * Allows the user to fetch a random card/set/serie from the database
	 */
	.get('/:lang/random/:what', (req: CustomRequest, res): void => {
		const { lang, what } = req.params

		if (!checkLanguage(lang)) {
			sendError(Errors.LANGUAGE_INVALID, res, { lang })
			return
		}

		const query: Query = req.advQuery!

		let data: Array<Card | Set | Serie> = []
		switch (what.toLowerCase()) {
			case 'card':
				data = Card.find(lang, query)
				break
			case 'set':
				data = Set.find(lang, query)
				break
			case 'serie':
				data = Serie.find(lang, query)
				break
			default:
				sendError(Errors.NOT_FOUND, res, { details: `You can only run random requests on "card", "set" or "serie" while you did on "${what}"` })
				return
		}
		const item = Math.min(data.length - 1, Math.max(0, Math.round(Math.random() * data.length)))
		req.DO_NOT_CACHE = true
		res.json(data[item])
	})


	/**
	 * Listing Endpoint
	 * ex: /v2/en/cards
	 */
	.get('/:lang/:endpoint', (req: CustomRequest, res): void => {
		let { lang, endpoint } = req.params

		const query: Query = req.advQuery!

		if (endpoint.endsWith('.json')) {
			endpoint = endpoint.replace('.json', '')
		}

		if (!checkLanguage(lang)) {
			sendError(Errors.LANGUAGE_INVALID, res, { lang })
			return
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
	.get('/:lang/:endpoint/:id', (req: CustomRequest, res) => {
		let { id, lang, endpoint } = req.params

		if (id.endsWith('.json')) {
			id = id.replace('.json', '')
		}

		id = id.toLowerCase()

		if (!checkLanguage(lang)) {
			return sendError(Errors.LANGUAGE_INVALID, res, { lang })
		}

		let result: any | undefined
		switch (endpoint) {
			case 'cards':
				result = Card.findOne(lang, { filters: { id }, strict: true })?.full()
				if (!result) {
					result = Card.findOne(lang, { filters: { name: id }, strict: true })?.full()
				}
				break

			case 'sets':
				result = Set.findOne(lang, { filters: { id }, strict: true })?.full()
				if (!result) {
					result = Set.findOne(lang, {filters: { name: id }, strict: true })?.full()
				}
				break

			case 'series':
				result = Serie.findOne(lang, { filters: { id }, strict: true })?.full()
				if (!result) {
					result = Serie.findOne(lang, { filters: { name: id }, strict: true })?.full()
				}
				break
			default:
				if (!endpointToField[endpoint]) {
					break
				}
				result = {
					name: id,
					cards: Card.find(lang, {[endpointToField[endpoint]]: id})
					.map((c) => c.resume())
				}
		}
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
	.get('/:lang/:endpoint/:id/:subid', (req: CustomRequest, res) => {
		let { id, lang, endpoint, subid } = req.params

		if (subid.endsWith('.json')) {
			subid = subid.replace('.json', '')
		}

		id = id.toLowerCase()
		subid = subid.toLowerCase()

		if (!checkLanguage(lang)) {
			return sendError(Errors.LANGUAGE_INVALID, res, { lang })
		}

		let result: any | undefined

		switch (endpoint) {
			case 'sets':
				result = Card
					.findOne(lang, { filters: { localId: subid, set: id }, strict: true})?.full()
				break
		}
		if (!result) {
			return sendError(Errors.NOT_FOUND, res)
		}
		return res.send(result)
	})

export default server
