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

	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
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
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
