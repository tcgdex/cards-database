import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Judge",
		fr: "Juge",
		es: "Juez",
		it: "Arbitro",
		pt: "Juiz",
		de: "Richter"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Each player shuffles their hand into their deck and draws 4 cards.",
		fr: "Chaque joueur mélange sa main avec son deck et pioche 4 cartes.",
		es: "Cada jugador pone las cartas de su mano en su baraja, las baraja todas y roba 4 cartas.",
		it: "Ciascun giocatore rimischia le carte che ha in mano nel proprio mazzo e pesca quattro carte.",
		pt: "Cada jogador embaralha a própria mão no próprio baralho e compra 4 cartas.",
		de: "Jeder Spieler mischt seine Handkarten in sein Deck und zieht 4 Karten."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card