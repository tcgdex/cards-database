import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Feebas",
		fr: "Barpau"
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		349,
	],
	hp: 30,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Ascension",
				fr: "Ascension"
			},
			effect: {
				en: "Search your deck for a card that evolves from Feebas and put it on Feebas. (This counts as evolving Feebas.) Shuffle your deck afterward.",
				fr: "Lancez une pièce. Si c'est face, choisissez dans votre deck une carte qui évolue de Barpau et placez-la sur Barpau. (Vous le faites ainsi évoluer.) Ensuite, mélangez votre deck."
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
