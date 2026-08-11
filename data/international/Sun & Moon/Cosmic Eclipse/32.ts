import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Pignite",
		'fr-fr': "Grotichon",
		'es-es': "Pignite",
		'it-it': "Pignite",
		'pt-br': "Pignite",
		'de-de': "Ferkokel"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		499,
	],

	hp: 110,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Tepig",
		'fr-fr': "Gruikui",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'es-es': "Placaje",
				'it-it': "Azione",
				'pt-br': "Investida",
				'de-de': "Tackle"
			},

			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heat Crash",
				'fr-fr': "Tacle Feu",
				'es-es': "Golpe Calor",
				'it-it': "Marchiafuoco",
				'pt-br': "Choque de Calor",
				'de-de': "Brandstempel"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "The more it eats, the more fuel it has to make the fire in its stomach stronger. This fills it with even more power.",
	},

	thirdParty: {
		cardmarket: 407809,
		tcgplayer: 201210
	}
}

export default card
