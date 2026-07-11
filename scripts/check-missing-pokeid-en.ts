/*
  Look through all data or data-asia. Find category pokemon and check if dexid is missing or incorrect
  Try to get the pokemon dexid by using the card name to determine the id using pokedex data below

  for example is card is pokemon and name is Pikachu but dexid is empty, use search by name pikachu to get the id
  then add the dexid (if missing) or update the id to correct it

  Usage:
    bun run scripts/check-missing-pokeid-en.ts --dry-run    # Preview changes without modifying files
    bun run scripts/check-missing-pokeid-en.ts --apply      # Apply changes to files
*/

import { glob } from 'glob'
import path from 'path'
import fs from 'fs'
import { extractFile } from './utils/ts-extract-utils'
import {
	normalizeNameForMatching,
	isTagTeamCard,
	splitTagTeamName,
	buildTagTeamDexIds,
} from './pokedexIdFixer/dex-utils'

// CLI args
const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const apply = args.includes('--apply')

if (!dryRun && !apply) {
	console.error('Usage: bun run scripts/check-missing-pokeid.ts [--dry-run | --apply]')
	console.error('  --dry-run  Preview changes without modifying files')
	console.error('  --apply    Apply changes to files')
	process.exit(1)
}

const DATA_DIR = path.resolve(__dirname, '../data')
const ASIA_DATA_DIR = path.resolve(__dirname, '../data-asia')
const SCRIPT_DIR = __dirname

interface FixLogEntry {
	filePath: string
	relativePath: string
	cardName: string
	type: 'missing' | 'incorrect'
	oldDexId: number[] | undefined
	newDexId: number[]
}

// ============ Build name-to-dexId lookup from POKEDEX ============

function buildNameToIdMap(): Map<string, number> {
	const map = new Map<string, number>()

	for (const entry of POKEDEX) {
		if (entry.id > 0) {
			// Add the main name (lowercased)
			map.set(entry.name.toLowerCase(), entry.id)

			// Add otherForms if present
			if (entry.otherForms) {
				for (const form of entry.otherForms) {
					map.set(form.name.toLowerCase(), form.id)
				}
			}
		}
	}

	// Also add Japanese names from the JAPANESE_NAME_MAP
	for (const [jaName, dexId] of Object.entries(JAPANESE_NAME_MAP)) {
		if (!map.has(jaName)) {
			map.set(jaName, dexId)
		}
	}

	return map
}

// ============ Load manual mappings ============

function loadManualMappings(): Map<string, number | number[]> {
	const manualMap = new Map<string, number | number[]>()
	const manualPath = path.join(SCRIPT_DIR, 'pokedexIdFixer/manual-mappings.json')

	if (fs.existsSync(manualPath)) {
		const manualData = JSON.parse(fs.readFileSync(manualPath, 'utf-8'))
		for (const [name, dexId] of Object.entries(manualData.mappings || {})) {
			manualMap.set(name.toLowerCase(), dexId as number | number[])
		}
	}

	return manualMap
}

// ============ Resolve dexId for a card name ============

function resolveDexId(
	engName: string,
	nameToId: Map<string, number>,
	manualMappings: Map<string, number | number[]>
): number[] | null {
	// Check manual mappings first (supports single and multi-dex)
	const manualKey = engName.toLowerCase().replace(/\u2019/g, "'")
	const manualResult = manualMappings.get(manualKey)
	if (manualResult !== undefined) {
		return Array.isArray(manualResult) ? manualResult : [manualResult]
	}

	// Handle tag team cards (e.g., "Mimikyu & Gengar GX")
	if (isTagTeamCard(engName)) {
		const parts = splitTagTeamName(engName)
		const { dexIds, missingParts } = buildTagTeamDexIds(parts, nameToId)
		if (missingParts.length === 0 && dexIds.length > 0) {
			return Array.from(new Set(dexIds))
		}
		return null
	}

	// Single Pokémon card - try normalized name
	const normalized = normalizeNameForMatching(engName)
	const dexId = nameToId.get(normalized)
	if (dexId) {
		return [dexId]
	}

	return null
}

// ============ Apply fix to file ============

