/**
 * Download Pokédex Data from PokeAPI
 *
 * Downloads the official Pokédex data to create an authoritative mapping
 * of Pokémon names to National Pokédex IDs.
 *
 * Usage:
 *   bun run download-pokedex.ts
 *
 * Output:
 *   - pokedex-raw.json: Raw API response data
 *   - pokemon-species.json: Processed species data with all names
 */

import fs from 'fs'
import path from 'path'

const POKEAPI_BASE = 'https://pokeapi.co/api/v2'
const OUTPUT_DIR = __dirname

interface PokemonSpecies {
	id: number
	name: string
	names: Array<{
		language: { name: string }
		name: string
	}>
	varieties: Array<{
		is_default: boolean
		pokemon: { name: string; url: string }
	}>
}

interface ProcessedPokemon {
	dexId: number
	englishName: string
	names: Record<string, string>
	forms: string[]
}

async function fetchWithRetry(url: string, retries = 3): Promise<any> {
	for (let i = 0; i < retries; i++) {
		try {
			const response = await fetch(url)
			if (!response.ok) {
				throw new Error(`HTTP ${response.status}: ${response.statusText}`)
			}
			return await response.json()
		} catch (error) {
			if (i === retries - 1) throw error
			console.log(`[!] Retry ${i + 1}/${retries} for ${url}`)
			await new Promise((r) => setTimeout(r, 1000 * (i + 1)))
		}
	}
}

async function main() {
	console.log('[i] Downloading Pokédex data from PokeAPI...')
	console.log('')

	// Get the total count of Pokémon species
	const speciesListUrl = `${POKEAPI_BASE}/pokemon-species?limit=1`
	const speciesList = await fetchWithRetry(speciesListUrl)
	const totalCount = speciesList.count

	console.log(`[i] Total Pokémon species: ${totalCount}`)

	// Download all species (in batches to be nice to the API)
	const allSpecies: ProcessedPokemon[] = []
	const batchSize = 50
	const batches = Math.ceil(totalCount / batchSize)

	for (let batch = 0; batch < batches; batch++) {
		const offset = batch * batchSize
		const limit = Math.min(batchSize, totalCount - offset)

		console.log(`[i] Downloading batch ${batch + 1}/${batches} (${offset + 1}-${offset + limit})...`)

		const batchUrl = `${POKEAPI_BASE}/pokemon-species?offset=${offset}&limit=${limit}`
		const batchData = await fetchWithRetry(batchUrl)

		// Fetch each species in parallel (with rate limiting)
		const speciesPromises = batchData.results.map(async (result: { url: string }, index: number) => {
			// Stagger requests slightly
			await new Promise((r) => setTimeout(r, index * 50))

			const species: PokemonSpecies = await fetchWithRetry(result.url)

			// Extract names in different languages
			const names: Record<string, string> = {}
			for (const nameEntry of species.names) {
				const lang = nameEntry.language.name
				// Map PokeAPI language codes to our codes
				const langMap: Record<string, string> = {
					en: 'en',
					fr: 'fr',
					de: 'de',
					es: 'es',
					it: 'it',
					ja: 'ja',
					ko: 'ko',
					'zh-Hant': 'zh-tw',
					'zh-Hans': 'zh-cn',
				}
				if (langMap[lang]) {
					names[langMap[lang]] = nameEntry.name
				}
			}

			// Extract form names
			const forms = species.varieties.map((v) => v.pokemon.name)

			return {
				dexId: species.id,
				englishName: names.en || species.name,
				names,
				forms,
			}
		})

		const batchResults = await Promise.all(speciesPromises)
		allSpecies.push(...batchResults)

		// Small delay between batches
		if (batch < batches - 1) {
			await new Promise((r) => setTimeout(r, 500))
		}
	}

	// Sort by dexId
	allSpecies.sort((a, b) => a.dexId - b.dexId)

	// Save raw data
	const rawPath = path.join(OUTPUT_DIR, 'pokemon-species.json')
	fs.writeFileSync(rawPath, JSON.stringify(allSpecies, null, 2))
	console.log(`\n[OK] Saved ${allSpecies.length} Pokémon species to: ${rawPath}`)

	// Print summary
	console.log('')
	console.log('Sample entries:')
	for (const pokemon of allSpecies.slice(0, 5)) {
		console.log(`  #${pokemon.dexId} ${pokemon.englishName} (${pokemon.names.fr || 'no FR'})`)
	}
	console.log('  ...')
	for (const pokemon of allSpecies.slice(-3)) {
		console.log(`  #${pokemon.dexId} ${pokemon.englishName} (${pokemon.names.fr || 'no FR'})`)
	}
}

main().catch((error) => {
	console.error('[x] Fatal error:', error)
	process.exit(1)
})

