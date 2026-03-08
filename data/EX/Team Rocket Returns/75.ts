import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Sentret",
		de: "Wiesor"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		161,
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
				en: "Friend Search",
				de: "Friend Search"
			},
			effect: {
				en: "Look at the top 5 cards of your deck. Choose a Basic Pokémon or Evolution card you find there, show it to your opponent, and put it into your hand. Put the 4 other cards back on top of your deck. Shuffle your deck afterward.",
				de: "Look at the top 5 cards of your deck. Choose a Basic Pokémon or Evolution card you find there, show it to your opponent, and put it into your hand. Put the 4 other cards back on the top of your deck. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Surprise Attack",
				de: "Surprise Attack"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				de: "Flip a coin. If tails, this attack does nothing."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276367,
		tcgplayer: 89064
	},

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
		}
	]
}

export default card

