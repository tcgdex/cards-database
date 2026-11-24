import path from 'path'

export const SUBSET_SUFFIXES = [' Trainer Gallery', ' Galarian Gallery', ' Shiny Vault'] as const

const STEM_PATTERN = /^([A-Za-z]*)(\d+)([A-Za-z]*)$/

export interface CameoManualMapping {
	setName: string
	localId: string
	targetSetName: string
	targetLocalId: string
}

export interface ResolveCameoFileArgs {
	resolvedSetName: string
	localId: string
	setDirs: ReadonlyMap<string, string>
	manualMappings: readonly CameoManualMapping[]
	listStems: (directory: string) => string[]
}

export type ResolveCameoFileResult =
	| { status: 'found'; filePath: string }
	| { status: 'missing' }
	| { status: 'ambiguous'; candidates: string[] }
	| { status: 'manual-missing'; targetSetName: string; targetLocalId: string }

function normalizeLocalId(localId: string): string {
	const trimmed = localId.trim()
	const match = /^0*([0-9]+)([A-Za-z]*)$/.exec(trimmed)
	if (!match || !match[1]) {
		return trimmed.toLowerCase()
	}
	return `${Number.parseInt(match[1], 10)}${(match[2] || '').toLowerCase()}`
}

function directStemHits(stems: readonly string[], localId: string): string[] {
	const trimmed = localId.trim()
	const lower = trimmed.toLowerCase()
	const normalized = normalizeLocalId(trimmed)
	const hits: string[] = []
	for (const stem of stems) {
		if (stem.toLowerCase() === lower || normalizeLocalId(stem) === normalized) {
			hits.push(stem)
		}
	}
	return hits
}

interface ParsedStem {
	prefix: string
	digits: string
	width: number
	suffix: string
}

function parseStem(value: string): ParsedStem | null {
	const match = STEM_PATTERN.exec(value.trim())
	if (!match || !match[2]) {
		return null
	}
	return {
		prefix: match[1] || '',
		digits: match[2],
		width: match[2].length,
		suffix: match[3] || '',
	}
}

/**
 * Prefix and digit width come from the stems already in the directory.
 * A trailing letter on the sheet id is kept, so 148a never matches 148.
 */
export function filenamePatternHits(stems: readonly string[], localId: string): string[] {
	const local = parseStem(localId)
	if (!local) {
		return []
	}

	const widthsByPrefix = new Map<string, Set<number>>()
	const prefixByKey = new Map<string, string>()
	const stemByLower = new Map<string, string>()
	for (const stem of stems) {
		stemByLower.set(stem.toLowerCase(), stem)
		const parsed = parseStem(stem)
		if (!parsed || parsed.prefix.length === 0) {
			continue
		}
		const key = parsed.prefix.toLowerCase()
		const widths = widthsByPrefix.get(key) ?? new Set<number>()
		widths.add(parsed.width)
		widthsByPrefix.set(key, widths)
		if (!prefixByKey.has(key)) {
			prefixByKey.set(key, parsed.prefix)
		}
	}

	const prefixKeys = local.prefix.length > 0
		? [local.prefix.toLowerCase()]
		: [...widthsByPrefix.keys()]
	const number = String(Number.parseInt(local.digits, 10))
	if (!/^\d+$/.test(number)) {
		return []
	}

	const hits = new Set<string>()
	for (const prefixKey of prefixKeys) {
		const widths = widthsByPrefix.get(prefixKey)
		const prefix = prefixByKey.get(prefixKey)
		if (!widths || !prefix) {
			continue
		}
		for (const width of widths) {
			if (number.length > width) {
				continue
			}
			const candidate = `${prefix}${number.padStart(width, '0')}${local.suffix}`
			const found = stemByLower.get(candidate.toLowerCase())
			if (found) {
				hits.add(found)
			}
		}
	}
	return [...hits]
}

export function matchStemByFilenamePattern(stems: readonly string[], localId: string): string | null {
	const hits = filenamePatternHits(stems, localId)
	return hits.length === 1 ? hits[0] : null
}

function filePathFor(directory: string, stem: string): string {
	return path.resolve(directory, `${stem}.ts`)
}

function existingSubsetDirs(resolvedSetName: string, setDirs: ReadonlyMap<string, string>): string[] {
	const dirs: string[] = []
	for (const suffix of SUBSET_SUFFIXES) {
		const dir = setDirs.get(`${resolvedSetName}${suffix}`.toLowerCase())
		if (dir) {
			dirs.push(dir)
		}
	}
	return dirs
}

function classifyHits(directory: string, hits: readonly string[]): ResolveCameoFileResult | null {
	if (hits.length === 1) {
		return { status: 'found', filePath: filePathFor(directory, hits[0]) }
	}
	if (hits.length > 1) {
		return { status: 'ambiguous', candidates: hits.map((stem) => filePathFor(directory, stem)) }
	}
	return null
}

