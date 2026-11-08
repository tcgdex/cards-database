import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Rowlet",
		'fr-fr': "Brindibou",
	},
	illustrator: "sui",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		722,
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
				'en-us': "Tackle",
				'fr-fr': "Charge",
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Leafage",
				'fr-fr': "Feuillage",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,




	description: {
		'en-us': "This wary Pokémon uses photosynthesis to store up energy during the day, while becoming active at night.",
	},
}

export default card
