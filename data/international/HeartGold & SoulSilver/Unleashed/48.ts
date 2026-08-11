import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Chinchou",
		'fr-fr': "Loupio",
		'de-de': "Lampi"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [170],

	hp: 60,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'de-de': "Ramme"
			},

			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Lightning Ball",
				'fr-fr': "Boule éclair",
				'de-de': "Kugelblitz"
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

	retreat: 1,

	description: {
		'en-us': "It shoots positive and negative electricity between the tips of its two antennae and zaps its enemies."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84310,
				cardmarket: 279204
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84310,
				cardmarket: 279204
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