export function resolveCameoFile(args: ResolveCameoFileArgs): ResolveCameoFileResult {
	const setKey = args.resolvedSetName.trim().toLowerCase()
	const localKey = args.localId.trim().toLowerCase()
	const manualHits = args.manualMappings.filter((mapping) =>
		mapping.setName.trim().toLowerCase() === setKey && mapping.localId.trim().toLowerCase() === localKey,
	)
	if (manualHits.length > 1) {
		return {
			status: 'ambiguous',
			candidates: manualHits.map((mapping) => `${mapping.targetSetName}/${mapping.targetLocalId}`),
		}
	}
	if (manualHits.length === 1) {
		const mapping = manualHits[0]
		const targetDir = args.setDirs.get(mapping.targetSetName.trim().toLowerCase())
		if (!targetDir) {
			return {
				status: 'manual-missing',
				targetSetName: mapping.targetSetName,
				targetLocalId: mapping.targetLocalId,
			}
		}
		const classified = classifyHits(targetDir, directStemHits(args.listStems(targetDir), mapping.targetLocalId))
		if (classified) {
			return classified
		}
		return {
			status: 'manual-missing',
			targetSetName: mapping.targetSetName,
			targetLocalId: mapping.targetLocalId,
		}
	}

	const parentDir = args.setDirs.get(setKey)
	const searchDirs = parentDir ? [parentDir, ...existingSubsetDirs(args.resolvedSetName, args.setDirs)] : existingSubsetDirs(args.resolvedSetName, args.setDirs)

	const directCandidates: string[] = []
	for (const directory of searchDirs) {
		const hits = directStemHits(args.listStems(directory), args.localId)
		if (hits.length > 1) {
			return { status: 'ambiguous', candidates: hits.map((stem) => filePathFor(directory, stem)) }
		}
		if (hits.length === 1) {
			directCandidates.push(filePathFor(directory, hits[0]))
		}
	}
	if (directCandidates.length === 1) {
		return { status: 'found', filePath: directCandidates[0] }
	}
	if (directCandidates.length > 1) {
		return { status: 'ambiguous', candidates: directCandidates }
	}

	const patternCandidates: string[] = []
	for (const directory of searchDirs) {
		const hits = filenamePatternHits(args.listStems(directory), args.localId)
		if (hits.length > 1) {
			return { status: 'ambiguous', candidates: hits.map((stem) => filePathFor(directory, stem)) }
		}
		if (hits.length === 1) {
			patternCandidates.push(filePathFor(directory, hits[0]))
		}
	}
	if (patternCandidates.length === 1) {
		return { status: 'found', filePath: patternCandidates[0] }
	}
	if (patternCandidates.length > 1) {
		return { status: 'ambiguous', candidates: patternCandidates }
	}
	return { status: 'missing' }
}

export function resolveCameoFileInDirectories(
	args: Omit<ResolveCameoFileArgs, 'setDirs'> & {
		directories: readonly string[]
		setDirs: ReadonlyMap<string, readonly string[]>
	},
): ResolveCameoFileResult {
	const found: string[] = []
	const ambiguous: string[] = []
	let manualMissing: Extract<ResolveCameoFileResult, { status: 'manual-missing' }> | null = null

	for (const directory of args.directories) {
		const setDirs = new Map<string, string>()
		setDirs.set(args.resolvedSetName.trim().toLowerCase(), directory)
		for (const suffix of SUBSET_SUFFIXES) {
			const subsetKey = `${args.resolvedSetName}${suffix}`.toLowerCase()
			const subsetDirs = args.setDirs.get(subsetKey)
			if (subsetDirs && subsetDirs.length === 1) {
				setDirs.set(subsetKey, subsetDirs[0])
			}
		}

		const resolved = resolveCameoFile({
			resolvedSetName: args.resolvedSetName,
			localId: args.localId,
			setDirs,
			manualMappings: args.manualMappings,
			listStems: args.listStems,
		})
		if (resolved.status === 'found') {
			found.push(resolved.filePath)
			continue
		}
		if (resolved.status === 'manual-missing' && !manualMissing) {
			manualMissing = resolved
			continue
		}
		if (resolved.status === 'ambiguous') {
			ambiguous.push(...resolved.candidates)
		}
	}

	if (found.length === 1) {
		return { status: 'found', filePath: found[0] }
	}
	if (found.length > 1) {
		return { status: 'ambiguous', candidates: found }
	}
	if (manualMissing) {
		return manualMissing
	}
	if (ambiguous.length > 0) {
		return { status: 'ambiguous', candidates: ambiguous }
	}
	return { status: 'missing' }
}
