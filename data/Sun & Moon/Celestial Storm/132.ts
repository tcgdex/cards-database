import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Hau",
		fr: "Tili",
		es: "Tilo",
		it: "Hau",
		pt: "Hibi",
		de: "Tali"
	},

	illustrator: "TOKIYA",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Piochez 3 cartes.",
		en: "Draw 3 cards.",
		es: "Roba 3 cartas.",
		it: "Pesca tre carte.",
		pt: "Compre 3 cartas.",
		de: "Ziehe 3 Karten. Du kannst während deines Zuges (bevor du angreifst) nur 1 Unterstützerkarte spielen."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 361370,
		tcgplayer: 170993
	}
}

export default card
