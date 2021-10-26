import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Tower of Darkness",
		fr: "Tour des Ténèbres",
		es: "Torre de las Sombras",
		it: "Torre Buio",
		pt: "Torre das Sombras",
		de: "Turm des Unlichts"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Once during each player's turn, that player may draw 2 cards. In order to use this effect, that player must discard a Single Strike card from their hand.",
		fr: "Une fois pendant le tour de chaque joueur, ce joueur peut piocher 2 cartes. Afin d'utiliser cet effet, ce joueur doit défausser une carte Poing Final de sa main.",
		es: "Una vez durante el turno de cada jugador, ese jugador puede robar 2 cartas. Para poder usar este efecto, ese jugador debe descartar 1 carta de Golpe Brusco de su mano.",
		it: "Una sola volta durante il turno di ciascun giocatore, quel giocatore può pescare due carte. Per usare questo effetto, quel giocatore deve scartare una carta Colpo Singolo che ha in mano.",
		pt: "Uma vez durante o turno de cada jogador, aquele jogador poderá comprar 2 cartas. Para usar este efeito, aquele jogador deverá descartar 1 carta Golpe Decisivo da própria mão.",
		de: "Einmal während des Zuges jedes Spielers, kann jener Spieler 2 Karten ziehen. Um diesen Effekt einzusetzen, muss jener Spieler 1 Fokussierter-Angriff-Karte von seiner Hand auf seinen Ablagestapel legen."
	},

	regulationMark: "E",
	trainerType: "Stadium",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
