import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Krabby",
		'fr-fr': "Krabby",
		'es-es': "Krabby",
		'it-it': "Krabby",
		'pt-br': "Krabby",
		'de-de': "Krabby"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		98,
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
				'en-us': "Vice Grip",
				'fr-fr': "Force Poigne",
				'es-es': "Agarre",
				'it-it': "Presa",
				'pt-br': "Agarramento Viciado",
				'de-de': "Klammer"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Crabhammer",
				'fr-fr': "Pince-Masse",
				'es-es': "Martillazo",
				'it-it': "Martellata",
				'pt-br': "Martelo Caranguejo",
				'de-de': "Krabbhammer"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "If it senses danger approaching, it cloaks itself with bubbles from its mouth so it will look bigger.",
	},

	thirdParty: {
		cardmarket: 281816,
		tcgplayer: 94146
	}
}

export default card
