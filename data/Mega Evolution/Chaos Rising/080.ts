import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Prism Tower",
		fr: "Tour Prismatique",
		es: "Torre Prisma",
		'es-mx': "Torre Prisma",
		de: "Prismaturm",
		it: "Torre Prisma",
		pt: "Torre Prisma"
	},

	illustrator: "MARINA Chikazawa",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Stadium",
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693534
	},

	effect: {
		en: "Once during each player's turn, that player may discard 2 cards from their hand in order to draw a card.",
		fr: "Une fois pendant le tour de chaque personne, cette personne-là peut défausser 2 cartes de sa main pour piocher une carte.",
		es: "Una vez durante el turno de cada jugador, ese jugador puede descartar 2 cartas de su mano para poder robar una carta.",
		'es-mx': "Una vez durante el turno de cada jugador, ese jugador puede descartar 2 cartas de su mano para robar 1 carta.",
		de: "Einmal während des Zuges jedes Spielers kann jener Spieler 2 Karten aus seiner Hand auf seinen Ablagestapel legen, um 1 Karte zu ziehen.",
		it: "Una sola volta durante il turno di ciascun giocatore, quel giocatore può scartare due carte che ha in mano per pescare una carta.",
		pt: "Uma vez durante o turno de cada jogador, aquele jogador poderá descartar 2 cartas da própria mão para comprar uma carta."
	}
}

export default card