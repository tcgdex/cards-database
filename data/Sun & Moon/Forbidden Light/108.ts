import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Judge",
		fr: "Juge",
		es: "Juez",
		it: "Arbitro",
		pt: "Juiz",
		de: "Richter"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Chaque joueur mélange sa main avec son deck et pioche 4 cartes.",
		en: "Each player shuffles their hand into their deck and draws 4 cards.",
		es: "Cada jugador pone las cartas de su mano en su baraja, las baraja todas y roba 4 cartas.",
		it: "Ciascun giocatore rimischia le carte che ha in mano nel proprio mazzo e pesca quattro carte.",
		pt: "Cada jogador embaralha a própria mão no próprio baralho e compra 4 cartas.",
		de: "Jeder Spieler mischt seine Handkarten in sein Deck und zieht 4 Karten."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 355621
	}
}

export default card
