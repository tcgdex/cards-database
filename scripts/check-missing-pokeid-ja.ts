/*
  Look through all data or data-asia. Find category pokemon and check if dexid is missing or incorrect
  Uses Japanese card names (name.ja) to resolve dexIds by building a lookup map from existing data.

  Usage:
    bun run scripts/check-missing-pokeid-ja.ts --dry-run    # Preview changes without modifying files
    bun run scripts/check-missing-pokeid-ja.ts --apply      # Apply changes to files
*/

import { glob } from 'glob'
import path from 'path'
import fs from 'fs'
import { extractFile } from './utils/ts-extract-utils'

// CLI args
const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const apply = args.includes('--apply')

if (!dryRun && !apply) {
	console.error('Usage: bun run scripts/check-missing-pokeid-ja.ts [--dry-run | --apply]')
	console.error('  --dry-run  Preview changes without modifying files')
	console.error('  --apply    Apply changes to files')
	process.exit(1)
}

const DATA_DIR = path.resolve(__dirname, '../data')
const ASIA_DATA_DIR = path.resolve(__dirname, '../data-asia')
const SCRIPT_DIR = __dirname

interface FixLogEntry {
	filePath: string
	relativePath: string
	cardName: string
	type: 'missing' | 'incorrect'
	oldDexId: number[] | undefined
	newDexId: number[]
}

// ============ Build Japanese name-to-dexId lookup from existing data ============

function buildJaNameToIdMap(): Map<string, number> {
	const map = new Map<string, number>()

	// Scan data-asia for cards that have both name.ja and dexId
	const asiaDir = ASIA_DATA_DIR
	if (!fs.existsSync(asiaDir)) return map

	function scanDir(dir: string) {
		const entries = fs.readdirSync(dir, { withFileTypes: true })
		for (const entry of entries) {
			const fullPath = path.join(dir, entry.name)
			if (entry.isDirectory()) {
				scanDir(fullPath)
			} else if (entry.name.endsWith('.ts') && entry.name !== 'index.ts') {
				try {
					const content = fs.readFileSync(fullPath, 'utf-8')
					if (!content.includes('Pokemon')) continue

					const jaMatch = content.match(/name:\s*\{[^}]*ja:\s*["']([^"']+)["']/)
					const dexIdMatch = content.match(/dexId:\s*\[(\d+)\]/)

					if (jaMatch && dexIdMatch) {
						const jaName = jaMatch[1].toLowerCase().trim()
						const dexId = parseInt(dexIdMatch[1])
						if (!map.has(jaName)) {
							map.set(jaName, dexId)
						}
					}
				} catch {
					// skip unreadable files
				}
			}
		}
	}

	scanDir(asiaDir)
	return map
}

// ============ Load manual mappings ============

function loadManualMappings(): Map<string, number | number[]> {
	const manualMap = new Map<string, number | number[]>()
	const manualPath = path.join(SCRIPT_DIR, 'pokedexIdFixer/manual-mappings.json')

	if (fs.existsSync(manualPath)) {
		const manualData = JSON.parse(fs.readFileSync(manualPath, 'utf-8'))
		for (const [name, dexId] of Object.entries(manualData.mappings || {})) {
			manualMap.set(name.toLowerCase(), dexId as number | number[])
		}
	}

	return manualMap
}

// ============ Normalize Japanese card name for matching ============

/**
 * Normalize a Japanese card name by removing common suffixes and prefixes
 * that appear on TCG cards but aren't part of the Pokémon's name.
 */
