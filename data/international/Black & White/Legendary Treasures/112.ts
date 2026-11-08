import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Energy Switch",
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		'en-us': "Move a basic Energy from 1 of your Pokémon to another of your Pokémon."
	},

	thirdParty: {
		cardmarket: 281263,
		tcgplayer: 85263
	}
}

export default card
