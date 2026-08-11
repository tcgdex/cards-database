import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Pansage",
		'fr-fr': "Feuillajou",
		'es-es': "Pansage",
		'it-it': "Pansage",
		'pt-br': "Pansage",
		'de-de': "Vegimak"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		511,
	],

	hp: 70,

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
				'en-us': "Vine Whip",
				'fr-fr': "Fouet Lianes",
				'es-es': "Látigo Cepa",
				'it-it': "Frustata",
				'pt-br': "Chicote de Vinha",
				'de-de': "Rankenhieb"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It shares the leaf on its head with weary-looking Pokémon. These leaves are known to relieve stress.",
	},

	thirdParty: {
		cardmarket: 299419,
		tcgplayer: 138282
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
