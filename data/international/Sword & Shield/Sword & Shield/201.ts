import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Professor's Research (Professor Magnolia)",
		'fr-fr': "Recherches Professorales (Professeure Magnolia)",
		'es-es': "Investigación de Profesores",
		'it-it': "Ricerca Accademica",
		'pt-br': "Pesquisa de Professores",
		'de-de': "Forschung des Professors"
	},

	illustrator: "kirisAki",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Discard your hand and draw 7 cards.",
		'fr-fr': "Défaussez votre main, puis piochez 7 cartes.",
		'es-es': "Descarta las cartas de tu mano y roba 7 cartas.",
		'it-it': "Scarta le carte che hai in mano e pesca sette carte.",
		'pt-br': "Descarte a sua mão e compre 7 cartas.",
		'de-de': "Lege deine Handkarten auf deinen Ablagestapel und ziehe 7 Karten."
	},

	trainerType: "Supporter",
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
