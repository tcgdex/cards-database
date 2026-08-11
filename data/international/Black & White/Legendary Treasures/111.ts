import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Crushing Hammer",
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		'en-us': "Flip a coin. If heads, discard an Energy attached to 1 of your opponent’s Pokémon."
	},

	thirdParty: {
		cardmarket: 281262,
		tcgplayer: 84506
	}
}

export default card
