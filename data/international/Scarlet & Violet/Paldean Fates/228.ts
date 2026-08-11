import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Judge",
		'fr-fr': "Juge",
		'es-es': "Juez",
		'it-it': "Arbitro",
		'de-de': "Richter",
		'pt-br': "Juiz"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		'en-us': "Each player shuffles their hand into their deck and draws 4 cards.",
		'fr-fr': "Chaque joueur mélange sa main avec son deck et pioche 4 cartes.",
		'es-es': "Cada jugador pone las cartas de su mano en su baraja, las baraja todas y roba 4 cartas.",
		'it-it': "Ciascun giocatore rimischia le carte che ha in mano nel proprio mazzo e pesca quattro carte.",
		'de-de': "Jeder Spieler mischt seine Handkarten in sein Deck und zieht 4 Karten.",
		'pt-br': "Cada jogador embaralha a própria mão no próprio baralho e compra 4 cartas."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751775,
				tcgplayer: 534748,
				cardtrader: 274412
			}
		},
	],

	illustrator: "Hideki Ishikawa",

	
}

export default card
