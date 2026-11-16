#!/usr/bin/env bun

import fs from 'fs'
import path from 'path'

const SCRIPT_DIR = __dirname
const CAMEO_DB_PATH = path.join(SCRIPT_DIR, 'cameo-database.json')

interface CameoCardRecord {
	setName: string
	localId: string
	cardName: string
	cameoDexIds: number[]
	generations?: number[]
}

interface CameoDatabase {
	source: string
	sourceFile: string
	generatedAt: string
	throughEnglishSet?: string | null
	throughJapaneseSet?: string | null
	cards: CameoCardRecord[]
}

function printHeader(title: string) {
	console.log('')
	console.log('='.repeat(72))
	console.log(title)
	console.log('='.repeat(72))
}

function main() {
	if (!fs.existsSync(CAMEO_DB_PATH)) {
		console.error(`[x] Missing cameo database: ${CAMEO_DB_PATH}`)
		process.exit(1)
	}

	const database = JSON.parse(fs.readFileSync(CAMEO_DB_PATH, 'utf-8')) as CameoDatabase
	const cards = database.cards || []
	const uniqueDexIds = new Set<number>()
	const generationCounts = new Map<number, number>()
	const perSetCounts = new Map<string, number>()

	for (const card of cards) {
		for (const cameoDexId of card.cameoDexIds || []) {
			if (Number.isFinite(cameoDexId)) {
				uniqueDexIds.add(cameoDexId)
			}
		}

		for (const generation of card.generations || []) {
			generationCounts.set(generation, (generationCounts.get(generation) || 0) + 1)
		}

		perSetCounts.set(card.setName, (perSetCounts.get(card.setName) || 0) + 1)
	}

	console.log(`Source: ${database.source}`)
	console.log(`Generated: ${database.generatedAt}`)
	if (database.throughEnglishSet) {
		console.log(`English coverage through: ${database.throughEnglishSet}`)
	}
	if (database.throughJapaneseSet) {
		console.log(`Japanese coverage through: ${database.throughJapaneseSet}`)
	}

	printHeader('Global totals')
	console.log(`Total cards with cameos: ${cards.length}`)
	console.log(`Unique cameo Pokemon dex IDs: ${uniqueDexIds.size}`)

	printHeader('Cards per generation')
	for (const [generation, count] of Array.from(generationCounts.entries()).sort((a, b) => a[0] - b[0])) {
		console.log(`Gen ${generation}: ${count}`)
	}

	const topCards = [...cards]
		.sort((left, right) => {
			if (right.cameoDexIds.length !== left.cameoDexIds.length) {
				return right.cameoDexIds.length - left.cameoDexIds.length
			}
			const setCmp = left.setName.localeCompare(right.setName)
			if (setCmp !== 0) {
				return setCmp
			}
			return left.localId.localeCompare(right.localId)
		})
		.slice(0, 50)

	printHeader('Top 50 cards by cameo count')
	for (const card of topCards) {
		console.log(`${card.setName} ${card.localId} \"${card.cardName}\" (${card.cameoDexIds.length} cameos)`)
	}

	printHeader('Per-set cameo card counts')
	const perSetSorted = Array.from(perSetCounts.entries()).sort((left, right) => {
		if (right[1] !== left[1]) {
			return right[1] - left[1]
		}
		return left[0].localeCompare(right[0])
	})

	for (const [setName, count] of perSetSorted) {
		console.log(`${setName}: ${count}`)
	}
}

main()
