import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Levincia",
		'fr-fr': "Levalendura",
		'es-es': "Ciudad Leudal",
		'de-de': "Fermanca City",
		'it-it': "Leudapoli",
		'pt-br': "Levincia",
		'es-mx': "Ciudad Leudal"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Once during each player's turn, that player may put up to 2 Basic {L} Energy cards from their discard pile into their hand.",
		'fr-fr': "Une fois pendant le tour de chaque joueur, ce joueur peut ajouter à sa main jusqu'à 2 cartes Énergie {L} de base de sa pile de défausse.",
		'es-es': "Una vez durante el turno de cada jugador, ese jugador puede poner hasta 2 cartas de Energía {L} Básica de su pila de descartes en su mano.",
		'de-de': "Einmal während des Zuges jedes Spielers kann jener Spieler bis zu 2 Basis-{L}-Energiekarten aus seinem Ablagestapel auf seine Hand nehmen.",
		'it-it': "Una sola volta durante il turno di ciascun giocatore, quel giocatore può prendere fino a due carte Energia base {L} dalla propria pila degli scarti e aggiungerle alle carte che ha in mano.",
		'pt-br': "Uma vez durante o turno de cada jogador, aquele jogador poderá colocar até 2 cartas de Energia {L} Básica da própria pilha de descarte na própria mão.",
		'es-mx': "Una vez durante el turno de cada jugador, ese jugador puede poner hasta 2 cartas de Energía Lightning Básica de su pila de descartes en su mano."
	},

	trainerType: "Stadium",
	regulationMark: "I",
	illustrator: "MARINA Chikazawa",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817302,
				tcgplayer: 623577
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817302,
				tcgplayer: 623577
			}
		},
		{
			type: 'normal',
			stamp: ['gym-challenge']
		},
		{
			type: 'holo',
			foil: 'cosmos',
			stamp: ['player-rewards-program']
		},
		{
			type: 'normal',
			stamp: ['player-rewards-program']
		}
	],
}

export default card
