import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Trash Exchange"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Count the number of cards in your discard pile and shuffle them into your deck. Then discard that many cards from the top of your deck."
	},
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90029,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 90029,
				cardmarket: 274262
			}
		}
	],
}

export default card

