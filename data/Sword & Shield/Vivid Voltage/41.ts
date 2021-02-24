import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Arrokuda",
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 60,
	types: [
		"Water",
	],




	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flock",
			},
			effect: {
				en: "Search your deck for up to 2 Arrokuda and put them onto your Bench. Then, shuffle your deck.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Peck",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
