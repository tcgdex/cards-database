import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { glob } from 'glob'
import type { Set } from '../interfaces'

type AuditEntry = {
	file: string
	id: string
	issues: Array<string>
}

const root = process.cwd()
const strict = process.argv.includes('--strict')

function hasVisibleAbbreviation(set: Set): boolean {
	if (!set.abbreviations) {
		return false
	}

	return Object.entries(set.abbreviations).some(([, value]) => Boolean(value))
}

async function loadSet(file: string): Promise<Set> {
	return (await import(pathToFileURL(file).href)).default as Set
}

const files = await glob('data/*/*.ts', {
	cwd: root,
	absolute: true,
	posix: false
})

const entries: Array<AuditEntry> = []
for (const file of files.sort()) {
	const set = await loadSet(file)
	const issues: Array<string> = []

	if (!hasVisibleAbbreviation(set)) {
		issues.push('missing visible abbreviation')
	}

	if (!set.searchAliases?.length) {
		issues.push('missing searchAliases')
	}

	if (issues.length > 0) {
		entries.push({
			file: path.relative(root, file),
			id: set.id,
			issues
		})
	}
}

if (entries.length === 0) {
	console.log('[OK] set alias audit found no gaps')
	process.exit(0)
}

console.log(`[!] set alias audit found ${entries.length} gap(s)`)
for (const entry of entries) {
	console.log(`${entry.file} (${entry.id}): ${entry.issues.join(', ')}`)
}

if (strict) {
	process.exit(1)
}
