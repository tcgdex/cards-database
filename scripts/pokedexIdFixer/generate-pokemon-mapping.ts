/**
 * Generate Pokémon Name to DexId Mapping
 *
 * Creates a comprehensive mapping from Pokémon names (in multiple languages)
 * to their National Pokédex IDs. Handles:
 * - Base Pokémon names
 * - Regional forms (Alolan, Galarian, Hisuian, Paldean)
 * - Mega evolutions
 * - Special forms (Primal, Origin, etc.)
 * - Card suffixes (EX, GX, V, VMAX, etc.)
 *
 * Usage:
 *   bun run generate-pokemon-mapping.ts
 *
 * Prerequisites:
 *   Run download-pokedex.ts first to get pokemon-species.json
 *
 * Output:
 *   - pokemon-mapping.json: Name to dexId mapping
 */

import fs from 'fs'
import path from 'path'
import { glob } from 'glob'
import { extractFile } from '../utils/ts-extract-utils'
import { normalizeNameForMatching } from './dex-utils'

const OUTPUT_DIR = __dirname
const DATA_DIR = path.resolve(__dirname, '../../data')

interface PokemonSpecies {
	dexId: number
	englishName: string
	names: Record<string, string>
	forms: string[]
}

interface NameMapping {
	name: string
	normalizedName: string
	dexId: number
	language: string
	source: 'pokeapi' | 'cards-database'
}

