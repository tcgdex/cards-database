import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Pidgey",
		'fr-fr': "Roucool",
		'de-de': "Taubsi"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	trainerType: "Supporter",
	set: Set,

	dexId: [16],

	hp: 40,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Peck",
				'fr-fr': "Koud'bec",
				'de-de': "Schnabel"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fury Strikes",
				'fr-fr': "Attaques furieuses",
				'de-de': "Zornschläge"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88047,
				cardmarket: 274998
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88047,
				cardmarket: 274998
			},
		},
	],
}

export default card
