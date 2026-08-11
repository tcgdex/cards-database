import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Wicke",
		'fr-fr': "Vicky",
		'es-es': "Zyra",
		'it-it': "Ciceria",
		'pt-br': "Lara",
		'de-de': "Pia"
	},

	illustrator: "take",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Chaque joueur compte les cartes qu’il a en main, les mélange dans son deck, puis pioche ce même nombre de cartes.",
		'en-us': "Each player counts the cards in their hand, shuffles those cards into their deck, then draws that many cards.",
		'es-es': "Cada jugador cuenta las cartas de su mano, pone esas cartas en su baraja y las baraja todas, y después roba ese mismo número de cartas.",
		'it-it': "Ciascun giocatore conta le carte che ha in mano, le rimischia nel proprio mazzo, quindi pesca lo stesso numero di carte.",
		'pt-br': "Cada jogador conta as cartas nas próprias mãos, embaralha-as no próprio baralho e em seguida compra aquele mesmo número de cartas.",
		'de-de': "Jeder Spieler zählt die Karten auf seiner Hand, mischt jene Karten in sein Deck und zieht anschließend dieselbe Anzahl Karten."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 299527,
		tcgplayer: 138621
	},
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
