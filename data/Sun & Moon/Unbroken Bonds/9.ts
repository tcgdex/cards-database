import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Venonat",
		fr: "Mimitoss",
	},
	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		48,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Radar Eyes",
				fr: "Regard Radar",
			},
			effect: {
				en: "Look at the top 7 cards of your deck and put 1 of them into your hand. Shuffle the other cards back into your deck.",
				fr: "Regardez les 7 cartes du dessus de votre deck, puis ajoutez l’une d’entre elles à votre main. Mélangez les autres cartes avec votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flop",
				fr: "Flop",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
