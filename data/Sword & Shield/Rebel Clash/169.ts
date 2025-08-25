import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Training Court",
		fr: "Court d'Entraînement",
		es: "Pista de Entrenamiento",
		it: "Cortile di Allenamento",
		pt: "Quadra de Treino",
		de: "Trainingsplatz"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Once during each player's turn, that player may put a basic Energy card from their discard pile into their hand.",
		fr: "Une fois pendant le tour de chaque joueur, ce joueur peut ajouter à sa main une carte Énergie de base de sa pile de défausse.",
		es: "Una vez durante el turno de cada jugador, ese jugador puede poner 1 carta de Energía Básica de su pila de descartes en su mano.",
		it: "Una sola volta durante il turno di ciascun giocatore, quel giocatore può prendere una carta Energia base dalla propria pila degli scarti e aggiungerla alle carte che ha in mano.",
		pt: "Uma vez durante o turno de cada jogador, aquele jogador poderá colocar 1 carta de Energia básica da própria pilha de descarte na própria mão.",
		de: "Einmal während des Zuges jedes Spielers kann jener Spieler 1 Basis-Energiekarte aus seinem Ablagestapel auf seine Hand nehmen."
	},

	trainerType: "Stadium",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 458228,
		tcgplayer: 213280
	}
}

export default card
