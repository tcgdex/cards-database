import { findSelectedCollisions } from './fixes'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import test from 'node:test'
import path from 'node:path'

import { makeAudit, makeDuplicateGroups } from './audit'
import { addCardmarketProperty, addThirdPartyObject, inspectCardSource } from './references'
import { detailMatch, findCandidates, nameScore } from './matching'
import { buildReport, buildSummary, writeReports } from './report'
import { clearReportOutput } from './report'
import { legacyReportPaths, reportRoot } from './config'
import type { AuditResult, CardEntry, LinkAudit, ReferenceEntry } from './types'

test('matches normalized names, suffixes, and details', () => {
	const card = {
		name: { en: 'Deoxys' },
		suffix: 'ex',
		attacks: [{ name: { en: 'Psychic' } }]
	}
	assert.equal(nameScore(card, 'Deoxys ex'), 100)
	assert.equal(detailMatch('Psychic', 'Psychic'), true)
	assert.equal(detailMatch('Psychic', 'Psy'), false)

	const entry = {
		code: 'set1-1',
		set: { id: 'set1', thirdParty: { cardmarket: 10 } },
		data: card
	} as CardEntry
	const candidates = findCandidates(entry, [{ idProduct: 1, idExpansion: 10, name: 'Deoxys ex [Psychic]' }])
	assert.equal(candidates.length, 1)
	assert.equal(candidates[0].score, 450)
})

test('extracts top-level and variant Cardmarket references with source locations', () => {
	const source = `const card = {\n\tname: { en: "Mew" },\n\tvariants: [\n\t\t{ thirdParty: { cardmarket: 101 } },\n\t\t{ thirdParty: { cardmarket: 102 } }\n\t],\n\tthirdParty: {\n\t\ttcgplayer: 3\n\t}\n}\n\nexport default card\n`
	const info = inspectCardSource(source)
	assert.deepEqual(info.references.map((reference) => reference.idProduct), [101, 102])
	assert.deepEqual(info.references.map((reference) => reference.location), [
		'variants[0].thirdParty.cardmarket',
		'variants[1].thirdParty.cardmarket'
	])
	assert.ok(info.topLevelThirdParty)
	const edit = addCardmarketProperty(source, info.topLevelThirdParty!, 103)
	const updated = `${source.slice(0, edit.start)}${edit.replacement}${source.slice(edit.end)}`
	assert.match(updated, /tcgplayer: 3,\s*cardmarket: 103,/) 
})

test('adds a top-level thirdParty object for a uniquely identified missing link', () => {
	const source = `const card = {\n\tname: { en: "Professor's Research (Professor Magnolia)" },\n\tcategory: "Trainer"\n}\n\nexport default card\n`
	const sourceInfo = inspectCardSource(source)
	assert.ok(sourceInfo.cardObject)
	const edit = addThirdPartyObject(source, sourceInfo.cardObject!, 500165)
	const updated = `${source.slice(0, edit.start)}${edit.replacement}${source.slice(edit.end)}`
	assert.match(updated, /category: "Trainer",\s*thirdParty: \{\s*cardmarket: 500165,\s*\}/)

	const card: CardEntry = {
		code: 'test-1',
		filePath: path.join(process.cwd(), 'data', 'Test', '1.ts'),
		source,
		data: { name: { en: "Professor's Research (Professor Magnolia)" } },
		set: { id: 'test', thirdParty: { cardmarket: 10 } },
		sourceInfo
	}
	const result = makeAudit(new Map([[card.code, card]]), [{ idProduct: 500165, idExpansion: 10, name: "Professor's Research - Professor Magnolia" }], '2026-08-13T00:00:00.000Z')
	assert.equal(result.fixes.length, 1)
	assert.equal(result.fixes[0].status, 'proposed')
	assert.equal(result.fixes[0].kind, 'add')
})

test('preserves space indentation when adding thirdParty', () => {
	const source = `const card = {\n    category: "Trainer"\n}\n`
	const info = inspectCardSource(source)
	const edit = addThirdPartyObject(source, info.cardObject!, 123)
	const updated = `${source.slice(0, edit.start)}${edit.replacement}${source.slice(edit.end)}`
	assert.match(updated, /    thirdParty: \{\n        cardmarket: 123,\n    \}/)
	assert.equal(updated.includes('\t'), false)
})

