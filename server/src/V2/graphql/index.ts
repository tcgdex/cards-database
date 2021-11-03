import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import resolver from './resolver'
import fs from 'fs'

// Init Express Router
const router = express.Router()

/**
 * Drawbacks
 * Attack.damage is a string instead of possibly being a number or a string
 */
const schema = buildSchema(fs.readFileSync('./public/v2/schema.gql').toString())

// Add graphql to the route
router.use(graphqlHTTP({
	schema,
	rootValue: resolver,
	graphiql: true
}))

export default router
