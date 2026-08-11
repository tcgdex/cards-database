import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lucian",
		'fr-fr': "Lucio",
		'es-es': "Delos",
		'it-it': "Luciano",
		'pt-br': "Lucian",
		'de-de': "Lucian"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Each player shuffles their hand and puts it on the bottom of their deck. If either player put any cards on the bottom of their deck in this way, each player flips a coin. If heads, that player draws 6 cards. If tails, they draw 3 cards.",
		'fr-fr': "Chaque joueur mélange sa main, puis la place en dessous de son deck. Si l'un des joueurs place de cette façon au moins une carte en dessous de son deck, chaque joueur lance une pièce. Si c'est face, ce joueur pioche 6 cartes. Si c'est pile, il pioche 3 cartes.",
		'es-es': "Cada jugador baraja las cartas de su mano y las pone en la parte inferior de su baraja. Si cualquiera de los jugadores pone alguna carta en la parte inferior de su baraja de esta manera, cada jugador lanza 1 moneda. Si sale cara, ese jugador roba 6 cartas. Si sale cruz, roba 3 cartas.",
		'it-it': "Ciascun giocatore rimischia le carte che ha in mano e le mette in fondo al proprio mazzo. Se almeno un giocatore ha messo delle carte in fondo al proprio mazzo in questo modo, ciascun giocatore lancia una moneta. Se esce testa, quel giocatore pesca sei carte. Se esce croce, ne pesca tre.",
		'pt-br': "Cada jogador embaralha a própria mão e coloca-a como as cartas de baixo do próprio baralho. Se qualquer um dos jogadores tiver colocado qualquer carta como a carta de baixo do próprio baralho desta forma, cada jogador jogará uma moeda. Se sair cara, aquele jogador comprará 6 cartas. Se sair coroa, ele comprará 3 cartas.",
		'de-de': "Jeder Spieler mischt seine Handkarten und legt sie unter sein Deck. Wenn ein oder beide Spieler auf diese Weise mindestens 1 Karte unter ihr Deck gelegt haben, wirft jeder Spieler 1 Münze. Bei Kopf zieht jener Spieler 6 Karten. Bei Zahl zieht er 3 Karten."
	},

	trainerType: "Supporter",
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769331,
				tcgplayer: 550201
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769331,
				tcgplayer: 550201
			}
		},
	],

	illustrator: "hncl",

}

export default card