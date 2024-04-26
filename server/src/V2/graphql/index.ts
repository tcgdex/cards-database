import express from 'express'
import fs from 'fs'
import { buildSchema, formatError, GraphQLError } from 'graphql'
import { createHandler } from 'graphql-http/lib/use/express'
import { type ruruHTML as RuruHTML } from 'ruru/dist/server'
/** @ts-expect-error typing is not correctly mapped (real type at ruru/dist/server.d.ts) */
import { makeHTMLParts, ruruHTML as tmp } from 'ruru/server'
import resolver from './resolver'


const ruruHTML: typeof RuruHTML = tmp

// Init Express Router
const router = express.Router()

/**
 * Drawbacks
 * Attack.damage is a string instead of possibly being a number or a string
 */
const schema = buildSchema(fs.readFileSync('./public/v2/graphql.gql', 'utf-8'))

// Error Logging for debugging
function graphQLErrorHandle(error: Readonly<GraphQLError | Error>) {
	if (process.env.NODE_ENV !== 'production') {
		console.error(error)
	}
	if (!('source' in error)) {
		const columns = (process?.stdout?.columns ?? 32) - 7
		const dashes = ''.padEnd(columns / 2, '-')

		console.error(`\x1b[91m${dashes} ERROR ${dashes}\x1b[0m`)
		console.error('GraphQL Error')
		console.error(error.message)
		console.error(`\x1b[91m${dashes} ERROR ${dashes}\x1b[0m`)
	} else if (error.source) {
		const columns = (process?.stdout?.columns ?? 32) - 7
		const dashes = ''.padEnd(columns / 2, '-')

		console.error(`\x1b[91m${dashes} ERROR ${dashes}\x1b[0m`)
		console.error('GraphQL Error')
		console.error(error.message)
		console.error(error.source?.body)
		console.error(`\x1b[91m${dashes} ERROR ${dashes}\x1b[0m`)
	}
	return error
}

const graphql = createHandler({
	schema: schema,
	rootValue: resolver,
	formatError: graphQLErrorHandle
})

// Add graphql to the route
router.get('/', (_, res) => {
	res.type('html')

	res.end(ruruHTML({ endpoint: '/v2/graphql' }, {
		...makeHTMLParts(),
		titleTag: '<title>GraphiQL - TCGdex API V2</title>'
	}))
})
router.post('/', graphql)

export default router
