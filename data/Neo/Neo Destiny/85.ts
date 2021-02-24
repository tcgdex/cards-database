import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Totodile",
	},
	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		158,
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
				en: "Water Gun",
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Energy attached to Totodile but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
