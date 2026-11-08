import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Recherches Professorales",
		'de-de': "Forschung des Professors",
		'es-es': "Investigación de Profesores",
		'pt-br': "Pesquisa de Professores",
		'it-it': "Ricerca Accademica",
		'en-us': "Professor's Research"
	},

	rarity: "Promo",
	category: "Trainer",

	description: {
		'fr-fr': "Professeur Keteleeria",
		'de-de': "Prof. Esche",
		'es-es': "Prof.ª Encina",
		'pt-br': "Professor Juniper",
		'it-it': "Prof.ssa Aralia",
		'en-us': "Professor Juniper"
	},

	effect: {
		'fr-fr': "Défaussez votre main, puis piochez 7 cartes.",
		'de-de': "Lege deine Handkarten auf deinen Ablagestapel und ziehe 7 Karten.",
		'es-es': "Descarta las cartas de tu mano y roba 7 cartas.",
		'pt-br': "Descarte a sua mão e compre 7 cartas.",
		'it-it': "Scarta le carte che hai in mano e pesca sette carte.",
		'en-us': "Discard your hand and draw 7 cards."
	},

	trainerType: "Supporter",
	regulationMark: "D",

	thirdParty: {
		cardmarket: 569233
	}
}

export default card
