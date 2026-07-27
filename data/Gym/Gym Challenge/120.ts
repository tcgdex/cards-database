import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Rocket's Secret Experiment"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Flip a coin. If heads, search your deck for any card and put it into your hand. Shuffle your deck afterward. If tails, you can't play Trainer cards until the end of your next turn."
	},
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88790,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 88790,
				cardmarket: 274388
			}
		},
	],
}

export default card
