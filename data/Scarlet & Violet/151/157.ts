import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	set: Set,

	name: {
		fr: "Piste Cyclable",
		en: "Cycling Road",
		es: "Camino de Bicis",
		it: "Pista ciclabile",
		pt: "Ciclovia",
		de: "Radweg"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		fr: "Une fois pendant le tour de chaque joueur, ce joueur-là peut défausser une carte Énergie de base de sa main pour piocher une carte.",
		en: "Once during each player's turn, that player may discard a Basic Energy card from their hand in order to draw a card.",
		es: "Una vez durante el turno de cada jugador, ese jugador puede descartar 1 carta de Energía Básica de su mano para poder robar una carta.",
		it: "Una sola volta durante il turno di ciascun giocatore, quel giocatore può scartare una carta Energia base che ha in mano per pescare una carta.",
		pt: "Uma vez durante o turno de cada jogador, aquele jogador poderá descartar uma carta de Energia Básica da própria mão para comprar uma carta.",
		de: "Einmal während des Zuges jedes Spielers kann jener Spieler 1 Basis-Energiekarte aus seiner Hand auf seinen Ablagestapel legen, um 1 Karte zu ziehen."
	},

	trainerType: "Stadium",
	regulationMark: "G"
}

export default card