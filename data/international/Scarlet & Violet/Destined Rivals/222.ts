import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Judge",
		'fr-fr': "Juge",
		'de-de': "Richter",
		'it-it': "Arbitro",
		'es-es': "Juez",
		'pt-br': "Juiz",
		'es-mx': "Árbitro"
	},


	illustrator: "kantaro",

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "Each player shuffles their hand into their deck and draws 4 cards.",
		'fr-fr': "Chaque joueur mélange sa main avec son deck et pioche 4 cartes.",
		'de-de': "Jeder Spieler mischt seine Handkarten in sein Deck und zieht 4 Karten.",
		'it-it': "Ciascun giocatore rimischia le carte che ha in mano nel proprio mazzo e pesca quattro carte.",
		'es-es': "Cada jugador pone las cartas de su mano en su baraja, las baraja todas y roba 4 cartas.",
		'pt-br': "Cada jogador embaralha a própria mão no próprio baralho e compra 4 cartas.",
		'es-mx': "Cada jugador pone las cartas de su mano en su mazo, las baraja todas y roba 4 cartas."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 826096,
				tcgplayer: 633022
			}
		},
	],
}

export default card
