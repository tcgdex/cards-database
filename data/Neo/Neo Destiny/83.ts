import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Sunkern",
	},
	illustrator: "Etsuya Hattori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		191,
	],
	hp: 40,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rollout",
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Sunbathe",
			},
			effect: {
				en: "Flip a coin. If heads, remove all damage counters from Sunkern. Search your deck for a card that evolves from Sunkern and attach that card to Sunkern. This counts as evolving Sunkern. Shuffle your deck afterward.",
			},

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
