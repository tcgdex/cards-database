import { Card } from 'models/database/card'
import Set from '../Dragon Vault'

const card: Card = {
	name: {
		'en-us': "Dragonair",
		'fr-fr': "Draco",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		148,
	],

	hp: 70,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Dratini",
		'fr-fr': "Minidraco",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Healing Melody",
				'fr-fr': "Mélodie Apaisante",
			},
			effect: {
				'en-us': "Heal 10 damage from each of your Pokémon.",
				'fr-fr': "Soignez 10 dégâts à chacun de vos Pokémon.",
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Slam",
				'fr-fr': "Souplesse",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "If its body takes on an aura, the weather changes instantly. It is said to live in seas and lakes.",
	},

	thirdParty: {
		cardmarket: 281003,
		tcgplayer: 84903
	}
}

export default card
