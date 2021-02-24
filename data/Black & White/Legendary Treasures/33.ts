import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		en: "Piplup",
	},
	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		393,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Splash",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
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
