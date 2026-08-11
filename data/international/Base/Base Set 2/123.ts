import { Card } from 'models/database/card'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		'en-us': "Switch",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Switch 1 of your Benched Pokémon with your Active Pokémon.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274046,
				tcgplayer: 42564
			}
		}
	]
}

export default card
