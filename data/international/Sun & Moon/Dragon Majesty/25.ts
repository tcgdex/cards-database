import { Card } from 'models/database/card'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		'en-us': "Wooper",
		'fr-fr': "Axoloto",
		'es-es': "Wooper",
		'it-it': "Wooper",
		'pt-br': "Wooper",
		'de-de': "Felino"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
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
				'es-es': "Apisonar",
				'it-it': "Carica",
				'pt-br': "Aríete",
				'de-de': "Ramme"
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
				'es-es': "Golpe de Lluvia",
				'it-it': "Spruzzapioggia",
				'pt-br': "Chuva Borrifante",
				'de-de': "Regenplatscher"
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

	thirdParty: {
		cardmarket: 363497,
		tcgplayer: 175387
	}
}

export default card
