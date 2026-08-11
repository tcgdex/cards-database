import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Ursaring",
		'fr-fr': "Ursaring",
		'es-es': "Ursaring",
		'it-it': "Ursaring",
		'pt-br': "Ursaring",
		'de-de': "Ursaring"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		217,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Teddiursa",
		'fr-fr': "Teddiursa",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Adrenalash",
				'fr-fr': "Adrénarush",
			},
			effect: {
				'en-us': "During your next turn, each of this Pokémon's attacks does 50 more damage (before applying Weakness and Resistance).",
				'fr-fr': "Pendant votre prochain tour, chaque attaque de ce Pokémon inflige 50 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			},
			damage: 50,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Strength",
				'fr-fr': "Force",
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "In its territory, it leaves scratches on trees that bear delicious berries or fruits.",
	},

	thirdParty: {
		cardmarket: 281097,
		tcgplayer: 90258
	}
}

export default card
