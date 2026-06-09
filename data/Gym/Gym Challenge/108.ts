import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Misty's Wish",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Look at 1 of your Prize cards. Then, ask your opponent if you may switch that card with 1 of the cards in your hand. If your opponent accepts and if you have any other cards in your hand, switch those cards. If your opponent declines, return the Prize card face down and draw a card.",
	},
	thirdParty: {
		cardmarket: 274376,
		tcgplayer: 87553
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
