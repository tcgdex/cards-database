import path from 'node:path'

import { globSync } from 'glob'

import { catalogUrl, dataRoot } from './config'
import { getProducts, readJson } from './catalog'
import { loadCards, loadSets } from './cards'
import { makeAudit } from './audit'
import { applyFixes, markScopeBlocked } from './fixes'
import { clearReportOutput, formatConsoleSummary, writeReports } from './report'
import type { Options } from './types'
import { ProgressTracker } from './progress'

export function parseOptions(args: string[]): Options {
	const options: Options = { apply: false, all: false, full: false, sets: new Set<string>() }
	for (let index = 0; index < args.length; index++) {
		const arg = args[index]
		if (arg === '--apply') {
			options.apply = true
			continue
		}
		if (arg === '--all') {
			options.all = true
			continue
		}
		if (arg === '--full') {
			options.full = true
			continue
		}
		if (arg === '--set') {
			const setId = args[++index]
			if (!setId) throw new Error('--set requires a set ID')
			options.sets.add(setId)
			continue
		}
		if (arg.startsWith('--set=')) {
			const setId = arg.slice('--set='.length)
			if (!setId) throw new Error('--set requires a set ID')
			options.sets.add(setId)
			continue
		}
		throw new Error(`Unknown argument: ${arg}`)
	}
	if (options.all && options.sets.size > 0) throw new Error('Use --all or --set, not both')
	if (!options.apply && (options.all || options.sets.size > 0)) throw new Error('--all and --set require --apply')
	if (options.apply && !options.all && options.sets.size === 0) throw new Error('--apply requires --set <set-id> or --all')
	return options
}

async function main() {
	const options = parseOptions(process.argv.slice(2))
	clearReportOutput()
	const progress = new ProgressTracker()
	progress.message('Cleared previous Cardmarket report output')
	progress.message('Discovering data files')
	const files = globSync('data/**/*.ts', { absolute: true, nodir: true })
	const fileDepth = (filePath: string) => path.relative(dataRoot, filePath).split(path.sep).length
	const setFiles = files.filter((filePath) => fileDepth(filePath) === 2)
	const cardFiles = files.filter((filePath) => fileDepth(filePath) > 2)
	progress.message(`Found ${files.length.toLocaleString('en-US')} TypeScript files`)
	const sourceCache = new Map<string, string>()
	const sets = loadSets(setFiles, progress.start('Loading set definitions', setFiles.length), sourceCache)
	const cards = loadCards(cardFiles, sets, progress.start('Loading card files', cardFiles.length), sourceCache)
	sourceCache.clear()
	progress.message('Downloading Cardmarket catalog (no remote progress available)')
	const rawCatalog = await readJson(catalogUrl)
	const products = getProducts(rawCatalog)
	progress.message(`Loaded ${products.length.toLocaleString('en-US')} catalog products`)
	const result = makeAudit(cards, products, new Date().toISOString(), progress)
	if (options.apply) markScopeBlocked(result, options)
	progress.message('Writing summary and set report artifacts')
	const summary = writeReports(result, options.full)
	console.log(formatConsoleSummary(summary))
	if (options.apply) console.log(`Updated ${applyFixes(result, options)} card files`)
}

main().catch((error) => {
	console.error(error)
	process.exitCode = 1
})
