import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Lavender Town",
		fr: "Lavanville",
		es: "Pueblo Lavanda",
		it: "Lavandonia",
		pt: "Cidade de Lavender",
		de: "Lavandia"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Une seule fois pendant le tour de chaque joueur, ce joueur peut demander à son adversaire de dévoiler sa main.",
		en: "Once during each player’s turn, that player may have their opponent reveal their hand.",
		es: "Una vez durante el turno de cada jugador, ese jugador puede hacer que su rival enseñe las cartas de su mano.",
		it: "Una sola volta durante il turno di ciascun giocatore, quel giocatore può far mostrare al suo avversario le carte che ha in mano.",
		pt: "Uma vez durante a vez de jogar de cada jogador, aquele jogador pode fazer com que o oponente dele(a) revele a própria mão.",
		de: "Einmal während des Zuges jedes Spielers kann der Spieler seinen Gegner dazu veranlassen, seine Handkarten zu zeigen."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 369073
	}
}

export default card
