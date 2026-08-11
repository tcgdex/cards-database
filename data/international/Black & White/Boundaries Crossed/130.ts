import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Hugh",
		'fr-fr': "Matis",
		'es-es': "Matís",
		'it-it': "Toni",
		'pt-br': "Hugh",
		'de-de': "Matisse"
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Chaque joueur pioche ou défausse des cartes jusqu’à avoir 5 cartes dans sa main. (Votre adversaire le fait en premier.)",
		'en-us': "Each player either draws or discards cards until he or she has 5 cards in his or her hand. (Your opponent does this first.)",
		'es-es': "Cada jugador roba o descarta cartas hasta tener 5 cartas en su mano. (Tu rival lo hace primero.)",
		'it-it': "Ciascun giocatore pesca o scarta carte fino ad avere cinque carte in mano. Inizia il tuo avversario.",
		'pt-br': "Cada jogador compra ou descarta cards até ter 5 cards na mão. (Seu oponente faz isso primeiro.)",
		'de-de': "Jeder Spieler muss so viele Karten ziehen oder ablegen, bis er 5 Karten auf der Hand hat. (Dein Gegner beginnt.)"
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 280717,
		tcgplayer: 86235
	}
}

export default card
