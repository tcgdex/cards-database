/**
 * Fix Tool for Pokédex IDs
 *
 * Applies dexId fixes to card files based on the authoritative mapping.
 *
 * Usage:
 *   bun run fix-dex-ids.ts --dry-run    # Preview changes without modifying files
 *   bun run fix-dex-ids.ts --apply      # Apply changes to files
 *
 * Prerequisites:
 *   Run generate-pokemon-mapping.ts first to create pokemon-mapping.json
 */

import { glob } from 'glob'
import path from 'path'
import fs from 'fs'
import { extractFile } from '../scripts/utils/ts-extract-utils'

// CLI args
const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const apply = args.includes('--apply')

if (!dryRun && !apply) {
	console.error('Usage: bun run fix-dex-ids.ts [--dry-run | --apply]')
	console.error('  --dry-run  Preview changes without modifying files')
	console.error('  --apply    Apply changes to files')
	process.exit(1)
}

const OUTPUT_DIR = __dirname
const DATA_DIR = path.resolve(__dirname, '../data')

interface FixResult {
	filePath: string
	relativePath: string
	cardName: string
	oldDexId: number[] | undefined
	newDexId: number[]
	status: 'fixed' | 'skipped' | 'error'
	reason?: string
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

// TAG TEAM patterns (cards featuring multiple Pokémon)
const TAG_TEAM_SEPARATORS = [' & ', ' et ', ' und ', ' e ', ' y ']

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

function isTagTeamCard(name: string): boolean {
	return TAG_TEAM_SEPARATORS.some((sep) => name.includes(sep))
}

function splitTagTeamName(name: string): string[] {
	for (const sep of TAG_TEAM_SEPARATORS) {
		if (name.includes(sep)) {
			return name.split(sep).map((n) => n.trim())
		}
	}
	return [name]
}

async function main() {
	// Load mapping
	const mappingPath = path.join(OUTPUT_DIR, 'pokemon-mapping.json')
	if (!fs.existsSync(mappingPath)) {
		console.error('[x] pokemon-mapping.json not found. Run generate-pokemon-mapping.ts first.')
		process.exit(1)
	}

	const mappingData = JSON.parse(fs.readFileSync(mappingPath, 'utf-8'))
	const nameToId = new Map<string, number>(Object.entries(mappingData.mappings))
	console.log(`[i] Loaded ${nameToId.size} name mappings`)

	// Load manual mappings for array values (e.g., Buried Fossil -> [138, 140, 142])
	const manualPath = path.join(OUTPUT_DIR, 'manual-mappings.json')
	const nameToIds = new Map<string, number[]>() // For multi-dex mappings
	if (fs.existsSync(manualPath)) {
		const manualData = JSON.parse(fs.readFileSync(manualPath, 'utf-8'))
		for (const [name, dexId] of Object.entries(manualData.mappings || {})) {
			if (Array.isArray(dexId)) {
				nameToIds.set(name.toLowerCase(), dexId as number[])
			}
		}
		if (nameToIds.size > 0) {
			console.log(`[i] Loaded ${nameToIds.size} multi-dex manual mappings`)
		}
	}

	// Find all card files
	const cardFiles = await glob('**/*.ts', {
		cwd: DATA_DIR,
		absolute: true,
		ignore: ['*/*.ts', '**/*.d.ts'],
	})

	console.log(`[i] Scanning ${cardFiles.length} card files...`)
	console.log('')

	const results: FixResult[] = []
	let fixedCount = 0
	let skippedCount = 0
	let errorCount = 0

	for (const filePath of cardFiles) {
		const relativePath = path.relative(DATA_DIR, filePath)
		const parts = relativePath.split(path.sep)
		if (parts.length <= 2) continue

		try {
			const card = extractFile(filePath)
			if (!card || card.category !== 'Pokemon') continue

			// Skip cards that already have dexId
			if (Array.isArray(card.dexId) && card.dexId.length > 0) {
				continue
			}

			const engName = card.name?.en || card.name?.fr || ''
			if (!engName) {
				results.push({
					filePath,
					relativePath,
					cardName: 'Unknown',
					oldDexId: undefined,
					newDexId: [],
					status: 'skipped',
					reason: 'No English or French name found',
				})
				skippedCount++
				continue
			}

			// Check if this is a TAG TEAM card
			if (isTagTeamCard(engName)) {
				const parts = splitTagTeamName(engName)
				const dexIds: number[] = []

				for (const part of parts) {
					const normalized = normalizeNameForMatching(part)
					const dexId = nameToId.get(normalized)
					if (dexId) {
						dexIds.push(dexId)
					}
				}

				if (dexIds.length === parts.length) {
					// Found all dexIds for TAG TEAM
					results.push({
						filePath,
						relativePath,
						cardName: engName,
						oldDexId: undefined,
						newDexId: dexIds,
						status: 'fixed',
					})
					fixedCount++

					if (apply) {
						applyFix(filePath, dexIds)
					}
				} else {
					results.push({
						filePath,
						relativePath,
						cardName: engName,
						oldDexId: undefined,
						newDexId: [],
						status: 'skipped',
						reason: `Could not match all TAG TEAM parts: ${parts.join(', ')}`,
					})
					skippedCount++
				}
		} else {
			// Single Pokémon card
			// First try the original name (lowercased with normalized apostrophes), then try normalized
			const original = engName.toLowerCase().replace(/\u2019/g, "'")
			const normalized = normalizeNameForMatching(engName)

			// Check for multi-dex manual mapping first (e.g., Buried Fossil)
			const multiDexIds = nameToIds.get(original) || nameToIds.get(normalized)
			if (multiDexIds) {
				results.push({
					filePath,
					relativePath,
					cardName: engName,
					oldDexId: undefined,
					newDexId: multiDexIds,
					status: 'fixed',
				})
				fixedCount++

				if (apply) {
					applyFix(filePath, multiDexIds)
				}
			} else {
				// Try single dexId mapping
				const dexId = nameToId.get(original) || nameToId.get(normalized)

				if (dexId) {
					results.push({
						filePath,
						relativePath,
						cardName: engName,
						oldDexId: undefined,
						newDexId: [dexId],
						status: 'fixed',
					})
					fixedCount++

					if (apply) {
						applyFix(filePath, [dexId])
					}
				} else {
					results.push({
						filePath,
						relativePath,
						cardName: engName,
						oldDexId: undefined,
						newDexId: [],
						status: 'skipped',
						reason: `No mapping found for: "${original}" or "${normalized}"`,
					})
					skippedCount++
				}
			}
		}
		} catch (error: any) {
			results.push({
				filePath,
				relativePath,
				cardName: 'Error',
				oldDexId: undefined,
				newDexId: [],
				status: 'error',
				reason: error.message,
			})
			errorCount++
		}
	}

	// Print summary
	console.log('='.repeat(60))
	console.log(dryRun ? 'FIX PREVIEW (DRY RUN)' : 'FIX RESULTS')
	console.log('='.repeat(60))
	console.log('')
	console.log(`Fixed:   ${fixedCount}`)
	console.log(`Skipped: ${skippedCount}`)
	console.log(`Errors:  ${errorCount}`)
	console.log('')

	// Print fixed cards
	const fixed = results.filter((r) => r.status === 'fixed')
	if (fixed.length > 0) {
		console.log('='.repeat(60))
		console.log(dryRun ? 'CARDS TO BE FIXED' : 'FIXED CARDS')
		console.log('='.repeat(60))
		console.log('')

		for (const result of fixed.slice(0, 50)) {
			console.log(`${result.relativePath}`)
			console.log(`  "${result.cardName}" -> dexId: [${result.newDexId.join(', ')}]`)
		}

		if (fixed.length > 50) {
			console.log(`... and ${fixed.length - 50} more`)
		}
		console.log('')
	}

	// Print skipped cards
	const skipped = results.filter((r) => r.status === 'skipped')
	if (skipped.length > 0) {
		console.log('='.repeat(60))
		console.log('SKIPPED CARDS (need manual review)')
		console.log('='.repeat(60))
		console.log('')

		for (const result of skipped.slice(0, 30)) {
			console.log(`${result.relativePath}`)
			console.log(`  "${result.cardName}" - ${result.reason}`)
		}

		if (skipped.length > 30) {
			console.log(`... and ${skipped.length - 30} more`)
		}
		console.log('')
	}

	// Save detailed log
	const logPath = path.join(OUTPUT_DIR, dryRun ? 'fix-preview.txt' : 'fix-log.txt')
	const logLines = results.map((r) => `${r.status.toUpperCase()}\t${r.relativePath}\t"${r.cardName}"\t[${r.newDexId.join(',')}]\t${r.reason || ''}`)
	fs.writeFileSync(logPath, logLines.join('\n'))
	console.log(`[OK] Log saved to: ${logPath}`)
}

function applyFix(filePath: string, dexIds: number[]) {
	// Read the file
	let content = fs.readFileSync(filePath, 'utf-8')

	// Find the position to insert dexId
	// We want to insert after 'category: "Pokemon",' or similar

	// Pattern to find category line
	const categoryMatch = content.match(/category:\s*["']Pokemon["']\s*,?\s*\n/)
	if (!categoryMatch || categoryMatch.index === undefined) {
		console.error(`[!] Could not find category line in: ${filePath}`)
		return
	}

	const insertPos = categoryMatch.index + categoryMatch[0].length

	// Detect indentation from the category line
	const lineStart = content.lastIndexOf('\n', categoryMatch.index) + 1
	const indent = content.slice(lineStart, categoryMatch.index).match(/^\s*/)?.[0] || '\t'

	// Create the dexId line
	const dexIdLine = `${indent}dexId: [${dexIds.join(', ')}],\n`

	// Check if dexId already exists (shouldn't happen but be safe)
	if (content.includes('dexId:')) {
		console.error(`[!] dexId already exists in: ${filePath}`)
		return
	}

	// Insert the dexId line
	content = content.slice(0, insertPos) + '\n' + dexIdLine + content.slice(insertPos)

	// Write back
	fs.writeFileSync(filePath, content)
}

main().catch((error) => {
	console.error('[x] Fatal error:', error)
	process.exit(1)
})

