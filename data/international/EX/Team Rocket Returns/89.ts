import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Rocket's Poké Ball",
		'de-de': "Rocket's Poké Ball*"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		'en-us': "Search your deck for a Pokémon with Dark in its name, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
		'de-de': "Search your deck for a Pokémon with Dark in its name, show it to your opponent, and put it into your hand. Shuffle your deck afterward."
	},


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276381
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276381
			},
		},
	],

}

export default card

