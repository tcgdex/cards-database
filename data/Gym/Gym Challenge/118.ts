import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Misty's Tears",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Discard 1 of the other cards in your hand in order to search your deck for up to 2 Water Energy cards. Show those cards to your opponent, then put them into your hand. Shuffle your deck afterward.",
	},
	thirdParty: {
		cardmarket: 274386,
		tcgplayer: 87549
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
