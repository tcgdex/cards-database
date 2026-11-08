import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Rocket's Meowth",
		'de-de': "Rockets Mauzi"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		52,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Snatch and Run",
				'de-de': "Snatch and Run"
			},
			effect: {
				'en-us': "Search your deck for a Pokémon Tool card or Rocket's Secret Machine card, show it to your opponent, and put it into your hand. If you do, you may switch Rocket's Meowth with 1 of your Benched Pokémon. Shuffle your deck afterward.",
				'de-de': "Search your deck for a Pokémon Tool card or Rocket's Secret Machine card, show it to your opponent, and put it into your hand. If you do, your may switch Rocket's Meowth with 1 of your Benched Pokémon. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Miraculous Comeback",
				'de-de': "Miraculous Comeback"
			},
			effect: {
				'en-us': "Flip a coin for each Pokémon in play (both yours and your opponent's). This attack does 10 damage times the number of heads. Rocket's Meowth does 10 damage times the number of tails to itself.",
				'de-de': "Flip a coin for each Pokémon in play (both yours and your opponent's). This attack does 10 damage times the number of heads. Rocket's Meowth does 10 damage times the number of tails to itself."
			},
			damage: "10x",

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
				cardmarket: 276338,
				tcgplayer: 88775
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276338,
				tcgplayer: 88775
			},
		},
	],

}

export default card

