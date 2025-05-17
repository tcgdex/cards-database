import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Professor Oak",
		pt: "Professor Oak",
		fr: "Professeur Chen",
		de: "Professor Eich"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Discard your hand, then draw 7 cards.",
		pt: "Descarte sua mão e compre 7 cartas.",
		fr: "Défaussez-vous de votre main, puis piochez 7 cartes.",
		de: "Entferne alle Karten aus Deiner Hand und ziehe sieben neue Karten."
	}
}

export default card
