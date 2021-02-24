import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Seel",
	},
	illustrator: "Toshinao Aoki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		86,
	],
	hp: 50,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Horn Hazard",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
			},
			damage: 30,

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
