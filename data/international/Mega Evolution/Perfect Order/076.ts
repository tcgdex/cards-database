import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Judge",
		'fr-fr': "Juge",
		'es-es': "Juez",
		'es-mx': "Árbitro",
		'de-de': "Richter",
		'it-it': "Arbitro",
		'pt-br': "Juiz"
	},

	illustrator: "kantaro",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Each player shuffles their hand into their deck and draws 4 cards.",
		'fr-fr': "Chaque joueur mélange sa main avec son deck et pioche 4 cartes.",
		'es-es': "Cada jugador pone las cartas de su mano en su baraja, las baraja todas y roba 4 cartas.",
		'es-mx': "Cada jugador baraja su mano en su mazo y roba 4 cartas.",
		'de-de': "Jeder Spieler mischt seine Handkarten in sein Deck und zieht 4 Karten.",
		'it-it': "Ciascun giocatore rimischia le carte che ha in mano nel proprio mazzo e pesca quattro carte.",
		'pt-br': "Cada jogador embaralha a própria mão no próprio baralho e compra 4 cartas."
	},

	trainerType: "Supporter",
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684323,
				cardmarket: 877493
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684323,
				cardmarket: 877493
			}
		},
		{
			type: "normal",
			stamp: ["regional-championships"]
		},
		{
			type: "normal",
			stamp: ["regional-championships", "staff"]
		}
	],

}

export default card
