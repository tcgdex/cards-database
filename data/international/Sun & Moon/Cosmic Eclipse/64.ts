import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Dewpider",
		'fr-fr': "Araqua",
		'es-es': "Dewpider",
		'it-it': "Dewpider",
		'pt-br': "Dewpider",
		'de-de': "Araqua"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		751,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'es-es': "Apisonar",
				'it-it': "Carica",
				'pt-br': "Aríete",
				'de-de': "Ramme"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wave Splash",
				'fr-fr': "Grosse Vague",
				'es-es': "Chapoteo Ondulante",
				'it-it': "Schizzi d’Onda",
				'pt-br': "Onda Borrifante",
				'de-de': "Wellenplatscher"
			},

			damage: 40,

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
		'en-us': "When two Dewpider meet, they display their water bubbles to each other. Then the one with the smaller bubble gets out of the other's way.",
	},

	thirdParty: {
		cardmarket: 407969,
		tcgplayer: 201239
	}
}

export default card
