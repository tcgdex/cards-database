import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Blaine's Gamble"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Discard any number of other cards from your hand, then flip a coin. If heads, draw twice that many cards."
	},
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83867,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 83867,
				cardmarket: 274257
			}
		}
	],
}

export default card

