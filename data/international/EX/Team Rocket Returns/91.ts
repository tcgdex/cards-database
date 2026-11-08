import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Surprise! Time Machine",
		'de-de': "Surprise! Time Machine*"
	},

	illustrator: "Katsura Tabata",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Rocket's Secret Machine",

	effect: {
		'en-us': "Choose 1 of your Evolved Pokémon, remove the highest Stage Evolution card from it, and shuffle it into your deck (this counts as devolving that Pokémon). If that Pokémon remains in play, search your deck for an Evolution card that evolves from that Pokémon and put it onto that Pokémon (this counts as evolving that Pokémon). Shuffle your deck afterward.",
		'de-de': "Choose 1 of your Evolved Pokémon, remove the highest Stage Evolution card from it, and shuffle it into your deck (this counts as devolving that Pokémon). If that Pokémon remains in play, search your deck for an Evolution card that evolves from that Pokémon and put it onto that Pokémon (this counts as evolving that Pokémon). Shuffle your deck afterward."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276383,
				tcgplayer: 89645
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276383,
				tcgplayer: 89645
			},
		},
		{
			type: "normal",
			stamp: ["jimmy-ballard"],
			thirdParty: {
				cardmarket: 276383,
				tcgplayer: 89645
			},
		},
	],

}

export default card
