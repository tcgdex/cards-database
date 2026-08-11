import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Swinub",
		'de-de': "Quiekel"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		220,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'de-de': "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rest",
				'de-de': "Rest"
			},
			effect: {
				'en-us': "Remove all Special Conditions and all damage counters from Swinub. Swinub is now Asleep.",
				'de-de': "Remove all Special Conditions and all damage counters from Swinub. Swinub is now Asleep."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276371,
				tcgplayer: 89702
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276371,
				tcgplayer: 89702
			},
		},
	],

}

export default card

