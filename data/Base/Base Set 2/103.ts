import { Card } from '../../../interfaces'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		en: "Item Finder",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Discard 2 of the other cards from your hand in order to put a Trainer card from your discard pile into your hand.",
	},

	thirdParty: {
		cardmarket: 274026,
		tcgplayer: 42553
	},

	variants: [
		{
			type: "normal",
		}
	]
}

export default card
