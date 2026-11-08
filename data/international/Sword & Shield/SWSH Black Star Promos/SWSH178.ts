import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Yusuke Kozaki",
	category: "Trainer",

	name: {
		'en-us': "Professor's Research",
		'fr-fr': "Recherches Professorales",
		'de-de': "Forschung des Professors",
		'es-es': "Investigación de Profesores",
		'pt-br': "Pesquisa de Professores",
		'it-it': "Ricerca Accademica"
	},

	rarity: "Promo",

	effect: {
		'en-us': "Discard your hand and draw 7 cards.",
		'fr-fr': "Défaussez votre main, puis piochez 7 cartes.",
		'de-de': "Lege deine Handkarten auf deinen Ablagestapel und ziehe 7 Karten.",
		'es-es': "Descarta las cartas de tu mano y roba 7 cartas.",
		'pt-br': "Descarte a sua mão e compre 7 cartas.",
		'it-it': "Scarta le carte che hai in mano e pesca sette carte."
	},

	trainerType: "Supporter",

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	regulationMark: "D",

	description: {
		'fr-fr': "Professeur Willow",
		'de-de': "Prof. Willow",
		'es-es': "Profesor Willow",
		'pt-br': "Prof. Willow",
		'it-it': "Professor Willow",
		'en-us': "Professor Willow"
	},

	thirdParty: {
		cardmarket: 569233
	}
}

export default card
