import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Judge",
		'fr-fr': "Juge",
		'es-es': "Juez",
		'it-it': "Arbitro",
		'pt-br': "Juiz",
		'de-de': "Richter"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Chaque joueur mélange sa main avec son deck et pioche 4 cartes.",
		'en-us': "Each player shuffles their hand into their deck and draws 4 cards.",
		'es-es': "Cada jugador pone las cartas de su mano en su baraja, las baraja todas y roba 4 cartas.",
		'it-it': "Ciascun giocatore rimischia le carte che ha in mano nel proprio mazzo e pesca quattro carte.",
		'pt-br': "Cada jogador embaralha a própria mão no próprio baralho e compra 4 cartas.",
		'de-de': "Jeder Spieler mischt seine Handkarten in sein Deck und zieht 4 Karten."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 355621,
		tcgplayer: 165771
	}
}

export default card
