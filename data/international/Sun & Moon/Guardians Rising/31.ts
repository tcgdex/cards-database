import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Snorunt",
		'fr-fr': "Stalgamin",
		'es-es': "Snorunt",
		'it-it': "Snorunt",
		'pt-br': "Snorunt",
		'de-de': "Schneppke"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		361,
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
				'en-us': "Chilly",
				'fr-fr': "Glacial",
				'es-es': "Fresquito",
				'it-it': "Addiaccio",
				'pt-br': "Frio",
				'de-de': "Frösteln"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Frost Breath",
				'fr-fr': "Souffle Glacé",
				'es-es': "Vaho Gélido",
				'it-it': "Alitogelido",
				'pt-br': "Respiração de Gelo",
				'de-de': "Eisesodem"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Their numbers seem to have rapidly increased in Alola. Custom has it that houses where Snorunt live will be prosperous for generations to come.",
	},

	thirdParty: {
		cardmarket: 297493,
		tcgplayer: 130931
	}
}

export default card
