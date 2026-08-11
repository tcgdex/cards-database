import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Scorched Earth",
		fr: "Terre Brûlée",
		es: "Tierra Quemada",
		it: "Terra Infuocata",
		pt: "Terra Queimada",
		de: "Verbrannte Erde"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Une seule fois pendant le tour de chaque joueur, ce joueur peut défausser une carte Énergie Fire ou Fighting de sa main. Dans ce cas, le joueur pioche 2 cartes.",
		en: "Once during each player's turn, that player may discard a Fire or Fighting Energy card from his or her hand. If that player does so, he or she draws 2 cards.",
		es: "Una vez durante el turno de cada jugador, ese jugador puede descartar 1 carta de Energía Fire o Fighting de su mano. Si ese jugador lo hace, roba 2 cartas.",
		it: "Una sola volta durante il turno di ciascun giocatore, quel giocatore può scartare una carta Energia Fire o Fighting presente tra le carte che ha in mano. Se lo fa, può pescare due carte.",
		pt: "Uma vez durante a vez de jogar de cada jogador, esse jogador pode descartar um card de Energia Fire ou Fighting da própria mão. Se fizer isso, esse jogador deverá comprar 2 cards.",
		de: "Einmal während seines Zuges darf jeder Spieler 1 Fire- oder 1 Fighting-Energiekarte von seiner Hand auf seinen Ablagestapel legen. Wenn ein Spieler das tut, zieht er 2 Karten."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 273669,
		tcgplayer: 96036
	}
}

export default card