async function main() {
	// Load PokeAPI data
	const speciesPath = path.join(OUTPUT_DIR, 'pokemon-species.json')
	if (!fs.existsSync(speciesPath)) {
		console.error('[x] pokemon-species.json not found. Run download-pokedex.ts first.')
		process.exit(1)
	}

	const species: PokemonSpecies[] = JSON.parse(fs.readFileSync(speciesPath, 'utf-8'))
	console.log(`[i] Loaded ${species.length} Pokémon species from PokeAPI`)

	// Load manual mappings (supports single number, array of numbers, or null)
	const manualPath = path.join(OUTPUT_DIR, 'manual-mappings.json')
	let manualMappings: Record<string, number | number[] | null> = {}
	if (fs.existsSync(manualPath)) {
		const manualData = JSON.parse(fs.readFileSync(manualPath, 'utf-8'))
		manualMappings = manualData.mappings || {}
		console.log(`[i] Loaded ${Object.keys(manualMappings).length} manual mappings`)
	}

	// Build initial mapping from PokeAPI data
	const mappings: NameMapping[] = []
	const nameToId = new Map<string, number>() // normalized name -> dexId

	for (const pokemon of species) {
		// Add all language names
		for (const [lang, name] of Object.entries(pokemon.names)) {
			const normalized = normalizeNameForMatching(name)
			mappings.push({
				name,
				normalizedName: normalized,
				dexId: pokemon.dexId,
				language: lang,
				source: 'pokeapi',
			})
			// Store the first mapping for each normalized name
			if (!nameToId.has(normalized)) {
				nameToId.set(normalized, pokemon.dexId)
			}
		}

		// Also add the English name as-is (for exact matching)
		const engNormalized = pokemon.englishName.toLowerCase()
		if (!nameToId.has(engNormalized)) {
			nameToId.set(engNormalized, pokemon.dexId)
		}
	}

	// Add manual mappings (skip arrays - those are handled specially in fix-dex-ids.ts)
	for (const [name, dexId] of Object.entries(manualMappings)) {
		if (dexId !== null && typeof dexId === 'number' && !nameToId.has(name)) {
			nameToId.set(name, dexId)
		}
	}

	console.log(`[i] Built ${nameToId.size} unique name mappings`)

	// Scan existing cards-database to find additional name variations
	// and validate our mapping. This is intentionally a two-pass process:
	// first learn aliases from cards that already have dexId, then report
	// truly unresolved names from cards still missing dexId.
	console.log('[i] Scanning cards-database for additional name variations...')

	const cardFiles = await glob('**/*.ts', {
		cwd: DATA_DIR,
		absolute: true,
		ignore: ['*/*.ts', '**/*.d.ts'],
	})

	let cardsWithKnownDex = 0
	for (const filePath of cardFiles) {
		const parts = path.relative(DATA_DIR, filePath).split(path.sep)
		if (parts.length <= 2) continue

		try {
			const card = extractFile(filePath)
			if (!card || card.category !== 'Pokemon') continue

			// If card already has dexId, use it to validate/extend our mapping
			if (!Array.isArray(card.dexId) || card.dexId.length === 0) {
				continue
			}

			cardsWithKnownDex++

			// For multi-dex cards (TAG TEAM), we can't create a simple mapping
			// but we can still learn aliases from single-dex cards.
			if (card.dexId.length !== 1) {
				continue
			}

			for (const [lang, name] of Object.entries(card.name as Record<string, string>)) {
				if (!name) continue
				const normalized = normalizeNameForMatching(name)
				const existingId = nameToId.get(normalized)
				if (!existingId) {
					nameToId.set(normalized, card.dexId[0])
					mappings.push({
						name,
						normalizedName: normalized,
						dexId: card.dexId[0],
						language: lang,
						source: 'cards-database',
					})
				}
			}
		} catch (error) {
			// Skip parse errors
		}
	}

	let cardsWithUnknownName = 0
	const unknownNames = new Map<string, { name: string; file: string; lang: string }[]>()

	for (const filePath of cardFiles) {
		const parts = path.relative(DATA_DIR, filePath).split(path.sep)
		if (parts.length <= 2) continue

		try {
			const card = extractFile(filePath)
			if (!card || card.category !== 'Pokemon') continue

			if (Array.isArray(card.dexId) && card.dexId.length > 0) {
				continue
			}

			const engName = card.name?.en || card.name?.fr || ''
			const normalized = normalizeNameForMatching(engName)
			const matchedId = nameToId.get(normalized)

			if (!matchedId) {
				cardsWithUnknownName++
				if (!unknownNames.has(normalized)) {
					unknownNames.set(normalized, [])
				}
				unknownNames.get(normalized)!.push({
					name: engName,
					file: path.relative(DATA_DIR, filePath),
					lang: card.name?.en ? 'en' : 'fr',
				})
			}
		} catch (error) {
			// Skip parse errors
		}
	}

	console.log(`[i] Found ${cardsWithKnownDex} cards with known dexId`)
	console.log(`[i] Found ${cardsWithUnknownName} cards with unknown names`)

	// Save the mapping
	const mappingOutput = {
		generatedAt: new Date().toISOString(),
		totalMappings: nameToId.size,
		mappings: Object.fromEntries(nameToId),
	}

	const mappingPath = path.join(OUTPUT_DIR, 'pokemon-mapping.json')
	fs.writeFileSync(mappingPath, JSON.stringify(mappingOutput, null, 2))
	console.log(`\n[OK] Saved mapping to: ${mappingPath}`)

	// Save unknown names for manual review. Always rewrite the file so stale
	// reports do not survive a clean run.
	const unknownPath = path.join(OUTPUT_DIR, 'unknown-names.json')
	const unknownOutput = Array.from(unknownNames.entries()).map(([normalized, occurrences]) => ({
		normalizedName: normalized,
		occurrences,
	}))
	fs.writeFileSync(unknownPath, JSON.stringify(unknownOutput, null, 2))
	if (unknownNames.size > 0) {
		console.log(`[!] Saved ${unknownNames.size} unknown names to: ${unknownPath}`)
		console.log('    Review these and add manual mappings if needed.')
	} else {
		console.log(`[OK] No unknown names. Saved empty report to: ${unknownPath}`)
	}
}

main().catch((error) => {
	console.error('[x] Fatal error:', error)
	process.exit(1)
})

