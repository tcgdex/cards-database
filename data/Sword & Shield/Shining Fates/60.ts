import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Recherches Professorales (Professeure Keteleeria)",
		en: "Professor's Research (Professor Juniper)",
		es: "Investigación de Profesores",
		it: "Ricerca Accademica",
		pt: "Pesquisa de Professores",
		de: "Forschung des Professors"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Rare",
	category: "Trainer",

	effect: {
		fr: "Défaussez votre main, puis piochez 7 cartes.",
		en: "Discard your hand and draw 7 cards.",
		es: "Descarta las cartas de tu mano y roba 7 cartas.",
		it: "Scarta le carte che hai in mano e pesca sette carte.",
		pt: "Descarte a sua mão e compre 7 cartas.",
		de: "Lege deine Handkarten auf deinen Ablagestapel und ziehe 7 Karten."
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
