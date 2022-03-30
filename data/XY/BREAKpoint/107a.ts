import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Professor Sycamore",
		fr: "Professeur Platane",
		es: "Profesor Ciprés",
		it: "Professor Platan",
		pt: "Professor Sycamore",
		de: "Prof. Platan"
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		en: "Discard your hand and draw 7 cards.",
		fr: "Défaussez votre main et piochez 7 cartes.",
		es: "Descarta las cartas de tu mano y roba 7 cartas.",
		it: "Scarta la tua mano e pesca sette carte.",
		pt: "Descarte sua mão e compre 7 cards.",
		de: "Lege deine Handkarten auf deinen Ablagestapel und ziehe 7 Karten."
	}
}

export default card
