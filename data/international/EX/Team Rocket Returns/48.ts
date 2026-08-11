import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Seadra",
		'de-de': "Seemon"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		117,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Horsea",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Confuse Ray",
				'de-de': "Confuse Ray"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Confused.",
				'de-de': "The Defending Pokémon is now Confused."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Trick",
				'de-de': "Aqua Trick"
			},
			effect: {
				'en-us': "If your opponent has any Benched Pokemon, move 1 Energy card attached to the Defending Pokémon to 1 of your opponent's Benched Pokémon. If your opponent has no Benched Pokémon, this effect does nothing.",
				'de-de': "Move 1 Energy card attached to the Defending Pokémon to 1 of your opponent's Benched Pokémon. If your opponent has no Benched Pokémon, this effect does nothing."
			},
			damage: 30,

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
				cardmarket: 276340,
				tcgplayer: 89014
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276340,
				tcgplayer: 89014
			},
		},
	],

}

export default card