test('does not add a thirdParty object for group-position suggestions', () => {
	const makeCard = (code: string): CardEntry => {
		const source = `const card = {\n\tname: { en: "Guzzlord GX" },\n\tcategory: "Pokemon"\n}\n\nexport default card\n`
		return {
			code,
			filePath: path.join(process.cwd(), 'data', 'Test', `${code}.ts`),
			source,
			data: { name: { en: 'Guzzlord GX' }, attacks: [{ name: { en: 'Eat Sloppily' } }] },
			set: { id: 'test', thirdParty: { cardmarket: 10 } },
			sourceInfo: inspectCardSource(source)
		}
	}
	const cards = new Map([
		['test-1', makeCard('test-1')],
		['test-2', makeCard('test-2')]
	])
	const products = [
		{ idProduct: 501, idExpansion: 10, name: 'Guzzlord GX [Eat Sloppily]' },
		{ idProduct: 502, idExpansion: 10, name: 'Guzzlord GX [Eat Sloppily]' }
	]
	const result = makeAudit(cards, products, '2026-08-13T00:00:00.000Z')
	assert.equal(result.fixes.length, 2)
	assert.deepEqual(result.fixes.map((fix) => fix.status), ['ambiguous', 'ambiguous'])
	assert.deepEqual(result.fixes.map((fix) => fix.reason), ['top-level-third-party-object-not-found', 'top-level-third-party-object-not-found'])
})

test('classifies cross-card duplicates separately from same-card variant reuse', () => {
	const makeCard = (code: string, fileName: string, setId: string): CardEntry => ({
		code,
		filePath: path.join(process.cwd(), 'data', setId, fileName),
		source: '',
		data: {},
		set: { id: setId },
		sourceInfo: { references: [] }
	})
	const makeEntry = (card: CardEntry, idProduct: number, ordinal: number): ReferenceEntry => {
		const reference = {
			idProduct,
			location: 'thirdParty.cardmarket',
			referenceOrdinal: ordinal,
			sourceStart: 0,
			sourceEnd: 1
		}
		return { key: `${card.code}#${ordinal}`, card, reference }
	}
	const firstCard = makeCard('set1-1', '1.ts', 'set1')
	const secondCard = makeCard('set1-2', '2.ts', 'set1')
	const sameCard = makeCard('set1-3', '3.ts', 'set1')
	const references = [
		makeEntry(firstCard, 200, 0),
		makeEntry(secondCard, 200, 0),
		makeEntry(sameCard, 201, 0),
		makeEntry(sameCard, 201, 1)
	]
	const audits = new Map<string, LinkAudit>(references.map((entry) => [entry.key, {
		key: entry.key,
		setId: entry.card.set.id,
		code: entry.card.code,
		file: entry.card.filePath,
		location: entry.reference.location,
		referenceOrdinal: entry.reference.referenceOrdinal,
		idProduct: entry.reference.idProduct,
		status: 'valid',
		reasons: [],
		matchedDetails: [],
		candidates: []
	}]))
	const groups = makeDuplicateGroups(references, audits)
	assert.deepEqual(groups.map((group) => [group.idProduct, group.classification]), [
		[200, 'duplicate-cross-card'],
		[201, 'same-card-variant-reuse']
	])
})

