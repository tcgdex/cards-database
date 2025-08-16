import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Judge",
		fr: "Juge",
		es: "Juez",
		it: "Arbitro",
		de: "Richter",
		pt: "Juiz"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		en: "Each player shuffles their hand into their deck and draws 4 cards.",
		fr: "Chaque joueur mélange sa main avec son deck et pioche 4 cartes.",
		es: "Cada jugador pone las cartas de su mano en su baraja, las baraja todas y roba 4 cartas.",
		it: "Ciascun giocatore rimischia le carte che ha in mano nel proprio mazzo e pesca quattro carte.",
		de: "Jeder Spieler mischt seine Handkarten in sein Deck und zieht 4 Karten.",
		pt: "Cada jogador embaralha a própria mão no próprio baralho e compra 4 cartas."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Hideki Ishikawa",

	thirdParty: {
		cardmarket: 751775
	}
}

export default card