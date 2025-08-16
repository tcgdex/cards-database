import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Tierno",
		fr: "Tierno",
		es: "Beni",
		it: "Tierno",
		pt: "Tierno",
		de: "Tierno"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Piochez 3 cartes.",
		en: "Draw 3 cards.",
		es: "Roba 3 cartas.",
		it: "Pesca tre carte.",
		pt: "Compre 3 cards.",
		de: "Ziehe 3 Karten."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 288287,
		tcgplayer: 111640
	}
}

export default card
