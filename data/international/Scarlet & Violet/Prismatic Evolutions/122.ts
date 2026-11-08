import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Professor's Research",
		'fr-fr': "Recherches Professorales",
		'es-es': "Investigación de Profesores",
		'pt-br': "Pesquisa de Professores",
		'it-it': "Ricerca Accademica",
		'de-de': "Forschung des Professors"
	},

	rarity: "Common",
	category: "Trainer",

	effect: {
		'en-us': "Discard your hand and draw 7 cards.",
		'fr-fr': "Défaussez votre main, puis piochez 7 cartes.",
		'es-es': "Descarta las cartas de tu mano y roba 7 cartas.",
		'pt-br': "Descarte a sua mão e compre 7 cartas.",
		'it-it': "Scarta le carte che hai in mano e pesca sette carte.",
		'de-de': "Lege deine Handkarten auf deinen Ablagestapel und ziehe 7 Karten."
	},

	trainerType: "Supporter",
	regulationMark: "G",
	illustrator: "Hideki Ishikawa",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805516,
				tcgplayer: 610477
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805516,
				tcgplayer: 610477
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806594,
				tcgplayer: 610630
			}
		},
	],
}

export default card
