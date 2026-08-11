import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Shuppet",
		'fr-fr': "Polichombr",
	},
	illustrator: "sui",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		353,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Headbutt",
				'fr-fr': "Coup d’Boule",
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Will-O-Wisp",
				'fr-fr': "Feu Follet",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,




	description: {
		'en-us': "It loves vengeful emotions and hangs in rows under the eaves of houses where vengeful people live.",
	},
}

export default card
