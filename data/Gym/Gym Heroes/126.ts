import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Trash Exchange",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Count the number of cards in your discard pile and shuffle them into your deck. Then discard that many cards from the top of your deck.",
	},
	thirdParty: {
		cardmarket: 274262,
		tcgplayer: 90029
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card

