import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Feebas",
		'fr-fr': "Barpau",
		'de-de': "Barschwa"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [349],

	hp: 30,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Ascension",
				'fr-fr': "Ascension",
				'de-de': "Ascension"
			},
			effect: {
				'en-us': "Search your deck for a card that evolves from Feebas and put it on Feebas. (This counts as evolving Feebas.) Shuffle your deck afterward.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez dans votre deck une carte qui évolue de Barpau et placez-la sur Barpau. (Vous le faites ainsi évoluer.) Ensuite, mélangez votre deck.",
				'de-de': "Search your deck for a card that evolves from Feebas and put it on Feebas. (This counts as evolving Feebas.) Shuffle your deck afterward."
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

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85401,
				cardmarket: 276135
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85401,
				cardmarket: 276135
			}
		},
		{
			type: "normal",
			stamp: ["jeremy-maron"],
			thirdParty: {
				tcgplayer: 477521,
				cardmarket: 871523
			}
		},
	]
}

export default card
