import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Levincia",
		'fr-fr': "Levalendura",
		'de-de': "Fermanca City",
		'it-it': "Leudapoli",
		'es-es': "Ciudad Leudal",
		'pt-br': "Levincia",
		'es-mx': "Ciudad Leudal"
	},


	illustrator: "MARINA Chikazawa",

	rarity: "Hyper rare",
	category: "Trainer",

	effect: {
		'en-us': "Once during each player's turn, that player may put up to 2 Basic {L} Energy cards from their discard pile into their hand.",
		'fr-fr': "Une fois pendant le tour de chaque joueur, ce joueur peut ajouter à sa main jusqu'à 2 cartes Énergie {L} de base de sa pile de défausse.",
		'de-de': "Einmal während des Zuges jedes Spielers kann jener Spieler bis zu 2 Basis-{L}-Energiekarten aus seinem Ablagestapel auf seine Hand nehmen.",
		'it-it': "Una sola volta durante il turno di ciascun giocatore, quel giocatore può prendere fino a due carte Energia base {L} dalla propria pila degli scarti e aggiungerle alle carte che ha in mano.",
		'es-es': "Una vez durante el turno de cada jugador, ese jugador puede poner hasta 2 cartas de Energía {L} Básica de su pila de descartes en su mano.",
		'pt-br': "Uma vez durante o turno de cada jogador, aquele jogador poderá colocar até 2 cartas de Energia {L} Básica da própria pilha de descarte na própria mão.",
		'es-mx': "Una vez durante el turno de cada jugador, ese jugador puede poner hasta 2 cartas de Energía {L} Básica de su pila de descartes en su mano."
	},

	trainerType: "Stadium",
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			foil: "gold",
			thirdParty: {
				cardmarket: 826118,
				tcgplayer: 633044
			}
		},
	],
}

export default card
