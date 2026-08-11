import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Sealeo",
		'fr-fr': "Phogleur",
		'es-es': "Sealeo",
		'it-it': "Sealeo",
		'pt-br': "Sealeo",
		'de-de': "Seejong"
	},

	illustrator: "miki kudo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		364,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Spheal",
		'fr-fr': "Obalie",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Rollout",
				'fr-fr': "Roulade",
				'es-es': "Desenrollar",
				'it-it': "Rotolamento",
				'pt-br': "Rolagem",
				'de-de': "Walzer"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ice Ball",
				'fr-fr': "Ball’Glace",
				'es-es': "Bola Hielo",
				'it-it': "Palla Gelo",
				'pt-br': "Bola de Gelo",
				'de-de': "Frostbeule"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It has a very sensitive nose. It touches new things with its nose to examine them.",
	},

	thirdParty: {
		cardmarket: 407904,
		tcgplayer: 201227
	}
}

export default card
