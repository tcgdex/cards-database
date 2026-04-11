import { describe, expect, it } from 'bun:test'
import type { Card, Serie, Set } from '../../interfaces'
import { buildSetAbbreviation, buildSetSearchAliases, buildSetSubsets, getVariantCountForType, setToSetSimple, setToSetSingle } from '../compiler/utils/setUtil'

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

describe('buildSetSearchAliases', () => {
	it('collects visible abbreviations and generic Scarlet & Violet aliases', () => {
		const set = buildSet({
			id: 'sv03.5',
			serie: {
				id: 'sv',
				name: { en: 'Scarlet & Violet' }
			},
			abbreviations: {
				official: 'MEW',
				fr: 'EV3.5'
			}
		})

		expect(buildSetSearchAliases(set)).toEqual([
			'sv03.5',
			'MEW',
			'EV3.5',
			'sv3.5',
			'ev03.5'
		])
	})

	it('derives Mega Evolution numeric aliases without duplicating explicit codes', () => {
		const set = buildSet({
			id: 'me02.5',
			serie: {
				id: 'me',
				name: { en: 'Mega Evolution' }
			},
			abbreviations: {
				official: 'ASC',
				fr: 'HER'
			}
		})

		expect(buildSetSearchAliases(set)).toEqual([
			'me02.5',
			'ASC',
			'HER',
			'me2.5'
		])
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