function normalizeJaName(name: string): string {
	let normalized = name.toLowerCase().trim()

	// Remove common suffixes (in Japanese)
	const suffixes = [
		'ex', 'ex', 'ex', // ex (various unicode)
		'gx', 'gx',
		'vmax', 'vmax',
		'vstar', 'vstar',
		'v-union', 'vunion',
		'v',
		'prism star', 'prismstar',
		'タッグチーム', // Tag Team
		'のex', // no ex (possessive + ex)
		'のgx',
		'のvmax',
		'のvstar',
		'のv',
		'のlv.x',
		'lv.x',
		'のsp',
		'sp',
		'のδ',
		'δ',
		'のメガ', // no mega
		'メガ', // mega
		'のダーク', // no dark
		'ダーク', // dark
		'のアローラ', // no alola
		'アローラ', // alola
		'のガラル', // no galar
		'ガラル', // galar
		'のヒスイ', // no hisui
		'ヒスイ', // hisui
		'のパルデア', // no paldea
		'パルデア', // paldea
		'のプリズム', // no prism
		'プリズム', // prism
		'のラジオ', // no radio
		'ラジオ', // radio
		'のロケット団', // no rocket
		'ロケット団', // rocket
		'の', // possessive no
		'（デルタ種）', // delta species
		'(デルタ種)',
		'（ex）',
		'(ex)',
		'（gx）',
		'(gx)',
		'（vmax）',
		'(vmax)',
		'（vstar）',
		'(vstar)',
		'（v）',
		'(v)',
		'（lv.x）',
		'(lv.x)',
		'（sp）',
		'(sp)',
		'（δ）',
		'(δ)',
		'（メガ）',
		'(メガ)',
		'（ダーク）',
		'(ダーク)',
		'（アローラ）',
		'(アローラ)',
		'（ガラル）',
		'(ガラル)',
		'（ヒスイ）',
		'(ヒスイ)',
		'（パルデア）',
		'(パルデア)',
		'（プリズム）',
		'(プリズム)',
		'（ラジオ）',
		'(ラジオ)',
		'（ロケット団）',
		'(ロケット団)',
		'かがやく', // radiant
		'輝く', // shining
		'の基本', // basic
		'基本', // basic
		'の化石', // fossil
		'化石', // fossil
		'の秘密の', // secret
		'秘密の', // secret
		'の闇の', // dark
		'闇の', // dark
		'の光の', // light
		'光の', // light
		'の草の', // grass
		'草の', // grass
		'の炎の', // fire
		'炎の', // fire
		'の水の', // water
		'水の', // water
		'の雷の', // lightning
		'雷の', // lightning
		'の超の', // psychic
		'超の', // psychic
		'の闘の', // fighting
		'闘の', // fighting
		'の悪の', // darkness
		'悪の', // darkness
		'の鋼の', // metal
		'鋼の', // metal
		'の無の', // colorless
		'無の', // colorless
		'のフェアリーの', // fairy
		'フェアリーの', // fairy
		'のドラゴンの', // dragon
		'ドラゴンの', // dragon
		'の', // possessive no (catch-all)
	]

	for (const suffix of suffixes) {
		// Try removing from end
		if (normalized.endsWith(suffix)) {
			normalized = normalized.slice(0, -suffix.length).trim()
		}
		// Try removing from start
		if (normalized.startsWith(suffix)) {
			normalized = normalized.slice(suffix.length).trim()
		}
	}

	// Remove trainer prefix (e.g., "ランスの", "エリカの", "カレンの", "ブレインの", "マツバの", etc.)
	// Pattern: Japanese name followed by の
	normalized = normalized.replace(/^[^\s]+\s*の\s*/, '').trim()

	// Remove any remaining parenthetical content
	normalized = normalized.replace(/[（(][^）)]*[）)]/g, '').trim()

	// Remove asterisks and other special chars
	normalized = normalized.replace(/[*☆★◆◇■□○●]/g, '').trim()

	return normalized
}

// ============ Resolve dexId for a Japanese card name ============

function resolveDexId(
	jaName: string,
	nameToId: Map<string, number>,
	manualMappings: Map<string, number | number[]>
): number[] | null {
	// Check manual mappings first
	const manualKey = jaName.toLowerCase().trim()
	const manualResult = manualMappings.get(manualKey)
	if (manualResult !== undefined) {
		return Array.isArray(manualResult) ? manualResult : [manualResult]
	}

	// Try direct lookup first (exact match)
	const directMatch = nameToId.get(manualKey)
	if (directMatch) {
		return [directMatch]
	}

	// Try normalized name
	const normalized = normalizeJaName(jaName)
	if (normalized !== manualKey) {
		const normalizedMatch = nameToId.get(normalized)
		if (normalizedMatch) {
			return [normalizedMatch]
		}
	}

	// Try partial match - check if the name contains any known Pokémon name
	for (const [knownName, dexId] of nameToId) {
		if (jaName.includes(knownName)) {
			return [dexId]
		}
	}

	return null
}

// ============ Apply fix to file ============

