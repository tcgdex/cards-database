import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Marnie",
		fr: "Rosemary",
		es: "Roxy",
		it: "Mary",
		pt: "Marine",
		de: "Mary"
	},

	illustrator: "kirisAki",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Each player shuffles their hand and puts it on the bottom of their deck. If either player put any cards on the bottom of their deck in this way, you draw 5 cards, and your opponent draws 4 cards.",
		fr: "Chaque joueur mélange sa main, puis la place en dessous de son deck. Si l’un des joueurs place ainsi au moins une carte en dessous de son deck, vous piochez 5 cartes et votre adversaire en pioche 4.",
		es: "Cada jugador baraja las cartas de su mano y las pone en la parte inferior de su baraja. Si cualquiera de los jugadores pone alguna carta en la parte inferior de su baraja de esta manera, robas 5 cartas, y tu rival roba 4 cartas.",
		it: "Ciascun giocatore rimischia le carte che ha in mano e le mette in fondo al proprio mazzo. Se almeno un giocatore ha messo delle carte in fondo al proprio mazzo in questo modo, tu peschi cinque carte e il tuo avversario ne pesca quattro.",
		pt: "Cada jogador embaralha a própria mão e coloca-a como as cartas de baixo do próprio baralho. Se qualquer um dos jogadores tiver colocado qualquer carta como a carta de baixo do próprio baralho desta forma, você comprará 5 cartas e seu oponente comprará 4 cartas.",
		de: "Jeder Spieler mischt seine Handkarten und legt sie unter sein Deck. Wenn ein oder beide Spieler auf diese Weise mindestens 1 Karte unter ihr Deck gelegt haben, ziehst du 5 Karten und dein Gegner zieht 4 Karten."
	},

	trainerType: "Supporter",
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
