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
import { extractFile } from '../utils/ts-extract-utils'
import {
	buildTagTeamDexIds,
	countDistinctSpecies,
	isTagTeamCard,
	isTagTeamDexComplete,
	normalizeNameForMatching,
	splitTagTeamName,
} from './dex-utils'

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
const DATA_DIR = path.resolve(__dirname, '../../data')

interface FixResult {
	filePath: string
	relativePath: string
	cardName: string
	oldDexId: number[] | undefined
	newDexId: number[]
	status: 'fixed' | 'skipped' | 'error'
	reason?: string
}


function logFixAction(
	action: 'fixed' | 'skipped',
	dryRunMode: boolean,
	relativePath: string,
	cardName: string,
	oldDex: number[] | undefined,
	newDex: number[],
	reason?: string,
) {
	const label = dryRunMode ? '[DRY RUN]' : '[APPLY]'
	if (action === 'fixed') {
		const prev = oldDex ? `[${oldDex.join(', ')}]` : 'N/A'
		console.log(`${label} ${relativePath} "${cardName}": ${prev} -> [${newDex.join(', ')}]`)
	} else if (reason) {
		console.log(`${label} SKIP ${relativePath} "${cardName}": ${reason}`)
	}
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

			const existingDexIds = Array.isArray(card.dexId) ? card.dexId : undefined
			const isTagTeam = isTagTeamCard(engName)
			const tagTeamParts = isTagTeam ? splitTagTeamName(engName) : []

			const needsTagTeamUpdate =
				isTagTeam &&
				tagTeamParts.length > 1 &&
				!isTagTeamDexComplete(tagTeamParts, existingDexIds, nameToId)
			const hasDexIds = Array.isArray(existingDexIds) && existingDexIds.length > 0

			// Skip cards that already have dexId unless we need to recompute TAG TEAM values
			if (hasDexIds && !needsTagTeamUpdate) {
				continue
			}

			if (isTagTeam) {
				const { dexIds, missingParts } = buildTagTeamDexIds(tagTeamParts, nameToId)
				const uniqueDexIds = Array.from(new Set(dexIds))
				const speciesCount = countDistinctSpecies(tagTeamParts)
				if (missingParts.length === 0 && uniqueDexIds.length >= speciesCount) {
					results.push({
						filePath,
						relativePath,
						cardName: engName,
						oldDexId: existingDexIds,
						newDexId: uniqueDexIds,
						status: 'fixed',
					})
					fixedCount++
					logFixAction('fixed', dryRun, relativePath, engName, existingDexIds, uniqueDexIds)

					if (apply) {
						applyFix(filePath, uniqueDexIds, existingDexIds)
					}
				} else {
					const reason =
						missingParts.length > 0
							? `Could not match TAG TEAM parts: ${missingParts.join(', ')}`
							: `Could not match ${speciesCount} distinct TAG TEAM species: ${tagTeamParts.join(', ')}`
					results.push({
						filePath,
						relativePath,
						cardName: engName,
						oldDexId: existingDexIds,
						newDexId: existingDexIds || [],
						status: 'skipped',
						reason,
					})
					skippedCount++
					logFixAction('skipped', dryRun, relativePath, engName, existingDexIds, existingDexIds || [], reason)
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
						oldDexId: existingDexIds,
						newDexId: multiDexIds,
						status: 'fixed',
					})
					fixedCount++
					logFixAction('fixed', dryRun, relativePath, engName, existingDexIds, multiDexIds)

					if (apply) {
						applyFix(filePath, multiDexIds, existingDexIds)
					}
			} else {
				// Try single dexId mapping
				const dexId = nameToId.get(original) || nameToId.get(normalized)

				if (dexId) {
					results.push({
						filePath,
						relativePath,
						cardName: engName,
							oldDexId: existingDexIds,
						newDexId: [dexId],
						status: 'fixed',
					})
					fixedCount++
						logFixAction('fixed', dryRun, relativePath, engName, existingDexIds, [dexId])

						if (apply) {
							applyFix(filePath, [dexId], existingDexIds)
						}
				} else {
						const reason = `No mapping found for: "${original}" or "${normalized}"`
						results.push({
							filePath,
							relativePath,
							cardName: engName,
							oldDexId: existingDexIds,
							newDexId: existingDexIds || [],
							status: 'skipped',
							reason,
						})
					skippedCount++
						logFixAction('skipped', dryRun, relativePath, engName, existingDexIds, existingDexIds || [], reason)
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

function applyFix(filePath: string, dexIds: number[], _existingDexIds?: number[]) {
	// Read the file
	let content = fs.readFileSync(filePath, 'utf-8')

	const dexIdRegex = /(\s*)dexId:\s*\[[^\]]*?\],?\s*\n/
	const match = dexIdRegex.exec(content)
	const buildLine = (indent: string) => `${indent}dexId: [${dexIds.join(', ')}],\n`

	if (match && match.index !== undefined) {
		const indent = match[1] || '\t'
		content = content.slice(0, match.index) + buildLine(indent) + content.slice(match.index + match[0].length)
	} else {
		// Find the position to insert dexId
		// We want to insert after 'category: "Pokemon",' or similar
		const categoryMatch = content.match(/category:\s*["']Pokemon["']\s*,?\s*\n/)
		if (!categoryMatch || categoryMatch.index === undefined) {
			console.error(`[!] Could not find category line in: ${filePath}`)
			return
		}

		const insertPos = categoryMatch.index + categoryMatch[0].length

		// Detect indentation from the category line
		const lineStart = content.lastIndexOf('\n', categoryMatch.index) + 1
		const indent = content.slice(lineStart, categoryMatch.index).match(/^\s*/)?.[0] || '\t'

		// Insert the dexId line
		content = content.slice(0, insertPos) + '\n' + buildLine(indent) + content.slice(insertPos)
	}

	// Write back
	fs.writeFileSync(filePath, content)
}

main().catch((error) => {
	console.error('[x] Fatal error:', error)
	process.exit(1)
})

