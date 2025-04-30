import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Professor's Research",
		fr: "Recherches Professorales",
		es: "Investigación de Profesores",
		de: "Forschung des Professors",
		it: "Ricerca Accademica",
		pt: "Pesquisa de Professores",
		'es-mx': "Investigación de Profesores"
	},

	rarity: "Common",
	category: "Trainer",

	effect: {
		en: "Discard your hand and draw 7 cards.",
		fr: "Défaussez votre main, puis piochez 7 cartes.",
		es: "Descarta las cartas de tu mano y roba 7 cartas.",
		de: "Lege deine Handkarten auf deinen Ablagestapel und ziehe 7 Karten.",
		it: "Scarta le carte che hai in mano e pesca sette carte.",
		pt: "Descarte a sua mão e compre 7 cartas.",
		'es-mx': "Descarta las cartas de tu mano y roba 7 cartas."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
