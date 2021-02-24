import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Bulbasaur",
		fr: "Bulbizarre",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		1,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Vine Whip",
				fr: "Fouet lianes",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
