import { Card } from '../../../interfaces'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		en: "Potion",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Remove up to 2 damage counters from 1 of your Pokémon.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274045,
				tcgplayer: 42563
			}
		}
	]
}

export default card
