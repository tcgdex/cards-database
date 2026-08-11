import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Dratini",
		'de-de': "Dratini"
	},

	illustrator: "Sachiko Adachi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		147,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Pound",
				'de-de': "Pound"
			},

			damage: 10,

		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276344,
				tcgplayer: 84933
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276344,
				tcgplayer: 84933
			},
		},
	],

}

export default card

