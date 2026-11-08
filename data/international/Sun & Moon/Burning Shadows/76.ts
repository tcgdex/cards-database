import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Lycanroc",
		'fr-fr': "Lougaroc",
		'es-es': "Lycanroc",
		'it-it': "Lycanroc",
		'pt-br': "Lycanroc",
		'de-de': "Wolwerock"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		745,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Rockruff",
		'fr-fr': "Rocabot",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Rock Throw",
				'fr-fr': "Jet-Pierres",
				'es-es': "Lanzarrocas",
				'it-it': "Sassata",
				'pt-br': "Lançamento de Rocha",
				'de-de': "Steinwurf"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Accelerock",
				'fr-fr': "Vif Roc",
				'es-es': "Roca Veloz",
				'it-it': "Rocciarapida",
				'pt-br': "Rocha Veloz",
				'de-de': "Turbofelsen"
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its quick movements confuse its enemies. Well equipped with claws and fangs, it also uses the sharp rocks in its mane as weapons.",
	},

	thirdParty: {
		cardmarket: 299477,
		tcgplayer: 138562
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			foil: "cracked-ice",
	thirdParty: {
		tcgplayer: 173088
	},


		},
		{
			type: "reverse"
		}
	]
}

export default card
