import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Hoppip",
		'fr-fr': "Granivol",
		'es-es': "Hoppip",
		'it-it': "Hoppip",
		'pt-br': "Hoppip",
		'de-de': "Hoppspross"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		187,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'es-es': "Placaje",
				'it-it': "Azione",
				'pt-br': "Investida",
				'de-de': "Tackle"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It drifts on winds. It is said that when Hoppip gather in fields and mountains, spring is on the way.",
	},

	thirdParty: {
		cardmarket: 365578,
		tcgplayer: 178809
	}
}

export default card