function applyFix(filePath: string, dexIds: number[]) {
	let content = fs.readFileSync(filePath, 'utf-8')

	const dexIdRegex = /(\s*)dexId:\s*\[[^\]]*?\],?\s*\n/
	const match = dexIdRegex.exec(content)
	const buildLine = (indent: string) => `${indent}dexId: [${dexIds.join(', ')}],\n`

	if (match && match.index !== undefined) {
		// Replace existing dexId
		const indent = match[1] || '\t'
		content = content.slice(0, match.index) + buildLine(indent) + content.slice(match.index + match[0].length)
	} else {
		// Insert new dexId after category line
		const categoryMatch = content.match(/category:\s*["']Pokemon["']\s*,?\s*\n/)
		if (!categoryMatch || categoryMatch.index === undefined) {
			console.error(`[!] Could not find category line in: ${filePath}`)
			return
		}

		const insertPos = categoryMatch.index + categoryMatch[0].length
		const lineStart = content.lastIndexOf('\n', categoryMatch.index) + 1
		const indent = content.slice(lineStart, categoryMatch.index).match(/^\s*/)?.[0] || '\t'

		content = content.slice(0, insertPos) + buildLine(indent) + content.slice(insertPos)
	}

	fs.writeFileSync(filePath, content)
}

// ============ Main ============

async function main() {
	const label = dryRun ? '[DRY RUN]' : '[APPLY]'

	// Build lookup maps
	const nameToId = buildNameToIdMap()
	const manualMappings = loadManualMappings()

	console.log(`[i] Built name-to-dexId map with ${nameToId.size} entries`)
	console.log(`[i] Loaded ${manualMappings.size} manual mappings`)
	console.log('')

	// Find all card files in both data/ and data-asia/
	const cardFiles = await glob('**/*.ts', {
		cwd: DATA_DIR,
		absolute: true,
		ignore: ['*/*.ts', '**/*.d.ts'],
	})

	const asiaCardFiles = await glob('**/*.ts', {
		cwd: ASIA_DATA_DIR,
		absolute: true,
		ignore: ['*/*.ts', '**/*.d.ts'],
	})

	const allFiles = [...cardFiles, ...asiaCardFiles]
	console.log(`[i] Scanning ${allFiles.length} card files...`)
	console.log('')

	const logEntries: FixLogEntry[] = []
	let missingCount = 0
	let incorrectCount = 0
	let skippedCorrectCount = 0
	let skippedUnresolvableCount = 0
	let errorCount = 0

	for (const filePath of allFiles) {
		const relativePath = path.relative(DATA_DIR, filePath)
		const parts = relativePath.split(path.sep)
		if (parts.length <= 2) continue

		try {
			const card = extractFile(filePath)
			if (!card || card.category !== 'Pokemon') continue

			const engName = card.name?.en || card.name?.fr || ''
			const jaName = card.name?.ja || ''

			// For data-asia cards, try Japanese name first, then English
			const nameToUse = jaName || engName
			if (!nameToUse) {
				skippedUnresolvableCount++
				continue
			}

			const existingDexIds = Array.isArray(card.dexId) ? card.dexId : undefined
			const resolvedDexIds = resolveDexId(nameToUse, nameToId, manualMappings)

			if (!resolvedDexIds) {
				skippedUnresolvableCount++
				continue
			}

			// Check if dexId is missing
			if (!existingDexIds || existingDexIds.length === 0) {
				logEntries.push({
					filePath,
					relativePath,
					cardName: engName,
					type: 'missing',
					oldDexId: undefined,
					newDexId: resolvedDexIds,
				})
				missingCount++
				console.log(`${label} [missing dexid]: ${relativePath} "${engName}" - missing dexId added [${resolvedDexIds.join(', ')}]`)

				if (apply) {
					applyFix(filePath, resolvedDexIds)
				}
				continue
			}

			// Check if dexId is incorrect (compare sorted arrays)
			const sortedExisting = [...existingDexIds].sort((a, b) => a - b)
			const sortedResolved = [...resolvedDexIds].sort((a, b) => a - b)
			const isCorrect = sortedExisting.length === sortedResolved.length &&
				sortedExisting.every((val, idx) => val === sortedResolved[idx])

			if (!isCorrect) {
				logEntries.push({
					filePath,
					relativePath,
					cardName: engName,
					type: 'incorrect',
					oldDexId: existingDexIds,
					newDexId: resolvedDexIds,
				})
				incorrectCount++
				console.log(`${label} [incorrect dexid]: ${relativePath} "${engName}" - wrong dexId replaced [${existingDexIds.join(', ')}] with [${resolvedDexIds.join(', ')}]`)

				if (apply) {
					applyFix(filePath, resolvedDexIds)
				}
				continue
			}

			// dexId is correct - skip (no log)
			skippedCorrectCount++
		} catch (error: any) {
			errorCount++
			console.error(`${label} [error]: ${relativePath} - ${error.message}`)
		}
	}

	// Print summary
	console.log('')
	console.log('='.repeat(60))
	console.log(dryRun ? 'DRY RUN SUMMARY' : 'APPLY SUMMARY')
	console.log('='.repeat(60))
	console.log('')
	console.log(`Missing dexId added:     ${missingCount}`)
	console.log(`Wrong dexId replaced:    ${incorrectCount}`)
	console.log(`Skipped (correct):       ${skippedCorrectCount}`)
	console.log(`Skipped (unresolvable):  ${skippedUnresolvableCount}`)
	console.log(`Errors:                  ${errorCount}`)
	console.log('')

	// Save detailed log
	const logPath = path.join(SCRIPT_DIR, dryRun ? 'check-missing-pokeid-en-dryrun.txt' : 'check-missing-pokeid-en-log.txt')
	const logLines = logEntries.map((entry) => {
		const prefix = entry.type === 'missing' ? '[missing dexid]' : '[incorrect dexid]'
		if (entry.type === 'missing') {
			return `${prefix}: ${entry.relativePath} "${entry.cardName}" - missing dexId added [${entry.newDexId.join(', ')}]`
		} else {
			return `${prefix}: ${entry.relativePath} "${entry.cardName}" - wrong dexId replaced [${entry.oldDexId!.join(', ')}] with [${entry.newDexId.join(', ')}]`
		}
	})
	fs.writeFileSync(logPath, logLines.join('\n') + '\n')
	console.log(`[OK] Log saved to: ${logPath}`)
}

// ============ POKEDEX data ============

type PokedexEntry = {
  id: number;
  name: string;
  generation: number;
  image?: string;  // optional override to match filename
  size?: number; // optional to change image size
  offset?: { x: number; y: number, z?: number };
  otherForms?: PokedexEntryOtherForms[]
  evolvesFrom?: string[];
  evolvesTo?: string[];
};

type PokedexEntryOtherForms = {
  id: number;
  name: string;
  generation: number;
  image?: string;
  size?: number;
  offset?: { x: number; y: number, z?: number };
};

// reference table: https://en.wikipedia.org/wiki/List_of_Pok%C3%A9mon
const POKEDEX: PokedexEntry[] = [
  {
    id: 1, name: 'Bulbasaur', generation: 1, size: 40,
    evolvesTo: ['Ivysaur']
  },
  {
    id: 2, name: 'Ivysaur', generation: 1, size: 70,
    evolvesFrom: ['Bulbasaur'],
    evolvesTo: ['Venusaur']
  },
  {
    id: 3, name: 'Venusaur', generation: 1,
    evolvesFrom: ['Ivysaur']
  },
  {
    id: 4, name: 'Charmander', generation: 1, size: 45,
    evolvesTo: ['Charmeleon']
  },
  {
    id: 5, name: 'Charmeleon', generation: 1, size: 60,
    evolvesFrom: ['Charmander'],
    evolvesTo: ['Charizard']
  },
  {
    id: 6, name: 'Charizard', generation: 1,
    evolvesFrom: ['Charmeleon']
  },
  {
    id: 7, name: 'Squirtle', generation: 1, size: 50,
    evolvesTo: ['Wartortle']
  },
  {
    id: 8, name: 'Wartortle', generation: 1,
    evolvesFrom: ['Squirtle'],
    evolvesTo: ['Blastoise']
  },
  {
    id: 9, name: 'Blastoise', generation: 1,
    evolvesFrom: ['Wartortle']
  },
  {
    id: 10, name: 'Caterpie', generation: 1,
    evolvesTo: ['Metapod']
  },
  {
    id: 11, name: 'Metapod', generation: 1,
    evolvesFrom: ['Caterpie'],
    evolvesTo: ['Butterfree']
  },
  {
    id: 12, name: 'Butterfree', generation: 1,
    evolvesFrom: ['Metapod']
  },
  {
    id: 13, name: 'Weedle', generation: 1,
    evolvesTo: ['Kakuna']
  },
  {
    id: 14, name: 'Kakuna', generation: 1,
    evolvesFrom: ['Weedle'],
    evolvesTo: ['Beedrill']
  },
  {
    id: 15, name: 'Beedrill', generation: 1,
    evolvesFrom: ['Kakuna']
  },
  {
    id: 16, name: 'Pidgey', generation: 1,
    evolvesTo: ['Pidgeotto']
  },
  {
    id: 17, name: 'Pidgeotto', generation: 1,
    evolvesFrom: ['Pidgey'],
    evolvesTo: ['Pidgeot']
  },
  {
    id: 18, name: 'Pidgeot', generation: 1,
    evolvesFrom: ['Pidgeotto']
  },
  {
    id: 19, name: 'Rattata', generation: 1,
    evolvesTo: ['Raticate']
  },
  {
    id: 20, name: 'Raticate', generation: 1,
    evolvesFrom: ['Rattata']
  },
  {
    id: 21, name: 'Spearow', generation: 1,
    evolvesTo: ['Fearow']
  },
  {
    id: 22, name: 'Fearow', generation: 1,
    evolvesFrom: ['Spearow']
  },
  {
    id: 23, name: 'Ekans', generation: 1,
    evolvesTo: ['Arbok']
  },
  {
    id: 24, name: 'Arbok', generation: 1,
    evolvesFrom: ['Ekans']
  },
  {
    id: 25, name: 'Pikachu', generation: 1,
    evolvesFrom: ['Pichu'],
    evolvesTo: ['Raichu']
  },
  {
    id: 26, name: 'Raichu', generation: 1,
    evolvesFrom: ['Pikachu']
  },
  {
    id: 27, name: 'Sandshrew', generation: 1,
    evolvesTo: ['Sandslash']
  },
  {
    id: 28, name: 'Sandslash', generation: 1,
    evolvesFrom: ['Sandshrew']
  },
  {
    id: 29, name: 'Nidoran ♀', generation: 1, image: 'nidoranf',
    evolvesTo: ['Nidorina']
  },
  {
    id: 30, name: 'Nidorina', generation: 1,
    evolvesFrom: ['Nidoran ♀'],
    evolvesTo: ['Nidoqueen']
  },
  {
    id: 31, name: 'Nidoqueen', generation: 1,
    evolvesFrom: ['Nidorina']
  },
  {
    id: 32, name: 'Nidoran ♂', generation: 1, image: 'nidoranm',
    evolvesTo: ['Nidorino']
  },
  {
    id: 33, name: 'Nidorino', generation: 1,
    evolvesFrom: ['Nidoran ♂'],
    evolvesTo: ['Nidoking']
  },
  {
    id: 34, name: 'Nidoking', generation: 1,
    evolvesFrom: ['Nidorino']
  },
  {
    id: 35, name: 'Clefairy', generation: 1,
    evolvesFrom: ['Cleffa'],
    evolvesTo: ['Clefable']
  },
  {
    id: 36, name: 'Clefable', generation: 1,
    evolvesFrom: ['Clefairy']
  },
  {
    id: 37, name: 'Vulpix', generation: 1,
    evolvesTo: ['Ninetales']
  },
  {
    id: 38, name: 'Ninetales', generation: 1,
    evolvesFrom: ['Vulpix']
  },
  {
    id: 39, name: 'Jigglypuff', generation: 1,
    evolvesFrom: ['Igglybuff'],
    evolvesTo: ['Wigglytuff']
  },
  {
    id: 40, name: 'Wigglytuff', generation: 1,
    evolvesFrom: ['Jigglypuff']
  },
  {
    id: 41, name: 'Zubat', generation: 1,
    evolvesTo: ['Golbat']
  },
  {
    id: 42, name: 'Golbat', generation: 1,
    evolvesFrom: ['Zubat'],
    evolvesTo: ['Crobat']
  },
  {
    id: 43, name: 'Oddish', generation: 1,
    evolvesTo: ['Gloom']
  },
  {
    id: 44, name: 'Gloom', generation: 1,
    evolvesFrom: ['Oddish'],
    evolvesTo: ['Vileplume', 'Bellossom']
  },
  {
    id: 45, name: 'Vileplume', generation: 1,
    evolvesFrom: ['Gloom']
  },
  {
    id: 46, name: 'Paras', generation: 1,
    evolvesTo: ['Parasect']
  },
  {
    id: 47, name: 'Parasect', generation: 1,
    evolvesFrom: ['Paras']
  },
  {
    id: 48, name: 'Venonat', generation: 1,
    evolvesTo: ['Venomoth']
  },
  {
    id: 49, name: 'Venomoth', generation: 1,
    evolvesFrom: ['Venonat']
  },
  {
    id: 50, name: 'Diglett', generation: 1, offset: { x: 18, y: 0, z: 1 }, otherForms: [
      { id: 718, name: 'Alolan Diglett', generation: 6, image: 'alola-diglett', offset: { x: -20, y: -2, z: 1 } }
    ],
    evolvesTo: ['Dugtrio']
  },
  {
    id: 51, name: 'Dugtrio', generation: 1,
    evolvesFrom: ['Diglett']
  },
  {
    id: 52, name: 'Meowth', generation: 1,
    evolvesTo: ['Persian']
  },
  {
    id: 53, name: 'Persian', generation: 1,
    evolvesFrom: ['Meowth'],
    evolvesTo: ['Perrserker']
  },
  {
    id: 54, name: 'Psyduck', generation: 1,
    evolvesTo: ['Golduck']
  },
  {
    id: 55, name: 'Golduck', generation: 1,
    evolvesFrom: ['Psyduck']
  },
  {
    id: 56, name: 'Mankey', generation: 1,
    evolvesTo: ['Primeape']
  },
  {
    id: 57, name: 'Primeape', generation: 1,
    evolvesFrom: ['Mankey'],
    evolvesTo: ['Annihilape']
  },
  {
    id: 58, name: 'Growlithe', generation: 1,
    evolvesTo: ['Arcanine']
  },
  {
    id: 59, name: 'Arcanine', generation: 1,
    evolvesFrom: ['Growlithe']
  },
  {
    id: 60, name: 'Poliwag', generation: 1,
    evolvesTo: ['Poliwhirl']
  },
  {
    id: 61, name: 'Poliwhirl', generation: 1,
    evolvesFrom: ['Poliwag'],
    evolvesTo: ['Poliwrath', 'Politoed']
  },
  {
    id: 62, name: 'Poliwrath', generation: 1,
    evolvesFrom: ['Poliwhirl']
  },
  {
    id: 63, name: 'Abra', generation: 1,
    evolvesTo: ['Kadabra']
  },
  {
    id: 64, name: 'Kadabra', generation: 1,
    evolvesFrom: ['Abra'],
    evolvesTo: ['Alakazam']
  },
  {
    id: 65, name: 'Alakazam', generation: 1,
    evolvesFrom: ['Kadabra']
  },
  {
    id: 66, name: 'Machop', generation: 1,
    evolvesTo: ['Machoke']
  },
  {
    id: 67, name: 'Machoke', generation: 1,
    evolvesFrom: ['Machop'],
    evolvesTo: ['Machamp']
  },
  {
    id: 68, name: 'Machamp', generation: 1,
    evolvesFrom: ['Machoke']
  },
  {
    id: 69, name: 'Bellsprout', generation: 1,
    evolvesTo: ['Weepinbell']
  },
  {
    id: 70, name: 'Weepinbell', generation: 1,
    evolvesFrom: ['Bellsprout'],
    evolvesTo: ['Victreebel']
  },
  {
    id: 71, name: 'Victreebel', generation: 1,
    evolvesFrom: ['Weepinbell']
  },
  {
    id: 72, name: 'Tentacool', generation: 1,
    evolvesTo: ['Tentacruel']
  },
  {
    id: 73, name: 'Tentacruel', generation: 1,
    evolvesFrom: ['Tentacool']
  },
  {
    id: 74, name: 'Geodude', generation: 1,
    evolvesTo: ['Graveler']
  },
  {
    id: 75, name: 'Graveler', generation: 1,
    evolvesFrom: ['Geodude'],
    evolvesTo: ['Golem']
  },
  {
    id: 76, name: 'Golem', generation: 1,
    evolvesFrom: ['Graveler']
  },
  {
    id: 77, name: 'Ponyta', generation: 1,
    evolvesTo: ['Rapidash']
  },
  {
    id: 78, name: 'Rapidash', generation: 1,
    evolvesFrom: ['Ponyta']
  },
  {
    id: 79, name: 'Slowpoke', generation: 1,
    evolvesTo: ['Slowbro', 'Slowking']
  },
  {
    id: 80, name: 'Slowbro', generation: 1,
    evolvesFrom: ['Slowpoke']
  },
  {
    id: 81, name: 'Magnemite', generation: 1,
    evolvesTo: ['Magneton']
  },
  {
    id: 82, name: 'Magneton', generation: 1,
    evolvesFrom: ['Magnemite'],
    evolvesTo: ['Magnezone']
  },
  { id: 83, name: 'Farfetchd', generation: 1 },
  {
    id: 84, name: 'Doduo', generation: 1,
    evolvesTo: ['Dodrio']
  },
  {
    id: 85, name: 'Dodrio', generation: 1,
    evolvesFrom: ['Doduo']
  },
  {
    id: 86, name: 'Seel', generation: 1,
    evolvesTo: ['Dewgong']
  },
  {
    id: 87, name: 'Dewgong', generation: 1,
    evolvesFrom: ['Seel']
  },
  {
    id: 88, name: 'Grimer', generation: 1,
    evolvesTo: ['Muk']
  },
  {
    id: 89, name: 'Muk', generation: 1,
    evolvesFrom: ['Grimer']
  },
  {
    id: 90, name: 'Shellder', generation: 1,
    evolvesTo: ['Cloyster']
  },
  {
    id: 91, name: 'Cloyster', generation: 1,
    evolvesFrom: ['Shellder']
  },
  {
    id: 92, name: 'Gastly', generation: 1,
    evolvesTo: ['Haunter']
  },
  {
    id: 93, name: 'Haunter', generation: 1,
    evolvesFrom: ['Gastly'],
    evolvesTo: ['Gengar']
  },
  {
    id: 94, name: 'Gengar', generation: 1,
    evolvesFrom: ['Haunter']
  },
  {
    id: 95, name: 'Onix', generation: 1,
    evolvesTo: ['Steelix']
  },
  {
    id: 96, name: 'Drowzee', generation: 1,
    evolvesTo: ['Hypno']
  },
  {
    id: 97, name: 'Hypno', generation: 1,
    evolvesFrom: ['Drowzee']
  },
  {
    id: 98, name: 'Krabby', generation: 1,
    evolvesTo: ['Kingler']
  },
  {
    id: 99, name: 'Kingler', generation: 1,
    evolvesFrom: ['Krabby']
  },
  {
    id: 100, name: 'Voltorb', generation: 1,
    evolvesTo: ['Electrode']
  },
  {
    id: 101, name: 'Electrode', generation: 1,
    evolvesFrom: ['Voltorb']
  },
  {
    id: 102, name: 'Exeggcute', generation: 1,
    evolvesTo: ['Exeggutor']
  },
  {
    id: 103, name: 'Exeggutor', generation: 1,
    evolvesFrom: ['Exeggcute']
  },
  {
    id: 104, name: 'Cubone', generation: 1,
    evolvesTo: ['Marowak']
  },
  {
    id: 105, name: 'Marowak', generation: 1,
    evolvesFrom: ['Cubone']
  },
  {
    id: 106, name: 'Hitmonlee', generation: 1,
    evolvesFrom: ['Tyrogue']
  },
  {
    id: 107, name: 'Hitmonchan', generation: 1,
    evolvesFrom: ['Tyrogue']
  },
  {
    id: 108, name: 'Lickitung', generation: 1,
    evolvesTo: ['Lickilicky']
  },
  {
    id: 109, name: 'Koffing', generation: 1,
    evolvesTo: ['Weezing']
  },
  {
    id: 110, name: 'Weezing', generation: 1,
    evolvesFrom: ['Koffing']
  },
  {
    id: 111, name: 'Rhyhorn', generation: 1,
    evolvesTo: ['Rhydon']
  },
  {
    id: 112, name: 'Rhydon', generation: 1,
    evolvesFrom: ['Rhyhorn'],
    evolvesTo: ['Rhyperior']
  },
  {
    id: 113, name: 'Chansey', generation: 1,
    evolvesFrom: ['Happiny'],
    evolvesTo: ['Blissey']
  },
  {
    id: 114, name: 'Tangela', generation: 1,
    evolvesTo: ['Tangrowth']
  },
  { id: 115, name: 'Kangaskhan', generation: 1 },
  {
    id: 116, name: 'Horsea', generation: 1,
    evolvesTo: ['Seadra']
  },
  {
    id: 117, name: 'Seadra', generation: 1,
    evolvesFrom: ['Horsea'],
    evolvesTo: ['Kingdra']
  },
  {
    id: 118, name: 'Goldeen', generation: 1,
    evolvesTo: ['Seaking']
  },
  {
    id: 119, name: 'Seaking', generation: 1,
    evolvesFrom: ['Goldeen']
  },
  {
    id: 120, name: 'Staryu', generation: 1,
    evolvesTo: ['Starmie']
  },
  {
    id: 121, name: 'Starmie', generation: 1,
    evolvesFrom: ['Staryu']
  },
  {
    id: 122, name: 'Mr. Mime', generation: 1, image: 'mrmime',
    evolvesFrom: ['Mime Jr.'],
    evolvesTo: ['Mr. rime']
  },
  {
    id: 123, name: 'Scyther', generation: 1,
    evolvesTo: ['Scizor']
  },
  {
    id: 124, name: 'Jynx', generation: 1,
    evolvesFrom: ['Smoochum']
  },
  {
    id: 125, name: 'Electabuzz', generation: 1,
    evolvesFrom: ['Elekid'],
    evolvesTo: ['Electivire']
  },
  {
    id: 126, name: 'Magmar', generation: 1,
    evolvesFrom: ['Magby'],
    evolvesTo: ['Magmortar']
  },
  { id: 127, name: 'Pinsir', generation: 1 },
  { id: 128, name: 'Tauros', generation: 1 },
  {
    id: 129, name: 'Magikarp', generation: 1,
    evolvesTo: ['Gyarados']
  },
  {
    id: 130, name: 'Gyarados', generation: 1,
    evolvesFrom: ['Magikarp']
  },
  { id: 131, name: 'Lapras', generation: 1 },
  { id: 132, name: 'Ditto', generation: 1 },
  {
    id: 133, name: 'Eevee', generation: 1,
    evolvesTo: ['Vaporeon', 'Jolteon', 'Flareon', 'Espeon', 'Umbreon', 'Leafeon', 'Glaceon', 'Sylveon']
  },
  {
    id: 134, name: 'Vaporeon', generation: 1,
    evolvesFrom: ['Eevee']
  },
  {
    id: 135, name: 'Jolteon', generation: 1,
    evolvesFrom: ['Eevee']
  },
  {
    id: 136, name: 'Flareon', generation: 1,
    evolvesFrom: ['Eevee']
  },
  {
    id: 137, name: 'Porygon', generation: 1,
    evolvesTo: ['Porygon2']
  },
  {
    id: 138, name: 'Omanyte', generation: 1,
    evolvesTo: ['Omastar']
  },
  {
    id: 139, name: 'Omastar', generation: 1,
    evolvesFrom: ['Omanyte']
  },
  {
    id: 140, name: 'Kabuto', generation: 1,
    evolvesTo: ['Kabutops']
  },
  {
    id: 141, name: 'Kabutops', generation: 1,
    evolvesFrom: ['Kabuto']
  },
  { id: 142, name: 'Aerodactyl', generation: 1 },
  {
    id: 143, name: 'Snorlax', generation: 1,
    evolvesFrom: ['Munchlax']
  },
  { id: 144, name: 'Articuno', generation: 1 },
  { id: 145, name: 'Zapdos', generation: 1 },
  { id: 146, name: 'Moltres', generation: 1 },
  {
    id: 147, name: 'Dratini', generation: 1,
    evolvesTo: ['Dragonair']
  },
  {
    id: 148, name: 'Dragonair', generation: 1,
    evolvesFrom: ['Dratini'],
    evolvesTo: ['Dragonite']
  },
  {
    id: 149, name: 'Dragonite', generation: 1,
    evolvesFrom: ['Dragonair']
  },
  { id: 150, name: 'Mewtwo', generation: 1 },
  { id: 151, name: 'Mew', generation: 1 },
  {
    id: 152, name: 'Chikorita', generation: 2,
    evolvesTo: ['Bayleef']
  },
  {
    id: 153, name: 'Bayleef', generation: 2,
    evolvesFrom: ['Chikorita'],
    evolvesTo: ['Meganium']
  },
  {
    id: 154, name: 'Meganium', generation: 2,
    evolvesFrom: ['Bayleef']
  },
  {
    id: 155, name: 'Cyndaquil', generation: 2,
    evolvesTo: ['Quilava']
  },
  {
    id: 156, name: 'Quilava', generation: 2,
    evolvesFrom: ['Cyndaquil'],
    evolvesTo: ['Typhlosion']
  },
  {
    id: 157, name: 'Typhlosion', generation: 2,
    evolvesFrom: ['Quilava']
  },
  {
    id: 158, name: 'Totodile', generation: 2,
    evolvesTo: ['Croconaw']
  },
  {
    id: 159, name: 'Croconaw', generation: 2,
    evolvesFrom: ['Totodile'],
    evolvesTo: ['Feraligatr']
  },
  {
    id: 160, name: 'Feraligatr', generation: 2,
    evolvesFrom: ['Croconaw']
  },
  {
    id: 161, name: 'Sentret', generation: 2,
    evolvesTo: ['Furret']
  },
  {
    id: 162, name: 'Furret', generation: 2,
    evolvesFrom: ['Sentret']
  },
  {
    id: 163, name: 'Hoothoot', generation: 2,
    evolvesTo: ['Noctowl']
  },
  {
    id: 164, name: 'Noctowl', generation: 2,
    evolvesFrom: ['Hoothoot']
  },
  {
    id: 165, name: 'Ledyba', generation: 2,
    evolvesTo: ['Ledian']
  },
  {
    id: 166, name: 'Ledian', generation: 2,
    evolvesFrom: ['Ledyba']
  },
  {
    id: 167, name: 'Spinarak', generation: 2,
    evolvesTo: ['Ariados']
  },
  {
    id: 168, name: 'Ariados', generation: 2,
    evolvesFrom: ['Spinarak']
  },
  {
    id: 169, name: 'Crobat', generation: 2,
    evolvesFrom: ['Golbat']
  },
  {
    id: 170, name: 'Chinchou', generation: 2,
    evolvesTo: ['Lanturn']
  },
  {
    id: 171, name: 'Lanturn', generation: 2,
    evolvesFrom: ['Chinchou']
  },
  {
    id: 172, name: 'Pichu', generation: 2,
    evolvesTo: ['Pikachu']
  },
  {
    id: 173, name: 'Cleffa', generation: 2,
    evolvesTo: ['Clefairy']
  },
  {
    id: 174, name: 'Igglybuff', generation: 2,
    evolvesTo: ['Jigglypuff']
  },
  {
    id: 175, name: 'Togepi', generation: 2,
    evolvesTo: ['Togetic']
  },
  {
    id: 176, name: 'Togetic', generation: 2,
    evolvesFrom: ['Togepi'],
    evolvesTo: ['Togekiss']
  },
  {
    id: 177, name: 'Natu', generation: 2,
    evolvesTo: ['Xatu']
  },
  {
    id: 178, name: 'Xatu', generation: 2,
    evolvesFrom: ['Natu']
  },
  {
    id: 179, name: 'Mareep', generation: 2,
    evolvesTo: ['Flaaffy']
  },
  {
    id: 180, name: 'Flaaffy', generation: 2,
    evolvesFrom: ['Mareep'],
    evolvesTo: ['Ampharos']
  },
  {
    id: 181, name: 'Ampharos', generation: 2,
    evolvesFrom: ['Flaaffy']
  },
  {
    id: 182, name: 'Bellossom', generation: 2,
    evolvesFrom: ['Gloom']
  },
  {
    id: 183, name: 'Marill', generation: 2,
    evolvesFrom: ['Azurill'],
    evolvesTo: ['Azumarill']
  },
  {
    id: 184, name: 'Azumarill', generation: 2,
    evolvesFrom: ['Marill']
  },
  {
    id: 185, name: 'Sudowoodo', generation: 2,
    evolvesFrom: ['Bonsly']
  },
  {
    id: 186, name: 'Politoed', generation: 2,
    evolvesFrom: ['Poliwhirl']
  },
  {
    id: 187, name: 'Hoppip', generation: 2,
    evolvesTo: ['Skiploom']
  },
  {
    id: 188, name: 'Skiploom', generation: 2,
    evolvesFrom: ['Hoppip'],
    evolvesTo: ['Jumpluff']
  },
  {
    id: 189, name: 'Jumpluff', generation: 2,
    evolvesFrom: ['Skiploom']
  },
  {
    id: 190, name: 'Aipom', generation: 2,
    evolvesTo: ['Ambipom']
  },
  {
    id: 191, name: 'Sunkern', generation: 2,
    evolvesTo: ['Sunflora']
  },
  {
    id: 192, name: 'Sunflora', generation: 2,
    evolvesFrom: ['Sunkern']
  },
  {
    id: 193, name: 'Yanma', generation: 2,
    evolvesTo: ['Yanmega']
  },
  {
    id: 194, name: 'Wooper', generation: 2,
    evolvesTo: ['Quagsire']
  },
  {
    id: 195, name: 'Quagsire', generation: 2,
    evolvesFrom: ['Wooper']
  },
  {
    id: 196, name: 'Espeon', generation: 2,
    evolvesFrom: ['Eevee']
  },
  {
    id: 197, name: 'Umbreon', generation: 2,
    evolvesFrom: ['Eevee']
  },
  {
    id: 198, name: 'Murkrow', generation: 2,
    evolvesTo: ['Honchkrow']
  },
  {
    id: 199, name: 'Slowking', generation: 2,
    evolvesFrom: ['Slowpoke']
  },
  {
    id: 200, name: 'Misdreavus', generation: 2,
    evolvesTo: ['Mismagius']
  },
  {
    id: 201, name: 'Unown', generation: 2
  },
  {
    id: 202, name: 'Wobbuffet', generation: 2,
    evolvesFrom: ['Wynaut']
  },
  {
    id: 203, name: 'Girafarig', generation: 2,
    evolvesTo: ['Farigiraf']
  },
  {
    id: 204, name: 'Pineco', generation: 2,
    evolvesTo: ['Forretress']
  },
  {
    id: 205, name: 'Forretress', generation: 2,
    evolvesFrom: ['Pineco']
  },
  {
    id: 206, name: 'Dunsparce', generation: 2,
    evolvesTo: ['Dudunsparce']
  },
  {
    id: 207, name: 'Gligar', generation: 2,
    evolvesTo: ['Gliscor']
  },
  {
    id: 208, name: 'Steelix', generation: 2,
    evolvesFrom: ['Onix']
  },
  {
    id: 209, name: 'Snubbull', generation: 2,
    evolvesTo: ['Granbull']
  },
  {
    id: 210, name: 'Granbull', generation: 2,
    evolvesFrom: ['Snubbull']
  },
  {
    id: 211, name: 'Qwilfish', generation: 2,
    evolvesTo: ['Overqwil']
  },
  {
    id: 212, name: 'Scizor', generation: 2,
    evolvesFrom: ['Scyther']
  },
  {
    id: 213, name: 'Shuckle', generation: 2
  },
  {
    id: 214, name: 'Heracross', generation: 2
  },
  {
    id: 215, name: 'Sneasel', generation: 2,
    evolvesTo: ['Weavile']
  },
  {
    id: 216, name: 'Teddiursa', generation: 2,
    evolvesTo: ['Ursaring']
  },
  {
    id: 217, name: 'Ursaring', generation: 2,
    evolvesFrom: ['Teddiursa'],
    evolvesTo: ['Ursaluna']
  },
  {
    id: 218, name: 'Slugma', generation: 2,
    evolvesTo: ['Magcargo']
  },
  {
    id: 219, name: 'Magcargo', generation: 2,
    evolvesFrom: ['Slugma']
  },
  {
    id: 220, name: 'Swinub', generation: 2,
    evolvesTo: ['Piloswine']
  },
  {
    id: 221, name: 'Piloswine', generation: 2,
    evolvesFrom: ['Swinub'],
    evolvesTo: ['Mamoswine']
  },
  {
    id: 222, name: 'Corsola', generation: 2,
    evolvesTo: ['Cursola']
  },
  {
    id: 223, name: 'Remoraid', generation: 2,
    evolvesTo: ['Octillery']
  },
  {
    id: 224, name: 'Octillery', generation: 2,
    evolvesFrom: ['Remoraid']
  },
  {
    id: 225, name: 'Delibird', generation: 2
  },
  {
    id: 226, name: 'Mantine', generation: 2,
    evolvesFrom: ['Mantyke']
  },
  {
    id: 227, name: 'Skarmory', generation: 2
  },
  {
    id: 228, name: 'Houndour', generation: 2,
    evolvesTo: ['Houndoom']
  },
  {
    id: 229, name: 'Houndoom', generation: 2,
    evolvesFrom: ['Houndour']
  },
  {
    id: 230, name: 'Kingdra', generation: 2,
    evolvesFrom: ['Seadra']
  },
  {
    id: 231, name: 'Phanpy', generation: 2,
    evolvesTo: ['Donphan']
  },
  {
    id: 232, name: 'Donphan', generation: 2,
    evolvesFrom: ['Phanpy']
  },
  {
    id: 233, name: 'Porygon2', generation: 2,
    evolvesFrom: ['Porygon'],
    evolvesTo: ['Porygon-Z']
  },
  {
    id: 234, name: 'Stantler', generation: 2,
    evolvesTo: ['Wyrdeer']
  },
  { id: 235, name: 'Smeargle', generation: 2 },
  {
    id: 236, name: 'Tyrogue', generation: 2,
    evolvesTo: ['Hitmonlee', 'Hitmonchan', 'Hitmontop']
  },
  {
    id: 237, name: 'Hitmontop', generation: 2,
    evolvesFrom: ['Tyrogue']
  },
  {
    id: 238, name: 'Smoochum', generation: 2,
    evolvesTo: ['Jynx']
  },
  {
    id: 239, name: 'Elekid', generation: 2,
    evolvesTo: ['Electabuzz']
  },
  {
    id: 240, name: 'Magby', generation: 2,
    evolvesTo: ['Magmar']
  },
  { id: 241, name: 'Miltank', generation: 2 },
  {
    id: 242, name: 'Blissey', generation: 2,
    evolvesFrom: ['Chansey']
  },
  { id: 243, name: 'Raikou', generation: 2 },
  { id: 244, name: 'Entei', generation: 2 },
  { id: 245, name: 'Suicune', generation: 2 },
  {
    id: 246, name: 'Larvitar', generation: 2,
    evolvesTo: ['Pupitar']
  },
  {
    id: 247, name: 'Pupitar', generation: 2,
    evolvesFrom: ['Larvitar'],
    evolvesTo: ['Tyranitar']
  },
  {
    id: 248, name: 'Tyranitar', generation: 2,
    evolvesFrom: ['Pupitar']
  },
  { id: 249, name: 'Lugia', generation: 2 },
  { id: 250, name: 'Ho-Oh', generation: 2, image: 'hooh' },
  { id: 251, name: 'Celebi', generation: 2 },
  {
    id: 252, name: 'Treecko', generation: 3,
    evolvesTo: ['Grovyle']
  },
  {
    id: 253, name: 'Grovyle', generation: 3,
    evolvesFrom: ['Treecko'],
    evolvesTo: ['Sceptile']
  },
  {
    id: 254, name: 'Sceptile', generation: 3,
    evolvesFrom: ['Grovyle']
  },
  {
    id: 255, name: 'Torchic', generation: 3,
    evolvesTo: ['Combusken']
  },
  {
    id: 256, name: 'Combusken', generation: 3,
    evolvesFrom: ['Torchic'],
    evolvesTo: ['Blaziken']
  },
  {
    id: 257, name: 'Blaziken', generation: 3,
    evolvesFrom: ['Combusken']
  },
  {
    id: 258, name: 'Mudkip', generation: 3,
    evolvesTo: ['Marshtomp']
  },
  {
    id: 259, name: 'Marshtomp', generation: 3,
    evolvesFrom: ['Mudkip'],
    evolvesTo: ['Swampert']
  },
  {
    id: 260, name: 'Swampert', generation: 3,
    evolvesFrom: ['Marshtomp']
  },
  {
    id: 261, name: 'Poochyena', generation: 3,
    evolvesTo: ['Mightyena']
  },
  {
    id: 262, name: 'Mightyena', generation: 3,
    evolvesFrom: ['Poochyena']
  },
  {
    id: 263, name: 'Zigzagoon', generation: 3,
    evolvesTo: ['Linoone']
  },
  {
    id: 264, name: 'Linoone', generation: 3,
    evolvesFrom: ['Zigzagoon'],
    evolvesTo: ['Obstagoon']
  },
  {
    id: 265, name: 'Wurmple', generation: 3,
    evolvesTo: ['Silcoon', 'Cascoon']
  },
  {
    id: 266, name: 'Silcoon', generation: 3,
    evolvesFrom: ['Wurmple'],
    evolvesTo: ['Beautifly']
  },
  {
    id: 267, name: 'Beautifly', generation: 3,
    evolvesFrom: ['Silcoon']
  },
  {
    id: 268, name: 'Cascoon', generation: 3,
    evolvesFrom: ['Wurmple'],
    evolvesTo: ['Dustox']
  },
  {
    id: 269, name: 'Dustox', generation: 3,
    evolvesFrom: ['Cascoon']
  },
  {
    id: 270, name: 'Lotad', generation: 3,
    evolvesTo: ['Lombre']
  },
  {
    id: 271, name: 'Lombre', generation: 3,
    evolvesFrom: ['Lotad'],
    evolvesTo: ['Ludicolo']
  },
  {
    id: 272, name: 'Ludicolo', generation: 3,
    evolvesFrom: ['Lombre']
  },
  {
    id: 273, name: 'Seedot', generation: 3,
    evolvesTo: ['Nuzleaf']
  },
  {
    id: 274, name: 'Nuzleaf', generation: 3,
    evolvesFrom: ['Seedot'],
    evolvesTo: ['Shiftry']
  },
  {
    id: 275, name: 'Shiftry', generation: 3,
    evolvesFrom: ['Nuzleaf']
  },
  {
    id: 276, name: 'Taillow', generation: 3,
    evolvesTo: ['Swellow']
  },
  {
    id: 277, name: 'Swellow', generation: 3,
    evolvesFrom: ['Taillow']
  },
  {
    id: 278, name: 'Wingull', generation: 3,
    evolvesTo: ['Pelipper']
  },
  {
    id: 279, name: 'Pelipper', generation: 3,
    evolvesFrom: ['Wingull']
  },
  {
    id: 280, name: 'Ralts', generation: 3,
    evolvesTo: ['Kirlia']
  },
  {
    id: 281, name: 'Kirlia', generation: 3,
    evolvesFrom: ['Ralts'],
    evolvesTo: ['Gardevoir', 'Gallade']
  },
  {
    id: 282, name: 'Gardevoir', generation: 3,
    evolvesFrom: ['Kirlia']
  },
  {
    id: 283, name: 'Surskit', generation: 3,
    evolvesTo: ['Masquerain']
  },
  {
    id: 284, name: 'Masquerain', generation: 3,
    evolvesFrom: ['Surskit']
  },
  {
    id: 285, name: 'Shroomish', generation: 3,
    evolvesTo: ['Breloom']
  },
  {
    id: 286, name: 'Breloom', generation: 3,
    evolvesFrom: ['Shroomish']
  },
  {
    id: 287, name: 'Slakoth', generation: 3,
    evolvesTo: ['Vigoroth']
  },
  {
    id: 288, name: 'Vigoroth', generation: 3,
    evolvesFrom: ['Slakoth'],
    evolvesTo: ['Slaking']
  },
  {
    id: 289, name: 'Slaking', generation: 3,
    evolvesFrom: ['Vigoroth']
  },
  {
    id: 290, name: 'Nincada', generation: 3,
    evolvesTo: ['Ninjask']
  },
  {
    id: 291, name: 'Ninjask', generation: 3,
    evolvesFrom: ['Nincada'],
    evolvesTo: ['Shedinja']
  },
  {
    id: 292, name: 'Shedinja', generation: 3,
    evolvesFrom: ['Ninjask']
  },
  {
    id: 293, name: 'Whismur', generation: 3,
    evolvesTo: ['Loudred']
  },
  {
    id: 294, name: 'Loudred', generation: 3,
    evolvesFrom: ['Whismur'],
    evolvesTo: ['Exploud']
  },
  {
    id: 295, name: 'Exploud', generation: 3,
    evolvesFrom: ['Loudred']
  },
  {
    id: 296, name: 'Makuhita', generation: 3,
    evolvesTo: ['Hariyama']
  },
  {
    id: 297, name: 'Hariyama', generation: 3,
    evolvesFrom: ['Makuhita']
  },
  {
    id: 298, name: 'Azurill', generation: 3,
    evolvesTo: ['Marill']
  },
  {
    id: 299, name: 'Nosepass', generation: 3,
    evolvesTo: ['Probopass']
  },
  {
    id: 300, name: 'Skitty', generation: 3,
    evolvesTo: ['Delcatty']
  },
  {
    id: 301, name: 'Delcatty', generation: 3,
    evolvesFrom: ['Skitty']
  },
  { id: 302, name: 'Sableye', generation: 3 },
  { id: 303, name: 'Mawile', generation: 3 },
  {
    id: 304, name: 'Aron', generation: 3,
    evolvesTo: ['Lairon']
  },
  {
    id: 305, name: 'Lairon', generation: 3,
    evolvesFrom: ['Aron'],
    evolvesTo: ['Aggron']
  },
  {
    id: 306, name: 'Aggron', generation: 3,
    evolvesFrom: ['Lairon']
  },
  {
    id: 307, name: 'Meditite', generation: 3,
    evolvesTo: ['Medicham']
  },
  {
    id: 308, name: 'Medicham', generation: 3,
    evolvesFrom: ['Meditite']
  },
  {
    id: 309, name: 'Electrike', generation: 3,
    evolvesTo: ['Manectric']
  },
  {
    id: 310, name: 'Manectric', generation: 3,
    evolvesFrom: ['Electrike']
  },
  { id: 311, name: 'Plusle', generation: 3 },
  { id: 312, name: 'Minun', generation: 3 },
  { id: 313, name: 'Volbeat', generation: 3 },
  { id: 314, name: 'Illumise', generation: 3 },
  {
    id: 315, name: 'Roselia', generation: 3,
    evolvesFrom: ['Budew'],
    evolvesTo: ['Roserade']
  },
  {
    id: 316, name: 'Gulpin', generation: 3,
    evolvesTo: ['Swalot']
  },
  {
    id: 317, name: 'Swalot', generation: 3,
    evolvesFrom: ['Gulpin']
  },
  {
    id: 318, name: 'Carvanha', generation: 3,
    evolvesTo: ['Sharpedo']
  },
  {
    id: 319, name: 'Sharpedo', generation: 3,
    evolvesFrom: ['Carvanha']
  },
  {
    id: 320, name: 'Wailmer', generation: 3,
    evolvesTo: ['Wailord']
  },
  {
    id: 321, name: 'Wailord', generation: 3, size: 250,
    evolvesFrom: ['Wailmer']
  },
  {
    id: 322, name: 'Numel', generation: 3,
    evolvesTo: ['Camerupt']
  },
  {
    id: 323, name: 'Camerupt', generation: 3,
    evolvesFrom: ['Numel']
  },
  { id: 324, name: 'Torkoal', generation: 3 },
  {
    id: 325, name: 'Spoink', generation: 3,
    evolvesTo: ['Grumpig']
  },
  {
    id: 326, name: 'Grumpig', generation: 3,
    evolvesFrom: ['Spoink']
  },
  { id: 327, name: 'Spinda', generation: 3 },
  {
    id: 328, name: 'Trapinch', generation: 3,
    evolvesTo: ['Vibrava']
  },
  {
    id: 329, name: 'Vibrava', generation: 3,
    evolvesFrom: ['Trapinch'],
    evolvesTo: ['Flygon']
  },
  {
    id: 330, name: 'Flygon', generation: 3,
    evolvesFrom: ['Vibrava']
  },
  {
    id: 331, name: 'Cacnea', generation: 3,
    evolvesTo: ['Cacturne']
  },
  {
    id: 332, name: 'Cacturne', generation: 3,
    evolvesFrom: ['Cacnea']
  },
  {
    id: 333, name: 'Swablu', generation: 3,
    evolvesTo: ['Altaria']
  },
  {
    id: 334, name: 'Altaria', generation: 3,
    evolvesFrom: ['Swablu']
  },
  { id: 335, name: 'Zangoose', generation: 3 },
  { id: 336, name: 'Seviper', generation: 3 },
  { id: 337, name: 'Lunatone', generation: 3 },
  { id: 338, name: 'Solrock', generation: 3 },
  {
    id: 339, name: 'Barboach', generation: 3,
    evolvesTo: ['Whiscash']
  },
  {
    id: 340, name: 'Whiscash', generation: 3,
    evolvesFrom: ['Barboach']
  },
  {
    id: 341, name: 'Corphish', generation: 3,
    evolvesTo: ['Crawdaunt']
  },
  {
    id: 342, name: 'Crawdaunt', generation: 3,
    evolvesFrom: ['Corphish']
  },
  {
    id: 343, name: 'Baltoy', generation: 3,
    evolvesTo: ['Claydol']
  },
  {
    id: 344, name: 'Claydol', generation: 3,
    evolvesFrom: ['Baltoy']
  },
  {
    id: 345, name: 'Lileep', generation: 3,
    evolvesTo: ['Cradily']
  },
  {
    id: 346, name: 'Cradily', generation: 3,
    evolvesFrom: ['Lileep']
  },
  {
    id: 347, name: 'Anorith', generation: 3,
    evolvesTo: ['Armaldo']
  },
  {
    id: 348, name: 'Armaldo', generation: 3,
    evolvesFrom: ['Anorith']
  },
  {
    id: 349, name: 'Feebas', generation: 3,
    evolvesTo: ['Milotic']
  },
  {
    id: 350, name: 'Milotic', generation: 3,
    evolvesFrom: ['Feebas']
  },
  { id: 351, name: 'Castform', generation: 3 },
  { id: 352, name: 'Kecleon', generation: 3 },
  {
    id: 353, name: 'Shuppet', generation: 3,
    evolvesTo: ['Banette']
  },
  {
    id: 354, name: 'Banette', generation: 3,
    evolvesFrom: ['Shuppet']
  },
  {
    id: 355, name: 'Duskull', generation: 3,
    evolvesTo: ['Dusclops']
  },
  {
    id: 356, name: 'Dusclops', generation: 3,
    evolvesFrom: ['Duskull'],
    evolvesTo: ['Dusknoir']
  },
  { id: 357, name: 'Tropius', generation: 3 },
  {
    id: 358, name: 'Chimecho', generation: 3,
    evolvesFrom: ['Chingling']
  },
  { id: 359, name: 'Absol', generation: 3 },
  {
    id: 360, name: 'Wynaut', generation: 3,
    evolvesTo: ['Wobbuffet']
  },
  {
    id: 361, name: 'Snorunt', generation: 3,
    evolvesTo: ['Glalie']
  },
  {
    id: 362, name: 'Glalie', generation: 3,
    evolvesFrom: ['Snorunt'],
    evolvesTo: ['Froslass']
  },
  {
    id: 363, name: 'Spheal', generation: 3,
    evolvesTo: ['Sealeo']
  },
  {
    id: 364, name: 'Sealeo', generation: 3,
    evolvesFrom: ['Spheal'],
    evolvesTo: ['Walrein']
  },
  {
    id: 365, name: 'Walrein', generation: 3,
    evolvesFrom: ['Sealeo']
  },
  {
    id: 366, name: 'Clamperl', generation: 3,
    evolvesTo: ['Huntail']
  },
  {
    id: 367, name: 'Huntail', generation: 3,
    evolvesFrom: ['Clamperl'],
    evolvesTo: ['Gorebyss']
  },
  {
    id: 368, name: 'Gorebyss', generation: 3,
    evolvesFrom: ['Huntail']
  },
  { id: 369, name: 'Relicanth', generation: 3 },
  { id: 370, name: 'Luvdisc', generation: 3 },
  {
    id: 371, name: 'Bagon', generation: 3,
    evolvesTo: ['Shelgon']
  },
  {
    id: 372, name: 'Shelgon', generation: 3,
    evolvesFrom: ['Bagon'],
    evolvesTo: ['Salamence']
  },
  {
    id: 373, name: 'Salamence', generation: 3,
    evolvesFrom: ['Shelgon']
  },
  {
    id: 374, name: 'Beldum', generation: 3,
    evolvesTo: ['Metang']
  },
  {
    id: 375, name: 'Metang', generation: 3,
    evolvesFrom: ['Beldum'],
    evolvesTo: ['Metagross']
  },
  {
    id: 376, name: 'Metagross', generation: 3,
    evolvesFrom: ['Metang']
  },
  { id: 377, name: 'Regirock', generation: 3 },
  { id: 378, name: 'Regice', generation: 3 },
  { id: 379, name: 'Registeel', generation: 3 },
  { id: 380, name: 'Latias', generation: 3 },
  { id: 381, name: 'Latios', generation: 3 },
  { id: 382, name: 'Kyogre', generation: 3 },
  { id: 383, name: 'Groudon', generation: 3 },
  { id: 384, name: 'Rayquaza', generation: 3 },
  { id: 385, name: 'Jirachi', generation: 3 },
  { id: 386, name: 'Deoxys', generation: 3 },
  {
    id: 387, name: 'Turtwig', generation: 4,
    evolvesTo: ['Grotle']
  },
  {
    id: 388, name: 'Grotle', generation: 4,
    evolvesFrom: ['Turtwig'],
    evolvesTo: ['Torterra']
  },
  {
    id: 389, name: 'Torterra', generation: 4,
    evolvesFrom: ['Grotle']
  },
  {
    id: 390, name: 'Chimchar', generation: 4,
    evolvesTo: ['Monferno']
  },
  {
    id: 391, name: 'Monferno', generation: 4,
    evolvesFrom: ['Chimchar'],
    evolvesTo: ['Infernape']
  },
  {
    id: 392, name: 'Infernape', generation: 4,
    evolvesFrom: ['Monferno']
  },
  {
    id: 393, name: 'Piplup', generation: 4,
    evolvesTo: ['Prinplup']
  },
  {
    id: 394, name: 'Prinplup', generation: 4,
    evolvesFrom: ['Piplup'],
    evolvesTo: ['Empoleon']
  },
  {
    id: 395, name: 'Empoleon', generation: 4,
    evolvesFrom: ['Prinplup']
  },
  {
    id: 396, name: 'Starly', generation: 4,
    evolvesTo: ['Staravia']
  },
  {
    id: 397, name: 'Staravia', generation: 4,
    evolvesFrom: ['Starly'],
    evolvesTo: ['Staraptor']
  },
  {
    id: 398, name: 'Staraptor', generation: 4,
    evolvesFrom: ['Staravia']
  },
  {
    id: 399, name: 'Bidoof', generation: 4,
    evolvesTo: ['Bibarel']
  },
  {
    id: 400, name: 'Bibarel', generation: 4,
    evolvesFrom: ['Bidoof']
  },
  {
    id: 401, name: 'Kricketot', generation: 4,
    evolvesTo: ['Kricketune']
  },
  {
    id: 402, name: 'Kricketune', generation: 4,
    evolvesFrom: ['Kricketot']
  },
  {
    id: 403, name: 'Shinx', generation: 4,
    evolvesTo: ['Luxio']
  },
  {
    id: 404, name: 'Luxio', generation: 4,
    evolvesFrom: ['Shinx'],
    evolvesTo: ['Luxray']
  },
  {
    id: 405, name: 'Luxray', generation: 4,
    evolvesFrom: ['Luxio']
  },
  {
    id: 406, name: 'Budew', generation: 4,
    evolvesTo: ['Roselia']
  },
  {
    id: 407, name: 'Roserade', generation: 4,
    evolvesFrom: ['Roselia']
  },
  {
    id: 408, name: 'Cranidos', generation: 4,
    evolvesTo: ['Rampardos']
  },
  {
    id: 409, name: 'Rampardos', generation: 4,
    evolvesFrom: ['Cranidos']
  },
  {
    id: 410, name: 'Shieldon', generation: 4,
    evolvesTo: ['Bastiodon']
  },
  {
    id: 411, name: 'Bastiodon', generation: 4,
    evolvesFrom: ['Shieldon']
  },
  {
    id: 412, name: 'Burmy', generation: 4,
    evolvesTo: ['Wormadam']
  },
  {
    id: 413, name: 'Wormadam', generation: 4,
    evolvesFrom: ['Burmy'],
    evolvesTo: ['Mothim']
  },
  {
    id: 414, name: 'Mothim', generation: 4,
    evolvesFrom: ['Wormadam']
  },
  {
    id: 415, name: 'Combee', generation: 4,
    evolvesTo: ['Vespiquen']
  },
  {
    id: 416, name: 'Vespiquen', generation: 4,
    evolvesFrom: ['Combee']
  },
  { id: 417, name: 'Pachirisu', generation: 4 },
  {
    id: 418, name: 'Buizel', generation: 4,
    evolvesTo: ['Floatzel']
  },
  {
    id: 419, name: 'Floatzel', generation: 4,
    evolvesFrom: ['Buizel']
  },
  {
    id: 420, name: 'Cherubi', generation: 4,
    evolvesTo: ['Cherrim']
  },
  {
    id: 421, name: 'Cherrim', generation: 4,
    evolvesFrom: ['Cherubi']
  },
  {
    id: 422, name: 'Shellos', generation: 4,
    evolvesTo: ['Gastrodon']
  },
  {
    id: 423, name: 'Gastrodon', generation: 4,
    evolvesFrom: ['Shellos']
  },
  {
    id: 424, name: 'Ambipom', generation: 4,
    evolvesFrom: ['Aipom']
  },
  {
    id: 425, name: 'Drifloon', generation: 4,
    evolvesTo: ['Drifblim']
  },
  {
    id: 426, name: 'Drifblim', generation: 4,
    evolvesFrom: ['Drifloon']
  },
  {
    id: 427, name: 'Buneary', generation: 4,
    evolvesTo: ['Lopunny']
  },
  {
    id: 428, name: 'Lopunny', generation: 4,
    evolvesFrom: ['Buneary']
  },
  {
    id: 429, name: 'Mismagius', generation: 4,
    evolvesFrom: ['Misdreavus']
  },
  {
    id: 430, name: 'Honchkrow', generation: 4,
    evolvesFrom: ['Murkrow']
  },
  {
    id: 431, name: 'Glameow', generation: 4,
    evolvesTo: ['Purugly']
  },
  {
    id: 432, name: 'Purugly', generation: 4,
    evolvesFrom: ['Glameow']
  },
  {
    id: 433, name: 'Chingling', generation: 4,
    evolvesTo: ['Chimecho']
  },
  {
    id: 434, name: 'Stunky', generation: 4,
    evolvesTo: ['Skuntank']
  },
  {
    id: 435, name: 'Skuntank', generation: 4,
    evolvesFrom: ['Stunky']
  },
  {
    id: 436, name: 'Bronzor', generation: 4,
    evolvesTo: ['Bronzong']
  },
  {
    id: 437, name: 'Bronzong', generation: 4,
    evolvesFrom: ['Bronzor']
  },
  {
    id: 438, name: 'Bonsly', generation: 4,
    evolvesTo: ['Sudowoodo']
  },
  {
    id: 439, name: 'Mime Jr.', generation: 4, image: 'mimejr',
    evolvesTo: ['Mr. Mime']
  },
  {
    id: 440, name: 'Happiny', generation: 4,
    evolvesTo: ['Chansey']
  },
  { id: 441, name: 'Chatot', generation: 4 },
  { id: 442, name: 'Spiritomb', generation: 4 },
  {
    id: 443, name: 'Gible', generation: 4,
    evolvesTo: ['Gabite']
  },
  {
    id: 444, name: 'Gabite', generation: 4,
    evolvesFrom: ['Gible'],
    evolvesTo: ['Garchomp']
  },
  {
    id: 445, name: 'Garchomp', generation: 4,
    evolvesFrom: ['Gabite']
  },
  {
    id: 446, name: 'Munchlax', generation: 4,
    evolvesTo: ['Snorlax']
  },
  {
    id: 447, name: 'Riolu', generation: 4,
    evolvesTo: ['Lucario']
  },
  {
    id: 448, name: 'Lucario', generation: 4,
    evolvesFrom: ['Riolu']
  },
  {
    id: 449, name: 'Hippopotas', generation: 4,
    evolvesTo: ['Hippowdon']
  },
  {
    id: 450, name: 'Hippowdon', generation: 4,
    evolvesFrom: ['Hippopotas']
  },
  {
    id: 451, name: 'Skorupi', generation: 4,
    evolvesTo: ['Drapion']
  },
  {
    id: 452, name: 'Drapion', generation: 4,
    evolvesFrom: ['Skorupi']
  },
  {
    id: 453, name: 'Croagunk', generation: 4,
    evolvesTo: ['Toxicroak']
  },
  {
    id: 454, name: 'Toxicroak', generation: 4,
    evolvesFrom: ['Croagunk']
  },
  { id: 455, name: 'Carnivine', generation: 4 },
  {
    id: 456, name: 'Finneon', generation: 4,
    evolvesTo: ['Lumineon']
  },
  {
    id: 457, name: 'Lumineon', generation: 4,
    evolvesFrom: ['Finneon']
  },
  {
    id: 458, name: 'Mantyke', generation: 4,
    evolvesTo: ['Mantine']
  },
  {
    id: 459, name: 'Snover', generation: 4,
    evolvesTo: ['Abomasnow']
  },
  {
    id: 460, name: 'Abomasnow', generation: 4,
    evolvesFrom: ['Snover']
  },
  {
    id: 461, name: 'Weavile', generation: 4,
    evolvesFrom: ['Sneasel'],
    evolvesTo: ['Sneasler']
  },
  {
    id: 462, name: 'Magnezone', generation: 4,
    evolvesFrom: ['Magneton']
  },
  {
    id: 463, name: 'Lickilicky', generation: 4,
    evolvesFrom: ['Lickitung']
  },
  {
    id: 464, name: 'Rhyperior', generation: 4,
    evolvesFrom: ['Rhydon']
  },
  {
    id: 465, name: 'Tangrowth', generation: 4,
    evolvesFrom: ['Tangela']
  },
  {
    id: 466, name: 'Electivire', generation: 4,
    evolvesFrom: ['Electabuzz']
  },
  {
    id: 467, name: 'Magmortar', generation: 4,
    evolvesFrom: ['Magmar']
  },
  {
    id: 468, name: 'Togekiss', generation: 4,
    evolvesFrom: ['Togetic']
  },
  {
    id: 469, name: 'Yanmega', generation: 4,
    evolvesFrom: ['Yanma']
  },
  {
    id: 470, name: 'Leafeon', generation: 4,
    evolvesFrom: ['Eevee']
  },
  {
    id: 471, name: 'Glaceon', generation: 4,
    evolvesFrom: ['Eevee']
  },
  {
    id: 472, name: 'Gliscor', generation: 4,
    evolvesFrom: ['Gligar']
  },
  {
    id: 473, name: 'Mamoswine', generation: 4,
    evolvesFrom: ['Piloswine']
  },
  {
    id: 474, name: 'Porygon-Z', generation: 4, image: 'porygonz',
    evolvesFrom: ['Porygon2']
  },
  {
    id: 475, name: 'Gallade', generation: 4,
    evolvesFrom: ['Kirlia']
  },
  {
    id: 476, name: 'Probopass', generation: 4,
    evolvesFrom: ['Nosepass']
  },
  {
    id: 477, name: 'Dusknoir', generation: 4,
    evolvesFrom: ['Dusclops']
  },
  {
    id: 478, name: 'Froslass', generation: 4,
    evolvesFrom: ['Glalie']
  },
  { id: 479, name: 'Rotom', generation: 4 },
  { id: 480, name: 'Uxie', generation: 4 },
  { id: 481, name: 'Mesprit', generation: 4 },
  { id: 482, name: 'Azelf', generation: 4 },
  { id: 483, name: 'Dialga', generation: 4 },
  { id: 484, name: 'Palkia', generation: 4 },
  { id: 485, name: 'Heatran', generation: 4 },
  { id: 486, name: 'Regigigas', generation: 4 },
  { id: 487, name: 'Giratina', generation: 4 },
  { id: 488, name: 'Cresselia', generation: 4 },
  { id: 489, name: 'Phione', generation: 4 },
  { id: 490, name: 'Manaphy', generation: 4 },
  { id: 491, name: 'Darkrai', generation: 4 },
  { id: 492, name: 'Shaymin', generation: 4 },
  { id: 493, name: 'Arceus', generation: 4 },
  { id: 494, name: 'Victini', generation: 5 },
  {
    id: 495, name: 'Snivy', generation: 5,
    evolvesTo: ['Servine']
  },
  {
    id: 496, name: 'Servine', generation: 5,
    evolvesFrom: ['Snivy'],
    evolvesTo: ['Serperior']
  },
  {
    id: 497, name: 'Serperior', generation: 5,
    evolvesFrom: ['Servine']
  },
  {
    id: 498, name: 'Tepig', generation: 5,
    evolvesTo: ['Pignite']
  },
  {
    id: 499, name: 'Pignite', generation: 5,
    evolvesFrom: ['Tepig'],
    evolvesTo: ['Emboar']
  },
  {
    id: 500, name: 'Emboar', generation: 5,
    evolvesFrom: ['Pignite']
  },
  {
    id: 501, name: 'Oshawott', generation: 5,
    evolvesTo: ['Dewott']
  },
  {
    id: 502, name: 'Dewott', generation: 5,
    evolvesFrom: ['Oshawott'],
    evolvesTo: ['Samurott']
  },
  {
    id: 503, name: 'Samurott', generation: 5,
    evolvesFrom: ['Dewott']
  },
  {
    id: 504, name: 'Patrat', generation: 5,
    evolvesTo: ['Watchog']
  },
  {
    id: 505, name: 'Watchog', generation: 5,
    evolvesFrom: ['Patrat']
  },
  {
    id: 506, name: 'Lillipup', generation: 5,
    evolvesTo: ['Herdier']
  },
  {
    id: 507, name: 'Herdier', generation: 5,
    evolvesFrom: ['Lillipup'],
    evolvesTo: ['Stoutland']
  },
  {
    id: 508, name: 'Stoutland', generation: 5,
    evolvesFrom: ['Herdier']
  },
  {
    id: 509, name: 'Purrloin', generation: 5,
    evolvesTo: ['Liepard']
  },
  {
    id: 510, name: 'Liepard', generation: 5,
    evolvesFrom: ['Purrloin']
  },
  {
    id: 511, name: 'Pansage', generation: 5,
    evolvesTo: ['Simisage']
  },
  {
    id: 512, name: 'Simisage', generation: 5,
    evolvesFrom: ['Pansage']
  },
  {
    id: 513, name: 'Pansear', generation: 5,
    evolvesTo: ['Simisear']
  },
  {
    id: 514, name: 'Simisear', generation: 5,
    evolvesFrom: ['Pansear']
  },
  {
    id: 515, name: 'Panpour', generation: 5,
    evolvesTo: ['Simipour']
  },
  {
    id: 516, name: 'Simipour', generation: 5,
    evolvesFrom: ['Panpour']
  },
  {
    id: 517, name: 'Munna', generation: 5,
    evolvesTo: ['Musharna']
  },
  {
    id: 518, name: 'Musharna', generation: 5,
    evolvesFrom: ['Munna']
  },
  {
    id: 519, name: 'Pidove', generation: 5,
    evolvesTo: ['Tranquill']
  },
  {
    id: 520, name: 'Tranquill', generation: 5,
    evolvesFrom: ['Pidove'],
    evolvesTo: ['Unfezant']
  },
  {
    id: 521, name: 'Unfezant', generation: 5,
    evolvesFrom: ['Tranquill']
  },
  {
    id: 522, name: 'Blitzle', generation: 5,
    evolvesTo: ['Zebstrika']
  },
  {
    id: 523, name: 'Zebstrika', generation: 5,
    evolvesFrom: ['Blitzle']
  },
  {
    id: 524, name: 'Roggenrola', generation: 5,
    evolvesTo: ['Boldore']
  },
  {
    id: 525, name: 'Boldore', generation: 5,
    evolvesFrom: ['Roggenrola'],
    evolvesTo: ['Gigalith']
  },
  {
    id: 526, name: 'Gigalith', generation: 5,
    evolvesFrom: ['Boldore']
  },
  {
    id: 527, name: 'Woobat', generation: 5,
    evolvesTo: ['Swoobat']
  },
  {
    id: 528, name: 'Swoobat', generation: 5,
    evolvesFrom: ['Woobat']
  },
  {
    id: 529, name: 'Drilbur', generation: 5,
    evolvesTo: ['Excadrill']
  },
  {
    id: 530, name: 'Excadrill', generation: 5,
    evolvesFrom: ['Drilbur']
  },
  { id: 531, name: 'Audino', generation: 5 },
  {
    id: 532, name: 'Timburr', generation: 5,
    evolvesTo: ['Gurdurr']
  },
  {
    id: 533, name: 'Gurdurr', generation: 5,
    evolvesFrom: ['Timburr'],
    evolvesTo: ['Conkeldurr']
  },
  {
    id: 534, name: 'Conkeldurr', generation: 5,
    evolvesFrom: ['Gurdurr']
  },
  {
    id: 535, name: 'Tympole', generation: 5,
    evolvesTo: ['Palpitoad']
  },
  {
    id: 536, name: 'Palpitoad', generation: 5,
    evolvesFrom: ['Tympole'],
    evolvesTo: ['Seismitoad']
  },
  {
    id: 537, name: 'Seismitoad', generation: 5,
    evolvesFrom: ['Palpitoad']
  },
  { id: 538, name: 'Throh', generation: 5 },
  { id: 539, name: 'Sawk', generation: 5 },
  {
    id: 540, name: 'Sewaddle', generation: 5,
    evolvesTo: ['Swadloon']
  },
  {
    id: 541, name: 'Swadloon', generation: 5,
    evolvesFrom: ['Sewaddle'],
    evolvesTo: ['Leavanny']
  },
  {
    id: 542, name: 'Leavanny', generation: 5,
    evolvesFrom: ['Swadloon']
  },
  {
    id: 543, name: 'Venipede', generation: 5,
    evolvesTo: ['Whirlipede']
  },
  {
    id: 544, name: 'Whirlipede', generation: 5,
    evolvesFrom: ['Venipede'],
    evolvesTo: ['Scolipede']
  },
  {
    id: 545, name: 'Scolipede', generation: 5,
    evolvesFrom: ['Whirlipede']
  },
  {
    id: 546, name: 'Cottonee', generation: 5,
    evolvesTo: ['Whimsicott']
  },
  {
    id: 547, name: 'Whimsicott', generation: 5,
    evolvesFrom: ['Cottonee']
  },
  {
    id: 548, name: 'Petilil', generation: 5,
    evolvesTo: ['Lilligant']
  },
  {
    id: 549, name: 'Lilligant', generation: 5,
    evolvesFrom: ['Petilil']
  },
  { id: 550, name: 'Basculin', generation: 5 },
  {
    id: 551, name: 'Sandile', generation: 5,
    evolvesTo: ['Krokorok']
  },
  {
    id: 552, name: 'Krokorok', generation: 5,
    evolvesFrom: ['Sandile'],
    evolvesTo: ['Krookodile']
  },
  {
    id: 553, name: 'Krookodile', generation: 5,
    evolvesFrom: ['Krokorok']
  },
  {
    id: 554, name: 'Darumaka', generation: 5,
    evolvesTo: ['Darmanitan']
  },
  {
    id: 555, name: 'Darmanitan', generation: 5,
    evolvesFrom: ['Darumaka']
  },
  { id: 556, name: 'Maractus', generation: 5 },
  {
    id: 557, name: 'Dwebble', generation: 5,
    evolvesTo: ['Crustle']
  },
  {
    id: 558, name: 'Crustle', generation: 5,
    evolvesFrom: ['Dwebble']
  },
  {
    id: 559, name: 'Scraggy', generation: 5,
    evolvesTo: ['Scrafty']
  },
  {
    id: 560, name: 'Scrafty', generation: 5,
    evolvesFrom: ['Scraggy']
  },
  { id: 561, name: 'Sigilyph', generation: 5 },
  {
    id: 562, name: 'Yamask', generation: 5,
    evolvesTo: ['Cofagrigus']
  },
  {
    id: 563, name: 'Cofagrigus', generation: 5,
    evolvesFrom: ['Yamask'],
    evolvesTo: ['Runerigus']
  },
  {
    id: 564, name: 'Tirtouga', generation: 5,
    evolvesTo: ['Carracosta']
  },
  {
    id: 565, name: 'Carracosta', generation: 5,
    evolvesFrom: ['Tirtouga']
  },
  {
    id: 566, name: 'Archen', generation: 5,
    evolvesTo: ['Archeops']
  },
  {
    id: 567, name: 'Archeops', generation: 5,
    evolvesFrom: ['Archen']
  },
  {
    id: 568, name: 'Trubbish', generation: 5,
    evolvesTo: ['Garbodor']
  },
  {
    id: 569, name: 'Garbodor', generation: 5,
    evolvesFrom: ['Trubbish']
  },
  {
    id: 570, name: 'Zorua', generation: 5,
    evolvesTo: ['Zoroark']
  },
  {
    id: 571, name: 'Zoroark', generation: 5,
    evolvesFrom: ['Zorua']
  },
  {
    id: 572, name: 'Minccino', generation: 5,
    evolvesTo: ['Cinccino']
  },
  {
    id: 573, name: 'Cinccino', generation: 5,
    evolvesFrom: ['Minccino']
  },
  {
    id: 574, name: 'Gothita', generation: 5,
    evolvesTo: ['Gothorita']
  },
  {
    id: 575, name: 'Gothorita', generation: 5,
    evolvesFrom: ['Gothita'],
    evolvesTo: ['Gothitelle']
  },
  {
    id: 576, name: 'Gothitelle', generation: 5,
    evolvesFrom: ['Gothorita']
  },
  {
    id: 577, name: 'Solosis', generation: 5,
    evolvesTo: ['Duosion']
  },
  {
    id: 578, name: 'Duosion', generation: 5,
    evolvesFrom: ['Solosis'],
    evolvesTo: ['Reuniclus']
  },
  {
    id: 579, name: 'Reuniclus', generation: 5,
    evolvesFrom: ['Duosion']
  },
  {
    id: 580, name: 'Ducklett', generation: 5,
    evolvesTo: ['Swanna']
  },
  {
    id: 581, name: 'Swanna', generation: 5,
    evolvesFrom: ['Ducklett']
  },
  {
    id: 582, name: 'Vanillite', generation: 5,
    evolvesTo: ['Vanillish']
  },
  {
    id: 583, name: 'Vanillish', generation: 5,
    evolvesFrom: ['Vanillite'],
    evolvesTo: ['Vanilluxe']
  },
  {
    id: 584, name: 'Vanilluxe', generation: 5,
    evolvesFrom: ['Vanillish']
  },
  {
    id: 585, name: 'Deerling', generation: 5,
    evolvesTo: ['Sawsbuck']
  },
  {
    id: 586, name: 'Sawsbuck', generation: 5,
    evolvesFrom: ['Deerling']
  },
  { id: 587, name: 'Emolga', generation: 5 },
  {
    id: 588, name: 'Karrablast', generation: 5,
    evolvesTo: ['Escavalier']
  },
  {
    id: 589, name: 'Escavalier', generation: 5,
    evolvesFrom: ['Karrablast']
  },
  {
    id: 590, name: 'Foongus', generation: 5,
    evolvesTo: ['Amoonguss']
  },
  {
    id: 591, name: 'Amoonguss', generation: 5,
    evolvesFrom: ['Foongus']
  },
  {
    id: 592, name: 'Frillish', generation: 5,
    evolvesTo: ['Jellicent']
  },
  {
    id: 593, name: 'Jellicent', generation: 5,
    evolvesFrom: ['Frillish']
  },
  { id: 594, name: 'Alomomola', generation: 5 },
  {
    id: 595, name: 'Joltik', generation: 5, size: 20,
    evolvesTo: ['Galvantula']
  },
  {
    id: 596, name: 'Galvantula', generation: 5,
    evolvesFrom: ['Joltik']
  },
  {
    id: 597, name: 'Ferroseed', generation: 5,
    evolvesTo: ['Ferrothorn']
  },
  {
    id: 598, name: 'Ferrothorn', generation: 5,
    evolvesFrom: ['Ferroseed']
  },
  {
    id: 599, name: 'Klink', generation: 5,
    evolvesTo: ['Klang']
  },
  {
    id: 600, name: 'Klang', generation: 5,
    evolvesFrom: ['Klink'],
    evolvesTo: ['Klinklang']
  },
  {
    id: 601, name: 'Klinklang', generation: 5,
    evolvesFrom: ['Klang']
  },
  {
    id: 602, name: 'Tynamo', generation: 5,
    evolvesTo: ['Eelektrik']
  },
  {
    id: 603, name: 'Eelektrik', generation: 5,
    evolvesFrom: ['Tynamo'],
    evolvesTo: ['Eelektross']
  },
  {
    id: 604, name: 'Eelektross', generation: 5,
    evolvesFrom: ['Eelektrik']
  },
  {
    id: 605, name: 'Elgyem', generation: 5,
    evolvesTo: ['Beheeyem']
  },
  {
    id: 606, name: 'Beheeyem', generation: 5,
    evolvesFrom: ['Elgyem']
  },
  {
    id: 607, name: 'Litwick', generation: 5,
    evolvesTo: ['Lampent']
  },
  {
    id: 608, name: 'Lampent', generation: 5,
    evolvesFrom: ['Litwick'],
    evolvesTo: ['Chandelure']
  },
  {
    id: 609, name: 'Chandelure', generation: 5,
    evolvesFrom: ['Lampent']
  },
  {
    id: 610, name: 'Axew', generation: 5,
    evolvesTo: ['Fraxure']
  },
  {
    id: 611, name: 'Fraxure', generation: 5,
    evolvesFrom: ['Axew'],
    evolvesTo: ['Haxorus']
  },
  {
    id: 612, name: 'Haxorus', generation: 5,
    evolvesFrom: ['Fraxure']
  },
  {
    id: 613, name: 'Cubchoo', generation: 5,
    evolvesTo: ['Beartic']
  },
  {
    id: 614, name: 'Beartic', generation: 5,
    evolvesFrom: ['Cubchoo']
  },
  { id: 615, name: 'Cryogonal', generation: 5 },
  {
    id: 616, name: 'Shelmet', generation: 5,
    evolvesTo: ['Accelgor']
  },
  {
    id: 617, name: 'Accelgor', generation: 5,
    evolvesFrom: ['Shelmet']
  },
  { id: 618, name: 'Stunfisk', generation: 5 },
  {
    id: 619, name: 'Mienfoo', generation: 5,
    evolvesTo: ['Mienshao']
  },
  {
    id: 620, name: 'Mienshao', generation: 5,
    evolvesFrom: ['Mienfoo']
  },
  { id: 621, name: 'Druddigon', generation: 5 },
  {
    id: 622, name: 'Golett', generation: 5,
    evolvesTo: ['Golurk']
  },
  {
    id: 623, name: 'Golurk', generation: 5,
    evolvesFrom: ['Golett']
  },
  {
    id: 624, name: 'Pawniard', generation: 5,
    evolvesTo: ['Bisharp']
  },
  {
    id: 625, name: 'Bisharp', generation: 5,
    evolvesFrom: ['Pawniard'],
    evolvesTo: ['Kingambit']
  },
  { id: 626, name: 'Bouffalant', generation: 5 },
  {
    id: 627, name: 'Rufflet', generation: 5,
    evolvesTo: ['Braviary']
  },
  {
    id: 628, name: 'Braviary', generation: 5,
    evolvesFrom: ['Rufflet']
  },
  {
    id: 629, name: 'Vullaby', generation: 5,
    evolvesTo: ['Mandibuzz']
  },
  {
    id: 630, name: 'Mandibuzz', generation: 5,
    evolvesFrom: ['Vullaby']
  },
  { id: 631, name: 'Heatmor', generation: 5 },
  { id: 632, name: 'Durant', generation: 5 },
  {
    id: 633, name: 'Deino', generation: 5,
    evolvesTo: ['Zweilous']
  },
  {
    id: 634, name: 'Zweilous', generation: 5,
    evolvesFrom: ['Deino'],
    evolvesTo: ['Hydreigon']
  },
  {
    id: 635, name: 'Hydreigon', generation: 5,
    evolvesFrom: ['Zweilous']
  },
  {
    id: 636, name: 'Larvesta', generation: 5,
    evolvesTo: ['Volcarona']
  },
  {
    id: 637, name: 'Volcarona', generation: 5,
    evolvesFrom: ['Larvesta']
  },
  { id: 638, name: 'Cobalion', generation: 5 },
  { id: 639, name: 'Terrakion', generation: 5 },
  { id: 640, name: 'Virizion', generation: 5 },
  { id: 641, name: 'Tornadus', generation: 5 },
  { id: 642, name: 'Thundurus', generation: 5 },
  { id: 643, name: 'Reshiram', generation: 5 },
  { id: 644, name: 'Zekrom', generation: 5 },
  { id: 645, name: 'Landorus', generation: 5 },
  { id: 646, name: 'Kyurem', generation: 5 },
  { id: 647, name: 'Keldeo', generation: 5 },
  { id: 648, name: 'Meloetta', generation: 5 },
  { id: 649, name: 'Genesect', generation: 5 },
  {
    id: 650, name: 'Chespin', generation: 6,
    evolvesTo: ['Quilladin']
  },
  {
    id: 651, name: 'Quilladin', generation: 6,
    evolvesFrom: ['Chespin'],
    evolvesTo: ['Chesnaught']
  },
  {
    id: 652, name: 'Chesnaught', generation: 6,
    evolvesFrom: ['Quilladin']
  },
  {
    id: 653, name: 'Fennekin', generation: 6,
    evolvesTo: ['Braixen']
  },
  {
    id: 654, name: 'Braixen', generation: 6,
    evolvesFrom: ['Fennekin'],
    evolvesTo: ['Delphox']
  },
  {
    id: 655, name: 'Delphox', generation: 6,
    evolvesFrom: ['Braixen']
  },
  {
    id: 656, name: 'Froakie', generation: 6,
    evolvesTo: ['Frogadier']
  },
  {
    id: 657, name: 'Frogadier', generation: 6,
    evolvesFrom: ['Froakie'],
    evolvesTo: ['Greninja']
  },
  {
    id: 658, name: 'Greninja', generation: 6,
    evolvesFrom: ['Frogadier']
  },
  {
    id: 659, name: 'Bunnelby', generation: 6,
    evolvesTo: ['Diggersby']
  },
  {
    id: 660, name: 'Diggersby', generation: 6,
    evolvesFrom: ['Bunnelby']
  },
  {
    id: 661, name: 'Fletchling', generation: 6,
    evolvesTo: ['Fletchinder']
  },
  {
    id: 662, name: 'Fletchinder', generation: 6,
    evolvesFrom: ['Fletchling'],
    evolvesTo: ['Talonflame']
  },
  {
    id: 663, name: 'Talonflame', generation: 6,
    evolvesFrom: ['Fletchinder']
  },
  {
    id: 664, name: 'Scatterbug', generation: 6,
    evolvesTo: ['Spewpa']
  },
  {
    id: 665, name: 'Spewpa', generation: 6,
    evolvesFrom: ['Scatterbug'],
    evolvesTo: ['Vivillon']
  },
  {
    id: 666, name: 'Vivillon', generation: 6,
    evolvesFrom: ['Spewpa']
  },
  {
    id: 667, name: 'Litleo', generation: 6,
    evolvesTo: ['Pyroar']
  },
  {
    id: 668, name: 'Pyroar', generation: 6,
    evolvesFrom: ['Litleo']
  },
  {
    id: 669, name: 'Flabebe', generation: 6, size: 40,
    evolvesTo: ['Floette']
  },
  {
    id: 670, name: 'Floette', generation: 6,
    evolvesFrom: ['Flabebe'],
    evolvesTo: ['Florges']
  },
  {
    id: 671, name: 'Florges', generation: 6,
    evolvesFrom: ['Floette']
  },
  {
    id: 672, name: 'Skiddo', generation: 6,
    evolvesTo: ['Gogoat']
  },
  {
    id: 673, name: 'Gogoat', generation: 6,
    evolvesFrom: ['Skiddo']
  },
  {
    id: 674, name: 'Pancham', generation: 6,
    evolvesTo: ['Pangoro']
  },
  {
    id: 675, name: 'Pangoro', generation: 6,
    evolvesFrom: ['Pancham']
  },
  { id: 676, name: 'Furfrou', generation: 6 },
  {
    id: 677, name: 'Espurr', generation: 6,
    evolvesTo: ['Meowstic']
  },
  {
    id: 678, name: 'Meowstic', generation: 6,
    evolvesFrom: ['Espurr']
  },
  {
    id: 679, name: 'Honedge', generation: 6,
    evolvesTo: ['Doublade']
  },
  {
    id: 680, name: 'Doublade', generation: 6,
    evolvesFrom: ['Honedge'],
    evolvesTo: ['Aegislash']
  },
  {
    id: 681, name: 'Aegislash', generation: 6,
    evolvesFrom: ['Doublade']
  },
  {
    id: 682, name: 'Spritzee', generation: 6,
    evolvesTo: ['Aromatisse']
  },
  {
    id: 683, name: 'Aromatisse', generation: 6,
    evolvesFrom: ['Spritzee']
  },
  {
    id: 684, name: 'Swirlix', generation: 6,
    evolvesTo: ['Slurpuff']
  },
  {
    id: 685, name: 'Slurpuff', generation: 6,
    evolvesFrom: ['Swirlix']
  },
  {
    id: 686, name: 'Inkay', generation: 6,
    evolvesTo: ['Malamar']
  },
  {
    id: 687, name: 'Malamar', generation: 6,
    evolvesFrom: ['Inkay']
  },
  {
    id: 688, name: 'Binacle', generation: 6,
    evolvesTo: ['Barbaracle']
  },
  {
    id: 689, name: 'Barbaracle', generation: 6,
    evolvesFrom: ['Binacle']
  },
  {
    id: 690, name: 'Skrelp', generation: 6,
    evolvesTo: ['Dragalge']
  },
  {
    id: 691, name: 'Dragalge', generation: 6,
    evolvesFrom: ['Skrelp']
  },
  {
    id: 692, name: 'Clauncher', generation: 6,
    evolvesTo: ['Clawitzer']
  },
  {
    id: 693, name: 'Clawitzer', generation: 6,
    evolvesFrom: ['Clauncher']
  },
  {
    id: 694, name: 'Helioptile', generation: 6,
    evolvesTo: ['Heliolisk']
  },
  {
    id: 695, name: 'Heliolisk', generation: 6,
    evolvesFrom: ['Helioptile']
  },
  {
    id: 696, name: 'Tyrunt', generation: 6,
    evolvesTo: ['Tyrantrum']
  },
  {
    id: 697, name: 'Tyrantrum', generation: 6,
    evolvesFrom: ['Tyrunt']
  },
  {
    id: 698, name: 'Amaura', generation: 6,
    evolvesTo: ['Aurorus']
  },
  {
    id: 699, name: 'Aurorus', generation: 6,
    evolvesFrom: ['Amaura']
  },
  {
    id: 700, name: 'Sylveon', generation: 6,
    evolvesFrom: ['Eevee']
  },
  { id: 701, name: 'Hawlucha', generation: 6 },
  { id: 702, name: 'Dedenne', generation: 6 },
  { id: 703, name: 'Carbink', generation: 6 },
  {
    id: 704, name: 'Goomy', generation: 6,
    evolvesTo: ['Sliggoo']
  },
  {
    id: 705, name: 'Sliggoo', generation: 6,
    evolvesFrom: ['Goomy'],
    evolvesTo: ['Goodra']
  },
  {
    id: 706, name: 'Goodra', generation: 6,
    evolvesFrom: ['Sliggoo']
  },
  { id: 707, name: 'Klefki', generation: 6 },
  {
    id: 708, name: 'Phantump', generation: 6,
    evolvesTo: ['Trevenant']
  },
  {
    id: 709, name: 'Trevenant', generation: 6,
    evolvesFrom: ['Phantump']
  },
  {
    id: 710, name: 'Pumpkaboo', generation: 6,
    evolvesTo: ['Gourgeist']
  },
  {
    id: 711, name: 'Gourgeist', generation: 6,
    evolvesFrom: ['Pumpkaboo']
  },
  {
    id: 712, name: 'Bergmite', generation: 6,
    evolvesTo: ['Avalugg']
  },
  {
    id: 713, name: 'Avalugg', generation: 6,
    evolvesFrom: ['Bergmite']
  },
  {
    id: 714, name: 'Noibat', generation: 6,
    evolvesTo: ['Noivern']
  },
  {
    id: 715, name: 'Noivern', generation: 6,
    evolvesFrom: ['Noibat']
  },
  { id: 716, name: 'Xerneas', generation: 6 },
  { id: 717, name: 'Yveltal', generation: 6 },
  {
    id: 718, name: 'Zygarde', generation: 6, size: 100, otherForms:
      [
        { id: 718, name: '10% Zygarde', generation: 6, image: '10-zygarde', size: 59, offset: { x: -20, y: 18, z: 1 } }
      ]
  },
  { id: 719, name: 'Diancie', generation: 6 },
  { id: 720, name: 'Hoopa', generation: 6 },
  { id: 721, name: 'Volcanion', generation: 6 },
  {
    id: 722, name: 'Rowlet', generation: 7,
    evolvesTo: ['Dartrix']
  },
  {
    id: 723, name: 'Dartrix', generation: 7,
    evolvesFrom: ['Rowlet'],
    evolvesTo: ['Decidueye']
  },
  {
    id: 724, name: 'Decidueye', generation: 7,
    evolvesFrom: ['Dartrix']
  },
  {
    id: 725, name: 'Litten', generation: 7,
    evolvesTo: ['Torracat']
  },
  {
    id: 726, name: 'Torracat', generation: 7,
    evolvesFrom: ['Litten'],
    evolvesTo: ['Incineroar']
  },
  {
    id: 727, name: 'Incineroar', generation: 7,
    evolvesFrom: ['Torracat']
  },
  {
    id: 728, name: 'Popplio', generation: 7,
    evolvesTo: ['Brionne']
  },
  {
    id: 729, name: 'Brionne', generation: 7,
    evolvesFrom: ['Popplio'],
    evolvesTo: ['Primarina']
  },
  {
    id: 730, name: 'Primarina', generation: 7,
    evolvesFrom: ['Brionne']
  },
  {
    id: 731, name: 'Pikipek', generation: 7,
    evolvesTo: ['Trumbeak']
  },
  {
    id: 732, name: 'Trumbeak', generation: 7,
    evolvesFrom: ['Pikipek'],
    evolvesTo: ['Toucannon']
  },
  {
    id: 733, name: 'Toucannon', generation: 7,
    evolvesFrom: ['Trumbeak']
  },
  {
    id: 734, name: 'Yungoos', generation: 7,
    evolvesTo: ['Gumshoos']
  },
  {
    id: 735, name: 'Gumshoos', generation: 7,
    evolvesFrom: ['Yungoos']
  },
  {
    id: 736, name: 'Grubbin', generation: 7,
    evolvesTo: ['Charjabug']
  },
  {
    id: 737, name: 'Charjabug', generation: 7,
    evolvesFrom: ['Grubbin'],
    evolvesTo: ['Vikavolt']
  },
  {
    id: 738, name: 'Vikavolt', generation: 7,
    evolvesFrom: ['Charjabug']
  },
  {
    id: 739, name: 'Crabrawler', generation: 7,
    evolvesTo: ['Crabominable']
  },
  {
    id: 740, name: 'Crabominable', generation: 7,
    evolvesFrom: ['Crabrawler']
  },
  { id: 741, name: 'Oricorio', generation: 7 },
  {
    id: 742, name: 'Cutiefly', generation: 7, size: 25,
    evolvesTo: ['Ribombee']
  },
  {
    id: 743, name: 'Ribombee', generation: 7,
    evolvesFrom: ['Cutiefly']
  },
  {
    id: 744, name: 'Rockruff', generation: 7,
    evolvesTo: ['Lycanroc']
  },
  {
    id: 745, name: 'Lycanroc', generation: 7,
    evolvesFrom: ['Rockruff']
  },
  { id: 746, name: 'Wishiwashi', generation: 7 },
  {
    id: 747, name: 'Mareanie', generation: 7,
    evolvesTo: ['Toxapex']
  },
  {
    id: 748, name: 'Toxapex', generation: 7,
    evolvesFrom: ['Mareanie']
  },
  {
    id: 749, name: 'Mudbray', generation: 7,
    evolvesTo: ['Mudsdale']
  },
  {
    id: 750, name: 'Mudsdale', generation: 7,
    evolvesFrom: ['Mudbray']
  },
  {
    id: 751, name: 'Dewpider', generation: 7,
    evolvesTo: ['Araquanid']
  },
  {
    id: 752, name: 'Araquanid', generation: 7,
    evolvesFrom: ['Dewpider']
  },
  {
    id: 753, name: 'Fomantis', generation: 7,
    evolvesTo: ['Lurantis']
  },
  {
    id: 754, name: 'Lurantis', generation: 7,
    evolvesFrom: ['Fomantis']
  },
  {
    id: 755, name: 'Morelull', generation: 7,
    evolvesTo: ['Shiinotic']
  },
  {
    id: 756, name: 'Shiinotic', generation: 7,
    evolvesFrom: ['Morelull']
  },
  {
    id: 757, name: 'Salandit', generation: 7,
    evolvesTo: ['Salazzle']
  },
  {
    id: 758, name: 'Salazzle', generation: 7,
    evolvesFrom: ['Salandit']
  },
  {
    id: 759, name: 'Stufful', generation: 7,
    evolvesTo: ['Bewear']
  },
  {
    id: 760, name: 'Bewear', generation: 7,
    evolvesFrom: ['Stufful']
  },
  {
    id: 761, name: 'Bounsweet', generation: 7,
    evolvesTo: ['Steenee']
  },
  {
    id: 762, name: 'Steenee', generation: 7,
    evolvesFrom: ['Bounsweet'],
    evolvesTo: ['Tsareena']
  },
  {
    id: 763, name: 'Tsareena', generation: 7,
    evolvesFrom: ['Steenee']
  },
  { id: 764, name: 'Comfey', generation: 7, size: 40 },
  { id: 765, name: 'Oranguru', generation: 7 },
  { id: 766, name: 'Passimian', generation: 7 },
  {
    id: 767, name: 'Wimpod', generation: 7,
    evolvesTo: ['Golisopod']
  },
  {
    id: 768, name: 'Golisopod', generation: 7,
    evolvesFrom: ['Wimpod']
  },
  {
    id: 769, name: 'Sandygast', generation: 7,
    evolvesTo: ['Palossand']
  },
  {
    id: 770, name: 'Palossand', generation: 7,
    evolvesFrom: ['Sandygast']
  },
  { id: 771, name: 'Pyukumuku', generation: 7 },
  {
    id: 772, name: 'Type: Null', generation: 7, image: 'typenull',
    evolvesTo: ['Silvally']
  },
  {
    id: 773, name: 'Silvally', generation: 7,
    evolvesFrom: ['Type: Null']
  },
  { id: 774, name: 'Minior', generation: 7 },
  { id: 775, name: 'Komala', generation: 7 },
  { id: 776, name: 'Turtonator', generation: 7 },
  { id: 777, name: 'Togedemaru', generation: 7 },
  { id: 778, name: 'Mimikyu', generation: 7 },
  { id: 779, name: 'Bruxish', generation: 7 },
  { id: 780, name: 'Drampa', generation: 7 },
  { id: 781, name: 'Dhelmise', generation: 7 },
  {
    id: 782, name: 'Jangmo-o', generation: 7, image: 'jangmoo',
    evolvesTo: ['Hakamo-o']
  },
  {
    id: 783, name: 'Hakamo-o', generation: 7, image: 'hakamoo',
    evolvesFrom: ['Jangmo-o'],
    evolvesTo: ['Kommo-o']
  },
  {
    id: 784, name: 'Kommo-o', generation: 7, image: 'kommoo',
    evolvesFrom: ['Hakamo-o']
  },
  { id: 785, name: 'Tapu Koko', generation: 7, image: 'tapukoko' },
  { id: 786, name: 'Tapu Lele', generation: 7, image: 'tapulele' },
  { id: 787, name: 'Tapu Bulu', generation: 7, image: 'tapubulu' },
  { id: 788, name: 'Tapu Fini', generation: 7, image: 'tapufini' },
  {
    id: 789, name: 'Cosmog', generation: 7,
    evolvesTo: ['Cosmoem']
  },
  {
    id: 790, name: 'Cosmoem', generation: 7, size: 35,
    evolvesFrom: ['Cosmog'],
    evolvesTo: ['Solgaleo']
  },
  {
    id: 791, name: 'Solgaleo', generation: 7,
    evolvesFrom: ['Cosmoem'],
    evolvesTo: ['Lunala']
  },
  {
    id: 792, name: 'Lunala', generation: 7,
    evolvesFrom: ['Solgaleo']
  },
  { id: 793, name: 'Nihilego', generation: 7 },
  { id: 794, name: 'Buzzwole', generation: 7 },
  { id: 795, name: 'Pheromosa', generation: 7 },
  { id: 796, name: 'Xurkitree', generation: 7 },
  { id: 797, name: 'Celesteela', generation: 7 },
  { id: 798, name: 'Kartana', generation: 7 },
  { id: 799, name: 'Guzzlord', generation: 7 },
  { id: 800, name: 'Necrozma', generation: 7 },
  { id: 801, name: 'Magearna', generation: 7 },
  { id: 802, name: 'Marshadow', generation: 7 },
  {
    id: 803, name: 'Poipole', generation: 7,
    evolvesTo: ['Naganadel']
  },
  {
    id: 804, name: 'Naganadel', generation: 7,
    evolvesFrom: ['Poipole']
  },
  { id: 805, name: 'Stakataka', generation: 7 },
  { id: 806, name: 'Blacephalon', generation: 7 },
  { id: 807, name: 'Zeraora', generation: 7 },
  {
    id: 808, name: 'Meltan', generation: 7,
    evolvesTo: ['Melmetal']
  },
  {
    id: 809, name: 'Melmetal', generation: 7,
    evolvesFrom: ['Meltan']
  },
  {
    id: 810, name: 'Grookey', generation: 8,
    evolvesTo: ['Thwackey']
  },
  {
    id: 811, name: 'Thwackey', generation: 8,
    evolvesFrom: ['Grookey'],
    evolvesTo: ['Rillaboom']
  },
  {
    id: 812, name: 'Rillaboom', generation: 8,
    evolvesFrom: ['Thwackey']
  },
  {
    id: 813, name: 'Scorbunny', generation: 8,
    evolvesTo: ['Raboot']
  },
  {
    id: 814, name: 'Raboot', generation: 8,
    evolvesFrom: ['Scorbunny'],
    evolvesTo: ['Cinderace']
  },
  {
    id: 815, name: 'Cinderace', generation: 8,
    evolvesFrom: ['Raboot']
  },
  {
    id: 816, name: 'Sobble', generation: 8,
    evolvesTo: ['Drizzile']
  },
  {
    id: 817, name: 'Drizzile', generation: 8,
    evolvesFrom: ['Sobble'],
    evolvesTo: ['Inteleon']
  },
  {
    id: 818, name: 'Inteleon', generation: 8,
    evolvesFrom: ['Drizzile']
  },
  {
    id: 819, name: 'Skwovet', generation: 8,
    evolvesTo: ['Greedent']
  },
  {
    id: 820, name: 'Greedent', generation: 8,
    evolvesFrom: ['Skwovet']
  },
  {
    id: 821, name: 'Rookidee', generation: 8,
    evolvesTo: ['Corvisquire']
  },
  {
    id: 822, name: 'Corvisquire', generation: 8,
    evolvesFrom: ['Rookidee'],
    evolvesTo: ['Corviknight']
  },
  {
    id: 823, name: 'Corviknight', generation: 8,
    evolvesFrom: ['Corvisquire']
  },
  {
    id: 824, name: 'Blipbug', generation: 8,
    evolvesTo: ['Dottler']
  },
  {
    id: 825, name: 'Dottler', generation: 8,
    evolvesFrom: ['Blipbug'],
    evolvesTo: ['Orbeetle']
  },
  {
    id: 826, name: 'Orbeetle', generation: 8,
    evolvesFrom: ['Dottler']
  },
  {
    id: 827, name: 'Nickit', generation: 8,
    evolvesTo: ['Thievul']
  },
  {
    id: 828, name: 'Thievul', generation: 8,
    evolvesFrom: ['Nickit']
  },
  {
    id: 829, name: 'Gossifleur', generation: 8,
    evolvesTo: ['Eldegoss']
  },
  {
    id: 830, name: 'Eldegoss', generation: 8,
    evolvesFrom: ['Gossifleur']
  },
  {
    id: 831, name: 'Wooloo', generation: 8,
    evolvesTo: ['Dubwool']
  },
  {
    id: 832, name: 'Dubwool', generation: 8,
    evolvesFrom: ['Wooloo']
  },
  {
    id: 833, name: 'Chewtle', generation: 8,
    evolvesTo: ['Drednaw']
  },
  {
    id: 834, name: 'Drednaw', generation: 8,
    evolvesFrom: ['Chewtle']
  },
  {
    id: 835, name: 'Yamper', generation: 8,
    evolvesTo: ['Boltund']
  },
  {
    id: 836, name: 'Boltund', generation: 8,
    evolvesFrom: ['Yamper']
  },
  {
    id: 837, name: 'Rolycoly', generation: 8,
    evolvesTo: ['Carkol']
  },
  {
    id: 838, name: 'Carkol', generation: 8,
    evolvesFrom: ['Rolycoly'],
    evolvesTo: ['Coalossal']
  },
  {
    id: 839, name: 'Coalossal', generation: 8,
    evolvesFrom: ['Carkol']
  },
  {
    id: 840, name: 'Applin', generation: 8,
    evolvesTo: ['Flapple', 'Appletun', 'Dipplin']
  },
  {
    id: 841, name: 'Flapple', generation: 8,
    evolvesFrom: ['Applin']
  },
  {
    id: 842, name: 'Appletun', generation: 8,
    evolvesFrom: ['Applin']
  },
  {
    id: 843, name: 'Silicobra', generation: 8,
    evolvesTo: ['Sandaconda']
  },
  {
    id: 844, name: 'Sandaconda', generation: 8,
    evolvesFrom: ['Silicobra']
  },
  { id: 845, name: 'Cramorant', generation: 8 },
  {
    id: 846, name: 'Arrokuda', generation: 8,
    evolvesTo: ['Barraskewda']
  },
  {
    id: 847, name: 'Barraskewda', generation: 8,
    evolvesFrom: ['Arrokuda']
  },
  {
    id: 848, name: 'Toxel', generation: 8,
    evolvesTo: ['Toxtricity']
  },
  {
    id: 849, name: 'Toxtricity', generation: 8,
    evolvesFrom: ['Toxel']
  },
  {
    id: 850, name: 'Sizzlipede', generation: 8,
    evolvesTo: ['Centiskorch']
  },
  {
    id: 851, name: 'Centiskorch', generation: 8,
    evolvesFrom: ['Sizzlipede']
  },
  {
    id: 852, name: 'Clobbopus', generation: 8,
    evolvesTo: ['Grapploct']
  },
  {
    id: 853, name: 'Grapploct', generation: 8,
    evolvesFrom: ['Clobbopus']
  },
  {
    id: 854, name: 'Sinistea', generation: 8, size: 50,
    evolvesTo: ['Polteageist']
  },
  {
    id: 855, name: 'Polteageist', generation: 8,
    evolvesFrom: ['Sinistea']
  },
  {
    id: 856, name: 'Hatenna', generation: 8,
    evolvesTo: ['Hattrem']
  },
  {
    id: 857, name: 'Hattrem', generation: 8,
    evolvesFrom: ['Hatenna'],
    evolvesTo: ['Hatterene']
  },
  {
    id: 858, name: 'Hatterene', generation: 8,
    evolvesFrom: ['Hattrem']
  },
  {
    id: 859, name: 'Impidimp', generation: 8,
    evolvesTo: ['Morgrem']
  },
  {
    id: 860, name: 'Morgrem', generation: 8,
    evolvesFrom: ['Impidimp'],
    evolvesTo: ['Grimmsnarl']
  },
  {
    id: 861, name: 'Grimmsnarl', generation: 8,
    evolvesFrom: ['Morgrem']
  },
  {
    id: 862, name: 'Obstagoon', generation: 8,
    evolvesFrom: ['Linoone']
  },
  {
    id: 863, name: 'Perrserker', generation: 8,
    evolvesFrom: ['Persian']
  },
  {
    id: 864, name: 'Cursola', generation: 8,
    evolvesFrom: ['Corsola']
  },
  { id: 865, name: 'Sirfetchd', generation: 8 },
  {
    id: 866, name: 'Mr. rime', generation: 8, image: 'mrrime',
    evolvesFrom: ['Mr. Mime']
  },
  {
    id: 867, name: 'Runerigus', generation: 8,
    evolvesFrom: ['Cofagrigus']
  },
  {
    id: 868, name: 'Milcery', generation: 8,
    evolvesTo: ['Alcremie']
  },
  {
    id: 869, name: 'Alcremie', generation: 8,
    evolvesFrom: ['Milcery']
  },
  { id: 870, name: 'Falinks', generation: 8 },
  { id: 871, name: 'Pincurchin', generation: 8 },
  {
    id: 872, name: 'Snom', generation: 8,
    evolvesTo: ['Frosmoth']
  },
  {
    id: 873, name: 'Frosmoth', generation: 8,
    evolvesFrom: ['Snom']
  },
  { id: 874, name: 'Stonjourner', generation: 8 },
  { id: 875, name: 'Eiscue', generation: 8 },
  { id: 876, name: 'Indeedee', generation: 8 },
  { id: 877, name: 'Morpeko', generation: 8 },
  {
    id: 878, name: 'Cufant', generation: 8,
    evolvesTo: ['Copperajah']
  },
  {
    id: 879, name: 'Copperajah', generation: 8,
    evolvesFrom: ['Cufant']
  },
  { id: 880, name: 'Dracozolt', generation: 8 },
  { id: 881, name: 'Arctozolt', generation: 8 },
  { id: 882, name: 'Dracovish', generation: 8 },
  { id: 883, name: 'Arctovish', generation: 8 },
  {
    id: 884, name: 'Duraludon', generation: 8,
    evolvesTo: ['Archaludon']
  },
  {
    id: 885, name: 'Dreepy', generation: 8,
    evolvesTo: ['Drakloak']
  },
  {
    id: 886, name: 'Drakloak', generation: 8,
    evolvesFrom: ['Dreepy'],
    evolvesTo: ['Dragapult']
  },
  {
    id: 887, name: 'Dragapult', generation: 8,
    evolvesFrom: ['Drakloak']
  },
  { id: 888, name: 'Zacian', generation: 8 },
  { id: 889, name: 'Zamazenta', generation: 8 },
  { id: 890, name: 'Eternatus', generation: 8, size: 300 },
  {
    id: 891, name: 'Kubfu', generation: 8,
    evolvesTo: ['Urshifu']
  },
  {
    id: 892, name: 'Urshifu', generation: 8,
    evolvesFrom: ['Kubfu']
  },
  { id: 893, name: 'Zarude', generation: 8 },
  { id: 894, name: 'Regieleki', generation: 8 },
  { id: 895, name: 'Regidrago', generation: 8 },
  { id: 896, name: 'Glastrier', generation: 8 },
  { id: 897, name: 'Spectrier', generation: 8 },
  { id: 898, name: 'Calyrex', generation: 8 },
  {
    id: 899, name: 'Wyrdeer', generation: 8,
    evolvesFrom: ['Stantler']
  },
  {
    id: 900, name: 'Kleavor', generation: 8,
    evolvesFrom: ['Scizor']
  },
  {
    id: 901, name: 'Ursaluna', generation: 8,
    evolvesFrom: ['Ursaring']
  },
  { id: 902, name: 'Basculegion', generation: 8 },
  {
    id: 903, name: 'Sneasler', generation: 8,
    evolvesFrom: ['Weavile']
  },
  {
    id: 904, name: 'Overqwil', generation: 8,
    evolvesFrom: ['Qwilfish']
  },
  { id: 905, name: 'Enamorus', generation: 8 },
  {
    id: 906, name: 'Sprigatito', generation: 9,
    evolvesTo: ['Floragato']
  },
  {
    id: 907, name: 'Floragato', generation: 9,
    evolvesFrom: ['Sprigatito'],
    evolvesTo: ['Meowscarada']
  },
  {
    id: 908, name: 'Meowscarada', generation: 9,
    evolvesFrom: ['Floragato']
  },
  {
    id: 909, name: 'Fuecoco', generation: 9,
    evolvesTo: ['Crocalor']
  },
  {
    id: 910, name: 'Crocalor', generation: 9,
    evolvesFrom: ['Fuecoco'],
    evolvesTo: ['Skeledirge']
  },
  {
    id: 911, name: 'Skeledirge', generation: 9,
    evolvesFrom: ['Crocalor']
  },
  {
    id: 912, name: 'Quaxly', generation: 9,
    evolvesTo: ['Quaxwell']
  },
  {
    id: 913, name: 'Quaxwell', generation: 9,
    evolvesFrom: ['Quaxly'],
    evolvesTo: ['Quaquaval']
  },
  {
    id: 914, name: 'Quaquaval', generation: 9,
    evolvesFrom: ['Quaxwell']
  },
  {
    id: 915, name: 'Lechonk', generation: 9,
    evolvesTo: ['Oinkologne']
  },
  {
    id: 916, name: 'Oinkologne', generation: 9,
    evolvesFrom: ['Lechonk']
  },
  {
    id: 917, name: 'Tarountula', generation: 9,
    evolvesTo: ['Spidops']
  },
  {
    id: 918, name: 'Spidops', generation: 9,
    evolvesFrom: ['Tarountula']
  },
  {
    id: 919, name: 'Nymble', generation: 9,
    evolvesTo: ['Lokix']
  },
  {
    id: 920, name: 'Lokix', generation: 9,
    evolvesFrom: ['Nymble']
  },
  {
    id: 921, name: 'Pawmi', generation: 9,
    evolvesTo: ['Pawmo']
  },
  {
    id: 922, name: 'Pawmo', generation: 9,
    evolvesFrom: ['Pawmi'],
    evolvesTo: ['Pawmot']
  },
  {
    id: 923, name: 'Pawmot', generation: 9,
    evolvesFrom: ['Pawmo']
  },
  {
    id: 924, name: 'Tandemaus', generation: 9,
    evolvesTo: ['Maushold']
  },
  {
    id: 925, name: 'Maushold', generation: 9,
    evolvesFrom: ['Tandemaus']
  },
  {
    id: 926, name: 'Fidough', generation: 9,
    evolvesTo: ['Dachsbun']
  },
  {
    id: 927, name: 'Dachsbun', generation: 9,
    evolvesFrom: ['Fidough']
  },
  {
    id: 928, name: 'Smoliv', generation: 9,
    evolvesTo: ['Dolliv']
  },
  {
    id: 929, name: 'Dolliv', generation: 9,
    evolvesFrom: ['Smoliv'],
    evolvesTo: ['Arboliva']
  },
  {
    id: 930, name: 'Arboliva', generation: 9,
    evolvesFrom: ['Dolliv']
  },
  { id: 931, name: 'Squawkabilly', generation: 9 },
  {
    id: 932, name: 'Nacli', generation: 9,
    evolvesTo: ['Naclstack']
  },
  {
    id: 933, name: 'Naclstack', generation: 9,
    evolvesFrom: ['Nacli'],
    evolvesTo: ['Garganacl']
  },
  {
    id: 934, name: 'Garganacl', generation: 9,
    evolvesFrom: ['Naclstack']
  },
  {
    id: 935, name: 'Charcadet', generation: 9,
    evolvesTo: ['Armarouge']
  },
  {
    id: 936, name: 'Armarouge', generation: 9,
    evolvesFrom: ['Charcadet'],
    evolvesTo: ['Ceruledge']
  },
  {
    id: 937, name: 'Ceruledge', generation: 9,
    evolvesFrom: ['Armarouge']
  },
  {
    id: 938, name: 'Tadbulb', generation: 9,
    evolvesTo: ['Bellibolt']
  },
  {
    id: 939, name: 'Bellibolt', generation: 9,
    evolvesFrom: ['Tadbulb']
  },
  {
    id: 940, name: 'Wattrel', generation: 9,
    evolvesTo: ['Kilowattrel']
  },
  {
    id: 941, name: 'Kilowattrel', generation: 9,
    evolvesFrom: ['Wattrel']
  },
  {
    id: 942, name: 'Maschiff', generation: 9,
    evolvesTo: ['Mabosstiff']
  },
  {
    id: 943, name: 'Mabosstiff', generation: 9,
    evolvesFrom: ['Maschiff']
  },
  {
    id: 944, name: 'Shroodle', generation: 9,
    evolvesTo: ['Grafaiai']
  },
  {
    id: 945, name: 'Grafaiai', generation: 9,
    evolvesFrom: ['Shroodle']
  },
  {
    id: 946, name: 'Bramblin', generation: 9,
    evolvesTo: ['Brambleghast']
  },
  {
    id: 947, name: 'Brambleghast', generation: 9,
    evolvesFrom: ['Bramblin']
  },
  {
    id: 948, name: 'Toedscool', generation: 9,
    evolvesTo: ['Toedscruel']
  },
  {
    id: 949, name: 'Toedscruel', generation: 9,
    evolvesFrom: ['Toedscool']
  },
  { id: 950, name: 'Klawf', generation: 9 },
  {
    id: 951, name: 'Capsakid', generation: 9,
    evolvesTo: ['Scovillain']
  },
  {
    id: 952, name: 'Scovillain', generation: 9,
    evolvesFrom: ['Capsakid']
  },
  {
    id: 953, name: 'Rellor', generation: 9,
    evolvesTo: ['Rabsca']
  },
  {
    id: 954, name: 'Rabsca', generation: 9,
    evolvesFrom: ['Rellor']
  },
  {
    id: 955, name: 'Flittle', generation: 9,
    evolvesTo: ['Espathra']
  },
  {
    id: 956, name: 'Espathra', generation: 9,
    evolvesFrom: ['Flittle']
  },
  {
    id: 957, name: 'Tinkatink', generation: 9,
    evolvesTo: ['Tinkatuff']
  },
  {
    id: 958, name: 'Tinkatuff', generation: 9,
    evolvesFrom: ['Tinkatink'],
    evolvesTo: ['Tinkaton']
  },
  {
    id: 959, name: 'Tinkaton', generation: 9,
    evolvesFrom: ['Tinkatuff']
  },
  {
    id: 960, name: 'Wiglett', generation: 9,
    evolvesTo: ['Wugtrio']
  },
  {
    id: 961, name: 'Wugtrio', generation: 9,
    evolvesFrom: ['Wiglett']
  },
  { id: 962, name: 'Bombirdier', generation: 9 },
  {
    id: 963, name: 'Finizen', generation: 9,
    evolvesTo: ['Palafin']
  },
  {
    id: 964, name: 'Palafin', generation: 9,
    evolvesFrom: ['Finizen']
  },
  {
    id: 965, name: 'Varoom', generation: 9,
    evolvesTo: ['Revavroom']
  },
  {
    id: 966, name: 'Revavroom', generation: 9,
    evolvesFrom: ['Varoom']
  },
  { id: 967, name: 'Cyclizar', generation: 9 },
  { id: 968, name: 'Orthworm', generation: 9 },
  {
    id: 969, name: 'Glimmet', generation: 9,
    evolvesTo: ['Glimmora']
  },
  {
    id: 970, name: 'Glimmora', generation: 9,
    evolvesFrom: ['Glimmet']
  },
  {
    id: 971, name: 'Greavard', generation: 9,
    evolvesTo: ['Houndstone']
  },
  {
    id: 972, name: 'Houndstone', generation: 9,
    evolvesFrom: ['Greavard']
  },
  { id: 973, name: 'Flamigo', generation: 9 },
  {
    id: 974, name: 'Cetoddle', generation: 9,
    evolvesTo: ['Cetitan']
  },
  {
    id: 975, name: 'Cetitan', generation: 9,
    evolvesFrom: ['Cetoddle']
  },
  { id: 976, name: 'Veluza', generation: 9 },
  { id: 977, name: 'Dondozo', generation: 9 },
  { id: 978, name: 'Tatsugiri', generation: 9 },
  {
    id: 979, name: 'Annihilape', generation: 9,
    evolvesFrom: ['Primeape']
  },
  {
    id: 980, name: 'Clodsire', generation: 9,
    evolvesFrom: ['Quagsire']
  },
  { id: 981, name: 'Farigiraf', generation: 9 },
  {
    id: 982, name: 'Dudunsparce', generation: 9,
    evolvesFrom: ['Dunsparce']
  },
  {
    id: 983, name: 'Kingambit', generation: 9,
    evolvesFrom: ['Bisharp']
  },
  { id: 984, name: 'Great Tusk', generation: 9, image: 'greattusk' },
  { id: 985, name: 'Scream Tail', generation: 9, image: 'screamtail' },
  { id: 986, name: 'Brute Bonnet', generation: 9, image: 'brutebonnet' },
  { id: 987, name: 'Flutter Mane', generation: 9, image: 'fluttermane' },
  { id: 988, name: 'Slither Wing', generation: 9 },
  { id: 989, name: 'Sandy Shocks', generation: 9, image: 'sandyshocks' },
  { id: 990, name: 'Iron Treads', generation: 9 },
  { id: 991, name: 'Iron Bundle', generation: 9 },
  { id: 992, name: 'Iron Hands', generation: 9 },
  { id: 993, name: 'Iron Jugulis', generation: 9 },
  { id: 994, name: 'Iron Moth', generation: 9 },
  { id: 995, name: 'Iron Thorns', generation: 9 },
  {
    id: 996, name: 'Frigibax', generation: 9,
    evolvesTo: ['Arctibax']
  },
  {
    id: 997, name: 'Arctibax', generation: 9,
    evolvesFrom: ['Frigibax'],
    evolvesTo: ['Baxcalibur']
  },
  {
    id: 998, name: 'Baxcalibur', generation: 9,
    evolvesFrom: ['Arctibax']
  },
  {
    id: 999, name: 'Gimmighoul', generation: 9,
    evolvesTo: ['Gholdengo']
  },
  {
    id: 1000, name: 'Gholdengo', generation: 9,
    evolvesFrom: ['Gimmighoul']
  },
  { id: 1001, name: 'Wo-Chien', generation: 9, image: 'wokchien' },
  { id: 1002, name: 'Chien-Pao', generation: 9 },
  { id: 1003, name: 'Ting-Lu', generation: 9 },
  { id: 1004, name: 'Chi-Yu', generation: 9 },
  { id: 1005, name: 'Roaring Moon', generation: 9, image: 'roaringmoon' },
  { id: 1006, name: 'Iron Valiant', generation: 9 },
  { id: 1007, name: 'Koraidon', generation: 9 },
  { id: 1008, name: 'Miraidon', generation: 9 },
  { id: 1009, name: 'Walking Wake', generation: 9, image: 'walkingwake' },
  { id: 1010, name: 'Iron Leaves', generation: 9, image: 'irongleaves' },
  {
    id: 1011, name: 'Dipplin', generation: 9,
    evolvesFrom: ['Applin'],
    evolvesTo: ['Hydrapple']
  },
  {
    id: 1012, name: 'Poltchageist', generation: 9,
    evolvesTo: ['Sinistcha']
  },
  {
    id: 1013, name: 'Sinistcha', generation: 9,
    evolvesFrom: ['Poltchageist']
  },
  { id: 1014, name: 'Okidogi', generation: 9 },
  { id: 1015, name: 'Munkidori', generation: 9 },
  { id: 1016, name: 'Fezandipiti', generation: 9 },
  { id: 1017, name: 'Ogerpon', generation: 9 },
  {
    id: 1018, name: 'Archaludon', generation: 9,
    evolvesFrom: ['Duraludon']
  },
  {
    id: 1019, name: 'Hydrapple', generation: 9,
    evolvesFrom: ['Dipplin']
  },
  { id: 1020, name: 'Gouging Fire', generation: 9, image: 'gougingfire' },
  { id: 1021, name: 'Raging Bolt', generation: 9, image: 'ragingbolt' },
  { id: 1022, name: 'Iron Boulder', generation: 9, image: 'ironboulder' },
  { id: 1023, name: 'Iron Crown', generation: 9, image: 'ironcrown' },
  { id: 1024, name: 'Terapagos', generation: 9 },
  { id: 1025, name: 'Pecharunt', generation: 9 },
  { id: -1, name: 'Browt', generation: 10 },
  { id: -1, name: 'Pombun', generation: 10 },
  { id: -1, name: 'Gecqua', generation: 10 },
];

// ============ Japanese name to dexId lookup ============
// Maps Japanese kana names to their National Pokédex IDs
const JAPANESE_NAME_MAP: Record<string, number> = {
  "フシギダネ": 1,
  "フシギソウ": 2,
  "フシギバナ": 3,
  "ヒトカゲ": 4,
  "リザード": 5,
  "リザードン": 6,
  "ゼニガメ": 7,
  "カメール": 8,
  "カメックス": 9,
  "キャタピー": 10,
  "トランセル": 11,
  "バタフリー": 12,
  "ビードル": 13,
  "コクーン": 14,
  "スピアー": 15,
  "ポッポ": 16,
  "ピジョン": 17,
  "ピジョット": 18,
  "コラッタ": 19,
  "ラッタ": 20,
  "オニスズメ": 21,
  "オニドリル": 22,
  "アーボ": 23,
  "アーボック": 24,
  "ピカチュウ": 25,
  "ライチュウ": 26,
  "サンド": 27,
  "サンドパン": 28,
  "ニドラン♀": 29,
  "ニドリーナ": 30,
  "ニドクイン": 31,
  "ニドラン♂": 32,
  "ニドリーノ": 33,
  "ニドキング": 34,
  "ピッピ": 35,
  "ピクシー": 36,
  "ロコン": 37,
  "キュウコン": 38,
  "プリン": 39,
  "プクリン": 40,
  "ズバット": 41,
  "ゴルバット": 42,
  "ナゾノクサ": 43,
  "クサイハナ": 44,
  "ラフレシア": 45,
  "パラス": 46,
  "パラセクト": 47,
  "コンパン": 48,
  "モルフォン": 49,
  "ディグダ": 50,
  "ダグトリオ": 51,
  "ニャース": 52,
  "ペルシアン": 53,
  "コダック": 54,
  "ゴルダック": 55,
  "マンキー": 56,
  "オコリザル": 57,
  "ガーディ": 58,
  "ウインディ": 59,
  "ニョロモ": 60,
  "ニョロゾ": 61,
  "ニョロボン": 62,
  "ケーシィ": 63,
  "ユンゲラー": 64,
  "フーディン": 65,
  "ワンリキー": 66,
  "ゴーリキー": 67,
  "カイリキー": 68,
  "マダツボミ": 69,
  "ウツドン": 70,
  "ウツボット": 71,
  "メノクラゲ": 72,
  "ドククラゲ": 73,
  "イシツブテ": 74,
  "ゴローン": 75,
  "ゴローニャ": 76,
  "ポニータ": 77,
  "ギャロップ": 78,
  "ヤドン": 79,
  "ヤドラン": 80,
  "コイル": 81,
  "レアコイル": 82,
  "カモネギ": 83,
  "ドードー": 84,
  "ドードリオ": 85,
  "パウワウ": 86,
  "ジュゴン": 87,
  "ベトベター": 88,
  "ベトベトン": 89,
  "シェルダー": 90,
  "パルシェン": 91,
  "ゴース": 92,
  "ゴースト": 93,
  "ゲンガー": 94,
  "イワーク": 95,
  "スリープ": 96,
  "スリーパー": 97,
  "クラブ": 98,
  "キングラー": 99,
  "ビリリダマ": 100,
  "マルマイン": 101,
  "タマタマ": 102,
  "ナッシー": 103,
  "カラカラ": 104,
  "ガラガラ": 105,
  "サワムラー": 106,
  "エビワラー": 107,
  "ベロリンガ": 108,
  "ドガース": 109,
  "マタドガス": 110,
  "サイホーン": 111,
  "サイドン": 112,
  "ラッキー": 113,
  "モンジャラ": 114,
  "ガルーラ": 115,
  "タッツー": 116,
  "シードラ": 117,
  "トサキント": 118,
  "アズマオウ": 119,
  "ヒトデマン": 120,
  "スターミー": 121,
  "バリヤード": 122,
  "ストライク": 123,
  "ルージュラ": 124,
  "エレブー": 125,
  "ブーバー": 126,
  "カイロス": 127,
  "ケンタロス": 128,
  "コイキング": 129,
  "ギャラドス": 130,
  "ラプラス": 131,
  "メタモン": 132,
  "イーブイ": 133,
  "シャワーズ": 134,
  "サンダース": 135,
  "ブースター": 136,
  "ポリゴン": 137,
  "オムナイト": 138,
  "オムスター": 139,
  "カブト": 140,
  "カブトプス": 141,
  "プテラ": 142,
  "カビゴン": 143,
  "フリーザー": 144,
  "サンダー": 145,
  "ファイヤー": 146,
  "ミニリュウ": 147,
  "ハクリュー": 148,
  "カイリュー": 149,
  "ミュウツー": 150,
  "ミュウ": 151,
  "チコリータ": 152,
  "ベイリーフ": 153,
  "メガニウム": 154,
  "ヒノアラシ": 155,
  "マグマラシ": 156,
  "バクフーン": 157,
  "ワニノコ": 158,
  "アリゲイツ": 159,
  "オーダイル": 160,
  "オタチ": 161,
  "オオタチ": 162,
  "ホーホー": 163,
  "ヨルノズク": 164,
  "レディバ": 165,
  "レディアン": 166,
  "イトマル": 167,
  "アリアドス": 168,
  "クロバット": 169,
  "チョンチー": 170,
  "ランターン": 171,
  "ピチュー": 172,
  "ピィ": 173,
  "ププリン": 174,
  "トゲピー": 175,
  "トゲチック": 176,
  "ネイティ": 177,
  "ネイティオ": 178,
  "メリープ": 179,
  "モココ": 180,
  "デンリュウ": 181,
  "キレイハナ": 182,
  "マリル": 183,
  "マリルリ": 184,
  "ウソッキー": 185,
  "ニョロトノ": 186,
  "ハネッコ": 187,
  "ポポッコ": 188,
  "ワタッコ": 189,
  "エイパム": 190,
  "ヒマナッツ": 191,
  "キマワリ": 192,
  "ヤンヤンマ": 193,
  "ウパー": 194,
  "ヌオー": 195,
  "エーフィ": 196,
  "ブラッキー": 197,
  "ヤミカラス": 198,
  "ヤドキング": 199,
  "ムウマ": 200,
  "アンノーン": 201,
  "ソーナンス": 202,
  "キリンリキ": 203,
  "クヌギダマ": 204,
  "フォレトス": 205,
  "ノコッチ": 206,
  "グライガー": 207,
  "ハガネール": 208,
  "ブルー": 209,
  "グランブル": 210,
  "ハリーセン": 211,
  "ハッサム": 212,
  "ツボツボ": 213,
  "ヘラクロス": 214,
  "ニューラ": 215,
  "ヒメグマ": 216,
  "リングマ": 217,
  "マグマッグ": 218,
  "マグカルゴ": 219,
  "ウリムー": 220,
  "イノムー": 221,
  "サニーゴ": 222,
  "テッポウオ": 223,
  "オクタン": 224,
  "デリバード": 225,
  "マンタイン": 226,
  "エアームド": 227,
  "デルビル": 228,
  "ヘルガー": 229,
  "キングドラ": 230,
  "ゴマゾウ": 231,
  "ドンファン": 232,
  "ポリゴン２": 233,
  "オドシシ": 234,
  "ドーブル": 235,
  "バルキー": 236,
  "カポエラー": 237,
  "ムチュール": 238,
  "エレキッド": 239,
  "ブビィ": 240,
  "ミルタンク": 241,
  "ハピナス": 242,
  "ライコウ": 243,
  "エンテイ": 244,
  "スイクン": 245,
  "ヨーギラス": 246,
  "サナギラス": 247,
  "バンギラス": 248,
  "ルギア": 249,
  "ホウオウ": 250,
  "セレビィ": 251,
  "キモリ": 252,
  "ジュプトル": 253,
  "ジュカイン": 254,
  "アチャモ": 255,
  "ワカシャモ": 256,
  "バシャーモ": 257,
  "ミズゴロウ": 258,
  "ヌマクロー": 259,
  "ラグラージ": 260,
  "ポチエナ": 261,
  "グラエナ": 262,
  "ジグザグマ": 263,
  "マッスグマ": 264,
  "ケムッソ": 265,
  "カラサリス": 266,
  "アゲハント": 267,
  "マユルド": 268,
  "ドクケイル": 269,
  "ハスボー": 270,
  "ハスブレロ": 271,
  "ルンパッパ": 272,
  "タネボー": 273,
  "コノハナ": 274,
  "ダーテング": 275,
  "スバメ": 276,
  "オオスバメ": 277,
  "キャモメ": 278,
  "ペリッパー": 279,
  "ラルトス": 280,
  "キルリア": 281,
  "サーナイト": 282,
  "アメタマ": 283,
  "アメモース": 284,
  "キノココ": 285,
  "キノガッサ": 286,
  "ナマケロ": 287,
  "ヤルキモノ": 288,
  "ケッキング": 289,
  "ツチニン": 290,
  "テッカニン": 291,
  "ヌケニン": 292,
  "ゴニョニョ": 293,
  "ドゴーム": 294,
  "バクオング": 295,
  "マクノシタ": 296,
  "ハリテヤマ": 297,
  "ルリリ": 298,
  "ノズパス": 299,
  "エネコ": 300,
  "エネコロロ": 301,
  "ヤミラミ": 302,
  "クチート": 303,
  "ココドラ": 304,
  "コドラ": 305,
  "ボスゴドラ": 306,
  "アサナン": 307,
  "チャーレム": 308,
  "ラクライ": 309,
  "ライボルト": 310,
  "プラスル": 311,
  "マイナン": 312,
  "バルビート": 313,
  "イルミーゼ": 314,
  "ロゼリア": 315,
  "ゴクリン": 316,
  "マルノーム": 317,
  "キバニア": 318,
  "サメハダー": 319,
  "ホエルコ": 320,
  "ホエルオー": 321,
  "ドンメル": 322,
  "バクーダ": 323,
  "コータス": 324,
  "バネブー": 325,
  "ブーピッグ": 326,
  "パッチール": 327,
  "ナックラー": 328,
  "ビブラーバ": 329,
  "フライゴン": 330,
  "サボネア": 331,
  "ノクタス": 332,
  "チルット": 333,
  "チルタリス": 334,
  "ザングース": 335,
  "ハブネーク": 336,
  "ルナトーン": 337,
  "ソルロック": 338,
  "ドジョッチ": 339,
  "ナマズン": 340,
  "ヘイガニ": 341,
  "シザリガー": 342,
  "ヤジロン": 343,
  "ネンドール": 344,
  "リリーラ": 345,
  "ユレイドル": 346,
  "アノプス": 347,
  "アーマルド": 348,
  "ヒンバス": 349,
  "ミロカロス": 350,
  "ポワルン": 351,
  "カクレオン": 352,
  "カゲボウズ": 353,
  "ジュペッタ": 354,
  "ヨマワル": 355,
  "サマヨール": 356,
  "トロピウス": 357,
  "チリーン": 358,
  "アブソル": 359,
  "ソーナノ": 360,
  "ユキワラシ": 361,
  "オニゴーリ": 362,
  "タマザラシ": 363,
  "トドグラー": 364,
  "トドゼルガ": 365,
  "パールル": 366,
  "ハンテール": 367,
  "サクラビス": 368,
  "ジーランス": 369,
  "ラブカス": 370,
  "タツベイ": 371,
  "コモルー": 372,
  "ボーマンダ": 373,
  "ダンバル": 374,
  "メタング": 375,
  "メタグロス": 376,
  "レジロック": 377,
  "レジアイス": 378,
  "レジスチル": 379,
  "ラティアス": 380,
  "ラティオス": 381,
  "カイオーガ": 382,
  "グラードン": 383,
  "レックウザ": 384,
  "ジラーチ": 385,
  "デオキシス": 386,
  "ナエトル": 387,
  "ハヤシガメ": 388,
  "ドダイトス": 389,
  "ヒコザル": 390,
  "モウカザル": 391,
  "ゴウカザル": 392,
  "ポッチャマ": 393,
  "ポッタイシ": 394,
  "エンペルト": 395,
  "ムックル": 396,
  "ムクバード": 397,
  "ムクホーク": 398,
  "ビッパ": 399,
  "ビーダル": 400,
  "コロボーシ": 401,
  "コロトック": 402,
  "コリンク": 403,
  "ルクシオ": 404,
  "レントラー": 405,
  "スボミー": 406,
  "ロズレイド": 407,
  "ズガイドス": 408,
  "ラムパルド": 409,
  "タテトプス": 410,
  "トリデプス": 411,
  "ミノムッチ": 412,
  "ミノマダム": 413,
  "ガーメイル": 414,
  "ミツハニー": 415,
  "ビークイン": 416,
  "パチリス": 417,
  "ブイゼル": 418,
  "フローゼル": 419,
  "チェリンボ": 420,
  "チェリム": 421,
  "カラナクシ": 422,
  "トリトドン": 423,
  "エテボース": 424,
  "フワンテ": 425,
  "フワライド": 426,
  "ミミロル": 427,
  "ミミロップ": 428,
  "ムウマージ": 429,
  "ドンカラス": 430,
  "ニャルマー": 431,
  "ブニャット": 432,
  "リーシャン": 433,
  "スカンプー": 434,
  "スカタンク": 435,
  "ドーミラー": 436,
  "ドータクン": 437,
  "ウソハチ": 438,
  "マネネ": 439,
  "ピンプク": 440,
  "ペラップ": 441,
  "ミカルゲ": 442,
  "フカマル": 443,
  "ガバイト": 444,
  "ガブリアス": 445,
  "ゴンベ": 446,
  "リオル": 447,
  "ルカリオ": 448,
  "ヒポポタス": 449,
  "カバルドン": 450,
  "スコルピ": 451,
  "ドラピオン": 452,
  "グレッグル": 453,
  "ドクロッグ": 454,
  "マスキッパ": 455,
  "ケイコウオ": 456,
  "ネオラント": 457,
  "タマンタ": 458,
  "ユキカブリ": 459,
  "ユキノオー": 460,
  "マニューラ": 461,
  "ジバコイル": 462,
  "ベロベルト": 463,
  "ドサイドン": 464,
  "モジャンボ": 465,
  "エレキブル": 466,
  "ブーバーン": 467,
  "トゲキッス": 468,
  "メガヤンマ": 469,
  "リーフィア": 470,
  "グレイシア": 471,
  "グライオン": 472,
  "マンムー": 473,
  "ポリゴンＺ": 474,
  "エルレイド": 475,
  "ダイノーズ": 476,
  "ヨノワール": 477,
  "ユキメノコ": 478,
  "ロトム": 479,
  "ユクシー": 480,
  "エムリット": 481,
  "アグノム": 482,
  "ディアルガ": 483,
  "パルキア": 484,
  "ヒードラン": 485,
  "レジギガス": 486,
  "ギラティナ": 487,
  "クレセリア": 488,
  "フィオネ": 489,
  "マナフィ": 490,
  "ダークライ": 491,
  "シェイミ": 492,
  "アルセウス": 493,
  "ビクティニ": 494,
  "ツタージャ": 495,
  "ジャノビー": 496,
  "ジャローダ": 497,
  "ポカブ": 498,
  "チャオブー": 499,
  "エンブオー": 500,
  "ミジュマル": 501,
  "フタチマル": 502,
  "ダイケンキ": 503,
  "ミネズミ": 504,
  "ミルホッグ": 505,
  "ヨーテリー": 506,
  "ハーデリア": 507,
  "ムーランド": 508,
  "チョロネコ": 509,
  "レパルダス": 510,
  "ヤナップ": 511,
  "ヤナッキー": 512,
  "バオップ": 513,
  "バオッキー": 514,
  "ヒヤップ": 515,
  "ヒヤッキー": 516,
  "ムンナ": 517,
  "ムシャーナ": 518,
  "マメパト": 519,
  "ハトーボー": 520,
  "ケンホロウ": 521,
  "シママ": 522,
  "ゼブライカ": 523,
  "ダンゴロ": 524,
  "ガントル": 525,
  "ギガイアス": 526,
  "コロモリ": 527,
  "ココロモリ": 528,
  "モグリュー": 529,
  "ドリュウズ": 530,
  "タブンネ": 531,
  "ドッコラー": 532,
  "ドテッコツ": 533,
  "ローブシン": 534,
  "オタマロ": 535,
  "ガマガル": 536,
  "ガマゲロゲ": 537,
  "ナゲキ": 538,
  "ダゲキ": 539,
  "クルミル": 540,
  "クルマユ": 541,
  "ハハコモリ": 542,
  "フシデ": 543,
  "ホイーガ": 544,
  "ペンドラー": 545,
  "モンメン": 546,
  "エルフーン": 547,
  "チュリネ": 548,
  "ドレディア": 549,
  "バスラオ": 550,
  "メグロコ": 551,
  "ワルビル": 552,
  "ワルビアル": 553,
  "ダルマッカ": 554,
  "ヒヒダルマ": 555,
  "マラカッチ": 556,
  "イシズマイ": 557,
  "イワパレス": 558,
  "ズルッグ": 559,
  "ズルズキン": 560,
  "シンボラー": 561,
  "デスマス": 562,
  "デスカーン": 563,
  "プロトーガ": 564,
  "アバゴーラ": 565,
  "アーケン": 566,
  "アーケオス": 567,
  "ヤブクロン": 568,
  "ダストダス": 569,
  "ゾロア": 570,
  "ゾロアーク": 571,
  "チラーミィ": 572,
  "チラチーノ": 573,
  "ゴチム": 574,
  "ゴチミル": 575,
  "ゴチルゼル": 576,
  "ユニラン": 577,
  "ダブラン": 578,
  "ランクルス": 579,
  "コアルヒー": 580,
  "スワンナ": 581,
  "バニプッチ": 582,
  "バニリッチ": 583,
  "バイバニラ": 584,
  "シキジカ": 585,
  "メブキジカ": 586,
  "エモンガ": 587,
  "カブルモ": 588,
  "シュバルゴ": 589,
  "タマゲタケ": 590,
  "モロバレル": 591,
  "プルリル": 592,
  "ブルンゲル": 593,
  "ママンボウ": 594,
  "バチュル": 595,
  "デンチュラ": 596,
  "テッシード": 597,
  "ナットレイ": 598,
  "ギアル": 599,
  "ギギアル": 600,
  "ギギギアル": 601,
  "シビシラス": 602,
  "シビビール": 603,
  "シビルドン": 604,
  "リグレー": 605,
  "オーベム": 606,
  "ヒトモシ": 607,
  "ランプラー": 608,
  "シャンデラ": 609,
  "キバゴ": 610,
  "オノンド": 611,
  "オノノクス": 612,
  "クマシュン": 613,
  "ツンベアー": 614,
  "フリージオ": 615,
  "チョボマキ": 616,
  "アギルダー": 617,
  "マッギョ": 618,
  "コジョフー": 619,
  "コジョンド": 620,
  "クリムガン": 621,
  "ゴビット": 622,
  "ゴルーグ": 623,
  "コマタナ": 624,
  "キリキザン": 625,
  "バッフロン": 626,
  "ワシボン": 627,
  "ウォーグル": 628,
  "バルチャイ": 629,
  "バルジーナ": 630,
  "クイタラン": 631,
  "アイアント": 632,
  "モノズ": 633,
  "ジヘッド": 634,
  "サザンドラ": 635,
  "メラルバ": 636,
  "ウルガモス": 637,
  "コバルオン": 638,
  "テラキオン": 639,
  "ビリジオン": 640,
  "トルネロス": 641,
  "ボルトロス": 642,
  "レシラム": 643,
  "ゼクロム": 644,
  "ランドロス": 645,
  "キュレム": 646,
  "ケルディオ": 647,
  "メロエッタ": 648,
  "ゲノセクト": 649,
  "ハリマロン": 650,
  "ハリボーグ": 651,
  "ブリガロン": 652,
  "フォッコ": 653,
  "テールナー": 654,
  "マフォクシー": 655,
  "ケロマツ": 656,
  "ゲコガシラ": 657,
  "ゲッコウガ": 658,
  "ホルビー": 659,
  "ホルード": 660,
  "ヤヤコマ": 661,
  "ヒノヤコマ": 662,
  "ファイアロー": 663,
  "コフキムシ": 664,
  "コフーライ": 665,
  "ビビヨン": 666,
  "シシコ": 667,
  "カエンジシ": 668,
  "フラベベ": 669,
  "フラエッテ": 670,
  "フラージェス": 671,
  "メェークル": 672,
  "ゴーゴート": 673,
  "ヤンチャム": 674,
  "ゴロンダ": 675,
  "トリミアン": 676,
  "ニャスパー": 677,
  "ニャオニクス": 678,
  "ヒトツキ": 679,
  "ニダンギル": 680,
  "ギルガルド": 681,
  "シュシュプ": 682,
  "フレフワン": 683,
  "ペロッパフ": 684,
  "ペロリーム": 685,
  "マーイーカ": 686,
  "カラマネロ": 687,
  "カメテテ": 688,
  "ガメノデス": 689,
  "クズモー": 690,
  "ドラミドロ": 691,
  "ウデッポウ": 692,
  "ブロスター": 693,
  "エリキテル": 694,
  "エレザード": 695,
  "チゴラス": 696,
  "ガチゴラス": 697,
  "アマルス": 698,
  "アマルルガ": 699,
  "ニンフィア": 700,
  "ルチャブル": 701,
  "デデンネ": 702,
  "メレシー": 703,
  "ヌメラ": 704,
  "ヌメイル": 705,
  "ヌメルゴン": 706,
  "クレッフィ": 707,
  "ボクレー": 708,
  "オーロット": 709,
  "バケッチャ": 710,
  "パンプジン": 711,
  "カチコール": 712,
  "クレベース": 713,
  "オンバット": 714,
  "オンバーン": 715,
  "ゼルネアス": 716,
  "イベルタル": 717,
  "ジガルデ": 718,
  "ディアンシー": 719,
  "フーパ": 720,
  "ボルケニオン": 721,
  "モクロー": 722,
  "フクスロー": 723,
  "ジュナイパー": 724,
  "ニャビー": 725,
  "ニャヒート": 726,
  "ガオガエン": 727,
  "アシマリ": 728,
  "オシャマリ": 729,
  "アシレーヌ": 730,
  "ツツケラ": 731,
  "ケララッパ": 732,
  "ドデカバシ": 733,
  "ヤングース": 734,
  "デカグース": 735,
  "アゴジムシ": 736,
  "デンヂムシ": 737,
  "クワガノン": 738,
  "マケンカニ": 739,
  "ケケンカニ": 740,
  "オドリドリ": 741,
  "アブリー": 742,
  "アブリボン": 743,
  "イワンコ": 744,
  "ルガルガン": 745,
  "ヨワシ": 746,
  "ヒドイデ": 747,
  "ドヒドイデ": 748,
  "ドロバンコ": 749,
  "バンバドロ": 750,
  "シズクモ": 751,
  "オニシズクモ": 752,
  "カリキリ": 753,
  "ラランテス": 754,
  "ネマシュ": 755,
  "マシェード": 756,
  "ヤトウモリ": 757,
  "エンニュート": 758,
  "ヌイコグマ": 759,
  "キテルグマ": 760,
  "アマカジ": 761,
  "アママイコ": 762,
  "アマージョ": 763,
  "キュワワー": 764,
  "ヤレユータン": 765,
  "ナゲツケサル": 766,
  "コソクムシ": 767,
  "グソクムシャ": 768,
  "スナバァ": 769,
  "シロデスナ": 770,
  "ナマコブシ": 771,
  "タイプ：ヌル": 772,
  "シルヴァディ": 773,
  "メテノ": 774,
  "ネッコアラ": 775,
  "バクガメス": 776,
  "トゲデマル": 777,
  "ミミッキュ": 778,
  "ハギギシリ": 779,
  "ジジーロン": 780,
  "ダダリン": 781,
  "ジャラコ": 782,
  "ジャランゴ": 783,
  "ジャラランガ": 784,
  "カプ・コケコ": 785,
  "カプ・テテフ": 786,
  "カプ・ブルル": 787,
  "カプ・レヒレ": 788,
  "コスモッグ": 789,
  "コスモウム": 790,
  "ソルガレオ": 791,
  "ルナアーラ": 792,
  "ウツロイド": 793,
  "マッシブーン": 794,
  "フェローチェ": 795,
  "デンジュモク": 796,
  "テッカグヤ": 797,
  "カミツルギ": 798,
  "アクジキング": 799,
  "ネクロズマ": 800,
  "マギアナ": 801,
  "マーシャドー": 802,
  "ベベノム": 803,
  "アーゴヨン": 804,
  "ツンデツンデ": 805,
  "ズガドーン": 806,
  "ゼラオラ": 807,
  "メルタン": 808,
  "メルメタル": 809,
  "サルノリ": 810,
  "バチンキー": 811,
  "ゴリランダー": 812,
  "ヒバニー": 813,
  "ラビフット": 814,
  "エースバーン": 815,
  "メッソン": 816,
  "ジメレオン": 817,
  "インテレオン": 818,
  "ホシガリス": 819,
  "ヨクバリス": 820,
  "ココガラ": 821,
  "アオガラス": 822,
  "アーマーガア": 823,
  "サッチムシ": 824,
  "レドームシ": 825,
  "イオルブ": 826,
  "クスネ": 827,
  "フォクスライ": 828,
  "ヒメンカ": 829,
  "ワタシラガ": 830,
  "ウールー": 831,
  "バイウールー": 832,
  "カムカメ": 833,
  "カジリガメ": 834,
  "ワンパチ": 835,
  "パルスワン": 836,
  "タンドン": 837,
  "トロッゴン": 838,
  "セキタンザン": 839,
  "カジッチュ": 840,
  "アップリュー": 841,
  "タルップル": 842,
  "スナヘビ": 843,
  "サダイジャ": 844,
  "ウッウ": 845,
  "サシカマス": 846,
  "カマスジョー": 847,
  "エレズン": 848,
  "ストリンダー": 849,
  "ヤクデ": 850,
  "マルヤクデ": 851,
  "タタッコ": 852,
  "オトスパス": 853,
  "ヤバチャ": 854,
  "ポットデス": 855,
  "ミブリム": 856,
  "テブリム": 857,
  "ブリムオン": 858,
  "ベロバー": 859,
  "ギモー": 860,
  "オーロンゲ": 861,
  "タチフサグマ": 862,
  "ニャイキング": 863,
  "サニゴーン": 864,
  "ネギガナイト": 865,
  "バリコオル": 866,
  "デスバーン": 867,
  "マホミル": 868,
  "マホイップ": 869,
  "タイレーツ": 870,
  "バチンウニ": 871,
  "ユキハミ": 872,
  "モスノウ": 873,
  "イシヘンジン": 874,
  "コオリッポ": 875,
  "イエッサン": 876,
  "モルペコ": 877,
  "ゾウドウ": 878,
  "ダイオウドウ": 879,
  "パッチラゴン": 880,
  "パッチルドン": 881,
  "ウオノラゴン": 882,
  "ウオチルドン": 883,
  "ジュラルドン": 884,
  "ドラメシヤ": 885,
  "ドロンチ": 886,
  "ドラパルト": 887,
  "ザシアン": 888,
  "ザマゼンタ": 889,
  "ムゲンダイナ": 890,
  "ダクマ": 891,
  "ウーラオス": 892,
  "ザルード": 893,
  "レジエレキ": 894,
  "レジドラゴ": 895,
  "ブリザポス": 896,
  "レイスポス": 897,
  "バドレックス": 898,
  "アヤシシ": 899,
  "バサギリ": 900,
  "ガチグマ": 901,
  "イダイトウ": 902,
  "オオニューラ": 903,
  "ハリーマン": 904,
  "ラブトロス": 905,
  "ニャオハ": 906,
  "ニャローテ": 907,
  "マスカーニャ": 908,
  "ホゲータ": 909,
  "アチゲータ": 910,
  "ラウドボーン": 911,
  "クワッス": 912,
  "ウェルカモ": 913,
  "ウェーニバル": 914,
  "グルトン": 915,
  "パフュートン": 916,
  "タマンチュラ": 917,
  "ワナイダー": 918,
  "マメバッタ": 919,
  "エクスレッグ": 920,
  "パモ": 921,
  "パモット": 922,
  "パーモット": 923,
  "ワッカネズミ": 924,
  "イッカネズミ": 925,
  "パピモッチ": 926,
  "バウッツェル": 927,
  "ミニーブ": 928,
  "オリーニョ": 929,
  "オリーヴァ": 930,
  "イキリンコ": 931,
  "コジオ": 932,
  "ジオヅム": 933,
  "キョジオーン": 934,
  "カルボウ": 935,
  "グレンアルマ": 936,
  "ソウブレイズ": 937,
  "ズピカ": 938,
  "ハラバリー": 939,
  "カイデン": 940,
  "タイカイデン": 941,
  "オラチフ": 942,
  "マフィティフ": 943,
  "シルシュルー": 944,
  "タギングル": 945,
  "アノクサ": 946,
  "アノホラグサ": 947,
  "ノノクラゲ": 948,
  "リククラゲ": 949,
  "ガケガニ": 950,
  "カプサイジ": 951,
  "スコヴィラン": 952,
  "シガロコ": 953,
  "ベラカス": 954,
  "ヒラヒナ": 955,
  "クエスパトラ": 956,
  "カヌチャン": 957,
  "ナカヌチャン": 958,
  "デカヌチャン": 959,
  "ウミディグダ": 960,
  "ウミトリオ": 961,
  "オトシドリ": 962,
  "ナミイルカ": 963,
  "イルカマン": 964,
  "ブロロン": 965,
  "ブロロローム": 966,
  "モトトカゲ": 967,
  "ミミズズ": 968,
  "キラーメ": 969,
  "キラフロル": 970,
  "ボチ": 971,
  "ハカドッグ": 972,
  "カラミンゴ": 973,
  "アルクジラ": 974,
  "ハルクジラ": 975,
  "ミガルーサ": 976,
  "ヘイラッシャ": 977,
  "シャリタツ": 978,
  "コノヨザル": 979,
  "ドオー": 980,
  "リキキリン": 981,
  "ノココッチ": 982,
  "ドドゲザン": 983,
  "イダイナキバ": 984,
  "サケブシッポ": 985,
  "アラブルタケ": 986,
  "ハバタクカミ": 987,
  "チヲハウハネ": 988,
  "スナノケガワ": 989,
  "テツノワダチ": 990,
  "テツノツツミ": 991,
  "テツノカイナ": 992,
  "テツノコウベ": 993,
  "テツノドクガ": 994,
  "テツノイバラ": 995,
  "セビエ": 996,
  "セゴール": 997,
  "セグレイブ": 998,
  "コレクレー": 999,
  "サーフゴー": 1000,
  "チオンジェン": 1001,
  "パオジアン": 1002,
  "ディンルー": 1003,
  "イーユイ": 1004,
  "トドロクツキ": 1005,
  "テツノブジン": 1006,
  "コライドン": 1007,
  "ミライドン": 1008,
  "ウネルミナモ": 1009,
  "テツノイサハ": 1010,
  "カミッチュ": 1011,
  "チャデス": 1012,
  "ヤバソチャ": 1013,
  "イイネイヌ": 1014,
  "マシマシラ": 1015,
  "キチキギス": 1016,
  "オーガポン": 1017,
  "ブリジュラス": 1018,
  "カミツオロチ": 1019,
  "ウガツホムラ": 1020,
  "タケルライコ": 1021,
  "テツノイワオ": 1022,
  "テツノカシラ": 1023,
  "テラパゴス": 1024,
  "モモワロウ": 1025,
};

export const pokedexGetById = (pokedexId: number): PokedexEntry| null => {
  const data = POKEDEX.find((entry => entry.id === pokedexId));
  
  if(data) {
    return data;
  } else {
    return null;
  }
}

export const pokedexGetByName = (pokemon: string): PokedexEntry| null => {
  const data = POKEDEX.find((entry => entry.name === pokemon));
  
  if(data) {
    return data;
  } else {
    return null;
  }

}

main().catch(console.error)
