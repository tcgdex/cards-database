import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Mt. Coronet",
		'fr-fr': "Mont Couronné",
		'es-es': "Monte Corona",
		'it-it': "Monte Corona",
		'pt-br': "Monte Coronete",
		'de-de': "Kraterberg"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Une seule fois pendant le tour de chaque joueur, ce joueur peut placer 2 cartes Énergie Metal de sa pile de défausse dans sa main.",
		'en-us': "Once during each player’s turn, that player may put 2 Metal Energy cards from their discard pile into their hand.",
		'es-es': "Una vez durante el turno de cada jugador, ese jugador puede poner 2 cartas de Energía Metal de su pila de descartes en su mano.",
		'it-it': "Una sola volta durante il turno di ciascun giocatore, quel giocatore può prendere due carte Energia Metal dalla propria pila degli scarti e aggiungerle alle carte che ha in mano.",
		'pt-br': "Uma vez durante a vez de jogar de cada jogador, aquele jogador pode colocar 2 cartas de Energia Metal da própria pilha de descarte na própria mão.",
		'de-de': "Einmal während des Zuges jedes Spielers kann der Spieler 2 Metal-Energiekarten aus seinem Ablagestapel auf seine Hand nehmen."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 316055,
		tcgplayer: 158187
	}
}

export default card
