import { Card } from 'models/database/card'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		'en-us': "Hop",
		'fr-fr': "Nabil",
		'es-es': "Paul",
		'it-it': "Hop",
		'pt-br': "Lupo",
		'de-de': "Hop"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Draw 3 cards.",
		'fr-fr': "Piochez 3 cartes.",
		'es-es': "Roba 3 cartas.",
		'it-it': "Pesca tre carte.",
		'pt-br': "Compre 3 cartas.",
		'de-de': "Ziehe 3 Karten."
	},

	trainerType: "Supporter",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 500120,
		tcgplayer: 223053
	}
}

export default card
