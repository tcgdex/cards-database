import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Celebi ex",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		251,
	],
	hp: 70,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Spiral Leaf",
			},
			effect: {
				en: "Flip a coin. If heads, put 1 damage counter on each of your opponent's Pokemon. If tails, remove 1 damage country for each of your Pokémon.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Time Trap",
			},
			effect: {
				en: "Flip a coin. If heads, look at the top 4 cards of your opponent's deck, and put them back on top of your opponent's deck in any order. If tails, look at the top 4 cards of your deck, and put them back on top of your deck in any order.",
			},
			damage: 30,

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
