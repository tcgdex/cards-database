import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Sentret",
		fr: "Fouinette",
	},
	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		161,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Grope",
				fr: "À l'aveuglette",
			},
			effect: {
				en: "Look at the top 2 cards of your deck, choose 1 of them, and put it into your hand. Put the other card on the bottom of your deck.",
				fr: "Regardez les 2 cartes du dessus de votre deck, choisissez-en 1 et placez-la dans votre main. Replacez l'autre carte au dessous de votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
