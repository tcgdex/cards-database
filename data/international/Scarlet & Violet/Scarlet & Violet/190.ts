import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Professor's Research",
		'fr-fr': "Recherches Professorales",
		'es-es': "Investigación de Profesores",
		'it-it': "Ricerca Accademica",
		'pt-br': "Pesquisa de Professores",
		'de-de': "Forschung des Professors"
	},

	rarity: "Rare",
	category: "Trainer",

	effect: {
		'en-us': "Discard your hand and draw 7 cards.",
		'fr-fr': "Défaussez votre main, puis piochez 7 cartes.",
		'es-es': "Descarta las cartas de tu mano y roba 7 cartas.",
		'it-it': "Scarta le carte che hai in mano e pesca sette carte.",
		'pt-br': "Descarte a sua mão e compre 7 cartas.",
		'de-de': "Lege deine Handkarten auf deinen Ablagestapel und ziehe 7 Karten."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "kirisAki",

	thirdParty: {
        cardmarket: 689769,
        tcgplayer: 475424
    }
}

export default card