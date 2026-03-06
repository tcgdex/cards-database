// Shared helpers for dexId tooling (fix & audit scripts)

export const CARD_SUFFIXES = [
	' EX',
	' ex',
	'-EX',
	'-ex',
	' GX',
	'-GX',
	' V',
	'-V',
	' VMAX',
	' VSTAR',
	' V-UNION',
	' BREAK',
	' LV.X',
	' Prime',
	' PRIME',
	' SP',
	' FB',
	' GL',
	' C',
	' G',
	' E4',
	' δ',
	' Star',
	' ☆',
	'★',
	' LEGEND',
	'-LEGEND',
]

export const REGIONAL_PATTERNS = [
	{ pattern: /^Alolan /i, region: 'alolan' },
	{ pattern: /^Alola /i, region: 'alolan' },
	{ pattern: /^Galarian /i, region: 'galarian' },
	{ pattern: /^Galar /i, region: 'galarian' },
	{ pattern: /^Hisuian /i, region: 'hisuian' },
	{ pattern: /^Hisui /i, region: 'hisuian' },
	{ pattern: /^Paldean /i, region: 'paldean' },
	{ pattern: /^Paldea /i, region: 'paldean' },
	{ pattern: /d'Alola$/i, region: 'alolan' },
	{ pattern: /de Galar$/i, region: 'galarian' },
	{ pattern: /de Hisui$/i, region: 'hisuian' },
	{ pattern: /de Paldea$/i, region: 'paldean' },
	{ pattern: /^Alola-/i, region: 'alolan' },
	{ pattern: /^Galar-/i, region: 'galarian' },
	{ pattern: /^Hisui-/i, region: 'hisuian' },
	{ pattern: /^Paldea-/i, region: 'paldean' },
]

export const MEGA_PATTERNS = [/^Mega /i, /^M /i, /^Méga-/i, /^Méga /i, /^M-/i]

export const SPECIAL_FORM_PATTERNS = [
	/^Primal /i,
	/^Primo-/i,
	/^Origin Forme /i,
	/^Altered Forme /i,
	/^Sky Forme /i,
	/^Land Forme /i,
	/^Therian Forme /i,
	/^Incarnate Forme /i,
	/^Black Kyurem/i,
	/^White Kyurem/i,
	/^Dusk Mane /i,
	/^Dawn Wings /i,
	/^Ultra /i,
	/^Crowned /i,
	/^Ice Rider /i,
	/^Shadow Rider /i,
	/^Single Strike /i,
	/^Rapid Strike /i,
	/^Bloodmoon /i,
	/^Rocket's /i,
	/^Dark /i,
	/^Light /i,
	/^Shining /i,
	/^_____'s /i,
	/^Radiant /i,
	/ with .+$/i,
	/^Surfing /i,
	/^Flying /i,
	/^Detective /i,
]

export const TAG_TEAM_SEPARATORS = [' & ', ' et ', ' und ', ' e ', ' y ']

export function normalizeNameForMatching(name: string): string {
	let normalized = name.trim()

	normalized = normalized.replace(/\u2019/g, "'")

	for (const suffix of CARD_SUFFIXES) {
		if (normalized.endsWith(suffix)) {
			normalized = normalized.slice(0, -suffix.length).trim()
		}
	}

	for (const { pattern } of REGIONAL_PATTERNS) {
		normalized = normalized.replace(pattern, '').trim()
	}

	for (const pattern of MEGA_PATTERNS) {
		normalized = normalized.replace(pattern, '').trim()
	}

	for (const pattern of SPECIAL_FORM_PATTERNS) {
		normalized = normalized.replace(pattern, '').trim()
	}

	normalized = normalized.replace(/ [XY]$/i, '').trim()

	return normalized.toLowerCase()
}

export function isTagTeamCard(name: string): boolean {
	return TAG_TEAM_SEPARATORS.some((sep) => name.includes(sep))
}

export function splitTagTeamName(name: string): string[] {
	for (const sep of TAG_TEAM_SEPARATORS) {
		if (name.includes(sep)) {
			return name.split(sep).map((n) => n.trim())
		}
	}
	return [name]
}

export function countDistinctSpecies(parts: string[]): number {
	const normalized = parts.map((part) => normalizeNameForMatching(part)).filter((name) => name.length > 0)
	const distinct = new Set(normalized).size
	return distinct > 0 ? distinct : parts.length
}

export function buildTagTeamDexIds(parts: string[], nameToId: Map<string, number>) {
	const dexIds: number[] = []
	const missingParts: string[] = []

	for (const part of parts) {
		const original = part.toLowerCase().replace(/\u2019/g, "'")
		const normalized = normalizeNameForMatching(part)
		const dexId = nameToId.get(original) || nameToId.get(normalized)
		if (dexId) {
			dexIds.push(dexId)
		} else {
			missingParts.push(part)
		}
	}

	return { dexIds, missingParts }
}

export function isTagTeamDexComplete(parts: string[], existingDexIds: number[] | undefined, nameToId: Map<string, number>) {
	if (!existingDexIds || existingDexIds.length === 0) {
		return false
	}

	const { dexIds, missingParts } = buildTagTeamDexIds(parts, nameToId)
	if (missingParts.length > 0 || dexIds.length === 0) {
		return false
	}

	const uniqueDexIds = Array.from(new Set(dexIds))
	const requiredSpecies = countDistinctSpecies(parts)
	if (uniqueDexIds.length < requiredSpecies) {
		return false
	}

	return uniqueDexIds.every((dexId) => existingDexIds.includes(dexId))
}

