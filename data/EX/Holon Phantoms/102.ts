import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Gyarados Star δ",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		130,
	],
	hp: 80,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Spiral Growth",
			},
			effect: {
				en: "Flip a coin until you get tails. For each heads, search your discard pile for a basic Energy card and attach it to Gyarados Star.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "All-out Blast",
			},
			effect: {
				en: "Discard cards from the top of your deck until you have 1 card left. This attack does 50 damage plus 20 more damage for each Energy card you discarded in this way.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
