import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Professor's Research (Professor Oak)",
		fr: "Recherches Professorales (Professeur Chen)",
		es: "Investigación de Profesores (Profesor Oak)",
		it: "Ricerca Accademica (Professor Oak)",
		pt: "Pesquisa de Professores",
		de: "Forschung des Professors (Prof. Eich)"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		en: "Discard your hand and draw 7 cards.",
		fr: "Défaussez votre main, puis piochez 7 cartes.",
		es: "Descarta las cartas de tu mano y roba 7 cartas.",
		it: "Scarta le carte che hai in mano e pesca sette carte.",
		pt: "Descarte a sua mão e compre 7 cartas.",
		de: "Lege deine Handkarten auf deinen Ablagestapel und ziehe 7 Karten."
	},

	trainerType: "Supporter",
	illustrator: "Ken Sugimori",
	regulationMark: "D"
}

export default card
