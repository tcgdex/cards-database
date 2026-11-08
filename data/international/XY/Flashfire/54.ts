import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Stunky",
		'fr-fr': "Moufouette",
		'es-es': "Stunky",
		'it-it': "Stunky",
		'pt-br': "Stunky",
		'de-de': "Skunkapuh"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		434,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Collect",
				'fr-fr': "Collecte",
				'es-es': "Coleccionar",
				'it-it': "Raccolta",
				'pt-br': "Coleta",
				'de-de': "Sammeln"
			},
			effect: {
				'en-us': "Draw a card.",
				'fr-fr': "Piochez une carte.",
				'es-es': "Roba 1 carta.",
				'it-it': "Pesca una carta.",
				'pt-br': "Compre um card.",
				'de-de': "Ziehe 1 Karte."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Spray Fluid",
				'fr-fr': "Fluide Éclaboussant",
				'es-es': "Fluido Rociado",
				'it-it': "Fluidospray",
				'pt-br': "Fluido Spray",
				'de-de': "Sprühwasser"
			},

			damage: 30,

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

	retreat: 1,

	description: {
		'en-us': "It sprays a foul fluid from its rear. Its stench spreads over a mile radius, driving Pokémon away.",
	},

	thirdParty: {
		cardmarket: 281536,
		tcgplayer: 91191
	}
}

export default card
