import fs from 'node:fs'
import path from 'node:path'

import { extractFile } from '../utils/ts-extract-utils'
import type { CardEntry } from './types'
import { inspectCardSource } from './references'
import type { ProgressCallback } from './progress'

function readSource(filePath: string, sourceCache: Map<string, string>): string {
	if (!sourceCache.has(filePath)) sourceCache.set(filePath, fs.readFileSync(filePath, 'utf8'))
	return sourceCache.get(filePath)!
}

function getSetImport(filePath: string, sourceCache: Map<string, string>): string | undefined {
	const source = readSource(filePath, sourceCache)
	const importPath = source.match(/import\s+Set\s+from\s+(['"])(.*)\1/)?.[2]
	return importPath?.replace(/\\'/g, "'")
}

function isSetFile(filePath: string, sourceCache: Map<string, string>): boolean {
	const source = readSource(filePath, sourceCache)
	return /\bid:\s*["'][^"']+["']/.test(source) && /\bcardCount\s*:/.test(source)
}

export function loadSets(files: string[], onProgress?: ProgressCallback, sourceCache = new Map<string, string>): Map<string, any> {
	const sets = new Map<string, any>()
	files.forEach((filePath, index) => {
		if (isSetFile(filePath, sourceCache)) {
			const set = extractFile(filePath)
			if (set?.id) sets.set(path.normalize(filePath), set)
		}
		onProgress?.(index + 1)
	})
	return sets
}

export function loadCards(files: string[], sets: Map<string, any>, onProgress?: ProgressCallback, sourceCache = new Map<string, string>): Map<string, CardEntry> {
	const cards = new Map<string, CardEntry>()
	files.forEach((filePath, index) => {
		if (!isSetFile(filePath, sourceCache)) {
			const setImport = getSetImport(filePath, sourceCache)
			if (setImport) {
				const setPath = path.normalize(path.resolve(path.dirname(filePath), `${setImport}.ts`))
				const set = sets.get(setPath)
				if (set?.id) {
					const source = readSource(filePath, sourceCache)
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
