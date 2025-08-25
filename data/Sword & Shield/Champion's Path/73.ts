import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Hop",
		fr: "Nabil",
		es: "Paul",
		it: "Hop",
		pt: "Lupo",
		de: "Hop"
	},

	illustrator: "Naoki Saito",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Draw 3 cards.",
		fr: "Piochez 3 cartes.",
		es: "Roba 3 cartas.",
		it: "Pesca tre carte.",
		pt: "Compre 3 cartas.",
		de: "Ziehe 3 Karten."
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
		cardmarket: 500120,
		tcgplayer: 223072
	}
}

export default card
