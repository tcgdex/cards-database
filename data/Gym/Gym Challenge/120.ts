import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Rocket's Secret Experiment",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Flip a coin. If heads, search your deck for any card and put it into your hand. Shuffle your deck afterward. If tails, you can't play Trainer cards until the end of your next turn.",
	},
	thirdParty: {
		cardmarket: 274388,
		tcgplayer: 88790
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		},
	]
}

export default card
