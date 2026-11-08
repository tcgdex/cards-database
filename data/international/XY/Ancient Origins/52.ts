import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Ralts",
		'fr-fr': "Tarsal",
		'es-es': "Ralts",
		'it-it': "Ralts",
		'pt-br': "Ralts",
		'de-de': "Trasla"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		280,
	],

	hp: 60,

	types: [
		"Fairy",
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
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Magical Shot",
				'fr-fr': "Coup Magique",
				'es-es': "Disparo Mágico",
				'it-it': "Magicolpo",
				'pt-br': "Tiro Mágico",
				'de-de': "Magischer Schuss"
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

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is highly attuned to the emotions of people and Pokémon. It hides if it senses hostility.",
	},

	thirdParty: {
		cardmarket: 284233,
		tcgplayer: 101474
	}
}

export default card
