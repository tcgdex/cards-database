import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

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

	rarity: "Promo",
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
	illustrator: "Hideki Ishikawa",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 855675,
				tcgplayer: 664827
			},
		},
		{
			type: "normal",
			stamp: ["professor-program"],
			thirdParty: {
				cardmarket: 878016
			}
		}
	],
}

export default card
