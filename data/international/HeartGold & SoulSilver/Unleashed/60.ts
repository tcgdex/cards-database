import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Riolu",
		'fr-fr': "Riolu",
		'de-de': "Riolu"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [447],

	hp: 60,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Kick",
				'fr-fr': "Koud’pied",
				'de-de': "Tritt"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Double Chop",
				'fr-fr': "Double coup",
				'de-de': "Doppelschlag"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They communicate with one another using their auras. They are able to run all through the night."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88757,
				cardmarket: 279216
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88757,
				cardmarket: 279216
			}
		},
		{
			type: "normal",
			stamp: ["snowflake"],
			languages: ["de"],
		}
	],

}

export default card
