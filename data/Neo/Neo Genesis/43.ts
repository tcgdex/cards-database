import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Phanpy",
		fr: "Phanpy",
		de: "Phanpy"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		231,
	],

	hp: 40,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				de: "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Endure",
				fr: "Ténacité",
				de: "Ausdauer"
			},
			effect: {
				en: "Flip a coin. If heads, then if, during your opponent's next turn, Phanpy would be Knocked Out by an attack, Phanpy isn't Knocked Out and its remaining HP become 10 instead.",
				fr: "Lancez une pièce. Si c'est face, alors, si pendant le prochain tour de votre adversaire, une attaque est supposée mettre Phanpy K.O., Phanpy n'est pas mis K.O. mais ses PV deviennent 10.",
				de: "Wirf eine Münze. Wenn Phanpy während des nächsten Zuges deines Gegners durch einen Angriff kampfunfähig gemacht würde und du „Kopf“ geworfen hast, wird Phanpy dann nicht kampfunfähig und seine verbleibenden KP gehen stattdessen auf 10."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		en: "It swings its long snout around playfully, but, because it is so strong, that can be dangerous.",
		fr: "Il balance sa longue trompe pour s'amuser, mais il est si fort que cela peut être dangereux.",
		de: "Es schwingt seine lange Schnauze neckisch herum, aber das kann gefährlich werden, weil es so stark ist."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274443,
				tcgplayer: 87995
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274443,
				tcgplayer: 87995
			}
		}
	]
}

export default card
