import { describe, expect, it } from 'bun:test'
import * as cardUtil from '../compiler/utils/cardUtil'
import type { Card, Set as DataSet, Serie } from '../../interfaces'
import type { Card as CardSingle } from '../../meta/definitions/api'

const { buildSetNumber, enhanceTrainerLegality } = cardUtil
const variantsDetailedToVariants = (cardUtil as Record<string, any>).variantsDetailedToVariants as (variants: Array<any>) => any
const variantsToVariantsDetailed = (cardUtil as Record<string, any>).variantsToVariantsDetailed as (variants: any, lang: string) => Array<any>

const baseSerie: Serie = {
	id: 'sv',
	name: { en: 'Scarlet & Violet' }
}

const buildSet = (id: string, official = 151): DataSet => ({
	id,
	name: { en: `Set ${id}` },
	serie: baseSerie,
	cardCount: { official },
	releaseDate: '2023-01-01'
})

const buildTrainerCard = (setId: string, englishName: string): Card => ({
	name: { en: englishName },
	category: 'Trainer',
	rarity: 'Rare',
	set: buildSet(setId),
	trainerType: 'Item'
})

const buildPokemonCard = (setId: string, englishName: string): Card => ({
	name: { en: englishName },
	category: 'Pokemon',
	rarity: 'Common',
	set: buildSet(setId),
	stage: 'Basic',
	dexId: [25],
	hp: 60,
	types: ['Lightning']
})

const buildCompiledTrainer = (id: string, legal?: { standard?: boolean, expanded?: boolean }): CardSingle => {
	const [setId, localId] = id.split('-')
	return {
		id,
		localId: localId ?? id,
		name: `Trainer ${id}`,
		category: 'Trainer',
		rarity: 'Rare',
		set: {
			id: setId ?? 'sv1',
			name: 'Test Set',
			cardCount: { official: 0, total: 0 },
			abbreviation: { official: 'TS', localized: 'TS' }
		},
		set_number: { text: '1', nominator: '1', numeric: 1, denominator: undefined },
		variants: {},
		variants_detailed: [],
		legal: legal ? {
			standard: Boolean(legal.standard),
			expanded: Boolean(legal.expanded)
		} : undefined,
		types: [],
		stage: 'Basic',
		regulationMark: 'G',
		retreat: 0,
		updated: new Date().toISOString()
	} as unknown as CardSingle
}

describe('buildSetNumber', () => {
	it('formats numeric identifiers with an official denominator', () => {
		const card = {
			name: { en: 'Test Card' },
			category: 'Pokemon',
			rarity: 'Rare',
			set: buildSet('sv1', 165),
			stage: 'Basic'
		} as Card

		const result = buildSetNumber('065', card)
		expect(result).toEqual({
			text: '065/165',
			nominator: '065',
			numeric: 65,
			denominator: '165'
		})
	})

	it('extracts the first numeric chunk and omits denominator when missing', () => {
		const card = {
			name: { en: 'Trainer Gallery' },
			category: 'Trainer',
			rarity: 'Rare',
			set: buildSet('sv2', 0)
		} as Card

		const result = buildSetNumber('GG55a', card)
		expect(result).toEqual({
			text: 'GG55a',
			nominator: 'GG55a',
			numeric: 55,
			denominator: undefined
		})
	})
})

describe('enhanceTrainerLegality', () => {
	it('propagates legality flags to every reprint sharing the same English name', () => {
		const compiled = [
			buildCompiledTrainer('sv1-101', { standard: true, expanded: true }),
			buildCompiledTrainer('bw1-88', { standard: false, expanded: false })
		]

		const originals: Array<[string, Card]> = [
			['101', buildTrainerCard('sv1', 'Rare Candy')],
			['88', buildTrainerCard('bw1', 'Rare Candy')]
		]

		const updated = enhanceTrainerLegality(compiled, originals)
		const olderPrinting = updated.find((card) => card.id === 'bw1-88')!
		expect(olderPrinting.legal.standard).toBe(true)
		expect(olderPrinting.legal.expanded).toBe(true)
	})

	it('creates missing legality containers and ignores non-trainer cards', () => {
		const trainer = buildCompiledTrainer('sv1-201')
		delete (trainer as any).legal

		const pokemon = buildCompiledTrainer('sv1-007', { standard: false, expanded: false })
		;(pokemon as any).category = 'Pokemon'

		const compiled = [trainer, pokemon]
		const originals: Array<[string, Card]> = [
			['201', buildTrainerCard('sv1', 'Switch')],
			['007', buildPokemonCard('sv1', 'Pikachu')]
		]

		const [updatedTrainer, updatedPokemon] = enhanceTrainerLegality(compiled, originals)
		expect(updatedTrainer.legal.standard).toBe(false)
		expect(updatedTrainer.legal.expanded).toBe(false)
		expect(updatedPokemon.legal.standard).toBe(false)
		expect(updatedPokemon.legal.expanded).toBe(false)
	})
})

describe('variant mapping helpers', () => {
	it('detects core variant flags, including first edition stamps, from detailed variants', () => {
		const result = variantsDetailedToVariants([
			{ type: 'normal', stamp: ['1st-edition'] },
			{ type: 'reverse' },
			{ type: 'holo' },
			{ type: 'normal', stamp: ['w-Promo'] }
		])

		expect(result.normal).toBe(true)
		expect(result.reverse).toBe(true)
		expect(result.holo).toBe(true)
		expect(result.firstEdition).toBe(true)
		expect(result.wPromo).toBe(true)
	})

	it('explodes boolean variant flags into translated detailed variants', () => {
		const detailed = variantsToVariantsDetailed({
			firstEdition: true,
			holo: true,
			normal: true,
			reverse: false,
			wPromo: true
		}, 'en')

		const normalVariants = detailed.filter((variant) => variant.type === 'normal')
		expect(normalVariants.length).toBe(3)
		expect(normalVariants.some((variant) => variant.stamp?.includes('1st-edition'))).toBe(true)
		expect(normalVariants.some((variant) => variant.stamp?.includes('w-Promo'))).toBe(true)
		expect(detailed.some((variant) => variant.type === 'holo')).toBe(true)
		expect(detailed.some((variant) => variant.size?.toLowerCase?.() === 'standard')).toBe(true)
	})
})

