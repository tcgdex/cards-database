import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Mudkip",
		'fr-fr': "Gobou",
		'de-de': "Hydropi"
	},

	illustrator: "Emi Yoshida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		258,
	],

	hp: 60,

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
				'en-us': "Mud Spatter",
				'fr-fr': "Éclaboussure de boue",
				'de-de': "Lehmspritzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Endeavor",
				'fr-fr': "Effort",
				'de-de': "Notsituation"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage plus 20 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque face.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 30 Schadenspunkte plus 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "To alert it, the fin on its head senses the flow of water. It has the strength to heft boulders.",
	},

	thirdParty: {
		cardmarket: 277982,
		tcgplayer: 87614
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
