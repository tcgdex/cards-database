import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Shellder",
	},
	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		90,
	],
	hp: 50,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Minimize",
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Shellder by attacks is reduced by 20 (after applying Weakness and Resistance).",
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Wave Splash",
			},

			damage: 10,

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
