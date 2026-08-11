import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Onix",
		'fr-fr': "Onix",
		'de-de': "Onix"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [95],

	hp: 90,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Swing Around",
				'fr-fr': "Balançoire",
				'de-de': "Gegenschwung"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 damage plus 20 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires pour chaque côté face.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 20 Schadenspunkte plus 20 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It twists and squirms through the ground. The thunderous roar of its tunneling echoes a long way."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87885,
				cardmarket: 279213
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87885,
				cardmarket: 279213
			}
		},
	],

}

export default card
