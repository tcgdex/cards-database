import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Max Revive",
		'fr-fr': "Rappel Max",
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Mettez un Pokémon de votre pile de défausse sur le dessus de votre deck.",
		'en-us': "Put a Pokémon from your discard pile on top of your deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 288501,
		tcgplayer: 113723
	}
}

export default card
