import fs from 'fs'
import path from 'path'
import ts from 'typescript'
import { glob } from 'glob'
import { extractFile } from './utils/ts-extract-utils'

const workspaceRoot = path.resolve(__dirname, '..', '..', '..', '..')
const cardsRoot = path.resolve(__dirname, '..', 'data')
const patchesRoot = path.join(
	workspaceRoot,
	'poke-browser',
	'export',
	'tcgdex-fr-patches'
)
const incompleteLogPath = path.join(
	workspaceRoot,
	'poke-browser',
	'export',
	'tcgdex-fr-incomplete.json'
)

const API_BASE = 'http://localhost:3000/api/v1/datasources/pokepedia-fr/cards'
const CONCURRENCY = 5 // Number of parallel API requests
const DELAY_MS = 100 // Delay between batches to avoid overwhelming the server
const argv = process.argv.slice(2)
const SAMPLE_MODE = argv.includes('--sample')
const CARD_FILTER_INDEX = argv.findIndex((arg) => arg === '--card')
const CARD_FILTER = CARD_FILTER_INDEX >= 0 ? argv[CARD_FILTER_INDEX + 1] : undefined

// Cache for sets without French releases (to avoid repeated checks)
const setsWithoutFrenchRelease = new Set<string>()

function ensureDirectory(target: string) {
	fs.mkdirSync(target, { recursive: true })
}

function findDefaultExportObject(sourceFile: ts.SourceFile): ts.ObjectLiteralExpression | null {
	let found: ts.ObjectLiteralExpression | null = null

	function visit(node: ts.Node) {
		if (ts.isExportAssignment(node) && !node.isExportEquals) {
			if (ts.isObjectLiteralExpression(node.expression)) {
				found = node.expression
				return
			}
			if (ts.isIdentifier(node.expression)) {
				const declaration = findVariableDeclaration(sourceFile, node.expression.text)
				if (declaration && declaration.initializer && ts.isObjectLiteralExpression(declaration.initializer)) {
					found = declaration.initializer
					return
				}
			}
		}
		if (!found) ts.forEachChild(node, visit)
	}

	function findVariableDeclaration(source: ts.SourceFile, name: string): ts.VariableDeclaration | null {
		let variable: ts.VariableDeclaration | null = null
		function walk(node: ts.Node) {
			if (ts.isVariableStatement(node)) {
				for (const declaration of node.declarationList.declarations) {
					if (ts.isVariableDeclaration(declaration) && declaration.name.getText() === name) {
						variable = declaration
						return
					}
				}
			}
			if (!variable) ts.forEachChild(node, walk)
		}
		walk(source)
		return variable
	}

	visit(sourceFile)
	return found
}

function getPropertyName(name: ts.PropertyName): string | null {
	if (ts.isIdentifier(name) || ts.isStringLiteral(name) || ts.isNumericLiteral(name)) {
		return name.text
	}
	return null
}

function findClosingBrace(text: string, start: number): number {
	let depth = 0
	for (let i = start; i < text.length; i++) {
		const char = text[i]
		if (char === '{') {
			depth++
		} else if (char === '}') {
			depth--
			if (depth === 0) {
				return i
			}
		}
	}
	return -1
}

function computePropertyIndentation(text: string, nameObject: ts.ObjectLiteralExpression, braceStart: number): string {
	if (nameObject.properties.length > 0) {
		const firstProperty = nameObject.properties[0]
		return getIndentationBefore(text, firstProperty.getStart())
	}
	return getIndentationBefore(text, braceStart + 1)
}

function getIndentationBefore(text: string, position: number): string {
	const lineStart = text.lastIndexOf('\n', position) + 1
	const match = text.slice(lineStart, position).match(/^\s*/)
	return match ? match[0] : ''
}

function normalizeLocalId(value: string): string {
	try {
		return decodeURIComponent(value)
	} catch {
		return value
	}
}

type CardInfo = {
	filePath: string
	relativePath: string
	setId: string
	localId: string
	tcgdexCard: TcgdexCard
}

