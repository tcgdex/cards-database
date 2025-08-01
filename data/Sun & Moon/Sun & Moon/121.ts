import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Ilima",
		fr: "Althéo",
		es: "Liam",
		it: "Liam",
		pt: "Luan",
		de: "Elima"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Chaque joueur mélange sa main avec son deck et lance une pièce. Si c’est face, ce joueur pioche 6 cartes. Si c’est pile, il pioche 3 cartes.",
		en: "Each player shuffles their hand into their deck and flips a coin. If heads, that player draws 6 cards. If tails, they draw 3 cards.",
		es: "Cada jugador pone las cartas de su mano en su baraja, las baraja todas y lanza 1 moneda. Si sale cara, ese jugador roba 6 cartas. Si sale cruz, roba 3 cartas.",
		it: "Entrambi i giocatori mettono le carte che hanno in mano nel loro mazzo e lo rimischiano, poi lanciano una moneta. Se a un giocatore esce testa, pesca sei carte. Se gli esce croce, pesca tre carte.",
		pt: "Cada jogador embaralha a própria mão no próprio baralho e joga 1 moeda. Se sair cara, o jogador comprará 6 cartas. Se sair coroa, o jogador comprará 3 cartas.",
		de: "Jeder Spieler mischt seine Handkarten in sein Deck und wirft 1 Münze. Bei Kopf zieht der Spieler 6 Karten. Bei Zahl zieht der Spieler 3 Karten."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 295434
	}
}

export default card
