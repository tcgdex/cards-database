import { Card } from 'models/database/card'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		'en-us': "Sentret",
		'fr-fr': "Fouinette",
		'de-de': "Wiesor"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		161,
	],

	hp: 50,

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
				'en-us': "Scout",
				'fr-fr': "Espion",
				'de-de': "Späher"
			},
			effect: {
				'en-us': "Look at your opponent's hand.",
				'fr-fr': "Regardez la main de votre adversaire.",
				'de-de': "Schau dir die Karten auf der Hand deines gegners an."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'de-de': "Tackle"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It stands on its tail so it can see a long way. If it spots an enemy, it cries loudly to warn its kind.",
		'fr-fr': "Il se tient dressé sur sa queue pour voir les ennemis arriver de loin. A ce moment, il avertit ses amis."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274574,
				tcgplayer: 89061
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274574,
				tcgplayer: 89061
			}
		}
	]
}

export default card

