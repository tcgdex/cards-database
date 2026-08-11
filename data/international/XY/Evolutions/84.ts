import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Professor Oak's Hint",
		'fr-fr': "Indice du Prof. Chen",
		'es-es': "Pista del Profesor Oak",
		'it-it': "Consiglio del Professor Oak",
		'pt-br': "Dica do Professor Carvalho",
		'de-de': "Prof. Eichs Tipp"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Piochez des cartes jusqu'à ce que vous ayez 7 cartes en main. Votre tour se termine.",
		'en-us': "Draw cards until you have 7 cards in your hand. Your turn ends.",
		'es-es': "Roba cartas hasta que tengas 7 cartas en tu mano. Tu turno termina.",
		'it-it': "Pesca fino ad avere sette carte in mano. Il tuo turno finisce.",
		'pt-br': "Compre cards até ter 7 cards em sua mão. Sua vez de jogar termina.",
		'de-de': "Ziehe so viele Karten, bis du 7 Karten auf der Hand hast. Dein Zug endet."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 293446,
		tcgplayer: 124097
	}
}

export default card
