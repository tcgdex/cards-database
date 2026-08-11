import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Pansage",
		'fr-fr': "Feuillajou",
		'es-es': "Pansage",
		'it-it': "Pansage",
		'pt-br': "Pansage",
		'de-de': "Vegimak"
	},

	illustrator: "Megumi Mizutani",
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
				"Colorless",
			],
			name: {
				'en-us': "Seed Bomb",
				'fr-fr': "Canon Graine",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This Pokémon dwells deep in the forest. Eating a leaf from its head whisks weariness away as if by magic.",
	},

	thirdParty: {
		cardmarket: 280231,
		tcgplayer: 87936
	}
}

export default card
