import { describe, expect, it } from 'bun:test'
import { resolvePlayReprintOrigin, type PlayReprintSetRef } from '../compiler/utils/cardUtil'

const sets: Array<PlayReprintSetRef> = [
	{ id: 'me03', serieId: 'me', officialAbbreviation: 'POR' },
	{ id: 'sv05', serieId: 'sv', officialAbbreviation: 'TEF' },
	{ id: 'sv05a', serieId: 'sv', officialAbbreviation: 'TEF' },
	{ id: 'short', serieId: 'sv', officialAbbreviation: 'TG' },
	{ id: 'long', serieId: 'sv', officialAbbreviation: 'TG1' },
]

describe('resolvePlayReprintOrigin', () => {
	it('maps an abbreviation plus number onto the origin set with a 3-digit local id', () => {
		expect(resolvePlayReprintOrigin('POR55', sets)).toEqual({
			serieId: 'me',
			setId: 'me03',
			localId: '055'
		})
	})

	it('keeps SWSH Black Star Promo ids intact', () => {
		expect(resolvePlayReprintOrigin('SWSH149', sets)).toEqual({
			serieId: 'swsh',
			setId: 'swshp',
			localId: 'SWSH149'
		})
	})

	it('returns undefined for a type-named energy', () => {
		expect(resolvePlayReprintOrigin('Fire', sets)).toBeUndefined()
	})

	it('returns undefined when the abbreviation maps to more than one set', () => {
		expect(resolvePlayReprintOrigin('TEF12', sets)).toBeUndefined()
	})

	it('prefers the longer abbreviation over a shorter prefix', () => {
		expect(resolvePlayReprintOrigin('TG12', sets)).toEqual({
			serieId: 'sv',
			setId: 'long',
			localId: '002'
		})
	})
})
