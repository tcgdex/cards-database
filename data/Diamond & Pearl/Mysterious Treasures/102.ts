import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Spheal",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		363,
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
				en: "Rollout",
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Hustle",
			},
			effect: {
				en: "Flip a coin. If heads, during your next turn, Spheal's Rollout attack's base damage is 40.",
			},

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "+10"
		},
	],





}

export default card
