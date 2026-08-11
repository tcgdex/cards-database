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

	illustrator: "Naoki Saito",
	rarity: "Ultra Rare",
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
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 500220,
		tcgplayer: 223072
	}
}

export default card