type TcgdexCard = {
	name?: { en?: string; fr?: string }
	abilities?: Array<{ name?: { en?: string; fr?: string }; effect?: { en?: string; fr?: string } }>
	attacks?: Array<{ name?: { en?: string; fr?: string }; effect?: { en?: string; fr?: string }; type?: string }>
	evolveFrom?: { en?: string; fr?: string }
	description?: { en?: string; fr?: string }
	effect?: { en?: string; fr?: string }
}

type LocalizedString = { fr?: string }

type CardDetailResponse = {
	nameLocalized?: LocalizedString
	evolveFrom?: LocalizedString
	description?: LocalizedString
	effectText?: LocalizedString
	abilities?: Array<{ name?: LocalizedString; effect?: LocalizedString }>
	attacks?: Array<{ name?: LocalizedString; effect?: LocalizedString; type?: string }>
}

type PathSegment = string | number

type PatchState = {
	text: string
	sourceFile: ts.SourceFile
	filePath: string
}

type IncompleteCard = {
	cardId: string
	relativePath: string
	reason: string
	missingFields: string[]
}

async function fetchCardDetail(setId: string, localId: string): Promise<CardDetailResponse | null> {
	const cardId = `${setId}-${localId}`
	const url = `${API_BASE}/${encodeURIComponent(cardId)}`

	try {
		const response = await fetch(url, { signal: AbortSignal.timeout(30000) })
		if (!response.ok) {
			return null
		}
		return (await response.json()) as CardDetailResponse
	} catch {
		return null
	}
}

/**
 * Check if a set has a French release using the poke-browser API.
 * Returns true if the set has a French release, false otherwise.
 * Returns true (default) if unable to determine from API.
 */
async function setHasFrenchRelease(setId: string): Promise<boolean> {
	// Check cache first
	if (setsWithoutFrenchRelease.has(setId)) {
		return false
	}

	try {
		const setUrl = `http://localhost:3000/api/v1/datasources/pokepedia-fr/sets/${encodeURIComponent(setId)}`
		const response = await fetch(setUrl, { signal: AbortSignal.timeout(10000) })
		
		if (!response.ok) {
			console.warn(`[SET CHECK] Could not fetch set info for ${setId}, assuming it has French release`)
			return true
		}

		const setData = await response.json()
		
		// Check if the API returned hasFrenchRelease field
		if (typeof setData.hasFrenchRelease === 'boolean') {
			if (!setData.hasFrenchRelease) {
				console.log(`[SET CHECK] Set ${setId}: API reports no French release`)
				setsWithoutFrenchRelease.add(setId)
				return false
			}
			return true
		}

		// If hasFrenchRelease is not present, assume it has a French release
		// This prevents false negatives for sets we haven't mapped yet
		return true
	} catch (error) {
		console.warn(`[SET CHECK] Error checking French release for set ${setId}:`, error)
		// Default to true (has French release) to avoid false negatives
		return true
	}
}

/**
 * Check if the API response provides complete French translations for all
 * abilities and attacks that exist in the TCGdex card.
 * Returns { complete: true } if all translations are available,
 * or { complete: false, missingFields: [...] } if some are missing.
 */
