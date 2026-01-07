
import { paths as OpenAPI } from './src/openapi'

type Card = OpenAPI['/cards/{cardId}']['get']['responses'][200]['content']['application/json']
