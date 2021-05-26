import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Furret",
		fr: "Fouinar"
	},
	illustrator: "tetsuya koizumi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 110,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Sentret",
		fr: "Fouinette"
	},



	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Feelin’ Fine",
				fr: "Mode Cool"
			},
			effect: {
				en: "Draw 3 cards.",
				fr: "Piochez 3 cartes."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tail Smash",
				fr: "Éclate-Queue"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien."
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
