import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Mareep",
	},
	illustrator: "Hizuki Misono",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		179,
	],
	hp: 40,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Charge",
			},
			effect: {
				en: "Attach 1 Energy card in your discard pile to Mareep.",
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Tail Slap",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
