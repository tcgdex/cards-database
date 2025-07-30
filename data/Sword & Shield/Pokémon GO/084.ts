import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

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

	rarity: "Secret Rare",
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
	regulationMark: "D",

	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	},

	thirdParty: {
		cardmarket: 664706
	}
}

export default card