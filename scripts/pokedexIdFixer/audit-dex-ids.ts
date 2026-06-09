/**
 * Audit Tool for Pokédex IDs
 *
 * Scans all card TS files in the cards-database and reports:
 * - Pokémon cards missing dexId
 * - Cards with potentially incorrect dexId values
 * - Statistics per series/set
 *
 * Usage:
 *   bun run audit-dex-ids.ts           # Quick summary to console
 *   bun run audit-dex-ids.ts --report  # Detailed report to file
 */

import { glob } from 'glob'
import path from 'path'
import fs from 'fs'
import { extractFile } from '../utils/ts-extract-utils'
import { isTagTeamCard, splitTagTeamName, countDistinctSpecies } from './dex-utils'

// CLI args
const args = process.argv.slice(2)
const generateReport = args.includes('--report')

interface AuditResult {
	filePath: string
	relativePath: string
	cardName: string
	category: string
	hasDexId: boolean
	dexId: number[] | undefined
	series: string
	set: string
}

interface AuditSummary {
	totalPokemonCards: number
	cardsWithDexId: number
	cardsMissingDexId: number
	bySet: Map<string, { total: number; missing: number; cards: AuditResult[] }>
}

interface MultiDexIssue {
	relativePath: string
	cardName: string
	expectedParts: number
	actualDexIds: number
	currentDexIds: number[] | undefined
}

const outputLines: string[] = []

function log(message: string) {
	console.log(message)
	if (generateReport) {
		outputLines.push(message)
	}
}

async function main() {
	const dataDir = path.resolve(__dirname, '../../data')

	// Find all card TS files (exclude set definition files which are directly under series folders)
	const cardFiles = await glob('**/*.ts', {
		cwd: dataDir,
		absolute: true,
		ignore: [
			'*/*.ts', // Series definition files (e.g., data/XY.ts)
			'**/*.d.ts',
		],
	})

	log(`[i] Scanning ${cardFiles.length} card files...`)
	log('')

	const results: AuditResult[] = []
	const errors: string[] = []
	const multiDexIssues: MultiDexIssue[] = []

	for (const filePath of cardFiles) {
		const relativePath = path.relative(dataDir, filePath)

		// Skip set definition files (they don't have card data)
		const parts = relativePath.split(path.sep)
		if (parts.length <= 2) {
			continue // Skip series/*.ts and series/set.ts files
		}

		try {
			const card = extractFile(filePath)
			if (!card) {
				errors.push(`[!] Could not parse: ${relativePath}`)
				continue
			}

			// Only process Pokemon category cards
			if (card.category !== 'Pokemon') {
				continue
			}

			const series = parts[0] || 'Unknown'
			const set = parts[1] || 'Unknown'

			results.push({
				filePath,
				relativePath,
				cardName: card.name?.en || card.name?.fr || 'Unknown',
				category: card.category,
				hasDexId: Array.isArray(card.dexId) && card.dexId.length > 0,
				dexId: card.dexId,
				series,
				set,
			})

			const cardName = card.name?.en || card.name?.fr || 'Unknown'
			if (cardName && isTagTeamCard(cardName)) {
				const parts = splitTagTeamName(cardName)
				const expectedParts = countDistinctSpecies(parts)
				const actualDexCount = Array.isArray(card.dexId) ? new Set(card.dexId).size : 0
				if (expectedParts > 1 && actualDexCount < expectedParts) {
					multiDexIssues.push({
						relativePath,
						cardName,
						expectedParts,
						actualDexIds: actualDexCount,
						currentDexIds: card.dexId,
					})
				}
			}
		} catch (error: any) {
			errors.push(`[!] Error parsing ${relativePath}: ${error.message}`)
		}
	}

	// Build summary
	const summary: AuditSummary = {
		totalPokemonCards: results.length,
		cardsWithDexId: results.filter((r) => r.hasDexId).length,
		cardsMissingDexId: results.filter((r) => !r.hasDexId).length,
		bySet: new Map(),
	}

	// Group by set
	for (const result of results) {
		const setKey = `${result.series}/${result.set}`
		if (!summary.bySet.has(setKey)) {
			summary.bySet.set(setKey, { total: 0, missing: 0, cards: [] })
		}
		const setData = summary.bySet.get(setKey)!
		setData.total++
		if (!result.hasDexId) {
			setData.missing++
			setData.cards.push(result)
		}
	}

	// Print summary
	log('='.repeat(60))
	log('POKÉDEX ID AUDIT SUMMARY')
	log('='.repeat(60))
	log('')
	log(`Total Pokémon cards:     ${summary.totalPokemonCards}`)
	log(`Cards with dexId:        ${summary.cardsWithDexId} (${((summary.cardsWithDexId / summary.totalPokemonCards) * 100).toFixed(1)}%)`)
	log(`Cards missing dexId:     ${summary.cardsMissingDexId} (${((summary.cardsMissingDexId / summary.totalPokemonCards) * 100).toFixed(1)}%)`)
	log('')

	// Print sets with missing dexIds
	const setsWithMissing = Array.from(summary.bySet.entries())
		.filter(([, data]) => data.missing > 0)
		.sort((a, b) => b[1].missing - a[1].missing)

	if (setsWithMissing.length > 0) {
		log('='.repeat(60))
		log('SETS WITH MISSING dexId')
		log('='.repeat(60))
		log('')

		for (const [setKey, data] of setsWithMissing) {
			const pct = ((data.missing / data.total) * 100).toFixed(0)
			log(`${setKey}`)
			log(`  Missing: ${data.missing}/${data.total} (${pct}%)`)

			if (generateReport) {
				// In report mode, list all missing cards
				for (const card of data.cards) {
					log(`    - ${card.relativePath}: "${card.cardName}"`)
				}
			} else {
				// In summary mode, just show first few
				const sample = data.cards.slice(0, 3)
				for (const card of sample) {
					log(`    - ${card.cardName}`)
				}
				if (data.cards.length > 3) {
					log(`    ... and ${data.cards.length - 3} more`)
				}
			}
			log('')
		}
	}

	// Print multi-dex mismatches
	if (multiDexIssues.length > 0) {
		log('='.repeat(60))
		log('TAG TEAM dexId mismatches')
		log('='.repeat(60))
		log('')

		for (const issue of multiDexIssues) {
			log(`${issue.relativePath}`)
			log(`  "${issue.cardName}" - expected ${issue.expectedParts} dexIds, found ${issue.actualDexIds || 0} -> current: [${issue.currentDexIds?.join(', ') || ''}]`)
		}
		log('')
	}

	// Print parse errors
	if (errors.length > 0) {
		log('='.repeat(60))
		log('PARSE ERRORS')
		log('='.repeat(60))
		log('')
		for (const error of errors.slice(0, 20)) {
			log(error)
		}
		if (errors.length > 20) {
			log(`... and ${errors.length - 20} more errors`)
		}
		log('')
	}

	// Write report file if requested
	if (generateReport) {
		const reportPath = path.join(__dirname, 'audit-report.txt')
		fs.writeFileSync(reportPath, outputLines.join('\n'))
		console.log(`\n[OK] Report written to: ${reportPath}`)
	}

	// Exit with error if there are missing dexIds or mismatched TAG TEAM entries
	if (summary.cardsMissingDexId > 0 || multiDexIssues.length > 0) {
		process.exit(1)
	}
}

main().catch((error) => {
	console.error('[x] Fatal error:', error)
	process.exit(1)
})

