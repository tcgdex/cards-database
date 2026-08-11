import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Furret",
		'de-de': "Wiesenior"
	},

	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		162,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Sentret",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Quick Change",
				'de-de': "Quick Change"
			},
			effect: {
				'en-us': "Choose up to 3 cards in your hand and put them on top of your deck. Then, search your deck for that many cards and put them into your hand. Shuffle your deck afterward.",
				'de-de': "Choose up to 3 cards in your hand and put them on top of your deck. Then, search your deck for that many cards and put them into your hand. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Quick Tail Smash",
				'de-de': "Quick Tail Smash"
			},
			effect: {
				'en-us': "Before doing damage, you may flip a coin. If heads, this attack does 80 damage instead. If tails, this attack does nothing.",
				'de-de': "Before doing damage, you may flip a coin. If heads, this attack does 80 damage instead. If tails, this attack does nothing."
			},
			damage: 30,

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
				cardmarket: 276314,
				tcgplayer: 85591
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276314,
				tcgplayer: 85591
			},
		},
	],

}

export default card

