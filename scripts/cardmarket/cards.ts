import fs from 'node:fs'
import path from 'node:path'

import { extractFile } from '../utils/ts-extract-utils'
import type { CardEntry } from './types'
import { inspectCardSource } from './references'
import type { ProgressCallback } from './progress'

function getSetImport(filePath: string): string | undefined {
	const source = fs.readFileSync(filePath, 'utf8')
	const importPath = source.match(/import\s+Set\s+from\s+(['"])(.*)\1/)?.[2]
	return importPath?.replace(/\\'/g, "'")
}

function isSetFile(filePath: string): boolean {
	const source = fs.readFileSync(filePath, 'utf8')
	return /\bid:\s*["'][^"']+["']/.test(source) && /\bcardCount\s*:/.test(source)
}

export function loadSets(files: string[], onProgress?: ProgressCallback): Map<string, any> {
	const sets = new Map<string, any>()
	files.forEach((filePath, index) => {
		if (isSetFile(filePath)) {
			const set = extractFile(filePath)
			if (set?.id) sets.set(path.normalize(filePath), set)
		}
		onProgress?.(index + 1)
	})
	return sets
}

export function loadCards(files: string[], sets: Map<string, any>, onProgress?: ProgressCallback): Map<string, CardEntry> {
	const cards = new Map<string, CardEntry>()
	files.forEach((filePath, index) => {
		if (!isSetFile(filePath)) {
			const setImport = getSetImport(filePath)
			if (setImport) {
				const setPath = path.normalize(path.resolve(path.dirname(filePath), `${setImport}.ts`))
				const set = sets.get(setPath)
				if (set?.id) {
					const source = fs.readFileSync(filePath, 'utf8')
					const data = extractFile(filePath)
					if (data) {
						const sourceInfo = inspectCardSource(source)
						const code = `${set.id}-${path.basename(filePath, '.ts')}`
						cards.set(code, { code, filePath, source, data, set, sourceInfo })
					}
				}
			}
		}
		onProgress?.(index + 1)
	})
	return cards
}
