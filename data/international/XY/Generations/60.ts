import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Crushing Hammer",
		'fr-fr': "Maillet Écrasant",
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie attachée à l'un des Pokémon de votre adversaire.",
		'en-us': "Flip a coin. If heads, discard an Energy attached to 1 of your opponent's Pokémon."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 288497,
		tcgplayer: 113718
	}
}

export default card
