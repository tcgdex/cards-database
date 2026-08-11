import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Phantump",
		'fr-fr': "Brocélôme",
		'es-es': "Phantump",
		'it-it': "Phantump",
		'pt-br': "Phantump",
		'de-de': "Paragoni"
	},

	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		708,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Mumble",
				'fr-fr': "Murmure",
				'es-es': "Farfullar",
				'it-it': "Borbottio",
				'pt-br': "Resmungo",
				'de-de': "Grummeln"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Spooky Shot",
				'fr-fr': "Tir Effrayant",
				'es-es': "Disparo Embrujado",
				'it-it': "Colpomistero",
				'pt-br': "Tiro Assustador",
				'de-de': "Spukschuss"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
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
		'en-us': "By imitating the voice of a child, it causes people to get hopelessly lost deep in the forest. It's trying to make friends with them.",
	},

	thirdParty: {
		cardmarket: 408109,
		tcgplayer: 201267
	}
}

export default card
