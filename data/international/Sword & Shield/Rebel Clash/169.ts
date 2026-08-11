import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Training Court",
		'fr-fr': "Court d'Entraînement",
		'es-es': "Pista de Entrenamiento",
		'it-it': "Cortile di Allenamento",
		'pt-br': "Quadra de Treino",
		'de-de': "Trainingsplatz"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Once during each player's turn, that player may put a basic Energy card from their discard pile into their hand.",
		'fr-fr': "Une fois pendant le tour de chaque joueur, ce joueur peut ajouter à sa main une carte Énergie de base de sa pile de défausse.",
		'es-es': "Una vez durante el turno de cada jugador, ese jugador puede poner 1 carta de Energía Básica de su pila de descartes en su mano.",
		'it-it': "Una sola volta durante il turno di ciascun giocatore, quel giocatore può prendere una carta Energia base dalla propria pila degli scarti e aggiungerla alle carte che ha in mano.",
		'pt-br': "Uma vez durante o turno de cada jogador, aquele jogador poderá colocar 1 carta de Energia básica da própria pilha de descarte na própria mão.",
		'de-de': "Einmal während des Zuges jedes Spielers kann jener Spieler 1 Basis-Energiekarte aus seinem Ablagestapel auf seine Hand nehmen."
	},

	trainerType: "Stadium",
	regulationMark: "D",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 458228,
				tcgplayer: 213280
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 458228,
				tcgplayer: 213280
			}
		},
	],
}

export default card
