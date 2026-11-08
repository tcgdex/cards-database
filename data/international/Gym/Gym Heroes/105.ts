import { Card } from 'models/database/card'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		'en-us': "Blaine's Last Resort"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "You can't play this card if you have any cards in your hand other than Blaine's Last Resort. Show your hand to your opponent, then draw 5 cards."
	},
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83872,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 83872,
				cardmarket: 274241
			}
		}
	],
}

export default card

