import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Korrina's Focus",
		'fr-fr': "Concentration de Cornélia",
		'es-es': "Enfoque de Corelia",
		'it-it': "Impegno di Ornella",
		'pt-br': "Foco da Korrina",
		'de-de': "Connies Fokus"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		'en-us': "Draw cards until you have 6 cards in your hand.",
		'fr-fr': "Piochez des cartes jusqu'à en avoir 6 en main.",
		'es-es': "Roba cartas hasta que tengas 6 cartas en tu mano.",
		'it-it': "Pesca fino ad avere sei carte in mano.",
		'pt-br': "Compre cartas até ter 6 cartas na sua mão.",
		'de-de': "Ziehe so lange Karten, bis du 6 Karten auf deiner Hand hast."
	},

	trainerType: "Supporter",


	illustrator: "Taira Akitsu",
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 546661,
				tcgplayer: 234097
			}
		},
	],
}

export default card
