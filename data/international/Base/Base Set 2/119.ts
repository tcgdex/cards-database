import { Card } from 'models/database/card'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		'en-us': "Energy Removal",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Choose 1 Energy card attached to 1 of your opponent's Pokémon and discard it.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274042,
				tcgplayer: 42452
			}
		}
	]
}

export default card
