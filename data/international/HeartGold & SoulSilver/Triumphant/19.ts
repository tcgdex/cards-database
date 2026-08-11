import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Dugtrio",
		'fr-fr': "Triopikeur",
		'de-de': "Digdri"
	},

	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [51],

	hp: 80,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Diglett",
		'fr-fr': "Taupiqueur"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Dig",
				'fr-fr': "Tunnel",
				'de-de': "Schaufler"
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sand Impact",
				'fr-fr': "Impact sablonneux",
				'de-de': "Sandiger Einschlag"
			},
			effect: {
				'en-us': "Flip a coin for each Fighting Energy attached to Dugtrio. This attack does 50 damage plus 20 more damage for each heads.",
				'fr-fr': "Lancez une pièce pour chaque Énergie Fighting attachée à Triopikeur. Cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires pour chaque côté face.",
				'de-de': "Wirf für jede an Digdri angelegte -Energie 1 Münze. Dieser Angriff fügt 50 Schadenspunkte plus 20 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "Extremely powerful, they can dig through even the hardest ground to a depth of over 60 miles."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85004,
				cardmarket: 279549
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279549,
				tcgplayer: 85004
			}
		},
	],

}

export default card
