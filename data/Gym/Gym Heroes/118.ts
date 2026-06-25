import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Secret Mission",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Look at your opponent's hand. Then, you may discard as many other cards as you want from your hand and draw that many cards.",
	},
	thirdParty: {
		cardmarket: 274254,
		tcgplayer: 89035
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

