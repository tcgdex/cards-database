import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Ponyta",
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		77,
	],

	hp: 40,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Smash Kick",
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Flame Tail",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "Its hooves are 10 times harder than diamonds. It can trample anything flat in moments.",
	},

	thirdParty: {
		cardmarket: 274852,
		tcgplayer: 88282
	},

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	]
}

export default card
