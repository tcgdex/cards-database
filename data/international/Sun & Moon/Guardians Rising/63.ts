import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Machop",
		'fr-fr': "Machoc",
		'es-es': "Machop",
		'it-it': "Machop",
		'pt-br': "Machop",
		'de-de': "Machollo"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		66,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Dynamic Chop",
				'fr-fr': "Coupe Dynamique",
				'es-es': "Golpe Dinámico",
				'it-it': "Dinamicolpo",
				'pt-br': "Golpe Dinâmico",
				'de-de': "Wuchthieb"
			},

			damage: 50,

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
		'en-us': "It loves working out. As it gazes at its muscles, which continue to swell day by day, it becomes more and more dedicated to its training.",
	},

	thirdParty: {
		cardmarket: 297523,
		tcgplayer: 130973
	}
}

export default card
