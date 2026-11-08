import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Magnemite",
		'de-de': "Magnetilo"
	},

	illustrator: "Sachiko Adachi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		81,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sonicboom",
				'de-de': "Sonicboom"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Weakness or Resistance.",
				'de-de': "This attack's damage isn't affected by Weakness or Resistance."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276358,
				tcgplayer: 87077
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276358,
				tcgplayer: 87077
			},
		},
	],

}

export default card

