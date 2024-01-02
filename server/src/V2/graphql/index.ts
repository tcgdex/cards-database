import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import fs from 'fs'
import { buildSchema, formatError, GraphQLError } from 'graphql'
import resolver from './resolver'

// Init Express Router
const router = express.Router()

/**
 * Drawbacks
 * Attack.damage is a string instead of possibly being a number or a string
 */
const schema = buildSchema(fs.readFileSync('./public/v2/graphql.gql', 'utf-8'))

// Error Logging for debugging
function graphQLErrorHandle(error: GraphQLError) {
	if (process.env.NODE_ENV !== 'production') {
		console.error(error)
	}
	if (error.source) {
		console.error('GraphQL Error')
		console.error(error.message)
		console.error(error.source?.body.replace(/\n/g, '\\n'))
	}
	return formatError(error)
}

const graphql = graphqlHTTP({
	schema,
	rootValue: resolver,
	graphiql: true,
	customFormatErrorFn: graphQLErrorHandle
})

// Add graphql to the route
router.get('/', graphql)
router.post('/', graphql)

export default router
