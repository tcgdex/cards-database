import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Revitalizer",
		'fr-fr': "Revitalisation",
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Ajoutez 2 Pokémon Grass de votre pile de défausse à votre main.",
		'en-us': "Put 2 Grass Pokémon from your discard pile into your hand."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 288411,
		tcgplayer: 113728
	}
}

export default card
