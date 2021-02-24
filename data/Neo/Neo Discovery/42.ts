import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Metapod",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		11,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Caterpie",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Harden",
			},
			effect: {
				en: "During your opponent's next turn, whenever 20 or less damage is done to Metapod (after applying Weakness and Resistance), prevent that damage. (Any other effects of attacks still happen.)",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Hatch",
			},
			effect: {
				en: "Flip a coin. If heads, remove all damage counters from Metapod. Then, search your deck for a card that evolves from Metapod and attach that card to Metapod. This counts as evolving Metapod. Shuffle your deck afterward.",
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
