import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Wigglytuff)'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tierno",
		'fr-fr': "Tierno",
		'es-es': "Beni",
		'it-it': "Tierno",
		'pt-br': "Tierno",
		'de-de': "Tierno"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Draw 3 cards.",
		'fr-fr': "Piochez 3 cartes.",
		'es-es': "Roba 3 cartas.",
		'it-it': "Pesca tre carte.",
		'pt-br': "Compre 3 cards.",
		'de-de': "Ziehe 3 Karten."
	},

	trainerType: "Supporter",

	thirdParty: {
		tcgplayer: 98203
	}
}

export default card