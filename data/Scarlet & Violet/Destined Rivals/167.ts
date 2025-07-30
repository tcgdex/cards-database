import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Judge",
		fr: "Juge",
		de: "Richter",
		it: "Arbitro",
		es: "Juez",
		pt: "Juiz",
		'es-mx': "Árbitro"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Each player shuffles their hand into their deck and draws 4 cards.",
		fr: "Chaque joueur mélange sa main avec son deck et pioche 4 cartes.",
		de: "Jeder Spieler mischt seine Handkarten in sein Deck und zieht 4 Karten.",
		it: "Ciascun giocatore rimischia le carte che ha in mano nel proprio mazzo e pesca quattro carte.",
		es: "Cada jugador pone las cartas de su mano en su baraja, las baraja todas y roba 4 cartas.",
		pt: "Cada jogador embaralha a própria mão no próprio baralho e compra 4 cartas.",
		'es-mx': "Cada jugador pone las cartas de su mano en su mazo, las baraja todas y roba 4 cartas."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card