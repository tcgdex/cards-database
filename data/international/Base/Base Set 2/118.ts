import { Card } from 'models/database/card'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		'en-us': "Bill",
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Draw 2 cards.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274041,
				tcgplayer: 42451
			}
		}
	]
}

export default card
