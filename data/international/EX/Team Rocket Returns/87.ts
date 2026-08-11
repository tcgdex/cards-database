import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Rocket's Hideout",
		'de-de': "Rocket's Hideout*"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		'en-us': "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Each Pokémon with Dark or Rocket's in its name (both yours and your opponent's) gets +20 HP.",
		'de-de': "Each Pokémon with Dark of Rocket's in its name (both yours an your opponent's) gets +20 HP."
	},


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276379,
				tcgplayer: 88771
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276379,
				tcgplayer: 88771
			},
		},
	],

}

export default card

