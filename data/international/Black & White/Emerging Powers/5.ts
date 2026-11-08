import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Swadloon",
		'fr-fr': "Couverdure",
		'es-es': "Swadloon",
		'it-it': "Swadloon",
		'pt-br': "Swadloon",
		'de-de': "Folikon"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		541,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Sewaddle",
		'fr-fr': "Larveyette",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Gnaw",
				'fr-fr': "Ronge",
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Razor Leaf",
				'fr-fr': "Double Tranch'Herbe",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 50 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 50,

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
		'en-us': "It protects itself from the cold by wrapping up in leaves. It stays on the move, eating leaves in forests.",
	},

	thirdParty: {
		cardmarket: 279970,
		tcgplayer: 89665
	}
}

export default card