function checkTranslationCompleteness(
	tcgdexCard: TcgdexCard,
	apiResponse: CardDetailResponse
): { complete: true } | { complete: false; missingFields: string[] } {
	const missingFields: string[] = []

	// Check card name
	if (!apiResponse.nameLocalized?.fr) {
		missingFields.push('name.fr')
	}

	// Check abilities - must have same count and all translated
	const tcgdexAbilities = tcgdexCard.abilities ?? []
	const apiAbilities = apiResponse.abilities ?? []

	if (tcgdexAbilities.length > 0) {
		if (apiAbilities.length !== tcgdexAbilities.length) {
			missingFields.push(`abilities count mismatch (tcgdex: ${tcgdexAbilities.length}, api: ${apiAbilities.length})`)
		} else {
			for (let i = 0; i < tcgdexAbilities.length; i++) {
				const tcgdexAbility = tcgdexAbilities[i]
				const apiAbility = apiAbilities[i]

				// Check if ability name needs translation
				if (tcgdexAbility.name?.en && !tcgdexAbility.name?.fr) {
					if (!apiAbility?.name?.fr) {
						missingFields.push(`abilities[${i}].name.fr (${tcgdexAbility.name.en})`)
					}
				}

				// Check if ability effect needs translation
				if (tcgdexAbility.effect?.en && !tcgdexAbility.effect?.fr) {
					if (!apiAbility?.effect?.fr) {
						missingFields.push(`abilities[${i}].effect.fr`)
					}
				}
			}
		}
	}

	// Check attacks - must have same count and all translated
	const tcgdexAttacks = tcgdexCard.attacks ?? []
	const apiAttacks = apiResponse.attacks ?? []

	if (tcgdexAttacks.length > 0) {
		if (apiAttacks.length !== tcgdexAttacks.length) {
			missingFields.push(`attacks count mismatch (tcgdex: ${tcgdexAttacks.length}, api: ${apiAttacks.length})`)
		} else {
			for (let i = 0; i < tcgdexAttacks.length; i++) {
				const tcgdexAttack = tcgdexAttacks[i]
				const apiAttack = apiAttacks[i]

				// Check if attack name needs translation
				if (tcgdexAttack.name?.en && !tcgdexAttack.name?.fr) {
					if (!apiAttack?.name?.fr) {
						missingFields.push(`attacks[${i}].name.fr (${tcgdexAttack.name.en})`)
					}
				}

				// Check if attack effect needs translation (only if it has an effect)
				if (tcgdexAttack.effect?.en && !tcgdexAttack.effect?.fr) {
					if (!apiAttack?.effect?.fr) {
						missingFields.push(`attacks[${i}].effect.fr`)
					}
				}
			}
		}
	}

	// Check evolveFrom
	if (tcgdexCard.evolveFrom?.en && !tcgdexCard.evolveFrom?.fr) {
		if (!apiResponse.evolveFrom?.fr) {
			missingFields.push('evolveFrom.fr')
		}
	}

	// Check description
	if (tcgdexCard.description?.en && !tcgdexCard.description?.fr) {
		if (!apiResponse.description?.fr) {
			missingFields.push('description.fr')
		}
	}

	// Check effect (for Trainer/Energy cards)
	if (tcgdexCard.effect?.en && !tcgdexCard.effect?.fr) {
		if (!apiResponse.effectText?.fr) {
			missingFields.push('effect.fr')
		}
	}

	if (missingFields.length > 0) {
		return { complete: false, missingFields }
	}

	return { complete: true }
}

async function processBatch(
	cards: CardInfo[],
	incompleteCards: IncompleteCard[]
): Promise<Array<{ card: CardInfo; detail: CardDetailResponse }>> {
	const results: Array<{ card: CardInfo; detail: CardDetailResponse }> = []
	await Promise.all(
		cards.map(async (card) => {
			const detail = await fetchCardDetail(card.setId, card.localId)
			if (!detail) {
				incompleteCards.push({
					cardId: `${card.setId}-${card.localId}`,
					relativePath: card.relativePath,
					reason: 'Card not found on Pokepedia',
					missingFields: []
				})
				return
			}

			// Check if translation is complete
			const completeness = checkTranslationCompleteness(card.tcgdexCard, detail)
			if (!completeness.complete) {
				incompleteCards.push({
					cardId: `${card.setId}-${card.localId}`,
					relativePath: card.relativePath,
					reason: 'Incomplete French translation from Pokepedia',
					missingFields: completeness.missingFields
				})
				return
			}

			results.push({ card, detail })
		})
	)
	return results
}

