import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Onix",
		'de-de': "Onix"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		95,
	],

	hp: 80,

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
				'en-us': "Horn Rush",
				'de-de': "Horn Rush"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'de-de': "Flip a coin. If tails, this attack does nothing."
			},
			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Granite Head",
				'de-de': "Granite Head"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to Onix by attacks is reduced by 10 (after applying Weakness and Resistance).",
				'de-de': "During your opponent's next turn, any damage done to Onix by attacks is reduced by 10 (after applying Weakness an Resistance)."
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

	
	retreat: 3,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276361,
				tcgplayer: 87880
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276361,
				tcgplayer: 87880
			},
		},
		{
			type: "normal",
			stamp: ["hiroki-yano"],
			thirdParty: {
				cardmarket: 276361,
				tcgplayer: 276361
			},
		},
	],

}

export default card
