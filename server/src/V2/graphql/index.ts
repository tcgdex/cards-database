import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema, formatError } from 'graphql'
import resolver from './resolver'
import fs from 'fs'

// Init Express Router
const router = express.Router()
/**
 * Drawbacks
 * Attack.damage is a string instead of possibly being a number or a string
 */
const schema = buildSchema(fs.readFileSync('./public/v2/graphql.gql').toString())

// Add graphql to the route
router.use(graphqlHTTP({
	schema,
	rootValue: resolver,
	graphiql: true,
	customFormatErrorFn(error) {
		console.error(error)
		return formatError(error)
	}
}))

export default router
