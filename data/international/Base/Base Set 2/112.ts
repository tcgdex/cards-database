import { Card } from 'models/database/card'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		'en-us': "Maintenance",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Shuffle 2 of the other cards from your hand into your deck in order to draw a card.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274035,
				tcgplayer: 42558
			}
		}
	]
}

export default card