function findObjectLiteralForPath(sourceFile: ts.SourceFile, path: PathSegment[]): ts.ObjectLiteralExpression | null {
	let current: ts.Node | null = findDefaultExportObject(sourceFile)
	if (!current) {
		return null
	}

	for (const segment of path) {
		if (typeof segment === 'string') {
			if (!ts.isObjectLiteralExpression(current)) {
				return null
			}
			const property = current.properties.find(
				(prop): prop is ts.PropertyAssignment =>
					ts.isPropertyAssignment(prop) && getPropertyName(prop.name) === segment && !!prop.initializer
			)
			if (!property) {
				return null
			}
			current = property.initializer
		} else {
			if (!ts.isArrayLiteralExpression(current)) {
				return null
			}
			const element = current.elements[segment]
			if (!element) {
				return null
			}
			current = element
		}
	}

	if (current && ts.isObjectLiteralExpression(current)) {
		return current
	}
	return null
}

function objectHasProperty(objectNode: ts.ObjectLiteralExpression, propName: string): boolean {
	return objectNode.properties.some((prop) => ts.isPropertyAssignment(prop) && getPropertyName(prop.name) === propName)
}

function ensureTrailingComma(text: string, insertPosition: number): { text: string; updatedPosition: number } {
	let pos = insertPosition - 1
	while (pos >= 0 && /\s/.test(text[pos])) {
		pos--
	}

	const lastChar = text[pos]
	if (lastChar && lastChar !== '{' && lastChar !== ',' && lastChar !== '\n') {
		text = text.slice(0, pos + 1) + ',' + text.slice(pos + 1)
		insertPosition++
	} else if (lastChar && lastChar !== '{' && lastChar !== ',') {
		// handle cases where lastChar is newline after trimming (should not happen)
		text = text.slice(0, pos + 1) + ',' + text.slice(pos + 1)
		insertPosition++
	}

	return { text, updatedPosition: insertPosition }
}

function insertPropertyIntoObject(
	text: string,
	objectNode: ts.ObjectLiteralExpression,
	propertyName: string,
	value: string,
	options?: { raw?: boolean }
): string | null {
	if (objectHasProperty(objectNode, propertyName)) {
		return null
	}

	const braceStart = text.indexOf('{', objectNode.getStart())
	if (braceStart === -1) {
		return null
	}

	const closingBrace = findClosingBrace(text, braceStart)
	if (closingBrace === -1) {
		return null
	}

	let insertPosition = text.lastIndexOf('\n', closingBrace) + 1
	const adjusted = ensureTrailingComma(text, insertPosition)
	text = adjusted.text
	insertPosition = adjusted.updatedPosition

	const propertyIndent = computePropertyIndentation(text, objectNode, braceStart)
	const propertyValue = options?.raw ? value : JSON.stringify(value)
	const propertyLine = `${propertyIndent}${propertyName}: ${propertyValue},\n`
	return text.slice(0, insertPosition) + propertyLine + text.slice(insertPosition)
}

function insertLocalizedObject(
	state: PatchState,
	path: PathSegment[],
	propertyName: string,
	value: string
): boolean {
	const target = findObjectLiteralForPath(state.sourceFile, path)
	if (!target) {
		return false
	}

	const updatedText = insertPropertyIntoObject(state.text, target, propertyName, value)
	if (!updatedText) {
		return false
	}

	state.text = updatedText
	state.sourceFile = ts.createSourceFile(state.filePath, state.text, ts.ScriptTarget.Latest, true)
	return true
}

function applyLocalizedProperty(
	state: PatchState,
	path: PathSegment[],
	value?: string
): boolean {
	if (!value) {
		return false
	}

	return insertLocalizedObject(state, path, 'fr', value)
}

function addNewLocalizedProperty(
	state: PatchState,
	propertyName: string,
	value?: string
): boolean {
	if (!value) {
		return false
	}

	const cardObject = findDefaultExportObject(state.sourceFile)
	if (!cardObject) {
		return false
	}

	const rawValue = `{\n\tfr: ${JSON.stringify(value)},\n\t}`
	const updatedText = insertPropertyIntoObject(state.text, cardObject, propertyName, rawValue, { raw: true })
	if (!updatedText) {
		return false
	}

	state.text = updatedText
	state.sourceFile = ts.createSourceFile(state.filePath, state.text, ts.ScriptTarget.Latest, true)
	return true
}

