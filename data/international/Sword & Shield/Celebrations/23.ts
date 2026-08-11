import { Card } from 'models/database/card'
import Set from '../Celebrations'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Professor's Research (Professor Oak)",
		'fr-fr': "Recherches Professorales (Professeur Chen)",
		'es-es': "Investigación de Profesores (Profesor Oak)",
		'it-it': "Ricerca Accademica (Professor Oak)",
		'pt-br': "Pesquisa de Professores",
		'de-de': "Forschung des Professors (Prof. Eich)"
	},

	rarity: "Holo Rare",
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
	illustrator: "KIYOTAKA OSHIYAMA",
	regulationMark: "D",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 576768,
				tcgplayer: 250318
			}
		},
	],
}

export default card
