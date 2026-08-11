import { Card } from 'models/database/card'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		'en-us': "Totodile",
		'fr-fr': "Kaiminus",
		'es-es': "Totodile",
		'it-it': "Totodile",
		'pt-br': "Totodile",
		'de-de': "Karnimani"
	},

	illustrator: "TOKIYA",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		158,
	],

	hp: 70,

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
				'en-us': "Water Gun",
				'fr-fr': "Pistolet à O",
				'es-es': "Pistola Agua",
				'it-it': "Pistolacqua",
				'pt-br': "Revólver d’Água",
				'de-de': "Aquaknarre"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
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
		'en-us': "It is small but rough and tough. It won't hesitate to take a bite out of anything that moves.",
	},

	thirdParty: {
		cardmarket: 302156,
		tcgplayer: 146671
	}
}

export default card
