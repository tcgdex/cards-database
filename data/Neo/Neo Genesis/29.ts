import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Bayleef",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		153,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Chikorita",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sweet Scent",
			},
			effect: {
				en: "Flip a coin. If heads and if any of your Pokémon have any damage counters on them, then remove 2 damage counters from 1 of them (or 1 if it only has 1). If tails and if any of your opponent's Pokémon have any damage counters on them, choose 1 of them and remove 2 damage counters from it (or 1 if it only has 1).",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Double Razor Leaf",
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 damage times the number of heads.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
