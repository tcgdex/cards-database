import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Cubone",
		'de-de': "Tragosso"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		104,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Look for Friends",
				'de-de': "Look for Friends"
			},
			effect: {
				'en-us': "Reveal cards from your deck until you reveal a Basic Pokémon. Show that card to your opponent and put it into your hand. Shuffle the other revealed cards into your deck. (If you don't reveal a Basic Pokémon, shuffle all the revealed cards back into your deck.)",
				'de-de': "Reveal cards from your deck until you reveal a Basic Pokémon. Show that card to your opponent and put it into your hand. Shuffle the other revealed cards into your deck. (If you don't reveal a Basic Pokémon, shuffle all the revealed cards back into your deck.)"
			},

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Bonemerang",
				'de-de': "Bonemerang"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads.",
				'de-de': "Flip 2 coins. This attack does 10 damage times the number of heads."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276343,
				tcgplayer: 84532
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276343,
				tcgplayer: 84532
			},
		},
	],

}

export default card

