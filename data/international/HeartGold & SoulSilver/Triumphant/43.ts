import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Magneton",
		'fr-fr': "Magneton",
		'de-de': "Magneton"
	},

	illustrator: "Noriko Hotta",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [82],

	hp: 80,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Magnemite",
		'fr-fr': "Magneti"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Speed Ball",
				'fr-fr': "Balle rapide",
				'de-de': "Geschwindigkeitsball"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tri Attack",
				'fr-fr': "Triplattaque",
				'de-de': "Triplette"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20×",

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
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The Magnemite are united by a magnetism so powerful, it dries all moisture in its vicinity."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87110,
				cardmarket: 279573
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279573,
				tcgplayer: 87110
			}
		},
		{
			type: "normal",
			stamp: ['gustavo-wada'],
			thirdParty: {
				tcgplayer: 480423
			}
		},
		{
			type: "normal",
			stamp: ['david-cohen'],
			thirdParty: {
				tcgplayer: 480424
			}
		},
	],

}

export default card