test('keeps default reports compact while retaining candidate counts', () => {
	const card = {
		code: 'set1-1',
		filePath: path.join(process.cwd(), 'data', 'set1', '1.ts'),
		source: '',
		data: { name: { en: 'Mew' } },
		set: { id: 'set1', thirdParty: { cardmarket: 10 } },
		sourceInfo: { references: [] }
	} as CardEntry
	const audit: LinkAudit = {
		key: 'set1-1#0',
		setId: 'set1',
		code: 'set1-1',
		file: 'data/set1/1.ts',
		location: 'thirdParty.cardmarket',
		referenceOrdinal: 0,
		idProduct: 20,
		status: 'name-mismatch',
		reasons: ['name-mismatch'],
		matchedDetails: [],
		candidates: [{
			idProduct: 21,
			name: 'Mew ex',
			idExpansion: 10,
			score: 450,
			matchedDetails: [],
			baseName: 'Mew ex',
			details: []
		}]
	}
	const report = buildReport(
		new Map([[card.code, card]]),
		[],
		new Map([[audit.key, audit]]),
		[],
		[],
		1,
		'2026-08-13T00:00:00.000Z',
		new Map([[21, 1]])
	)
	assert.equal(report.links[0].candidateCount, 1)
	assert.equal('candidates' in report.links[0], false)
	assert.equal(buildSummary(report).headline.actionRows, 1)
	const result: AuditResult = {
		report,
		audits: new Map([[audit.key, audit]]),
		cards: new Map([[card.code, card]]),
		references: [],
		productRanks: new Map([[21, 1]]),
		fixes: []
	}
	const summary = writeReports(result, false)
	assert.equal(summary.artifacts.full, undefined)
	assert.equal(fs.existsSync(path.join(reportRoot, 'summary.md')), true)
	assert.equal(fs.existsSync(path.join(reportRoot, 'summary.json')), true)
	assert.equal(fs.existsSync(path.join(reportRoot, 'sets', 'set1.md')), true)
	assert.equal(fs.existsSync(path.join(reportRoot, 'full-report.json')), false)
	fs.rmSync(reportRoot, { recursive: true, force: true })
	writeReports(result, true)
	assert.equal(fs.existsSync(path.join(reportRoot, 'full-report.json')), true)
	const fullReport = JSON.parse(fs.readFileSync(path.join(reportRoot, 'full-report.json'), 'utf8'))
	assert.equal(fullReport.links[0].candidates.length, 1)
	fs.rmSync(reportRoot, { recursive: true, force: true })
})

test('clears current and legacy report output before a run', () => {
	fs.mkdirSync(reportRoot, { recursive: true })
	fs.writeFileSync(path.join(reportRoot, 'stale-summary.md'), 'stale')
	for (const legacyPath of legacyReportPaths) {
		fs.mkdirSync(path.dirname(legacyPath), { recursive: true })
		fs.writeFileSync(legacyPath, 'stale')
	}
	clearReportOutput()
	assert.equal(fs.existsSync(reportRoot), false)
	for (const legacyPath of legacyReportPaths) assert.equal(fs.existsSync(legacyPath), false)
})

test('ignores unrelated baseline collisions for selected fixes', () => {
	const makeCard = (code: string, fileName: string): CardEntry => ({
		code,
		filePath: path.join(process.cwd(), 'data', 'Test', fileName),
		source: '',
		data: {},
		set: { id: 'test' },
		sourceInfo: { references: [] }
	})
	const first = makeCard('test-1', '1.ts')
	const second = makeCard('test-2', '2.ts')
	const unrelated = makeCard('other-1', '3.ts')
	const reference = (card: CardEntry, key: string, idProduct: number): ReferenceEntry => ({
		key,
		card,
		reference: { idProduct, location: 'thirdParty.cardmarket', referenceOrdinal: 0, sourceStart: 0, sourceEnd: 1 }
	})
	const result = {
		report: {} as AuditResult['report'],
		audits: new Map(),
		cards: new Map(),
		references: [
			reference(first, 'test-1#0', 100),
			reference(second, 'test-2#0', 101),
			reference(unrelated, 'other-1#0', 900),
			reference(makeCard('other-2', '4.ts'), 'other-2#0', 900)
		],
		productRanks: new Map(),
		fixes: []
	} as AuditResult
	const selectedFix: any = {
		key: 'test-1#0',
		currentId: 100,
		proposedId: 101,
		code: 'test-1'
	}
	assert.deepEqual(findSelectedCollisions(result, [selectedFix]), [101])
	assert.deepEqual(findSelectedCollisions(result, [{ ...selectedFix, proposedId: 102 }]), [])
	assert.deepEqual(findSelectedCollisions(result, [{ key: 'other-1#0', currentId: 900, proposedId: 902, code: 'other-1' } as any]), [])
})
