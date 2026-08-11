import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Magikarp",
		'de-de': "Karpador"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		129,
	],

	hp: 30,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Call for Friends",
				'de-de': "Call for Friends"
			},
			effect: {
				'en-us': "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
				'de-de': "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276357,
				tcgplayer: 87027
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276357,
				tcgplayer: 87027
			},
		},
	],

}

export default card

