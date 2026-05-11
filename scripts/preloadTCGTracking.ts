import fs from 'node:fs/promises'
import path from 'node:path'

import {
	fetchTCGTrackingSetPricing,
	getCategoryIdForSetFile,
	getTCGTrackingPricingCacheFile,
	sleep,
	toImportUrl,
	writeJsonFile,
	type TCGTrackingSetCacheTarget,
} from './utils-data/tcgtracking'

interface TCGDexSetModule {
	default?: {
		id?: string
		name?: string
		thirdParty?: {
			tcgplayer?: number
		}
	}
}

interface TCGTrackingPreloadFailure {
	categoryId: number
	tcgplayerSetId: number
	tcgTrackingSetId?: number
	sourceFile: string
	status: 'missing-endpoint' | 'fetch-failed'
	error: string
}

/**
 * TCGTracking sometimes exposes a set under a different ID than the
 * existing TCGDex set.thirdParty.tcgplayer ID.
 *
 * Key: existing TCGDex / TCGPlayer set ID
 * Value: TCGTracking set ID used for API fetching
 *
 * IMPORTANT:
 * The cache file is still written using the original TCGDex / TCGPlayer set ID.
 * That keeps updatePricingFromTCGTracking.ts compatible with existing card data.
 */
const TCGTRACKING_SET_ID_OVERRIDES: Record<number, number> = {
	// Black Bolt
	22325: 24325,
}

/**
 * CHANGE:
 * Added a TCGTracking pricing preloader.
 *
 * This script does not edit card files.
 * This script does not create or map variants.
 * This script does not remove TCGCSV.
 *
 * It only fetches pricing from TCGTracking and caches it locally.
 *
 * CHANGE:
 * Failed fetches now write a report instead of causing the script to fail by default.
 *
 * Use --strict if you want failures to exit with code 1.
 *
 * CHANGE:
 * Added TCGTracking set ID overrides.
 *
 * This allows sets like Black Bolt to be fetched from TCGTracking using their
 * current TCGTracking set ID while still caching under the existing TCGDex
 * thirdParty.tcgplayer set ID.
 */
async function main(): Promise<void> {
	const setFiles = await findSetFiles([
		path.join(process.cwd(), 'data'),
		path.join(process.cwd(), 'data-asia'),
	])

	const failures: TCGTrackingPreloadFailure[] = []
	const targets = await getTCGTrackingCacheTargets(setFiles)

	console.log(`Found ${targets.length} TCGDex sets with thirdParty.tcgplayer IDs.`)

	let fetched = 0
	let skipped = 0
	let failed = 0

	for (const target of targets) {
		const cacheFile = getTCGTrackingPricingCacheFile(
			target.categoryId,
			target.tcgplayerSetId,
		)

		const fetchSetId = target.tcgTrackingSetId ?? target.tcgplayerSetId
		const hasOverride = fetchSetId !== target.tcgplayerSetId

		try {
			const shouldSkip = await isFreshCache(cacheFile)

			if (shouldSkip) {
				skipped += 1
				console.log(
					`Skipping category ${target.categoryId}, set ${target.tcgplayerSetId}; cache is fresh.`,
				)
				continue
			}

			console.log(
				`Fetching TCGTracking pricing: category ${target.categoryId}, set ${fetchSetId}` +
					(hasOverride
						? ` (override for TCGDex set ${target.tcgplayerSetId})`
						: ''),
			)

			const pricing = await fetchTCGTrackingSetPricing(
				target.categoryId,
				fetchSetId,
			)

			await writeJsonFile(cacheFile, {
				source: 'tcgtracking',
				categoryId: target.categoryId,

				// Existing TCGDex / TCGPlayer set ID.
				// This is used for the cache filename and updater lookup.
				tcgplayerSetId: target.tcgplayerSetId,

				// Actual TCGTracking set ID used when fetching.
				tcgTrackingSetId: fetchSetId,

				sourceFile: normalizePathForReport(target.sourceFile),
				fetchedAt: new Date().toISOString(),
				data: pricing,
			})

			fetched += 1

			// Polite delay between requests.
			await sleep(100)
		} catch (error) {
			failed += 1

			const errorMessage = getErrorMessage(error)

			failures.push({
				categoryId: target.categoryId,
				tcgplayerSetId: target.tcgplayerSetId,
				tcgTrackingSetId: hasOverride ? fetchSetId : undefined,
				sourceFile: normalizePathForReport(target.sourceFile),
				status: errorMessage.includes('404 Not Found')
					? 'missing-endpoint'
					: 'fetch-failed',
				error: errorMessage,
			})

			console.error(
				`Failed to fetch category ${target.categoryId}, set ${fetchSetId}` +
					(hasOverride
						? ` (override for TCGDex set ${target.tcgplayerSetId})`
						: ''),
			)
			console.error(errorMessage)
		}
	}

	if (failures.length > 0) {
		const reportFile = path.join(
			process.cwd(),
			'var',
			'reports',
			'tcgtracking-preload-failures.json',
		)

		await writeFailureReport(reportFile, failures)

		console.log('')
		console.log(`Failure report written to ${normalizePathForReport(reportFile)}`)
	}

	console.log('')
	console.log('TCGTracking preload complete.')
	console.log(`Fetched: ${fetched}`)
	console.log(`Skipped: ${skipped}`)
	console.log(`Failed:  ${failed}`)

	const isStrict = process.argv.includes('--strict')

	if (failed > 0 && isStrict) {
		process.exitCode = 1
	}
}

