import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Secret Mission"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Look at your opponent's hand. Then, you may discard as many other cards as you want from your hand and draw that many cards."
	},
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89035,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 89035,
				cardmarket: 274254
			}
		}
	],
}

export default card

