import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import {
  CardSchema,
  SetSchema,
  SerieSchema,
  CardResumeSchema,
  SetResumeSchema,
  SerieResumeSchema,
  VariantsSchema,
} from '../src/index.js'
import { LANGUAGES } from '../src/enums.js'

// ── output path ─────────────────────────────────────────────
const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = resolve(__dirname, '../dist/openapi.json')

// ── RFC 9457 problem+json (the error contract) ─────────────
const Problem = {
  type: 'object',
  properties: {
    type: { type: 'string' },
    title: { type: 'string' },
    status: { type: 'integer' },
    detail: { type: 'string' },
    endpoint: { type: 'string' },
    method: { type: 'string' },
  },
  required: ['type', 'title', 'status'],
}

// ── shared parameters (filtering/sorting/pagination) ────────
const commonParams = {
  Pagination: [
    { name: 'pagination:page', in: 'query', schema: { type: 'integer', minimum: 1 } },
    { name: 'pagination:itemsPerPage', in: 'query', schema: { type: 'integer', minimum: 1, maximum: 250 } },
  ],
  Sort: [
    { name: 'sort:field', in: 'query', schema: { type: 'string' } },
    { name: 'sort:order', in: 'query', schema: { type: 'string', enum: ['ASC', 'DESC'] } },
  ],
}

const problemResponse = (status: number, title: string) => ({
  description: title,
  content: { 'application/problem+json': { schema: { $ref: '#/components/schemas/Problem' } } },
})

// ── path builders ────────────────────────────────────────────
type Op = { tags: string[]; summary: string; description?: string; parameters?: any[]; responses: any }

const jsonResponse = (ref: string) => ({
  description: 'OK',
  content: { 'application/json': { schema: { $ref: `#/components/schemas/${ref}` } } },
})

const jsonListResponse = (ref: string) => ({
  description: 'OK',
  content: { 'application/json': { schema: { type: 'array', items: { $ref: `#/components/schemas/${ref}` } } } },
})

const jsonStringListResponse = () => ({
  description: 'OK',
  content: { 'application/json': { schema: { type: 'array', items: { type: 'string' } } } },
})

const notFound = problemResponse(404, 'Not Found')
const rateLimit = problemResponse(429, 'Rate Limited')

// Filter-style endpoints: /rarities → string[], /rarities/{rarity} → StringEndpoint
const filterEndpoint = (path: string, paramName: string, tag: string): Record<string, any> => ({
  [`/${path}`]: {
    get: {
      tags: [tag],
      summary: `List all ${path}`,
      parameters: [...commonParams.Pagination, ...commonParams.Sort],
      responses: { '200': jsonStringListResponse(), '429': rateLimit },
    },
  },
  [`/${path}/{${paramName}}`]: {
    get: {
      tags: [tag],
      summary: `Get cards by ${paramName}`,
      parameters: [
        { name: paramName, in: 'path', required: true, schema: { type: 'string' } },
        ...commonParams.Pagination,
      ],
      responses: {
        '200': jsonResponse('StringEndpoint'),
        '404': notFound,
        '429': rateLimit,
      },
    },
  },
})

const filterEndpoints = [
  ['categories', 'category', 'filters'],
  ['hp', 'hp', 'filters'],
  ['illustrators', 'illustrator', 'filters'],
  ['rarities', 'rarity', 'filters'],
  ['retreats', 'retreat', 'filters'],
  ['types', 'type', 'filters'],
  ['dex-ids', 'dexId', 'filters'],
  ['energy-types', 'energy-type', 'filters'],
  ['regulation-marks', 'regulation-mark', 'filters'],
  ['stages', 'stage', 'filters'],
  ['suffixes', 'suffix', 'filters'],
  ['trainer-types', 'trainer-type', 'filters'],
  ['variants', 'variant', 'filters'],
] as const

