import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Ekans",
		'de-de': "Rettan"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		23,
	],

	hp: 60,

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
				'en-us': "Tail Wrap",
				'de-de': "Tail Wrap"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276347,
				tcgplayer: 85102
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276347,
				tcgplayer: 85102
			},
		},
	],

}

export default card

