import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Bianca",
	},

	illustrator: "Megumi Mizutani",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		'en-us': "Draw cards until you have 6 cards in your hand."
	},

	thirdParty: {
		cardmarket: 281260,
		tcgplayer: 83815
	}
}

export default card
