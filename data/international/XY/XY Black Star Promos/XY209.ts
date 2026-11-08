import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Gym Badge",
		'fr-fr': "Badge"
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		'en-us': "Flip a coin until you get tails. For each heads, draw a card. You may play as many Item cards as you like during your turn (before your attack).",
	},

	thirdParty: {
		cardmarket: 295188
	}
}

export default card
