#!/usr/bin/env bun

import { promises as fs } from 'fs'
import path from 'path'
import { globSync } from 'glob'

const repoRoot = path.resolve(__dirname, '..', '..')
const pokedexDir = path.join(repoRoot, 'pokedex')
const files = globSync('*.ts', {
	cwd: pokedexDir,
	absolute: true,
	nodir: true,
})

if (!files.length) {
	console.log('No pokedex files found, nothing to do.')
	process.exit(0)
}

const emptyEntryRegex = /^\s*(?:"[a-z-]+"|[a-z-]+):\s*""\s*,?\s*$/i
let filesUpdated = 0
let entriesRemoved = 0

for (const file of files) {
	const original = await fs.readFile(file, 'utf8')
	const result = stripEmptyLanguages(original)

	if (!result) {
		continue
	}

	await fs.writeFile(file, result.content)
	filesUpdated++
	entriesRemoved += result.removed

	console.log(
		`Updated ${path.relative(repoRoot, file)} (removed ${result.removed} entr${result.removed === 1 ? 'y' : 'ies'})`,
	)
}

if (filesUpdated === 0) {
	console.log('No empty language entries found.')
} else {
	console.log(`Done. Updated ${filesUpdated} files, removed ${entriesRemoved} empty entries.`)
}

interface StripResult {
	content: string
	removed: number
}

function stripEmptyLanguages(source: string): StripResult | null {
	const namesIndex = source.indexOf('names:')
	if (namesIndex === -1) {
		return null
	}

	const blockStart = source.indexOf('{', namesIndex)
	if (blockStart === -1) {
		return null
	}

	let depth = 0
	let blockEnd = -1

	for (let i = blockStart; i < source.length; i++) {
		const char = source[i]
		if (char === '{') {
			depth++
		} else if (char === '}') {
			depth--
			if (depth === 0) {
				blockEnd = i
				break
			}
		}
	}

	if (blockEnd === -1) {
		throw new Error('Could not determine the end of the names object')
	}

	const newline = source.includes('\r\n') ? '\r\n' : '\n'
	const blockContent = source.slice(blockStart + 1, blockEnd)
	const lines = blockContent.split(newline)

	let removed = 0
	const filtered = lines.filter(line => {
		if (emptyEntryRegex.test(line.trim())) {
			removed++
			return false
		}
		return true
	})

	if (removed === 0) {
		return null
	}

	const newBlock = filtered.join(newline)
	const updated = source.slice(0, blockStart + 1) + newBlock + source.slice(blockEnd)

	return {
		content: updated,
		removed,
	}
}

