import { describe, expect, it } from 'bun:test'
import type { Card, Serie, Set } from '../../interfaces'
import { buildSetAbbreviation, getVariantCountForType } from '../compiler/utils/setUtil'

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