// ── assemble the document ───────────────────────────────────
const doc = {
  openapi: '3.1.0',
  info: {
    title: 'TCGdex API',
    description:
      'A Multilanguage Pokémon TCG Database. Error responses follow RFC 9457 (application/problem+json). ' +
      'List endpoints support filtering, sorting, and pagination — see https://tcgdex.dev/rest/filtering-sorting-pagination.',
    contact: { name: 'TCGdex', url: 'https://github.com/tcgdex/cards-database', email: 'contact@tcgdex.net' },
    license: { name: 'MIT', url: 'https://github.com/tcgdex/cards-database/blob/master/LICENSE' },
    version: '2',
  },
  externalDocs: { description: 'TCGdex docs', url: 'https://www.tcgdex.net/docs' },
  servers: [
    {
      url: 'https://api.tcgdex.net/v2/{lang}',
      variables: {
        lang: { enum: [...LANGUAGES], default: 'en' },
      },
    },
  ],
  tags: [
    { name: 'cards', description: 'Fetch cards globally' },
    { name: 'sets', description: 'Fetch sets and cards within them' },
    { name: 'series', description: 'Fetch card series' },
    { name: 'filters', description: 'Filter cards by attribute' },
  ],
  paths: {
    '/cards': {
      get: {
        tags: ['cards'],
        summary: 'List cards',
        parameters: [...commonParams.Pagination, ...commonParams.Sort],
        responses: { '200': jsonListResponse('CardResume'), '429': rateLimit },
      },
    },
    '/cards/{cardId}': {
      get: {
        tags: ['cards'],
        summary: 'Get a card by id',
        parameters: [{ name: 'cardId', in: 'path', required: true, schema: { type: 'string' } }],
        responses: { '200': jsonResponse('Card'), '404': notFound, '429': rateLimit },
      },
    },
    '/sets': {
      get: {
        tags: ['sets'],
        summary: 'List sets',
        parameters: [...commonParams.Pagination, ...commonParams.Sort],
        responses: { '200': jsonListResponse('SetResume'), '429': rateLimit },
      },
    },
    '/sets/{set}': {
      get: {
        tags: ['sets'],
        summary: 'Get a set',
        parameters: [{ name: 'set', in: 'path', required: true, schema: { type: 'string' } }],
        responses: { '200': jsonResponse('Set'), '404': notFound, '429': rateLimit },
      },
    },
    '/sets/{set}/{cardLocalId}': {
      get: {
        tags: ['cards'],
        summary: 'Get a card by set + local id',
        parameters: [
          { name: 'set', in: 'path', required: true, schema: { type: 'string' } },
          { name: 'cardLocalId', in: 'path', required: true, schema: { type: 'string' } },
        ],
        responses: { '200': jsonResponse('Card'), '404': notFound, '429': rateLimit },
      },
    },
    '/series': {
      get: {
        tags: ['series'],
        summary: 'List series',
        parameters: [...commonParams.Pagination, ...commonParams.Sort],
        responses: { '200': jsonListResponse('SerieResume'), '429': rateLimit },
      },
    },
    '/series/{serie}': {
      get: {
        tags: ['series'],
        summary: 'Get a serie',
        parameters: [{ name: 'serie', in: 'path', required: true, schema: { type: 'string' } }],
        responses: { '200': jsonResponse('Serie'), '404': notFound, '429': rateLimit },
      },
    },
    // filter endpoints (13 pairs) generated declaratively
    ...Object.assign({}, ...filterEndpoints.map(([p, n, t]) => filterEndpoint(p, n, t))),
  },
  components: {
    schemas: {
      Card: CardSchema,
      CardResume: CardResumeSchema,
      Set: SetSchema,
      SetResume: SetResumeSchema,
      Serie: SerieSchema,
      SerieResume: SerieResumeSchema,
      Variants: VariantsSchema,
      StringEndpoint: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          cards: { type: 'array', items: { $ref: '#/components/schemas/CardResume' } },
        },
        required: ['name', 'cards'],
      },
      Problem,
    },
  },
}

// ── write ────────────────────────────────────────────────────
mkdirSync(dirname(OUT), { recursive: true })
writeFileSync(OUT, JSON.stringify(doc, null, 2))
const pathCount = Object.keys(doc.paths).length
const schemaCount = Object.keys(doc.components.schemas).length
console.log(`✓ wrote ${OUT}`)
console.log(`  ${pathCount} paths, ${schemaCount} schemas`)