import express from 'express'
import status from './status'
import jsonEndpoints from './V2/endpoints/jsonEndpoints'
import graphql from './V2/graphql'
// Current API version
const VERSION = 2

// Init Express server
const server = express()

// Set CORS global headers
server.use((_, res, next) => {
	res
		.setHeader('Access-Control-Allow-Origin', '*')
		.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
		.setHeader('Access-Control-Allow-Headers', 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range')
		.setHeader('Access-Control-Expose-Headers', 'Content-Length,Content-Range')
	next()
})

// Route logging / Error logging for debugging
server.use((req, res, next) => {
	res.on('close', () => {
		console.log(`[${new Date().toISOString()}] ${req.headers['user-agent']?.slice(0, 32).padEnd(32)} ${req.method.padEnd(7)} ${res.statusCode} ${(req.baseUrl ?? '') + req.url}`)
	})
	res.on('error', (err) => {
		console.error('Error:')
		console.error(err)
	})

	next()
})

server.get('/', (_, res) => {
	res.redirect('https://www.tcgdex.dev/?ref=api.tcgdex.net')
})

server.use(express.static('./public'))

// Setup GraphQL
server.use(`/v${VERSION}/graphql`, graphql)

// Setup JSON endpoints
server.use(`/v${VERSION}`, jsonEndpoints)

// Status page
server.use('/status', status)

// Start server
server.listen(3000)
console.log(`🚀 Server ready at localhost:3000`);
