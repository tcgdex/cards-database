import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Feebas",
		fr: "Barpau",
		de: "Barschwa"
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
				fr: "Charge",
				de: "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Ascension",
				fr: "Ascension",
				de: "Ascension"
			},
			effect: {
				en: "Search your deck for a card that evolves from Feebas and put it on Feebas. (This counts as evolving Feebas.) Shuffle your deck afterward.",
				fr: "Lancez une pièce. Si c'est face, choisissez dans votre deck une carte qui évolue de Barpau et placez-la sur Barpau. (Vous le faites ainsi évoluer.) Ensuite, mélangez votre deck.",
				de: "Search your deck for a card that evolves from Feebas and put it on Feebas. (This counts as evolving Feebas.) Shuffle your deck afterward."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276135,
		tcgplayer: 85401
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			foil: "energy",
		},
		{
			type: "normal",
			stamp: ["jeremy-maron"]
		}
	]
}

export default card
