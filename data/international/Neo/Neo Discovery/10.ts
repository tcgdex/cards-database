import { Card } from 'models/database/card'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		'en-us': "Scizor",
		'fr-fr': "Cizayox",
		'de-de': "Scherox"
	},

	illustrator: "Kimiya Masago",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		212,
	],

	hp: 80,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Scyther",
		'fr-fr': "Insécateur"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],

			name: {
				'en-us': "False Swipe",
				'fr-fr': "Faux-Chage",
				'de-de': "False Swipe"
			},

			effect: {
				'en-us': "Does damage equal to half the Defending Pokémon's remaining HP (rounded down to the nearest 10).",
				'fr-fr': "Inflige des dégâts équivalents à la moitié des PV restants au Pokémon Défenseur (arrondis à la dizaine la plus proche.)",
				'de-de': "Does damage equal to half the Defending Pokémon's remaining HP (rounded down to the nearest 10)."
			},

			damage: "?"
		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],

			name: {
				'en-us': "Double Claw",
				'fr-fr': "Combo-griffe",
				'de-de': "Double Claw"
			},

			effect: {
				'en-us': "Flip 2 coins. This attack does 20 times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				'de-de': "Flip 2 coins. This attack does 20 damage times the number of heads."
			},

			damage: "20+"
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
			type: "Grass",
			value: "-30"
		},
	],
	retreat: 2,


	description: {
		'en-us': "It swings its eye patterned pincers up to scare its foes. This makes it look like it has three heads.",
		'fr-fr': "Il brandit ses pinces décorées d'yeux pour effrayer ses ennemis, qui ont l'impression qu'il a trois têtes."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274521,
				tcgplayer: 88956
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274521,
				tcgplayer: 88956
			}
		}
	]
}

export default card
