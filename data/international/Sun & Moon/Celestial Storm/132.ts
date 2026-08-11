import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Hau",
		'fr-fr': "Tili",
		'es-es': "Tilo",
		'it-it': "Hau",
		'pt-br': "Hibi",
		'de-de': "Tali"
	},

	illustrator: "TOKIYA",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Piochez 3 cartes.",
		'en-us': "Draw 3 cards.",
		'es-es': "Roba 3 cartas.",
		'it-it': "Pesca tre carte.",
		'pt-br': "Compre 3 cartas.",
		'de-de': "Ziehe 3 Karten."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 361370,
		tcgplayer: 170993
	}
}

export default card
