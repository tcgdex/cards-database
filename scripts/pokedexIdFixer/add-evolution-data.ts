#!/usr/bin/env bun
/**
 * Script to fetch evolution chain data from PokeAPI and add it to pokemon-species.json
 * Uses only dexId for evolution references
 */

import * as fs from 'fs'
import * as path from 'path'

interface SpeciesEntry {
	dexId: number
	englishName: string
	names: Record<string, string>
	forms: string[]
	evolvesFrom?: number | null
	evolvesTo?: number[]
}

interface PokeAPISpecies {
	id: number
	name: string
	evolves_from_species: {
		name: string
		url: string
	} | null
	evolution_chain: {
		url: string
	}
}

interface EvolutionChainNode {
	species: {
		name: string
		url: string
	}
	evolves_to: EvolutionChainNode[]
}

interface EvolutionChain {
	chain: EvolutionChainNode
}

// Map species name to dexId for lookup
const speciesNameToDexId: Map<string, number> = new Map()

// Sleep utility for rate limiting
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// Extract dexId from species URL
function extractDexIdFromUrl(url: string): number {
	const match = url.match(/\/pokemon-species\/(\d+)\//)
	return match ? parseInt(match[1], 10) : 0
}

// Fetch with retry and rate limiting
async function fetchWithRetry(url: string, retries = 3): Promise<any> {
	for (let attempt = 0; attempt < retries; attempt++) {
		try {
			const response = await fetch(url)
			if (response.ok) {
				return await response.json()
			}
			if (response.status === 429) {
				// Rate limited, wait longer
				console.log(`  Rate limited, waiting 5 seconds...`)
				await sleep(5000)
				continue
			}
			throw new Error(`HTTP ${response.status}`)
		} catch (error) {
			if (attempt < retries - 1) {
				console.log(`  Retry ${attempt + 1}/${retries} for ${url}`)
				await sleep(1000 * (attempt + 1))
			} else {
				throw error
			}
		}
	}
}

// Build evolution map from PokeAPI
async function buildEvolutionMap(maxDexId: number): Promise<{
	evolvesFrom: Map<number, number | null>
	evolvesTo: Map<number, number[]>
}> {
	const evolvesFrom = new Map<number, number | null>()
	const evolvesTo = new Map<number, number[]>()
	
	// Initialize all species
	for (let i = 1; i <= maxDexId; i++) {
		evolvesFrom.set(i, null)
		evolvesTo.set(i, [])
	}
	
	console.log(`[i] Fetching evolution data for ${maxDexId} species from PokeAPI...`)
	
	// Fetch species data in batches
	const batchSize = 50
	for (let start = 1; start <= maxDexId; start += batchSize) {
		const end = Math.min(start + batchSize - 1, maxDexId)
		console.log(`[.] Processing species ${start}-${end}...`)
		
		const promises: Promise<void>[] = []
		
		for (let dexId = start; dexId <= end; dexId++) {
			promises.push((async () => {
				try {
					const species: PokeAPISpecies = await fetchWithRetry(
						`https://pokeapi.co/api/v2/pokemon-species/${dexId}/`
					)
					
					if (species.evolves_from_species) {
						const fromDexId = extractDexIdFromUrl(species.evolves_from_species.url)
						if (fromDexId > 0 && fromDexId <= maxDexId) {
							evolvesFrom.set(dexId, fromDexId)
							
							// Add to evolvesTo of the parent
							const parentEvolutions = evolvesTo.get(fromDexId) || []
							if (!parentEvolutions.includes(dexId)) {
								parentEvolutions.push(dexId)
								evolvesTo.set(fromDexId, parentEvolutions)
							}
						}
					}
					
					// Store species name mapping
					speciesNameToDexId.set(species.name, dexId)
				} catch (error) {
					console.log(`  [!] Failed to fetch species ${dexId}: ${error}`)
				}
			})())
		}
		
		await Promise.all(promises)
		
		// Rate limiting between batches
		await sleep(500)
	}
	
	// Sort evolvesTo arrays by dexId
	for (const [dexId, evolutions] of evolvesTo.entries()) {
		evolvesTo.set(dexId, evolutions.sort((a, b) => a - b))
	}
	
	return { evolvesFrom, evolvesTo }
}

async function main() {
	const speciesFile = path.join(__dirname, 'pokemon-species.json')
	
	console.log('[i] Reading pokemon-species.json...')
	const speciesData: SpeciesEntry[] = JSON.parse(fs.readFileSync(speciesFile, 'utf8'))
	
	const maxDexId = Math.max(...speciesData.map(s => s.dexId))
	console.log(`[i] Found ${speciesData.length} species (max dexId: ${maxDexId})`)
	
	// Build evolution map from PokeAPI
	const { evolvesFrom, evolvesTo } = await buildEvolutionMap(maxDexId)
	
	// Add evolution data to species
	console.log('[i] Adding evolution data to species...')
	for (const species of speciesData) {
		species.evolvesFrom = evolvesFrom.get(species.dexId) ?? null
		species.evolvesTo = evolvesTo.get(species.dexId) ?? []
	}
	
	// Save updated species data
	console.log('[i] Saving updated pokemon-species.json...')
	fs.writeFileSync(speciesFile, JSON.stringify(speciesData, null, 2) + '\n')
	
	// Print statistics
	let withEvolutions = 0
	let totalEvolvesTo = 0
	let totalEvolvesFrom = 0
	
	for (const species of speciesData) {
		if (species.evolvesFrom !== null) totalEvolvesFrom++
		if (species.evolvesTo && species.evolvesTo.length > 0) {
			totalEvolvesTo++
			withEvolutions += species.evolvesTo.length
		}
	}
	
	console.log('\n[OK] Evolution data added successfully!')
	console.log(`  - Species with evolvesFrom: ${totalEvolvesFrom}`)
	console.log(`  - Species with evolvesTo: ${totalEvolvesTo}`)
	console.log(`  - Total evolution paths: ${withEvolutions}`)
	
	// Print some examples
	console.log('\n[i] Example evolution chains:')
	
	// Bulbasaur line
	const bulbasaur = speciesData.find(s => s.dexId === 1)
	const ivysaur = speciesData.find(s => s.dexId === 2)
	const venusaur = speciesData.find(s => s.dexId === 3)
	console.log(`  Bulbasaur (1): evolvesFrom=${bulbasaur?.evolvesFrom}, evolvesTo=${JSON.stringify(bulbasaur?.evolvesTo)}`)
	console.log(`  Ivysaur (2): evolvesFrom=${ivysaur?.evolvesFrom}, evolvesTo=${JSON.stringify(ivysaur?.evolvesTo)}`)
	console.log(`  Venusaur (3): evolvesFrom=${venusaur?.evolvesFrom}, evolvesTo=${JSON.stringify(venusaur?.evolvesTo)}`)
	
	// Eevee line (branching evolution)
	const eevee = speciesData.find(s => s.dexId === 133)
	console.log(`  Eevee (133): evolvesFrom=${eevee?.evolvesFrom}, evolvesTo=${JSON.stringify(eevee?.evolvesTo)}`)
}

main().catch(console.error)

