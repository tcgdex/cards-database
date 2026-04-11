import type { Set } from '../../interfaces'

type SearchableSet = Pick<Set, 'id' | 'serie' | 'abbreviations'> & {
	searchAliases?: Array<string>
}

type AliasIndexedItem = {
	id: string
}

const GENERIC_ALIAS_PREFIXES: Record<string, Array<string>> = {
	me: ['me'],
	sv: ['sv', 'ev']
}

export function normalizeSetAlias(value: string): string {
	return value
		.trim()
		.toLowerCase()
		.replace(/[\s_-]+/g, '')
}

function collectNormalizedAliases(values: Iterable<string | null | undefined>): Map<string, string> {
	const aliases = new Map<string, string>()

	for (const value of values) {
		if (!value) {
			continue
		}

		const normalized = normalizeSetAlias(value)
		if (!normalized || aliases.has(normalized)) {
			continue
		}

		aliases.set(normalized, value)
	}

	return aliases
}

function buildNumericIdAliases(set: SearchableSet): Array<string> {
	const prefixes = GENERIC_ALIAS_PREFIXES[set.serie.id]
	if (!prefixes) {
		return []
	}

	const pattern = new RegExp(`^${set.serie.id}(\\d+)(\\.\\d+)?$`, 'i')
	const match = set.id.match(pattern)
	if (!match) {
		return []
	}

	const [, wholePart, decimalPart = ''] = match
	const unpaddedWholePart = String(Number.parseInt(wholePart, 10))
	const numericParts = new Set<string>([
		`${wholePart}${decimalPart}`,
		`${unpaddedWholePart}${decimalPart}`
	])

	return prefixes.flatMap((prefix) => [...numericParts].map((value) => `${prefix}${value}`))
}

function getSetAliasCandidates(set: SearchableSet): Array<string | undefined> {
	return [
		set.id,
		set.abbreviations?.official,
		...Object.entries(set.abbreviations ?? {})
			.filter(([key]) => key !== 'official')
			.map(([, value]) => value),
		...(set.searchAliases ?? []),
		...buildNumericIdAliases(set)
	]
}

export function buildSetSearchAliases(set: SearchableSet): Array<string> | undefined {
	const values = [...collectNormalizedAliases(getSetAliasCandidates(set)).values()]
	return values.length > 0 ? values : undefined
}

export function buildAliasIndex<T extends AliasIndexedItem>(
	items: Array<T>,
	getAliases: (item: T) => Iterable<string | null | undefined>
): Map<string, Array<string>> {
	const index = new Map<string, Array<string>>()

	for (const item of items) {
		for (const normalized of collectNormalizedAliases(getAliases(item)).keys()) {
			const existing = index.get(normalized) ?? []
			if (!existing.includes(item.id)) {
				existing.push(item.id)
			}
			index.set(normalized, existing)
		}
	}

	return index
}

export function remapSetAliasQueryValue<T>(
	value: T,
	resolveAlias: (candidate: string) => string | undefined
): T {
	if (typeof value === 'string') {
		return (resolveAlias(value) ?? value) as T
	}

	if (Array.isArray(value)) {
		return value.map((entry) => remapSetAliasQueryValue(entry, resolveAlias)) as T
	}

	if (!value || typeof value !== 'object') {
		return value
	}

	return Object.fromEntries(
		Object.entries(value).map(([key, entry]) => [
			key,
			remapSetAliasQueryValue(entry, resolveAlias)
		])
	) as T
}
