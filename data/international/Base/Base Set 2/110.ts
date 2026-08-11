import { Card } from 'models/database/card'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		'en-us': "Energy Retrieval",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Trade 1 of the other cards in your hand for up to 2 basic Energy cards from your discard pile.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274033,
				tcgplayer: 42449
			}
		}
	]
}

export default card
