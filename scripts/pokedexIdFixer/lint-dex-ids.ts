/**
 * CI Lint for Pokédex IDs
 *
 * Checks that all Pokémon category cards have a valid dexId field.
 * Designed to run in CI to prevent regressions.
 *
 * Exit codes:
 *   0 - All Pokémon cards have dexId
 *   1 - Some Pokémon cards are missing dexId
 *
 * Usage:
 *   bun run lint-dex-ids.ts
 */

import { glob } from 'glob'
import path from 'path'
import { extractFile } from '../utils/ts-extract-utils'

const DATA_DIR = path.resolve(__dirname, '../../data')

interface LintError {
	file: string
	cardName: string
	reason: string
}

async function main() {
	console.log('[i] Linting Pokédex IDs...')

	const cardFiles = await glob('**/*.ts', {
		cwd: DATA_DIR,
		absolute: true,
		ignore: ['*/*.ts', '**/*.d.ts'],
	})

	const errors: LintError[] = []
	let pokemonCardCount = 0

	for (const filePath of cardFiles) {
		const relativePath = path.relative(DATA_DIR, filePath)
		const parts = relativePath.split(path.sep)
		if (parts.length <= 2) continue

		try {
			const card = extractFile(filePath)
			if (!card || card.category !== 'Pokemon') continue

			pokemonCardCount++

			// Check for missing dexId
			if (!card.dexId || !Array.isArray(card.dexId) || card.dexId.length === 0) {
				const cardName = card.name?.en || card.name?.fr || 'Unknown'
				errors.push({
					file: relativePath,
					cardName,
					reason: 'Missing dexId field',
				})
				continue
			}

			// Check for invalid dexId values
			for (const id of card.dexId) {
				if (typeof id !== 'number' || id < 1 || id > 2000) {
					const cardName = card.name?.en || card.name?.fr || 'Unknown'
					errors.push({
						file: relativePath,
						cardName,
						reason: `Invalid dexId value: ${id}`,
					})
					break
				}
			}
		} catch (error: any) {
			// Skip parse errors in lint (they'll be caught by other linters)
		}
	}

	console.log(`[i] Checked ${pokemonCardCount} Pokémon cards`)

	if (errors.length === 0) {
		console.log('[OK] All Pokémon cards have valid dexId')
		process.exit(0)
	}

	console.log('')
	console.log(`[x] Found ${errors.length} cards with missing or invalid dexId:`)
	console.log('')

	// Group by series/set for cleaner output
	const bySet = new Map<string, LintError[]>()
	for (const error of errors) {
		const parts = error.file.split(path.sep)
		const setKey = parts.slice(0, 2).join('/')
		if (!bySet.has(setKey)) {
			bySet.set(setKey, [])
		}
		bySet.get(setKey)!.push(error)
	}

	for (const [setKey, setErrors] of bySet) {
		console.log(`${setKey}:`)
		for (const error of setErrors.slice(0, 5)) {
			console.log(`  - ${error.file}: "${error.cardName}" (${error.reason})`)
		}
		if (setErrors.length > 5) {
			console.log(`  ... and ${setErrors.length - 5} more`)
		}
		console.log('')
	}

	console.log('Run the fix tool to add missing dexIds:')
	console.log('  cd libs/cards-database/workdir')
	console.log('  bun run fix:dry-run')
	console.log('  bun run fix:apply')

	process.exit(1)
}

main().catch((error) => {
	console.error('[x] Fatal error:', error)
	process.exit(1)
})

