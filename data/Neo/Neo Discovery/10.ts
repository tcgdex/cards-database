import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Scizor",
		fr: "Cizayox",
		de: "Scherox"
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
		en: "Scyther",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],

			name: {
				en: "False Swipe",
				fr: "Faux-Chage",
				de: "False Swipe"
			},

			effect: {
				en: "Does damage equal to half the Defending Pokémon's remaining HP (rounded down to the nearest 10).",
				fr: "Inflige des dégâts équivalents à la moitié des PV restants au Pokémon Défenseur (arrondis à la dizaine la plus proche.)",
				de: "Does damage equal to half the Defending Pokémon's remaining HP (rounded down to the nearest 10)."
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
				en: "Double Claw",
				fr: "Combo-griffe",
				de: "Double Claw"
			},

			effect: {
				en: "Flip 2 coins. This attack does 20 times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Flip 2 coins. This attack does 20 damage times the number of heads."
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

	description: {
		fr: "Il brandit ses pinces décorées d'yeux pour effrayer ses ennemis, qui ont l'impression qu'il a trois têtes."
	},

	thirdParty: {
		cardmarket: 274521,
		tcgplayer: 88956
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st edition"]
		}
	]
}

export default card
