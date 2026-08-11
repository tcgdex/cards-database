import { Card } from '../../../interfaces'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		en: "Computer Search",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Discard 2 of the other cards from your hand in order to search your deck for any card and put it into your hand. Shuffle your deck afterward.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274024,
				tcgplayer: 42446
			}
		}
	]
}

export default card
