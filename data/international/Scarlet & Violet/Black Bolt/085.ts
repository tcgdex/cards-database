import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Professor's Research",
		'fr-fr': "Recherches Professorales",
		'de-de': "Forschung des Professors",
		'it-it': "Ricerca Accademica",
		'pt-br': "Pesquisa de Professores",
		'es-es': "Investigación de Profesores",
		'es-mx': "Investigación de Profesores"
	},

	illustrator: "Taira Akitsu",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Discard your hand and draw 7 cards.",
		'fr-fr': "Défaussez votre main, puis piochez 7 cartes.",
		'de-de': "Lege deine Handkarten auf deinen Ablagestapel und ziehe 7 Karten.",
		'it-it': "Scarta le carte che hai in mano e pesca sette carte.",
		'pt-br': "Descarte a sua mão e compre 7 cartas.",
		'es-es': "Descarta las cartas de tu mano y roba 7 cartas.",
		'es-mx': "Descarta las cartas de tu mano y roba 7 cartas."
	},

	trainerType: "Supporter",
	regulationMark: "G",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836076,
				tcgplayer: 642533
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836076,
				tcgplayer: 642533
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836476,
				tcgplayer: 642772
			}
		},
	]
}

export default card
