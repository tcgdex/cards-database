import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Fervor"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Show the top 3 cards of your deck to all players. Put any Fire Energy cards there into your hand and discard the rest."
	},
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85430,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 85430,
				cardmarket: 274392
			}
		},
	],
}

export default card
