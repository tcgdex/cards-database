import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Ledyba",
		'de-de': "Ledyba"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		165,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Call for Family",
				'de-de': "Call for Family"
			},
			effect: {
				'en-us': "Search your deck for a Grass Basic Pokémon and put it onto your Bench. Shuffle your deck afterward.\"",
				'de-de': "Search your deck for a  Basic Pokémon and put it onto your Bench. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Beat",
				'de-de': "Beat"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276356,
				tcgplayer: 86703
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276356,
				tcgplayer: 86703
			},
		},
	],

}

export default card

