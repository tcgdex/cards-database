import { Card } from "../../../interfaces"
import Set from "../Astral Radiance"

const card: Card = {
	set: Set,

	name: {
		en: "Jubilife Village"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Once during each player's turn, that player may shuffle their hand into their deck and draw 5 cards. If they do, their turn ends.",
		fr: "Une seule fois pendant le tour de chaque joueur, ce joueur peut mélanger sa main avec son deck et piocher 5 cartes. Dans ce cas, son tour se termine.",
		es: "Una vez durante el turno de cada jugador, ese jugador puede poner las cartas de su mano en su baraja, barajarlas todas y robar 5 cartas. Si lo hace, su turno termina.",
		it: "Una sola volta durante il turno di ciascun giocatore, quel giocatore può rimischiare le carte che ha in mano nel proprio mazzo e pescare cinque carte. Se lo fa, il suo turno finisce.",
		pt: "Uma vez durante o turno de cada jogador, aquele jogador poderá embaralhar a própria mão no próprio baralho e comprar 5 cartas. Se fizer isto, o turno daquele jogador acabará.",
		de: "Einmal während des Zuges jedes Spielers kann jener Spieler seine Handkarten in sein Deck mischen und 5 Karten ziehen. Wenn er das macht, endet sein Zug."
	},

	trainerType: "Stadium",
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card