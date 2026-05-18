import { Card } from '../../../interfaces'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		en: "Pokédex",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Look at up to 5 cards from the top of your deck and rearrange them as you like.",
	},

	thirdParty: {
		cardmarket: 274038
	},

	variants: [
		{
			type: "normal",
		}
	]
}

export default card
