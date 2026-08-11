import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,


	name: {
		'en-us': "Prism Tower",
		'fr-fr': "Tour Prismatique",
		'es-es': "Torre Prisma",
		'es-mx': "Torre Prisma",
		'de-de': "Prismaturm",
		'it-it': "Torre Prisma",
		'pt-br': "Torre Prisma"
	},

	illustrator: "MARINA Chikazawa",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Stadium",
	regulationMark: "J",

	effect: {
		'en-us': "Once during each player's turn, that player may discard 2 cards from their hand in order to draw a card.",
		'fr-fr': "Une fois pendant le tour de chaque personne, cette personne-là peut défausser 2 cartes de sa main pour piocher une carte.",
		'es-es': "Una vez durante el turno de cada jugador, ese jugador puede descartar 2 cartas de su mano para poder robar una carta.",
		'es-mx': "Una vez durante el turno de cada jugador, ese jugador puede descartar 2 cartas de su mano para robar 1 carta.",
		'de-de': "Einmal während des Zuges jedes Spielers kann jener Spieler 2 Karten aus seiner Hand auf seinen Ablagestapel legen, um 1 Karte zu ziehen.",
		'it-it': "Una sola volta durante il turno di ciascun giocatore, quel giocatore può scartare due carte che ha in mano per pescare una carta.",
		'pt-br': "Uma vez durante o turno de cada jogador, aquele jogador poderá descartar 2 cartas da própria mão para comprar uma carta."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886472,
				tcgplayer: 693534
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886472,
				tcgplayer: 693534
			}
		},
	],
}

export default card
