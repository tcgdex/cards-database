import path from 'node:path'
import { PokemonSpecies, SupportedLanguages } from '../../../interfaces'
import { DB_PATH, getDataFolder, resolveText, smartGlob } from './util'

// API output interface for Pokédex species
export interface PokedexSpecies {
	dexId: number
	name: string
	englishName: string
	forms: Array<string>
	image: string
	evolvesFrom: number | null
	evolvesTo: Array<number>
}

const speciesCache: Map<number, PokemonSpecies> = new Map()

/**
 * Get a single Pokémon species by Dex ID
 */
export async function getSpecies(dexId: number): Promise<PokemonSpecies | undefined> {
	if (speciesCache.has(dexId)) {
		return speciesCache.get(dexId)
	}

	const paddedId = dexId.toString().padStart(4, '0')
	const file = `${DB_PATH}/pokedex/${paddedId}.ts`

	try {
		const [filePath] = await smartGlob(file)
		const species: PokemonSpecies = (await import(`../../${filePath}`)).default
		speciesCache.set(dexId, species)
		return species
	} catch {
		return undefined
	}
}

/**
 * Get all Pokémon species from the Pokedex data folder
 */
export async function getAllSpecies(): Promise<Array<PokemonSpecies>> {
	const files = await smartGlob(`${DB_PATH}/pokedex/*.ts`)

	// Filter out index.ts
	const speciesFiles = files
		.filter((f) => !f.endsWith('index.ts'))
		.map((f) => f.replaceAll(path.sep, '/'))

	const species: PokemonSpecies[] = []

	for (const file of speciesFiles) {
		try {
			const spec: PokemonSpecies = (await import(`../../${file}`)).default
			species.push(spec)
			speciesCache.set(spec.dexId, spec)
		} catch (error) {
			console.error(`[!] Error loading species from ${file}:`, error)
		}
	}

	// Sort by dexId
	return species.sort((a, b) => a.dexId - b.dexId)
}

/**
 * Convert a PokemonSpecies to the API output format for a given language
 */
export function speciesToPokedexSpecies(species: PokemonSpecies, lang: SupportedLanguages): PokedexSpecies | undefined {
	const localizedName = resolveText(species.names, lang)

	// If no localized name, use English name as fallback
	const name = localizedName || species.englishName

	return {
		dexId: species.dexId,
		name,
		englishName: species.englishName,
		forms: species.forms,
		image: species.image,
		evolvesFrom: species.evolvesFrom,
		evolvesTo: species.evolvesTo
	}
}

