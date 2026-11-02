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
		fr: "Insécateur",
		de: "Sichlor"
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
				de: "Trugschlag"
			},

			effect: {
				en: "Does damage equal to half the Defending Pokémon's remaining HP (rounded down to the nearest 10).",
				fr: "Inflige des dégâts équivalents à la moitié des PV restants au Pokémon Défenseur (arrondis à la dizaine la plus proche.)",
				de: "Fügt Schadenspunkte in Höhe der Hälfte der verbleibenden KP des verteidigenden Pokémon (auf die nächsten 10 abgerundet) zu."
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
				de: "Doppelkralle"
			},

			effect: {
				en: "Flip 2 coins. This attack does 20 times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				de: "Wirf zwei Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl „Kopf“ zu."
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
		en: "It swings its eye patterned pincers up to scare its foes. This makes it look like it has three heads.",
		fr: "Il brandit ses pinces décorées d'yeux pour effrayer ses ennemis, qui ont l'impression qu'il a trois têtes.",
		de: "Seine Kneifer haben Augen-Muster, um seine Feinde zu erschrecken. So wirkt es, als ob Scherox drei Köpfe hätte."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274521,
				tcgplayer: 88958
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274521,
				tcgplayer: 88958
			}
		}
	]
}

export default card

