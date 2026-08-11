import { Card } from 'models/database/card'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		'en-us': "Pokédex",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Look at up to 5 cards from the top of your deck and rearrange them as you like.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274038
			}
		}
	]
}

export default card
