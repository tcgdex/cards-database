import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Korrina's Focus",
		fr: "Concentration de Cornélia",
		es: "Enfoque de Corelia",
		it: "Impegno di Ornella",
		pt: "Foco da Korrina",
		de: "Connies Fokus"
	},

	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Draw cards until you have 6 cards in your hand.",
		fr: "Piochez des cartes jusqu'à en avoir 6 en main.",
		es: "Roba cartas hasta que tengas 6 cartas en tu mano.",
		it: "Pesca fino ad avere sei carte in mano.",
		pt: "Compre cartas até ter 6 cartas na sua mão.",
		de: "Ziehe so lange Karten, bis du 6 Karten auf deiner Hand hast."
	},

	trainerType: "Supporter",
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 545911
	}
}

export default card
