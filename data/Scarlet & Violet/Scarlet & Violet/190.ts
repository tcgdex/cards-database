import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Professor's Research",
		fr: "Recherches Professorales",
		es: "Investigación de Profesores",
		it: "Ricerca Accademica",
		pt: "Pesquisa de Professores",
		de: "Forschung des Professors"
	},

	rarity: "Rare",
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
	regulationMark: "G",

	variants: {
		reverse: false,
	},

	illustrator: "kirisAki",

	thirdParty: {
        cardmarket: 689769,
        tcgplayer: 475424
    }
}

export default card