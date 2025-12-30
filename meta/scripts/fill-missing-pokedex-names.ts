/**
 * fill-missing-pokedex-names.ts
 *
 * Scans every Pokédex species entry for empty localized names and attempts to
 * fill them by looking up existing card translations in the TCGdex dataset.
 *
 * Usage:
 *   npm run pokedex:fill-names
 */

import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'
import type { PokemonSpecies, SupportedLanguages } from '../../interfaces'

const SUPPORTED_LANGS: SupportedLanguages[] = [
	'en', 'fr', 'es', 'es-mx', 'it', 'pt', 'pt-br', 'pt-pt', 'de', 'nl', 'pl', 'ru',
	'ja', 'ko', 'zh-tw', 'id', 'th', 'zh-cn'
]

type SpeciesEntry = {
	filePath: string
	species: PokemonSpecies
	updated: boolean
}

type Candidate = {
	value: string
	source: string
	strength: number
	score: number
}

type CandidateMap = Map<number, Map<SupportedLanguages, Candidate>>

interface GeneratedCard {
	id: string
	name?: string
	dexId?: Array<number>
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const repoRoot = path.resolve(__dirname, '..', '..')

function padDexId(dexId: number): string {
	return dexId.toString().padStart(4, '0')
}

function escapeString(str: string): string {
	return str
		.replace(/\\/g, '\\\\')
		.replace(/"/g, '\\"')
		.replace(/\n/g, '\\n')
}

function generateSpeciesFile(species: PokemonSpecies): string {
	const nameEntries = SUPPORTED_LANGS.map((lang) => {
		const key = lang.includes('-') ? `"${lang}"` : lang
		const value = escapeString(species.names?.[lang] ?? '')
		return `\t\t${key}: "${value}"`
	}).join(',\n')

	const forms = (species.forms ?? []).map((form) => `"${escapeString(form)}"`).join(', ')
	const evolvesFrom = typeof species.evolvesFrom === 'number' ? species.evolvesFrom : 'null'
	const evolvesTo = (species.evolvesTo ?? []).join(', ')

	return `import { PokemonSpecies } from '../interfaces'

const species: PokemonSpecies = {
\tdexId: ${species.dexId},
\tenglishName: "${escapeString(species.englishName)}",
\tnames: {
${nameEntries}
\t},
\tforms: [${forms}],
\timage: "${species.image}",
\tevolvesFrom: ${evolvesFrom},
\tevolvesTo: [${evolvesTo}]
}

export default species
`
}

function equalsIgnoreCase(a?: string, b?: string): boolean {
	if (!a || !b) return false
	return a.localeCompare(b, undefined, { sensitivity: 'base' }) === 0
}

function scoreName(value: string): number {
	let score = 0
	if (/\d/.test(value)) score += 10
	if (/(?:ex|gx|vmax|vstar|v-?union|break|prime|lv\.x|legend)/i.test(value)) {
		score += 5
	}
	score += value.length / 100
	return score
}

function addCandidate(
	map: CandidateMap,
	dexId: number,
	lang: SupportedLanguages,
	value: string,
	source: string,
	strength: number
) {
	const langMap = map.get(dexId) ?? new Map<SupportedLanguages, Candidate>()
	if (!map.has(dexId)) {
		map.set(dexId, langMap)
	}

	const candidate: Candidate = {
		value,
		source,
		strength,
		score: scoreName(value)
	}

	const existing = langMap.get(lang)
	if (
		!existing ||
		candidate.strength > existing.strength ||
		(candidate.strength === existing.strength && candidate.score < existing.score)
	) {
		langMap.set(lang, candidate)
	}
}

async function loadSpeciesEntries(): Promise<Map<number, SpeciesEntry>> {
	const files = await glob('pokedex/[0-9][0-9][0-9][0-9].ts', {
		cwd: repoRoot,
		absolute: true
	})

	const entries = new Map<number, SpeciesEntry>()

	for (const file of files) {
		const species = await loadSpeciesFromFile(file)
		entries.set(species.dexId, {
			filePath: file,
			species,
			updated: false
		})
	}

	return entries
}

async function loadSpeciesFromFile(filePath: string): Promise<PokemonSpecies> {
	const raw = await fs.readFile(filePath, 'utf-8')
	const withoutImport = raw.replace(/import\s+{[^}]+}\s+from\s+['"]..\/interfaces['"];?\s*/g, '')
	const replacedDeclaration = withoutImport.replace(
		/const\s+species\s*:\s*PokemonSpecies\s*=\s*/,
		'module.exports = '
	)
	const sanitized = replacedDeclaration.replace(/export\s+default\s+species\s*;?\s*/g, '')

	const moduleExports: { exports: unknown } = { exports: {} }
	const fn = new Function('module', 'exports', sanitized)
	fn(moduleExports, moduleExports.exports)
	return moduleExports.exports as PokemonSpecies
}

async function readGeneratedCards(lang: SupportedLanguages): Promise<Array<GeneratedCard>> {
	const filePath = path.join(repoRoot, 'server', 'generated', lang, 'cards.json')
	try {
		await fs.access(filePath)
	} catch {
		throw new Error(`generated data missing at ${filePath}. Run "bun run compile" first.`)
	}

	const raw = await fs.readFile(filePath, 'utf-8')
	return JSON.parse(raw) as Array<GeneratedCard>
}

async function collectCardTranslations(speciesEntries: Map<number, SpeciesEntry>): Promise<CandidateMap> {
	const candidateMap: CandidateMap = new Map()
	const englishCards = await readGeneratedCards('en')
	const englishIndex = new Map<string, { name: string; dexIds: Array<number> }>()

	for (const card of englishCards) {
		englishIndex.set(card.id, {
			name: (card.name ?? '').trim(),
			dexIds: card.dexId ?? []
		})
	}

	for (const lang of SUPPORTED_LANGS) {
		let cards: GeneratedCard[]
		try {
			cards = await readGeneratedCards(lang)
		} catch (error) {
			console.warn(`[!] Skipping language ${lang}: ${(error as Error).message}`)
			continue
		}

		for (const card of cards) {
			const localizedName = (card.name ?? '').trim()
			if (!localizedName) continue

			const englishMeta = englishIndex.get(card.id) ?? {
				name: (card.name ?? '').trim(),
				dexIds: card.dexId ?? []
			}

			const dexIds = (englishMeta.dexIds.length > 0 ? englishMeta.dexIds : card.dexId) ?? []
			if (dexIds.length === 0) continue

			const englishName = englishMeta.name
			const baseStrength = englishName ? 1 : 0

			for (const dexId of dexIds) {
				const speciesEntry = speciesEntries.get(dexId)
				if (!speciesEntry) continue

				const englishMatch = englishName && equalsIgnoreCase(englishName, speciesEntry.species.englishName)
				const strength = englishMatch ? 2 : baseStrength

				addCandidate(
					candidateMap,
					dexId,
					lang,
					localizedName,
					`server/generated/${lang}/cards.json#${card.id}`,
					strength
				)
			}
		}
	}

	return candidateMap
}

async function main() {
	console.log('[i] Loading Pokédex species...')
	const speciesEntries = await loadSpeciesEntries()
	const candidateMap = await collectCardTranslations(speciesEntries)

	const filledByLang = new Map<SupportedLanguages, number>()
	let updatedSpecies = 0

	for (const entry of speciesEntries.values()) {
		let changed = false

		for (const lang of SUPPORTED_LANGS) {
			const current = entry.species.names?.[lang]
			if (current && current.trim()) {
				continue
			}

			const candidate = candidateMap.get(entry.species.dexId)?.get(lang)
			if (!candidate) {
				continue
			}

			if (!entry.species.names) {
				entry.species.names = {} as PokemonSpecies['names']
			}
			entry.species.names[lang] = candidate.value
			changed = true

			filledByLang.set(lang, (filledByLang.get(lang) ?? 0) + 1)
		}

		if (changed) {
			entry.updated = true
			updatedSpecies++
			const content = generateSpeciesFile(entry.species)
			await fs.writeFile(entry.filePath, content, 'utf-8')
		}
	}

	if (updatedSpecies === 0) {
		console.log('[OK] No missing translations were filled.')
		return
	}

	console.log(`[OK] Updated ${updatedSpecies} species files.`)
	console.log('Filled translations per language:')
	for (const lang of SUPPORTED_LANGS) {
		const count = filledByLang.get(lang)
		if (count) {
			console.log(`  - ${lang}: ${count}`)
		}
	}
}

main().catch((error) => {
	console.error('[x] Failed to fill Pokédex translations:', error)
	process.exit(1)
})


