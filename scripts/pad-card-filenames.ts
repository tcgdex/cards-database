/**
 * Pad card filenames to 3-digit zero-padded numbers.
 * Uses ts-morph so that any imports referencing renamed files are updated too.
 *
 * Usage:
 *   bun scripts/pad-card-filenames.ts --dry-run         # Preview changes
 *   bun scripts/pad-card-filenames.ts --apply           # Rename all
 *   bun scripts/pad-card-filenames.ts --apply --set "Base Set"
 */

import { Project } from 'ts-morph'
import path from 'path'

const args = process.argv.slice(2)
const dryRun = !args.includes('--apply')
const setFilter = args.includes('--set') ? args[args.indexOf('--set') + 1] : null

const NUMERIC_FILE = /^(\d+)\.ts$/
const ROOT = path.resolve(import.meta.dir, '..')

async function run() {
	const project = new Project({
		tsConfigFilePath: path.join(ROOT, 'tsconfig.json'),
		skipAddingFilesFromTsConfig: false,
	})

	const toRename: Array<{ source: string; dest: string }> = []

	for (const sourceFile of project.getSourceFiles()) {
		const filePath = sourceFile.getFilePath()
		const basename = path.basename(filePath)
		const match = basename.match(NUMERIC_FILE)
		if (!match) continue

		const num = parseInt(match[1], 10)
		const padded = String(num).padStart(3, '0')
		if (match[1] === padded) continue

		if (setFilter && !filePath.includes(setFilter)) continue

		const dest = path.join(path.dirname(filePath), `${padded}.ts`)
		toRename.push({ source: filePath, dest })
	}

	if (toRename.length === 0) {
		console.log('No files need renaming.')
		return
	}

	for (const { source, dest } of toRename) {
		const rel = path.relative(ROOT, source)
		const relDest = path.relative(ROOT, dest)
		console.log(`${dryRun ? '[dry-run] ' : ''}${rel} → ${relDest}`)

		if (!dryRun) {
			const sourceFile = project.getSourceFileOrThrow(source)
			sourceFile.move(dest)
		}
	}

	if (!dryRun) {
		await project.save()
		console.log(`\nRenamed ${toRename.length} file(s) and updated imports.`)
	} else {
		console.log(`\nWould rename ${toRename.length} file(s). Run with --apply to rename.`)
	}
}

run()
