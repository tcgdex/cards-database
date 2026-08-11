import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Sandile",
		'fr-fr': "Mascaïman",
		'es-es': "Sandile",
		'it-it': "Sandile",
		'pt-br': "Sandile",
		'de-de': "Ganovil"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		551,
	],

	hp: 70,

	types: [
		"Darkness",
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
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Darkness Fang",
				'fr-fr': "Croc Obscur",
				'es-es': "Colmillo de Oscuridad",
				'it-it': "Oscurizanna",
				'pt-br': "Presa Sombria",
				'de-de': "Fänge der Dunkelheit"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It moves along below the sand's surface, except for its nose and eyes. A dark membrane shields its eyes from the sun.",
	},

	thirdParty: {
		cardmarket: 281406,
		tcgplayer: 88917
	}
}

export default card
