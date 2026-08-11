import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Judge",
		'fr-fr': "Juge",
		'es-es': "Juez",
		'it-it': "Arbitro",
		'pt-br': "Juiz",
		'de-de': "Richter"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Chaque joueur mélange sa main avec son deck, puis pioche 4 cartes.",
		'en-us': "Each player shuffles his or her hand into his or her deck and draws 4 cards.",
		'es-es': "Los jugadores ponen las cartas de su mano en su baraja y las barajan todas. Después, cada jugador roba 4 cartas.",
		'it-it': "Ciascun giocatore rimischia le carte che ha in mano nel proprio mazzo e poi pesca quattro carte.",
		'pt-br': "Cada jogador embaralha sua mão em seu baralho e compra 4 cards.",
		'de-de': "Jeder Spieler mischt seine Handkarten in sein Deck und zieht 4 Karten."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 286389,
		tcgplayer: 107263
	}
}

export default card
