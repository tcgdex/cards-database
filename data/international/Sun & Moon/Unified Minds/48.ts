import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Dewpider",
		'fr-fr': "Araqua",
		'es-es': "Dewpider",
		'it-it': "Dewpider",
		'pt-br': "Dewpider",
		'de-de': "Araqua"
	},

	illustrator: "Atsuko Nishida",
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
				"Water",
			],
			name: {
				'en-us': "Rain Splash",
				'fr-fr': "Pluie Éclaboussante",
				'es-es': "Golpe de Lluvia",
				'it-it': "Spruzzapioggia",
				'pt-br': "Chuva Borrifante",
				'de-de': "Regenplatscher"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'es-es': "Mordisco",
				'it-it': "Morso",
				'pt-br': "Mordida",
				'de-de': "Biss"
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
		'en-us': "When two Dewpider meet, they display their water bubbles to each other. Then the one with the smaller bubble gets out of the other's way.",
	},

	thirdParty: {
		cardmarket: 388067,
		tcgplayer: 194971
	}
}

export default card