function applyFix(filePath: string, dexIds: number[]) {
	let content = fs.readFileSync(filePath, 'utf-8')

	const dexIdRegex = /(\s*)dexId:\s*\[[^\]]*?\],?\s*\n/
	const match = dexIdRegex.exec(content)
	const buildLine = (indent: string) => `${indent}dexId: [${dexIds.join(', ')}],\n`

	if (match && match.index !== undefined) {
		// Replace existing dexId
		const indent = match[1] || '\t'
		content = content.slice(0, match.index) + buildLine(indent) + content.slice(match.index + match[0].length)
	} else {
		// Insert new dexId after category line
		const categoryMatch = content.match(/category:\s*["']Pokemon["']\s*,?\s*\n/)
		if (!categoryMatch || categoryMatch.index === undefined) {
			console.error(`[!] Could not find category line in: ${filePath}`)
			return
		}

		const insertPos = categoryMatch.index + categoryMatch[0].length
		const lineStart = content.lastIndexOf('\n', categoryMatch.index) + 1
		const indent = content.slice(lineStart, categoryMatch.index).match(/^\s*/)?.[0] || '\t'

		content = content.slice(0, insertPos) + '\n' + buildLine(indent) + content.slice(insertPos)
	}

	fs.writeFileSync(filePath, content)
}

// ============ Main ============

async function main() {
	const label = dryRun ? '[DRY RUN]' : '[APPLY]'

	// Build lookup maps from existing data
	console.log('[i] Building Japanese name-to-dexId map from existing data-asia files...')
	const nameToId = buildJaNameToIdMap()
	const manualMappings = loadManualMappings()

	console.log(`[i] Built Japanese name-to-dexId map with ${nameToId.size} entries`)
	console.log(`[i] Loaded ${manualMappings.size} manual mappings`)
	console.log('')

	// Find all card files in both data/ and data-asia/
	const cardFiles = await glob('**/*.ts', {
		cwd: DATA_DIR,
		absolute: true,
		ignore: ['*/*.ts', '**/*.d.ts'],
	})

	const asiaCardFiles = await glob('**/*.ts', {
		cwd: ASIA_DATA_DIR,
		absolute: true,
		ignore: ['*/*.ts', '**/*.d.ts'],
	})

	const allFiles = [...cardFiles, ...asiaCardFiles]
	console.log(`[i] Scanning ${allFiles.length} card files...`)
	console.log('')

	const logEntries: FixLogEntry[] = []
	let missingCount = 0
	let incorrectCount = 0
	let skippedCorrectCount = 0
	let skippedUnresolvableCount = 0
	let errorCount = 0

	for (const filePath of allFiles) {
		const relativePath = path.relative(DATA_DIR, filePath)
		const parts = relativePath.split(path.sep)
		if (parts.length <= 2) continue

		try {
			const card = extractFile(filePath)
			if (!card || card.category !== 'Pokemon') continue

			// Use Japanese name
			const jaName = card.name?.ja || ''
			if (!jaName) {
				skippedUnresolvableCount++
				continue
			}

			const existingDexIds = Array.isArray(card.dexId) ? card.dexId : undefined
			const resolvedDexIds = resolveDexId(jaName, nameToId, manualMappings)

			if (!resolvedDexIds) {
				skippedUnresolvableCount++
				continue
			}

			// Check if dexId is missing
			if (!existingDexIds || existingDexIds.length === 0) {
				logEntries.push({
					filePath,
					relativePath,
					cardName: jaName,
					type: 'missing',
					oldDexId: undefined,
					newDexId: resolvedDexIds,
				})
				missingCount++
				console.log(`${label} [missing dexid]: ${relativePath} "${jaName}" - missing dexId added [${resolvedDexIds.join(', ')}]`)

				if (apply) {
					applyFix(filePath, resolvedDexIds)
				}
				continue
			}

			// Check if dexId is incorrect (compare sorted arrays)
			const sortedExisting = [...existingDexIds].sort((a, b) => a - b)
			const sortedResolved = [...resolvedDexIds].sort((a, b) => a - b)
			const isCorrect = sortedExisting.length === sortedResolved.length &&
				sortedExisting.every((val, idx) => val === sortedResolved[idx])

			if (!isCorrect) {
				logEntries.push({
					filePath,
					relativePath,
					cardName: jaName,
					type: 'incorrect',
					oldDexId: existingDexIds,
					newDexId: resolvedDexIds,
				})
				incorrectCount++
				console.log(`${label} [incorrect dexid]: ${relativePath} "${jaName}" - wrong dexId replaced [${existingDexIds.join(', ')}] with [${resolvedDexIds.join(', ')}]`)

				if (apply) {
					applyFix(filePath, resolvedDexIds)
				}
				continue
			}

			// dexId is correct - skip (no log)
			skippedCorrectCount++
		} catch (error: any) {
			errorCount++
			console.error(`${label} [error]: ${relativePath} - ${error.message}`)
		}
	}

	// Print summary
	console.log('')
	console.log('='.repeat(60))
	console.log(dryRun ? 'DRY RUN SUMMARY' : 'APPLY SUMMARY')
	console.log('='.repeat(60))
	console.log('')
	console.log(`Missing dexId added:     ${missingCount}`)
	console.log(`Wrong dexId replaced:    ${incorrectCount}`)
	console.log(`Skipped (correct):       ${skippedCorrectCount}`)
	console.log(`Skipped (unresolvable):  ${skippedUnresolvableCount}`)
	console.log(`Errors:                  ${errorCount}`)
	console.log('')

	// Save detailed log
	const logPath = path.join(SCRIPT_DIR, dryRun ? 'check-missing-pokeid-ja-dryrun.txt' : 'check-missing-pokeid-ja-log.txt')
	const logLines = logEntries.map((entry) => {
		const prefix = entry.type === 'missing' ? '[missing dexid]' : '[incorrect dexid]'
		if (entry.type === 'missing') {
			return `${prefix}: ${entry.relativePath} "${entry.cardName}" - missing dexId added [${entry.newDexId.join(', ')}]`
		} else {
			return `${prefix}: ${entry.relativePath} "${entry.cardName}" - wrong dexId replaced [${entry.oldDexId!.join(', ')}] with [${entry.newDexId.join(', ')}]`
		}
	})
	fs.writeFileSync(logPath, logLines.join('\n') + '\n')
	console.log(`[OK] Log saved to: ${logPath}`)
}

main()
