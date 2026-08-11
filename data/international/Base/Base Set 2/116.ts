import { Card } from 'models/database/card'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		'en-us': "Professor Oak",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Discard your hand, then draw 7 cards.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274039,
				tcgplayer: 42560
			}
		}
	]
}

export default card
