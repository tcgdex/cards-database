import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Kingdra",
		'de-de': "Seedraking"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		230,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Seadra",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Dragon Veil",
				'de-de': "Dragon Veil"
			},
			effect: {
				'en-us': "As long as Kingdra is in play, each of your Active Pokémon has no Weakness.",
				'de-de': "As long as Kingdra is in play, each of your Active Pokémon has no Weakness."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Whirlpool",
				'de-de': "Hyper Whirlpool"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. For each heads, discard an Energy card attached to the Defending Pokémon.",
				'de-de': "Flip a coin until you get tails. For each heads, discard an Energy card attached to the Defending Pokémon."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Sonic",
				'de-de': "Aqua Sonic"
			},
			effect: {
				'en-us': "This attack's damage is not affected by Resistance.",
				'de-de': "This attack's damage is not affected by Resistance."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 276304,
				tcgplayer: 86445
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276304,
				tcgplayer: 86445
			},
		},
	],

}

export default card
