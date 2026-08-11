import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Totodile",
		'fr-fr': "Kaiminus",
		'de-de': "Karnimani"
	},

	illustrator: "kawayoo",
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
			],
			name: {
				'en-us': "Gnaw",
				'fr-fr': "Ronge",
				'de-de': "Nagen"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Wave Splash",
				'fr-fr': "Grosse vague",
				'de-de': "Wellenplatscher"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its powerful, well-developed jaws are capable of crushing anything. Even its trainer must be careful."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90000,
				cardmarket: 279058
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 90000,
				cardmarket: 279058
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
