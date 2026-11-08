import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Recherches Professorales (Professeure Keteleeria)",
		'en-us': "Professor's Research (Professor Juniper)",
		'es-es': "Investigación de Profesores",
		'it-it': "Ricerca Accademica",
		'pt-br': "Pesquisa de Professores",
		'de-de': "Forschung des Professors"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Rare",
	category: "Trainer",

	effect: {
		'fr-fr': "Défaussez votre main, puis piochez 7 cartes.",
		'en-us': "Discard your hand and draw 7 cards.",
		'es-es': "Descarta las cartas de tu mano y roba 7 cartas.",
		'it-it': "Scarta le carte che hai in mano e pesca sette carte.",
		'pt-br': "Descarte a sua mão e compre 7 cartas.",
		'de-de': "Lege deine Handkarten auf deinen Ablagestapel und ziehe 7 Karten."
	},

	trainerType: "Supporter",
	regulationMark: "D",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 539323,
				tcgplayer: 232545
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 659583
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 539323,
				tcgplayer: 232545
			}
		},
	],
}

export default card
