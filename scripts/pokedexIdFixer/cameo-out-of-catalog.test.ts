import { describe, expect, test } from 'bun:test'
import fs from 'fs'
import path from 'path'

const NOTES_PATH = path.join(import.meta.dir, 'cameo-out-of-catalog-sets.json')

const EXPECTED_SET_NAMES = [
	"Groundbreakers",
	"Next Quest",
]

const TRADING_FIGURE_GAME = new Set([
	"Groundbreakers",
	"Next Quest",
])

const ALLOWED_MARKETS = new Set(['Japan', 'China', 'Contest', 'Trading Figure Game'])

describe('cameo out-of-catalog notes', () => {
	test('lists exactly the sets that stay out of the catalog', () => {
		const parsed = JSON.parse(fs.readFileSync(NOTES_PATH, 'utf-8')) as {
			sets: Array<{ setName: string; market: string; reason: string }>
		}
		const names = parsed.sets.map((entry) => entry.setName)
		expect([...names].sort()).toEqual([...EXPECTED_SET_NAMES].sort())
		expect(new Set(names).size).toBe(EXPECTED_SET_NAMES.length)
		for (const entry of parsed.sets) {
			expect(entry.market.trim().length).toBeGreaterThan(0)
			expect(entry.reason.trim().length).toBeGreaterThan(0)
			expect(ALLOWED_MARKETS.has(entry.market)).toBe(true)
			if (TRADING_FIGURE_GAME.has(entry.setName)) {
				expect(entry.market).toBe('Trading Figure Game')
			} else {
				expect(entry.market).toBe('China')
			}
		}
	})
})
