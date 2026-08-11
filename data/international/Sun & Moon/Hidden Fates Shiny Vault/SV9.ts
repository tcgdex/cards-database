import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Wooper",
		'fr-fr': "Axoloto",
	},
	illustrator: "Misa Tsutsui",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		194,
	],
	hp: 70,
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
				'en-us': "Ram",
				'fr-fr': "Collision",
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Rain Splash",
				'fr-fr': "Pluie Éclaboussante",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,




	description: {
		'en-us': "When the temperature cools in the evening, they emerge from water to seek food along the shore.",
	},
}

export default card
