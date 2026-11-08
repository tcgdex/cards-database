import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Crabrawler",
		'fr-fr': "Crabagarre",
		'es-es': "Crabrawler",
		'it-it': "Crabrawler",
		'pt-br': "Crabrawler",
		'de-de': "Krabbox"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		739,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Jab",
				'fr-fr': "Taquet",
				'es-es': "Puya",
				'it-it': "Stoccata",
				'pt-br': "Murro",
				'de-de': "Boxschlag"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Confront",
				'fr-fr': "Confrontation",
				'es-es': "Confrontar",
				'it-it': "Confronto",
				'pt-br': "Confrontar",
				'de-de': "Konfrontieren"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its hard pincers are well suited to both offense and defense. Fights between two Crabrawler are like boxing matches.",
	},

	thirdParty: {
		cardmarket: 408254,
		tcgplayer: 201154
	}
}

export default card
