#!/usr/bin/env bun
/**
 * Fix missing dexId on Pokemon cards.
 *
 * Uses pokemon-species.json to map English Pokemon names → National Pokedex numbers
 * and inserts a `dexId: [<number>]` line right after `set: Set,` for every Pokemon
 * card that is missing it.
 *
 * Usage:
 *   bun scripts/pokedexIdFixer/fix-missing-dexid.ts "data/Mega Evolution/Ascended Heroes/*.ts"
 *   bun scripts/pokedexIdFixer/fix-missing-dexid.ts "data/Mega Evolution/Ascended Heroes/*.ts" --dry-run
 */

import fs from 'fs'
import path from 'path'
import { glob } from 'glob'
import { extractFile } from '../utils/ts-extract-utils'

// ── Load species database ──────────────────────────────────────────────
const speciesPath = path.join(__dirname, 'pokemon-species.json')
interface SpeciesEntry {
	dexId: number
	englishName: string
	names: Record<string, string>
}
const speciesList: SpeciesEntry[] = JSON.parse(fs.readFileSync(speciesPath, 'utf-8'))

// Build lookup: lowercased English name → dexId
const nameToDex = new Map<string, number>()
for (const sp of speciesList) {
	nameToDex.set(sp.englishName.toLowerCase(), sp.dexId)
}

// ── Name normalisation helpers ─────────────────────────────────────────
function extractSpeciesName(cardName: string): string | null {
	let name = cardName.trim()

	// Remove trainer prefix: "Erika's Oddish" → "Oddish", "Team Rocket's Mewtwo" → "Mewtwo"
	// Handles: "X's", "X\u2019s", multi-word owners like "Team Rocket's"
	name = name.replace(/^(?:[A-Z][\w]*(?:\s+[A-Z][\w]*)*)(?:'s|'s)\s+/u, '')

	// Remove "Mega " prefix: "Mega Charizard Y ex" → "Charizard Y ex"
	name = name.replace(/^Mega\s+/, '')

	// Remove common suffixes
	const suffixes = [
		/ ex$/i, / EX$/i, / GX$/i, / V$/i, / VMAX$/i, / VSTAR$/i,
		/ BREAK$/i, / δ$/i, /\s+\u2606$/,
		/\s+[XY]$/,
		/\s+Lv\.\s*X$/i,
	]
	for (const re of suffixes) {
		name = name.replace(re, '')
	}

	name = name.trim()
	if (!name) return null

	if (nameToDex.has(name.toLowerCase())) return name

	// Try removing regional prefix
	for (const regional of ['Alolan ', 'Galarian ', 'Hisuian ', 'Paldean ']) {
		const stripped = name.replace(new RegExp(`^${regional}`, 'i'), '')
		if (nameToDex.has(stripped.toLowerCase())) return stripped
	}

	// Handle form names like "Fan Rotom" → "Rotom"
	const words = name.split(' ')
	if (words.length >= 2) {
		const lastWord = words[words.length - 1]
		if (nameToDex.has(lastWord.toLowerCase())) return lastWord
	}

	return name
}

function lookupDexId(cardName: string): number | null {
	const species = extractSpeciesName(cardName)
	if (!species) return null
	return nameToDex.get(species.toLowerCase()) ?? null
}

// ── Main ───────────────────────────────────────────────────────────────
const args = process.argv.slice(2)
if (args.length < 1) {
	console.error('Usage: bun fix-missing-dexid.ts <glob-pattern> [--dry-run]')
	console.error('Example: bun fix-missing-dexid.ts "data/Mega Evolution/Ascended Heroes/*.ts"')
	process.exit(1)
}

const pattern = args[0]
const dryRun = args.includes('--dry-run')

const files = await glob(pattern, { cwd: process.cwd(), absolute: true })
files.sort()

console.log(`[i] Found ${files.length} files matching pattern`)
if (dryRun) console.log('[i] DRY RUN — no files will be modified')

let fixed = 0
let skipped = 0
let alreadyHas = 0
let notPokemon = 0
let noMatch = 0

for (const filePath of files) {
	const rel = path.relative(process.cwd(), filePath)

	// Extract current card data
	const card = extractFile(filePath)
	if (!card) { skipped++; continue }

	// Skip non-Pokemon cards
	if (card.category !== 'Pokemon') {
		notPokemon++
		continue
	}

	// Skip cards that already have dexId
	if (card.dexId && (Array.isArray(card.dexId) ? card.dexId.length > 0 : true)) {
		alreadyHas++
		continue
	}

	// Look up dexId from English name
	const enName = card.name?.en
	if (!enName) { skipped++; continue }

	const dexId = lookupDexId(enName)
	if (dexId === null) {
		console.log(`[!] ${rel} — no dexId match for "${enName}"`)
		noMatch++
		continue
	}

	if (dryRun) {
		console.log(`[~] ${rel} — would add dexId: [${dexId}] for "${enName}"`)
		fixed++
		continue
	}

	// Read file and insert dexId line right after "set: Set,"
	let source = fs.readFileSync(filePath, 'utf-8')

	// Check if dexId already exists in the source
	if (/\bdexId\s*:/.test(source)) {
		alreadyHas++
		continue
	}

	// Find the "set: Set," line (possibly followed by blank line) and insert dexId after it
	// Match: "set: Set," optionally followed by a blank line
	const setLineRegex = /^(\t*)set:\s*Set,\s*\n(\n?)/m
	const match = source.match(setLineRegex)
	if (!match) {
		console.log(`[!] ${rel} — could not find "set: Set," line`)
		skipped++
		continue
	}

	const indent = match[1] // Preserve the same indentation
	const dexIdLine = `${indent}dexId: [${dexId}],`
	// Replace: set line + optional blank → set line + blank + dexId + blank
	source = source.replace(setLineRegex, `${indent}set: Set,\n\n${dexIdLine}\n\n`)

	fs.writeFileSync(filePath, source)
	console.log(`[OK] ${rel} — added dexId: [${dexId}] ("${enName}")`)
	fixed++
}

console.log('')
console.log('--- Summary ---')
console.log(`Total files:    ${files.length}`)
console.log(`Fixed (added):  ${fixed}`)
console.log(`Already had:    ${alreadyHas}`)
console.log(`Not Pokemon:    ${notPokemon}`)
console.log(`No match:       ${noMatch}`)
console.log(`Skipped/Error:  ${skipped}`)
