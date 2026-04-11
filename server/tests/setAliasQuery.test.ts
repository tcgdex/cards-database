import { describe, expect, it } from 'bun:test'
import { findOneSet } from '../src/V2/Components/Set'
import { buildSetIdClauses } from '../src/V2/endpoints/jsonEndpoints'

describe('set alias query layer', () => {
	it('resolves official, generic, and localized aliases to the same canonical set', async () => {
		const official = await findOneSet('en', { id: 'svi' })
		const generic = await findOneSet('en', { id: 'sv1' })
		const localized = await findOneSet('fr', { id: 'ev01' })

		expect(official?.id).toBe('sv01')
		expect(generic?.id).toBe('sv01')
		expect(localized?.id).toBe('sv01')
	})

	it('fans out ambiguous split-set aliases for card filtering', () => {
		const clauses = buildSetIdClauses('en', { $eq: 'sv10.5' })
		const ids = clauses
			.map((clause) => ((clause['set.id'] as { $eq?: string } | undefined)?.$eq))
			.filter((id): id is string => Boolean(id))
			.sort()

		expect(ids).toEqual(['sv10.5b', 'sv10.5w'])
	})

	it('keeps explicit Black and White suffix aliases targeted', () => {
		const blackBolt = buildSetIdClauses('en', { $eq: 'sv10.5b' })
		const whiteFlare = buildSetIdClauses('en', { $eq: 'sv10.5w' })

		expect(blackBolt).toEqual([{ 'set.id': { $eq: 'sv10.5b' } }])
		expect(whiteFlare).toEqual([{ 'set.id': { $eq: 'sv10.5w' } }])
	})
})
