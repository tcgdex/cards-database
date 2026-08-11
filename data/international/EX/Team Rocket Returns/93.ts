import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Venture Bomb",
		'de-de': "Venture Bomb*"
	},

	illustrator: "Katsura Tabata",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Rocket's Secret Machine",

	effect: {
		'en-us': "Flip a coin. If heads, put 1 damage counter on 1 of your opponent's Pokémon. If tails, put 1 damage counter on 1 of your Pokémon.",
		'de-de': "Flip a coin. If heads, put 1 damage counter on 1 of your opponent's Pokémon. If tails, put 1 damage counter on 1 of your Pokémon."
	},


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276385,
				tcgplayer: 90310
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276385,
				tcgplayer: 90310
			},
		},
	],

}

export default card

