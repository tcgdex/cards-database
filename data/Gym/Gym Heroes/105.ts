import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Blaine's Last Resort"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "You can't play this card if you have any cards in your hand other than Blaine's Last Resort. Show your hand to your opponent, then draw 5 cards."
	},
	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 83872,
				cardmarket: 274241
			}
		}
	]
}

export default card

