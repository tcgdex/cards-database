
import express from 'express'
import fs from 'node:fs'
import swaggerUi from 'swagger-ui-express'
import YAML from 'yaml'

const file = fs.readFileSync('./public/v2/openapi.yaml', 'utf8')
const swaggerDocument = YAML.parse(file)

const server = express.Router()

server.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
	customCss: '.topbar { display: none }',
	customfavIcon: '/favicon.ico',
	customSiteTitle: 'Openapi documentation - TCGdex API'
}))

export default server
