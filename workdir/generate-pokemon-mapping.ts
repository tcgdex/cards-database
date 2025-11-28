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
import { extractFile } from '../scripts/utils/ts-extract-utils'

const OUTPUT_DIR = __dirname
const DATA_DIR = path.resolve(__dirname, '../data')

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

// Card suffixes to strip when matching names
const CARD_SUFFIXES = [
	' EX',
	' ex',
	'-EX',
	'-ex',
	' GX',
	'-GX',
	' V',
	'-V',
	' VMAX',
	' VSTAR',
	' V-UNION',
	' BREAK',
	' LV.X',
	' Prime',
	' PRIME',
	' SP',
	' FB',
	' GL',
	' C',
	' G',
	' E4',
	' δ',
	' Star',
	' ☆',
	'★',
]

// Regional form prefixes/patterns
const REGIONAL_PATTERNS = [
	{ pattern: /^Alolan /i, region: 'alolan' },
	{ pattern: /^Alola /i, region: 'alolan' },
	{ pattern: /^Galarian /i, region: 'galarian' },
	{ pattern: /^Galar /i, region: 'galarian' },
	{ pattern: /^Hisuian /i, region: 'hisuian' },
	{ pattern: /^Hisui /i, region: 'hisuian' },
	{ pattern: /^Paldean /i, region: 'paldean' },
	{ pattern: /^Paldea /i, region: 'paldean' },
	// French
	{ pattern: /d'Alola$/i, region: 'alolan' },
	{ pattern: /de Galar$/i, region: 'galarian' },
	{ pattern: /de Hisui$/i, region: 'hisuian' },
	{ pattern: /de Paldea$/i, region: 'paldean' },
	// German
	{ pattern: /^Alola-/i, region: 'alolan' },
	{ pattern: /^Galar-/i, region: 'galarian' },
	{ pattern: /^Hisui-/i, region: 'hisuian' },
	{ pattern: /^Paldea-/i, region: 'paldean' },
]

// Mega evolution patterns
const MEGA_PATTERNS = [
	/^Mega /i,
	/^M /i,
	/^Méga-/i, // French
	/^Méga /i, // French
	/^M-/i,
]

// Other special form patterns (these share the base Pokémon's dexId)
const SPECIAL_FORM_PATTERNS = [
	/^Primal /i,
	/^Primo-/i, // French Primal
	/^Origin Forme /i,
	/^Altered Forme /i,
	/^Sky Forme /i,
	/^Land Forme /i,
	/^Therian Forme /i,
	/^Incarnate Forme /i,
	/^Black Kyurem/i,
	/^White Kyurem/i,
	/^Dusk Mane /i,
	/^Dawn Wings /i,
	/^Ultra /i,
	/^Crowned /i,
	/^Ice Rider /i,
	/^Shadow Rider /i,
	/^Single Strike /i,
	/^Rapid Strike /i,
	/^Bloodmoon /i,
	// Owner prefixes (Team Rocket, gym leaders, etc.)
	/^Rocket's /i,
	/^Dark /i,
	/^Light /i,
	/^Shining /i,
	/^_____'s /i, // Celebrations Pikachu
	/^Radiant /i,
	// Costume/special variants
	/ with .+$/i, // "Pikachu with Grey Felt Hat"
	/^Surfing /i,
	/^Flying /i,
	/^Detective /i,
]

function normalizeNameForMatching(name: string): string {
	let normalized = name.trim()

	// Normalize apostrophes (Unicode RIGHT SINGLE QUOTATION MARK U+2019 to ASCII)
	normalized = normalized.replace(/\u2019/g, "'")

	// Remove card suffixes
	for (const suffix of CARD_SUFFIXES) {
		if (normalized.endsWith(suffix)) {
			normalized = normalized.slice(0, -suffix.length).trim()
		}
	}

	// Remove regional prefixes/suffixes (we'll match to base Pokémon)
	for (const { pattern } of REGIONAL_PATTERNS) {
		normalized = normalized.replace(pattern, '').trim()
	}

	// Remove mega prefixes
	for (const pattern of MEGA_PATTERNS) {
		normalized = normalized.replace(pattern, '').trim()
	}

	// Remove special form prefixes
	for (const pattern of SPECIAL_FORM_PATTERNS) {
		normalized = normalized.replace(pattern, '').trim()
	}

	// Remove trailing form indicators like " X" or " Y" for Mega Charizard X/Y
	normalized = normalized.replace(/ [XY]$/i, '').trim()

	// Lowercase for comparison
	return normalized.toLowerCase()
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

	// Now scan existing cards-database to find additional name variations
	// and validate our mapping
	console.log('[i] Scanning cards-database for additional name variations...')

	const cardFiles = await glob('**/*.ts', {
		cwd: DATA_DIR,
		absolute: true,
		ignore: ['*/*.ts', '**/*.d.ts'],
	})

	let cardsWithKnownDex = 0
	let cardsWithUnknownName = 0
	const unknownNames = new Map<string, { name: string; file: string; lang: string }[]>()

	for (const filePath of cardFiles) {
		const parts = path.relative(DATA_DIR, filePath).split(path.sep)
		if (parts.length <= 2) continue

		try {
			const card = extractFile(filePath)
			if (!card || card.category !== 'Pokemon') continue

			// If card already has dexId, use it to validate/extend our mapping
			if (Array.isArray(card.dexId) && card.dexId.length > 0) {
				cardsWithKnownDex++

				// Add all name variations from this card to our mapping
				for (const [lang, name] of Object.entries(card.name as Record<string, string>)) {
					if (!name) continue
					const normalized = normalizeNameForMatching(name)

					// For multi-dex cards (TAG TEAM), we can't create a simple mapping
					// but we can still validate single-dex cards
					if (card.dexId.length === 1) {
						const existingId = nameToId.get(normalized)
						if (!existingId) {
							// New name variation found
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
				}
			} else {
				// Card missing dexId - try to find a match
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
						lang: 'en',
					})
				}
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

	// Save unknown names for manual review
	if (unknownNames.size > 0) {
		const unknownPath = path.join(OUTPUT_DIR, 'unknown-names.json')
		const unknownOutput = Array.from(unknownNames.entries()).map(([normalized, occurrences]) => ({
			normalizedName: normalized,
			occurrences,
		}))
		fs.writeFileSync(unknownPath, JSON.stringify(unknownOutput, null, 2))
		console.log(`[!] Saved ${unknownNames.size} unknown names to: ${unknownPath}`)
		console.log('    Review these and add manual mappings if needed.')
	}
}

main().catch((error) => {
	console.error('[x] Fatal error:', error)
	process.exit(1)
})

