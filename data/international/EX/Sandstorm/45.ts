import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Lombre",
		'fr-fr': "Lombre",
		'de-de': "Lombrero"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [271],

	hp: 60,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Lotad",
		'fr-fr': "Nenupiot"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Rain Dish",
				'fr-fr': "Cuvette",
				'de-de': "Rain Dish"
			},
			effect: {
				'en-us': "At any time between turns, remove 1 damage counter from Lombre.",
				'fr-fr': "N'importe quand entre deux tours, retirez à Lombre un marqueur de dégât.",
				'de-de': "At any time between turns, remove 1 damage counter from Lombre."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Double Scratch",
				'fr-fr': "Double écorchure",
				'de-de': "Double Scratch"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez deux pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de face.",
				'de-de': "Flip 2 coins. This attack does 30 damage times the number of heads."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275822,
				tcgplayer: 86814
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275822,
				tcgplayer: 86814
			}
		},
		{
			type: "normal",
			stamp: ["michael-gonzalez"],
			thirdParty: {
				cardmarket: 871527,
				tcgplayer: 477545
			}
		},
	],

}

export default card
