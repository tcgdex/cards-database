import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Totodile",
		'fr-fr': "Kaiminus",
		'de-de': "Karnimani"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [158],

	hp: 60,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Tail",
				'fr-fr': "Hydroqueue",
				'de-de': "Nassschweif"
			},
			effect: {
				'en-us': "Flip a coin for each Water Energy attached to Totodile. This attack does 30 damage plus 20 more damage for each heads.",
				'fr-fr': "Lancez une pièce pour chaque Énergie Water attachée à Kaiminus. Cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque côté face.",
				'de-de': "Wirf eine Münze für jede an Karnimani angelegte -Energie. Dieser Angriff fügt 30 Schadenspunkte plus 20 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 2,

	description: {
		'en-us': "It is small but rough and tough. It won't hesitate to take a bite out of anything that moves.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90003,
				cardmarket: 279717
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 90003,
				cardmarket: 279717
			},
		},
	],

}

export default card
