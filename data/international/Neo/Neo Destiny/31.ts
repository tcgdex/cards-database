import { Card } from 'models/database/card'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		'en-us': "Chansey",
		'fr-fr': "Leveinard",
		'de-de': "Chaneira"
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		113,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Slap",
				'fr-fr': "Torgnoles",
				'de-de': "Doubleslap"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				'de-de': "Flip 2 coins. This attack does 20 damage times the number of heads."
			},
			damage: "20x",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],

			name: {
				'en-us': "Egg Toss",
				'fr-fr': "Lance Œuf",
				'de-de': "Egg Toss"
			},

			effect: {
				'en-us': "Flip 2 coins. If either of them is tails, this attack does nothing.",
				'fr-fr': "Lancez 2 pièces. Si vous obtenez un pile, cette attaque ne fait rien.",
				'de-de': "Flip 2 coins. If either of them is tails, this attack does nothing."
			},

			damage: 80
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
			value: "-30"
		},
	],
	retreat: 2,


	description: {
		'en-us': "It holds its egg carefully when moving so as not to break it. Still, it is fast enough to disappear in the blink of an eye.",
		'fr-fr': "Il serre précautionneusement son œuf pour ne pas le casser quand il bouge. Cependant, il reste assez rapide pour disparaître en un clin d'œil."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274683,
				tcgplayer: 84170
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274683,
				tcgplayer: 84170
			}
		}
	]
}

export default card
