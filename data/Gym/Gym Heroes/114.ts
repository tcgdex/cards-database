import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Misty's Wrath"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Look at the top 7 cards of your deck. Choose 2 of those cards and put them into your hand. Discard the rest."
	},
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87554,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 87554,
				cardmarket: 274250
			}
		}
	],
}

export default card

