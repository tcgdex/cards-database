import { objectKeys } from '@dzeio/object-util'
import { Card as SDKCard } from '@tcgdex/sdk'
import Card from '../Components/Card'
import Serie from '../Components/Serie'
import Set from '../Components/Set'
import express from 'express'
import apicache from 'apicache'
import { betterSorter, checkLanguage, sendError, unique } from '../../util'

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

// server
// 	.get('/cache/performance', (req, res) => {
// 		res.json(apicache.getPerformance())
// 	})

// 	// add route to display cache index
// 	.get('/cache/index', (req, res) => {
// 		res.json(apicache.getIndex())
// 	})

server
	.use(apicache.middleware('1 day', (req: Request) => req.method === 'GET', {}))



	/**
	 * Listing Endpoint
	 * ex: /v2/en/cards
	 */
	.get('/:lang/:endpoint', (req, res): void => {
		let { lang, endpoint } = req.params

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
					.find(lang, req.query)
					.map((c) => c.resume())
				break

			case 'sets':
				result = Set
					.find(lang, req.query)
					.map((c) => c.resume())
				break
			case 'series':
				result = Serie
					.find(lang, req.query)
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
					Card.raw(lang)
						.map((c) => c[endpointToField[endpoint]] as string)
						.filter((c) => c)
				).sort(betterSorter)
				break
			case "types":
			case "dex-ids":
				result = unique(
					Card.raw(lang)
						.map((c) => c[endpointToField[endpoint]] as Array<string>)
						.filter((c) => c)
						.reduce((p, c) => [...p, ...c], [] as Array<string>)
				).sort(betterSorter)
				break
			case "variants":
				result = unique(
					Card.raw(lang)
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
				result = Card.findOne(lang, {id})?.full()
				if (!result) {
					result = Card.findOne(lang, {name: id})?.full()
				}
				break

			case 'sets':
				result = Set.findOne(lang, {id})?.full()
				if (!result) {
					result = Set.findOne(lang, {name: id})?.full()
				}
				break

			case 'series':
				result = Serie.findOne(lang, {id})?.full()
				if (!result) {
					result = Serie.findOne(lang, {name: id})?.full()
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
					.findOne(lang, {localId: subid, set: id})?.full()
				break
		}
		if (!result) {
			return sendError('NotFoundError', res)
		}
		return res.send(result)
	})

export default server
