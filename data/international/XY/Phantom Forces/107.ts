import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Tierno",
		'fr-fr': "Tierno",
		'es-es': "Beni",
		'it-it': "Tierno",
		'pt-br': "Tierno",
		'de-de': "Tierno"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Piochez 3 cartes.",
		'en-us': "Draw 3 cards.",
		'es-es': "Roba 3 cartas.",
		'it-it': "Pesca tre carte.",
		'pt-br': "Compre 3 cards.",
		'de-de': "Ziehe 3 Karten."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 281914,
		tcgplayer: 94675
	}
}

export default card
