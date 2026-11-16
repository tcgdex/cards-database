import { describe, expect, test } from 'bun:test'
import path from 'path'
import { matchStemByFilenamePattern, resolveCameoFileInDirectories } from './cameo-resolve'

describe('matchStemByFilenamePattern', () => {
	test('pads a bare number onto the only prefix in the directory', () => {
		expect(matchStemByFilenamePattern(['BW01', 'BW28'], '28')).toBe('BW28')
	})

	test('uses the observed three-digit width and ignores a longer number with the same ending', () => {
		expect(matchStemByFilenamePattern(['SWSH001', 'SWSH020', 'SWSH120'], '20')).toBe('SWSH020')
	})

	test('keeps a letter prefix and pads that prefix only', () => {
		expect(matchStemByFilenamePattern(['H01', 'H09', '109'], 'H9')).toBe('H09')
	})

	test('matches an unprefixed number and a letter-suffix print separately', () => {
		const stems = ['XY01', 'XY27', 'XY150', 'XY150a']
		expect(matchStemByFilenamePattern(stems, '27')).toBe('XY27')
		expect(matchStemByFilenamePattern(stems, '150a')).toBe('XY150a')
	})

	test('does not invent a longer number that merely ends with the sheet id', () => {
		expect(matchStemByFilenamePattern(['SM12', 'SM112'], '12')).toBe('SM12')
	})

	test('does not drop a trailing letter onto the unsuffixed file', () => {
		expect(matchStemByFilenamePattern(['148'], '148a')).toBeNull()
	})

	test('returns null when two real files match', () => {
		expect(matchStemByFilenamePattern(['BW20', 'SWSH020'], '20')).toBeNull()
	})
})

describe('resolveCameoFileInDirectories', () => {
	test('finds a stem in the second directory and reports a stem present in both as ambiguous', () => {
		const stems = new Map<string, string[]>([
			['/intl', ['001']],
			['/asia', ['001', '2001']],
		])
		const listStems = (directory: string) => stems.get(directory) ?? []
		const directories = ['/intl', '/asia']

		expect(resolveCameoFileInDirectories({
			resolvedSetName: 'Miscellaneous Promos',
			localId: '2001',
			directories,
			setDirs: new Map(),
			manualMappings: [],
			listStems,
		})).toEqual({
			status: 'found',
			filePath: path.resolve('/asia', '2001.ts'),
		})

		const ambiguous = resolveCameoFileInDirectories({
			resolvedSetName: 'Miscellaneous Promos',
			localId: '001',
			directories,
			setDirs: new Map(),
			manualMappings: [],
			listStems,
		})
		expect(ambiguous.status).toBe('ambiguous')
		if (ambiguous.status !== 'ambiguous') {
			return
		}
		expect(ambiguous.candidates).toEqual([
			path.resolve('/intl', '001.ts'),
			path.resolve('/asia', '001.ts'),
		])
	})
})