/**
 * Finds set files.
 *
 * The existing repo structure has scripts inside:
 *
 *   H:\cards-database\scripts
 *
 * and data folders at repo root:
 *
 *   data
 *   data-asia
 *
 * This scans both.
 */
async function findSetFiles(rootFolders: string[]): Promise<string[]> {
	const files: string[] = []

	for (const rootFolder of rootFolders) {
		const exists = await pathExists(rootFolder)

		if (!exists) {
			continue
		}

		await walk(rootFolder, files)
	}

	return files.filter((file) => {
		if (!file.endsWith('.ts')) {
			return false
		}

		// CHANGE:
		// Avoid card files where possible by only allowing shallow set files.
		//
		// Existing scripts often scan data/*/*.ts for set files.
		// This keeps the same intent but is slightly safer.
		const relative = path.relative(process.cwd(), file).replace(/\\/g, '/')
		const parts = relative.split('/')

		// data/Serie/Set.ts
		// data-asia/Serie/Set.ts
		return (
			(parts[0] === 'data' || parts[0] === 'data-asia') &&
			parts.length === 3
		)
	})
}

async function walk(folder: string, files: string[]): Promise<void> {
	const entries = await fs.readdir(folder, {
		withFileTypes: true,
	})

	for (const entry of entries) {
		const fullPath = path.join(folder, entry.name)

		if (entry.isDirectory()) {
			await walk(fullPath, files)
			continue
		}

		files.push(fullPath)
	}
}

/**
 * Reads TCGDex set files and extracts thirdParty.tcgplayer set IDs.
 *
 * IMPORTANT:
 * We are using the existing TCGDex thirdParty.tcgplayer set IDs.
 * We are not doing new set matching.
 */
async function getTCGTrackingCacheTargets(
	setFiles: string[],
): Promise<TCGTrackingSetCacheTarget[]> {
	const targets: TCGTrackingSetCacheTarget[] = []

	for (const setFile of setFiles) {
		const setModule = (await import(toImportUrl(setFile))) as TCGDexSetModule
		const setData = setModule.default

		const tcgplayerSetId = setData?.thirdParty?.tcgplayer

		if (typeof tcgplayerSetId !== 'number') {
			continue
		}

		targets.push({
			categoryId: getCategoryIdForSetFile(setFile),
			tcgplayerSetId,
			tcgTrackingSetId: TCGTRACKING_SET_ID_OVERRIDES[tcgplayerSetId],
			sourceFile: setFile,
		})
	}

	return dedupeTargets(targets)
}

function dedupeTargets(
	targets: TCGTrackingSetCacheTarget[],
): TCGTrackingSetCacheTarget[] {
	const seen = new Set<string>()
	const deduped: TCGTrackingSetCacheTarget[] = []

	for (const target of targets) {
		const fetchSetId = target.tcgTrackingSetId ?? target.tcgplayerSetId
		const key = `${target.categoryId}:${target.tcgplayerSetId}:${fetchSetId}`

		if (seen.has(key)) {
			continue
		}

		seen.add(key)
		deduped.push(target)
	}

	return deduped
}

/**
 * Keeps pricing cache fresh for one day.
 *
 * CHANGE:
 * This mirrors the idea that pricing should update daily,
 * while avoiding unnecessary full refetches.
 */
async function isFreshCache(filePath: string): Promise<boolean> {
	try {
		const stat = await fs.stat(filePath)
		const ageMs = Date.now() - stat.mtimeMs
		const oneDayMs = 24 * 60 * 60 * 1000

		return ageMs < oneDayMs
	} catch (error) {
		if (isNodeError(error) && error.code === 'ENOENT') {
			return false
		}

		throw error
	}
}

async function writeFailureReport(
	reportFile: string,
	failures: TCGTrackingPreloadFailure[],
): Promise<void> {
	await fs.mkdir(path.dirname(reportFile), {
		recursive: true,
	})

	await fs.writeFile(
		reportFile,
		`${JSON.stringify(
			{
				createdAt: new Date().toISOString(),
				failures,
			},
			null,
			'\t',
		)}\n`,
		'utf8',
	)
}

async function pathExists(filePath: string): Promise<boolean> {
	try {
		await fs.access(filePath)
		return true
	} catch {
		return false
	}
}

function normalizePathForReport(filePath: string): string {
	return path.relative(process.cwd(), filePath).replace(/\\/g, '/')
}

function getErrorMessage(error: unknown): string {
	if (error instanceof Error) {
		return error.message
	}

	return String(error)
}

function isNodeError(error: unknown): error is NodeJS.ErrnoException {
	return error instanceof Error && 'code' in error
}

main().catch((error) => {
	console.error(error)
	process.exitCode = 1
})