function applyProperty(
	state: PatchState,
	path: PathSegment[],
	propertyName: string,
	value?: string
): boolean {
	if (!value) {
		return false
	}

	const target = findObjectLiteralForPath(state.sourceFile, path)
	if (!target) {
		return false
	}

	const updatedText = insertPropertyIntoObject(state.text, target, propertyName, value)
	if (!updatedText) {
		return false
	}

	state.text = updatedText
	state.sourceFile = ts.createSourceFile(state.filePath, state.text, ts.ScriptTarget.Latest, true)
	return true
}

async function main() {
	// Check if backend is running
	try {
		const healthCheck = await fetch('http://localhost:3000/health', {
			signal: AbortSignal.timeout(5000)
		})
		if (!healthCheck.ok) {
			console.error('Backend health check failed. Please start the poke-browser backend server.')
			process.exit(1)
		}
	} catch {
		console.error('Backend is not running. Please start the poke-browser backend server:')
		console.error('  cd /path/to/poke-browser && ./scripts/manage-server.sh start')
		process.exit(1)
	}

	console.log('Backend is running. Scanning TCGdex for cards missing French translations...')

	// Clear output directory
	fs.rmSync(patchesRoot, { recursive: true, force: true })
	ensureDirectory(patchesRoot)

	// Find all card files (excluding Pokémon TCG Pocket)
	const allFiles = await glob('**/*.ts', {
		cwd: cardsRoot,
		absolute: true,
		followSymbolicLinks: false,
		ignore: ['**/Pokémon TCG Pocket/**']
	})

	// Collect cards missing French translations
	const cardsToProcess: CardInfo[] = []
	const sampleSets = new Set<string>()
	const skippedSets = new Set<string>()

	for (const filePath of allFiles) {
		const relativePath = path.relative(cardsRoot, filePath)
		const segments = relativePath.split(path.sep)
		if (segments.length < 3) {
			continue
		}

		const setDir = path.dirname(filePath)
		const setFilePath = path.join(path.dirname(setDir), `${path.basename(setDir)}.ts`)
		if (!fs.existsSync(setFilePath)) {
			continue
		}

		const setObject = extractFile(setFilePath)
		const setId = setObject?.id
		if (!setId) {
			continue
		}

		if (SAMPLE_MODE) {
			if (sampleSets.has(setId)) {
				continue
			}
			sampleSets.add(setId)
		}

		// Check if set has French release (with caching)
		if (!skippedSets.has(setId) && !setsWithoutFrenchRelease.has(setId)) {
			const hasFrenchRelease = await setHasFrenchRelease(setId)
			if (!hasFrenchRelease) {
				skippedSets.add(setId)
				console.log(`[SKIP] Set ${setId}: no French release, skipping all cards`)
			}
		}

		// Skip sets without French releases
		if (skippedSets.has(setId) || setsWithoutFrenchRelease.has(setId)) {
			continue
		}

		const cardObject = extractFile(filePath) as TcgdexCard | null
		if (!cardObject) {
			continue
		}
		
		// Skip if already has French translation for name
		if (cardObject.name && cardObject.name.fr) {
			continue
		}

		const localIdRaw = path.basename(filePath, '.ts')
		const localId = normalizeLocalId(localIdRaw)

		if (CARD_FILTER) {
			const cardId = `${setId}-${localId}`
			if (cardId !== CARD_FILTER) {
				continue
			}
		}

		cardsToProcess.push({
			filePath,
			relativePath,
			setId,
			localId,
			tcgdexCard: cardObject
		})
	}

	console.log(`Found ${cardsToProcess.length} cards missing French translations`)
	console.log(`Processing in batches of ${CONCURRENCY}...`)

	let patchCount = 0
	let processedCount = 0
	const incompleteCards: IncompleteCard[] = []

	// Process in batches
	for (let i = 0; i < cardsToProcess.length; i += CONCURRENCY) {
		const batch = cardsToProcess.slice(i, i + CONCURRENCY)
		const results = await processBatch(batch, incompleteCards)
		
		for (const { card, detail } of results) {
			const originalText = fs.readFileSync(card.filePath, 'utf-8')
			const state: PatchState = {
				text: originalText,
				sourceFile: ts.createSourceFile(card.filePath, originalText, ts.ScriptTarget.Latest, true),
				filePath: card.filePath
			}

			let patched = false
			// Apply all French translations
			patched = applyLocalizedProperty(state, ['name'], detail.nameLocalized?.fr) || patched
			const descriptionPatched =
				applyLocalizedProperty(state, ['description'], detail.description?.fr) ||
				addNewLocalizedProperty(state, 'description', detail.description?.fr)
			const effectPatched =
				applyLocalizedProperty(state, ['effect'], detail.effectText?.fr) ||
				addNewLocalizedProperty(state, 'effect', detail.effectText?.fr)
			const evolvePatched =
				applyLocalizedProperty(state, ['evolveFrom'], detail.evolveFrom?.fr) ||
				addNewLocalizedProperty(state, 'evolveFrom', detail.evolveFrom?.fr)
			patched = descriptionPatched || effectPatched || evolvePatched || patched

			for (let idx = 0; idx < (detail.abilities ?? []).length; idx++) {
				const ability = detail.abilities![idx]
				patched = applyLocalizedProperty(state, ['abilities', idx, 'name'], ability?.name?.fr) || patched
				patched = applyLocalizedProperty(state, ['abilities', idx, 'effect'], ability?.effect?.fr) || patched
			}

			for (let idx = 0; idx < (detail.attacks ?? []).length; idx++) {
				const attack = detail.attacks![idx]
				patched = applyLocalizedProperty(state, ['attacks', idx, 'name'], attack?.name?.fr) || patched
				patched = applyLocalizedProperty(state, ['attacks', idx, 'effect'], attack?.effect?.fr) || patched
				patched = applyProperty(state, ['attacks', idx], 'type', attack?.type) || patched
			}

			if (patched) {
				const patchPath = path.join(patchesRoot, card.relativePath)
				ensureDirectory(path.dirname(patchPath))
				fs.writeFileSync(patchPath, state.text, 'utf-8')
				patchCount++
				console.log(`[${patchCount}] Patched ${card.relativePath}`)
			}
		}
		
		processedCount += batch.length
		
		// Progress update every 100 cards
		if (processedCount % 100 === 0 || processedCount === cardsToProcess.length) {
			console.log(`Progress: ${processedCount}/${cardsToProcess.length} (${patchCount} complete, ${incompleteCards.length} incomplete)`)
		}
		
		// Small delay between batches
		if (i + CONCURRENCY < cardsToProcess.length) {
			await new Promise(resolve => setTimeout(resolve, DELAY_MS))
		}
	}

	// Write incomplete cards log
	fs.writeFileSync(incompleteLogPath, JSON.stringify({
		generatedAt: new Date().toISOString(),
		totalIncomplete: incompleteCards.length,
		cards: incompleteCards
	}, null, 2), 'utf-8')

	console.log('\n=== Summary ===')
	console.log(`Total cards scanned: ${allFiles.length}`)
	console.log(`Sets without French release (skipped): ${setsWithoutFrenchRelease.size}`)
	if (setsWithoutFrenchRelease.size > 0) {
		console.log(`  Sets: ${Array.from(setsWithoutFrenchRelease).join(', ')}`)
	}
	console.log(`Total cards missing FR (after filtering): ${cardsToProcess.length}`)
	console.log(`Successfully patched (complete): ${patchCount}`)
	console.log(`Incomplete (skipped): ${incompleteCards.length}`)
	console.log(`Output directory: ${patchesRoot}`)
	console.log(`Incomplete cards log: ${incompleteLogPath}`)
}

main().catch((error) => {
	console.error('Error generating patches:', error)
	process.exit(1)
})
