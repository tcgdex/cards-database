import { describe, expect, it } from 'bun:test'
import type { Card, Serie, Set } from '../../interfaces'
import { buildSetAbbreviation, buildSetSubsets, getVariantCountForType, setToSetSimple, setToSetSingle } from '../compiler/utils/setUtil'

const serie: Serie = {
	id: 'test-serie',
	name: { en: 'Test Serie' }
}

const buildSet = (overrides: Partial<Set> = {}): Set => ({
	id: 'test-set',
	name: { en: 'Test Set' },
	serie,
	cardCount: { official: 0 },
	releaseDate: '2024-01-01',
	...overrides
})

const buildCard = (overrides: Partial<Card> = {}): Card => ({
	name: { en: 'Test Card' },
	category: 'Pokemon',
	rarity: 'Common',
	set: buildSet(),
	stage: 'Basic',
	...overrides
})

async function withRejectedFetch<T>(fn: () => Promise<T>): Promise<T> {
	const originalFetch = globalThis.fetch
	;(globalThis as any).fetch = async () => {
		throw new Error('offline-test')
	}
	try {
		return await fn()
	} finally {
		globalThis.fetch = originalFetch
	}
}

describe('buildSetAbbreviation', () => {
	it('returns undefined when both official and localized abbreviations are missing', () => {
		const set = buildSet()
		expect(buildSetAbbreviation(set, 'en')).toBeUndefined()
	})

	it('re-uses the localized entry for the requested language', () => {
		const set = buildSet({
			abbreviations: {
				official: 'DAA',
				fr: 'TEM'
			}
		})

		expect(buildSetAbbreviation(set, 'en')).toEqual({
			official: 'DAA',
			localized: undefined
		})

		expect(buildSetAbbreviation(set, 'fr')).toEqual({
			official: 'DAA',
			localized: 'TEM'
		})
	})
})

describe('subset propagation', () => {
	it('builds localized subset entries from set metadata', () => {
		const set = buildSet({
			subsets: {
				RC: {
					name: { en: 'Radiant Collection', fr: 'Radiant Collection' },
					cardCount: { official: 32 }
				}
			}
		})

		expect(buildSetSubsets(set, 'en')).toEqual([
			{
				id: 'RC',
				name: 'Radiant Collection',
				cardCount: { official: 32 }
			}
		])
	})

	it('propagates subsets in setToSetSimple', async () => {
		const set = buildSet({
			subsets: {
				TG: {
					name: { en: 'Trainer Gallery' },
					cardCount: { official: 30 }
				}
			}
		})

		const result = await withRejectedFetch(() => setToSetSimple(set, 'en'))
		expect(result.serie).toEqual({ id: 'test-serie', name: 'Test Serie' })
		expect(result.subsets).toEqual([
			{
				id: 'TG',
				name: 'Trainer Gallery',
				cardCount: { official: 30 }
			}
		])
	})

	it('propagates subsets in setToSetSingle', async () => {
		const set = buildSet({
			subsets: {
				GG: {
					name: { en: 'Galarian Gallery' },
					cardCount: { official: 70 }
				}
			}
		})

		const result = await withRejectedFetch(() => setToSetSingle(set, 'en'))
		expect(result.subsets).toEqual([
			{
				id: 'GG',
				name: 'Galarian Gallery',
				cardCount: { official: 70 }
			}
		])
	})
})

describe('getVariantCountForType', () => {
	it('counts variants directly from the boolean structure', () => {
		const card = buildCard({
			variants: {
				firstEdition: true,
				holo: false,
				normal: true,
				reverse: false
			}
		})

		expect(getVariantCountForType(card, 'normal')).toBe(1)
		expect(getVariantCountForType(card, 'reverse')).toBe(0)
		expect(getVariantCountForType(card, 'firstEdition')).toBe(1)
	})

	it('counts variants from the detailed array, including first edition stamps', () => {
		const card = buildCard({
			variants: [
				{ type: 'normal', stamp: ['1st-edition'] },
				{ type: 'reverse' },
				{ type: 'holo' }
			]
		})

		expect(getVariantCountForType(card, 'normal')).toBe(1)
		expect(getVariantCountForType(card, 'reverse')).toBe(1)
		expect(getVariantCountForType(card, 'holo')).toBe(1)
		expect(getVariantCountForType(card, 'firstEdition')).toBe(1)
	})
})

