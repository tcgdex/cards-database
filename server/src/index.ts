import express, { type Response } from 'express'
import jsonEndpoints from './V2/endpoints/jsonEndpoints'
import openapi from './V2/endpoints/openapi'
import graphql from './V2/graphql'
import cluster from 'node:cluster'
import { availableParallelism } from "node:os"
import { Errors, sendError } from './libs/Errors'
import status from './status'
import * as Sentry from "@sentry/node"
import { updateDatas } from './libs/providers/cardmarket'
import { updateTCGPlayerDatas } from './libs/providers/tcgplayer'

// Glitchtip will only start if the DSN is set :D
Sentry.init({
	dsn: process.env.GLITCHTIP_DSN,
	environment: process.env.NODE_ENV
})

if (cluster.isPrimary) {
	console.log(`Primary ${process.pid} is running`)

	// get maximum number of workers available for the software
	let maxWorkers = availableParallelism()

	// allow to override max worker count
	if (process.env.MAX_WORKERS) {
		maxWorkers = Math.min(maxWorkers, parseInt(process.env.MAX_WORKERS))
	}

	// create the workers
	console.log(`creating ${maxWorkers} workers...`)
	for (let i = 0; i < maxWorkers; i++) {
		cluster.fork()
	}

	cluster.on('online', (worker) => {
		console.log('Worker', worker.id, 'online')
	})

	cluster.on("exit", (worker, code, signal) => {
		console.log(`Worker ${worker.id} exited with code ${code} and signal ${signal}`);
		cluster.fork()
	})
	console.log('🚀 Server ready at localhost:3000');
} else {

	// Current API version
	const VERSION = 2

	// fetch cardmarket data
	void updateDatas()
		.then(() => console.log('loaded cardmarket datas'))
		.catch((err) => console.error('error loading cardmarket', err))
	void updateTCGPlayerDatas()
		.then(() => console.log('loaded TCGPlayer datas'))
		.catch((err) => console.error('error loading TCGPlayer', err))

	// Init Express server
	const server = express()

	// Route logging / Error logging for debugging
	server.use((req, res, next) => {
		const now = new Date()
		//                   Date of request              User-Agent 32 first chars                                     request Method
		const prefix = `\x1b[2m${now.toISOString()}\x1b[22m ${req.headers['user-agent']?.slice(0, 32).padEnd(32)} ${req.method.toUpperCase().padEnd(7)}`

		const url = new URL(req.url, `http://${req.headers.host}`)
		const fullURL = url.toString()
		const path = fullURL.slice(fullURL.indexOf(url.pathname, fullURL.indexOf(url.host)))

		//                        HTTP Status Code     Time to run request   path of request
		console.log(`${prefix} ${''.padStart(5, ' ')} ${''.padStart(7, ' ')} ${path}`)

		res.on('close', () => {
			console.log(`${prefix} \x1b[34m[${'statusCode' in res ? res.statusCode : '???'}]\x1b[0m \x1b[2m${(new Date().getTime() - now.getTime()).toFixed(0).padStart(5, ' ')}ms\x1b[22m ${path}`)
		})
		res.on('error', (err) => {
			// log the request
			console.log(`${prefix} \x1b[34m[500]\x1b[0m \x1b[2m${(new Date().getTime() - now.getTime()).toFixed(0).padStart(5, ' ')}ms\x1b[22m ${path}`)

			// add a full line dash to not miss it
			const columns = (process?.stdout?.columns ?? 32) - 7
			const dashes = ''.padEnd(columns / 2, '-')

			// colorize the lines to make sur to not miss it
			console.error(`\x1b[91m${dashes} ERROR ${dashes}\x1b[0m`)
			console.error(err)
			console.error(`\x1b[91m${dashes} ERROR ${dashes}\x1b[0m`)
		})

		next()
	})

	// Set CORS global headers
	server.use((req, res, next) => {
		res
			.setHeader('Access-Control-Allow-Origin', '*')
			.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
			.setHeader('Access-Control-Allow-Headers', 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range')
			.setHeader('Access-Control-Expose-Headers', 'Content-Length,Content-Range')

		if (req.method.toUpperCase() === 'OPTIONS') {
			res.status(200).send('ok')
			return
		}
		next()
	})

	server.get('/', (_, res) => {
		res.redirect('https://www.tcgdex.dev/?ref=api.tcgdex.net')
	})

	// simple endpoint for monitoring
	server.get('/ping', (_, res) => {
		res.status(200).end()
	})

	server.use(express.static('./public'))

	// Setup GraphQL
	server.use(`/v${VERSION}/graphql`, graphql)
	server.use(`/v${VERSION}/openapi`, openapi)

	// Setup JSON endpoints
	server.use(`/v${VERSION}`, jsonEndpoints)

	// Status page
	server.use('/status', status)

	// handle 404 errors
	server.use((_, res) => {
		sendError(Errors.NOT_FOUND, res)
	})

	// Error handlers
	Sentry.setupExpressErrorHandler(server)
	server.use((err: Error, _1: unknown, res: Response, _2: unknown) => {
		// add a full line dash to not miss it
		const columns = (process?.stdout?.columns ?? 32) - 7
		const dashes = ''.padEnd(columns / 2, '-')

		// colorize the lines to make sur to not miss it
		console.error(`\x1b[91m${dashes} ERROR ${dashes}\x1b[0m`)
		console.error(err)
		console.error(`\x1b[91m${dashes} ERROR ${dashes}\x1b[0m`)

		sendError(Errors.GENERAL, res, { err })
	})

	// Start server
	server.listen(3000)
}
