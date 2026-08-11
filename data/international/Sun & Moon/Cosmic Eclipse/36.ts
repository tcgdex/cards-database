import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Litleo",
		'fr-fr': "Hélionceau",
		'es-es': "Litleo",
		'it-it': "Litleo",
		'pt-br': "Litleo",
		'de-de': "Leufeo"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		667,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'es-es': "Placaje",
				'it-it': "Azione",
				'pt-br': "Investida",
				'de-de': "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flame Tail",
				'fr-fr': "Queue de Flammes",
				'es-es': "Cola de Fuego",
				'it-it': "Codafiamma",
				'pt-br': "Cauda de Chamas",
				'de-de': "Flammenschweif"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "When they're young, they live with a pride. Once they're able to hunt prey on their own, they're kicked out and have to make their own way.",
	},

	thirdParty: {
		cardmarket: 407829,
		tcgplayer: 201213
	}
}

export default card
