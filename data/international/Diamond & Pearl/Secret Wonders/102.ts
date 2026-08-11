import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Ralts",
		'fr-fr': "Tarsal",
		'de-de': "Trasla"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		280,
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
				'en-us': "Smack",
				'fr-fr': "Claque",
				'de-de': "Klatscher"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Confuse Ray",
				'fr-fr': "Onde folie",
				'de-de': "Konfusstrahl"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verwirrt."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It uses the thorns on its head to sense human emotions. It is said to appear in front of cheerful people.",
	},

	thirdParty: {
		cardmarket: 277855,
		tcgplayer: 88561
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamp: ["jason-klaczynski"]
		}
	]
}

export default card
