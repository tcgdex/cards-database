import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Diglett",
		'fr-fr': "Taupiqueur",
		'de-de': "Digda"
	},

	illustrator: "Masako Yamashita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [50],

	hp: 40,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Fury Headbutt",
				'fr-fr': "Coud'boule furieux",
				'de-de': "Wilder Kopfstoß"
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
			type: "Grass",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84820,
				cardmarket: 274981
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84820,
				cardmarket: 274981
			},
		},
	],
}

export default card
