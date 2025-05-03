import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Professor's Research",
		fr: "Recherches Professorales",
		es: "Investigación de Profesores",
		pt: "Pesquisa de Professores",
		it: "Ricerca Accademica",
		de: "Forschung des Professors"
	},

	rarity: "Common",
	category: "Trainer",

	effect: {
		en: "Discard your hand and draw 7 cards.",
		fr: "Défaussez votre main, puis piochez 7 cartes.",
		es: "Descarta las cartas de tu mano y roba 7 cartas.",
		pt: "Descarte a sua mão e compre 7 cartas.",
		it: "Scarta le carte che hai in mano e pesca sette carte.",
		de: "Lege deine Handkarten auf deinen Ablagestapel und ziehe 7 Karten."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card