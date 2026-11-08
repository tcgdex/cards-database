import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Dratini",
		'de-de': "Dratini"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		147,
	],

	hp: 50,

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
				'en-us': "Dragon Song",
				'de-de': "Dragon Song"
			},
			effect: {
				'en-us': "Each Defending Pokémon is now Asleep.",
				'de-de': "Each Defending Pokémon is now Asleep."
			},

		},
		{
			cost: [
				"Water",
				"Lightning",
			],
			name: {
				'en-us': "Tail Strike",
				'de-de': "Tail Strike"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
				'de-de': "Flip a coin. If heads, this attack does 20 damage plus 10 more damage."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276345,
				tcgplayer: 84934
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276345,
				tcgplayer: 84934
			},
		},
	],

}

export default card

