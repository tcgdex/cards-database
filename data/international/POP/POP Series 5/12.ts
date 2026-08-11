import { Card } from 'models/database/card'
import Set from '../POP Series 5'

const card: Card = {
	name: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [25],

	hp: 50,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Lightning Ball",
				'fr-fr': "Boule éclair"
			},

			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Thunderbolt",
				'fr-fr': "Tonnerre"
			},
			effect: {
				'en-us': "Discard all Energy cards attached to Pikachu.",
				'fr-fr': "Défaussez toutes les cartes Énergie attachées à Pikachu."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88085,
				cardmarket: 277494
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88085,
				cardmarket: 277494
			},
		},
	],

}

export default card
