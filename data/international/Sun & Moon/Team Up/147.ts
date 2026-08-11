import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Lavender Town",
		'fr-fr': "Lavanville",
		'es-es': "Pueblo Lavanda",
		'it-it': "Lavandonia",
		'pt-br': "Cidade de Lavender",
		'de-de': "Lavandia"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Une seule fois pendant le tour de chaque joueur, ce joueur peut demander à son adversaire de dévoiler sa main.",
		'en-us': "Once during each player’s turn, that player may have their opponent reveal their hand.",
		'es-es': "Una vez durante el turno de cada jugador, ese jugador puede hacer que su rival enseñe las cartas de su mano.",
		'it-it': "Una sola volta durante il turno di ciascun giocatore, quel giocatore può far mostrare al suo avversario le carte che ha in mano.",
		'pt-br': "Uma vez durante a vez de jogar de cada jogador, aquele jogador pode fazer com que o oponente dele(a) revele a própria mão.",
		'de-de': "Einmal während des Zuges jedes Spielers kann der Spieler seinen Gegner dazu veranlassen, seine Handkarten zu zeigen."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 369073,
		tcgplayer: 183945
	}
}

export default card
