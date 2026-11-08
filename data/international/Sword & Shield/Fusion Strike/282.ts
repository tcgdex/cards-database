import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Training Court",
		'fr-fr': "Court d'Entraînement",
		'es-es': "Pista de Entrenamiento",
		'it-it': "Cortile di Allenamento",
		'pt-br': "Quadra de Treino",
		'de-de': "Trainingsplatz"
	},

	rarity: "Secret Rare",
	category: "Trainer",

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
	illustrator: "5ban Graphics",

	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 583046,
				tcgplayer: 253286
			}
		},
	],
}

export default card
