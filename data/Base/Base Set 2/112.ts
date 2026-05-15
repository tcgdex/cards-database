import { Card } from '../../../interfaces'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		en: "Maintenance",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Shuffle 2 of the other cards from your hand into your deck in order to draw a card.",
	},

	thirdParty: {
		cardmarket: 274035,
		tcgplayer: 42558
	},

	variants: [
		{
			type: "normal",
		}
	]
}

export default card
