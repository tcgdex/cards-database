import express from 'express'
import graphql from './V2/graphql'
import jsonEndpoints from './V2/endpoints/jsonEndpoints'
import status from './status'
// Current API version
const VERSION = 2

// Init Express server
const server = express()

// Set global headers
server.use((_, res, next) => {
	res
		.setHeader('Access-Control-Allow-Origin', '*')
		.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
		.setHeader('Access-Control-Allow-Headers', 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range')
		.setHeader('Access-Control-Expose-Headers', 'Content-Length,Content-Range')
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
