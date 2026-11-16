#!/usr/bin/env bun

import fs from 'fs'
import path from 'path'
import * as XLSX from 'xlsx'

const SCRIPT_DIR = __dirname
const SOURCE_FILE = path.join(SCRIPT_DIR, 'sources', 'RotomAmiti-Cameo-Database.xlsx')
const OUTPUT_FILE = path.join(SCRIPT_DIR, 'cameo-database.json')
const GENERATION_SHEETS = Array.from({ length: 9 }, (_, index) => `Gen ${index + 1}`)

interface RawCameoRow {
	ndex: number | string
	cameo: string
	cardName: string
	setName: string
	localId: number | string
	notes: string
	__rowNum__?: number
}

interface NormalizedRow {
	setName: string
	localId: string
	cardName: string
	dexId: number
	generation: number
}

interface CameoCardRecord {
	setName: string
	localId: string
	cardName: string
	cameoDexIds: number[]
	generations: number[]
}

interface CameoDatabase {
	source: string
	sourceFile: string
	generatedAt: string
	throughEnglishSet: string | null
	throughJapaneseSet: string | null
	sheets: string[]
	cards: CameoCardRecord[]
}

function normalizeCell(value: unknown): string {
	return String(value ?? '').trim()
}

function toDexId(value: unknown): number | null {
	if (typeof value === 'number' && Number.isFinite(value) && value > 0) {
		return Math.trunc(value)
	}

	const text = normalizeCell(value)
	if (!text) {
		return null
	}

	const parsed = Number(text)
	if (!Number.isFinite(parsed) || parsed <= 0) {
		return null
	}

	return Math.trunc(parsed)
}

function toLocalId(value: unknown): string {
	if (typeof value === 'number' && Number.isFinite(value)) {
		return Number.isInteger(value) ? String(value) : String(value)
	}

	const text = normalizeCell(value)
	if (!text) {
		return ''
	}

	const numeric = Number(text)
	if (Number.isFinite(numeric) && text.endsWith('.0')) {
		return String(Math.trunc(numeric))
	}

	return text
}

function parseMainSheetUpdateRange(workbook: XLSX.WorkBook): {
	throughEnglishSet: string | null
	throughJapaneseSet: string | null
} {
	const mainSheet = workbook.Sheets.Main
	if (!mainSheet) {
		return {
			throughEnglishSet: null,
			throughJapaneseSet: null,
		}
	}

	const rows = XLSX.utils.sheet_to_json<unknown[]>(mainSheet, {
		header: 1,
		defval: '',
	})

	for (const row of rows) {
		for (const cell of row) {
			const text = normalizeCell(cell)
			if (!text.includes('currently up-to-date')) {
				continue
			}

			const match = text.match(
				/including\s+(.+?),\s+and all Japanese releases up to and including\s+(.+?)\.?$/i,
			)

			if (!match) {
				continue
			}

			return {
				throughEnglishSet: match[1].trim(),
				throughJapaneseSet: match[2].trim(),
			}
		}
	}

	return {
		throughEnglishSet: null,
		throughJapaneseSet: null,
	}
}

function collectRows(workbook: XLSX.WorkBook): NormalizedRow[] {
	const normalizedRows: NormalizedRow[] = []

	for (const sheetName of GENERATION_SHEETS) {
		const generationSheet = workbook.Sheets[sheetName]
		if (!generationSheet) {
			console.log(`[!] Missing worksheet: ${sheetName}`)
			continue
		}

		const generationNumber = Number(sheetName.replace('Gen ', ''))
		const rows = XLSX.utils.sheet_to_json<RawCameoRow>(generationSheet, {
			header: ['ndex', 'cameo', 'cardName', 'setName', 'localId', 'notes'],
			range: 1,
			defval: '',
		})

		let activeDexId: number | null = null

		for (const row of rows) {
			const rowDexId = toDexId(row.ndex)
			if (rowDexId !== null) {
				activeDexId = rowDexId
			}

			if (activeDexId === null) {
				continue
			}

			const cardName = normalizeCell(row.cardName)
			const setName = normalizeCell(row.setName)
			const localId = toLocalId(row.localId)

			if (!cardName || !setName || !localId || localId === '-') {
				continue
			}

			normalizedRows.push({
				setName,
				localId,
				cardName,
				dexId: activeDexId,
				generation: generationNumber,
			})
		}
	}

	return normalizedRows
}

function buildCardRecords(rows: NormalizedRow[]): CameoCardRecord[] {
	const cardMap = new Map<string, {
		setName: string
		localId: string
		cardNames: Set<string>
		cameoDexIds: Set<number>
		generations: Set<number>
	}>()

	for (const row of rows) {
		const key = `${row.setName.toLowerCase()}|||${row.localId.toLowerCase()}`
		const record = cardMap.get(key) ?? {
			setName: row.setName,
			localId: row.localId,
			cardNames: new Set<string>(),
			cameoDexIds: new Set<number>(),
			generations: new Set<number>(),
		}

		record.cardNames.add(row.cardName)
		record.cameoDexIds.add(row.dexId)
		record.generations.add(row.generation)
		cardMap.set(key, record)
	}

	const cards: CameoCardRecord[] = []
	for (const value of cardMap.values()) {
		const cardNames = Array.from(value.cardNames).sort((a, b) => a.localeCompare(b))
		cards.push({
			setName: value.setName,
			localId: value.localId,
			cardName: cardNames[0],
			cameoDexIds: Array.from(value.cameoDexIds).sort((a, b) => a - b),
			generations: Array.from(value.generations).sort((a, b) => a - b),
		})
	}

	cards.sort((a, b) => {
		const setCmp = a.setName.localeCompare(b.setName)
		if (setCmp !== 0) {
			return setCmp
		}
		const numericA = Number(a.localId)
		const numericB = Number(b.localId)
		if (Number.isFinite(numericA) && Number.isFinite(numericB) && numericA !== numericB) {
			return numericA - numericB
		}
		return a.localId.localeCompare(b.localId)
	})

	return cards
}

function main() {
	if (!fs.existsSync(SOURCE_FILE)) {
		console.error(`[x] Source file not found: ${SOURCE_FILE}`)
		process.exit(1)
	}

	console.log(`[i] Reading workbook: ${SOURCE_FILE}`)
	const workbook = XLSX.readFile(SOURCE_FILE)
	const updateRange = parseMainSheetUpdateRange(workbook)
	const normalizedRows = collectRows(workbook)
	const cards = buildCardRecords(normalizedRows)

	const sourceMtime = fs.statSync(SOURCE_FILE).mtime.toISOString()
	const output: CameoDatabase = {
		source: "RotomAmiti's Cameo Pokémon Card Database",
		sourceFile: 'sources/RotomAmiti-Cameo-Database.xlsx',
		generatedAt: sourceMtime,
		throughEnglishSet: updateRange.throughEnglishSet,
		throughJapaneseSet: updateRange.throughJapaneseSet,
		sheets: GENERATION_SHEETS,
		cards,
	}

	fs.writeFileSync(OUTPUT_FILE, `${JSON.stringify(output, null, '\t')}\n`)
	console.log(`[OK] Wrote ${cards.length} card entries to: ${OUTPUT_FILE}`)
}

main()
