import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Baltoy",
		'fr-fr': "Balbuto",
		'de-de': "Puppance"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [343],

	hp: 50,

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
				'en-us': "Headbutt",
				'fr-fr': "Coup d'boule",
				'de-de': "Headbutt"
			},

			damage: 10,

		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'en-us': "Mud Slap",
				'fr-fr': "Coud'boue",
				'de-de': "Mud Slap"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83711,
				cardmarket: 276127
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 83711,
				cardmarket: 276127
			}
		},
	]
}

export default card
