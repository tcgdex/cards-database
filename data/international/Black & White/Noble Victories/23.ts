import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Palpitoad",
		'fr-fr': "Batracné",
		'es-es': "Palpitoad",
		'it-it': "Palpitoad",
		'pt-br': "Palpitoad",
		'de-de': "Mebrana"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		536,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Tympole",
		'fr-fr': "Tritonde",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Mud Shot",
				'fr-fr': "Tir de Boue",
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Round",
				'fr-fr': "Chant Canon",
			},
			effect: {
				'en-us': "Does 20 damage times the number of your Pokémon that have the Round attack.",
				'fr-fr': "Inflige 20 dégâts multipliés par le nombre de vos Pokémon possédant l'attaque Chant Canon.",
			},
			damage: 20,

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
		'en-us': "It lives in water and on land. It uses its long, sticky tongue to capture prey.",
	},

	thirdParty: {
		cardmarket: 280146,
		tcgplayer: 87922
	}
}

export default card
