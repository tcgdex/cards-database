import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Erika",
		'fr-fr': "Erika",
		'es-es': "Erika",
		'it-it': "Erika",
		'pt-br': "Érica",
		'de-de': "Erika"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Chaque joueur peut piocher jusqu’à 3 cartes. Vous piochez en premier.",
		'en-us': "Each player may draw up to 3 cards. You draw first.",
		'es-es': "Cada jugador puede robar hasta 3 cartas. Tú robas primero.",
		'it-it': "Ciascun giocatore può pescare fino a tre carte. Tu peschi per primo.",
		'pt-br': "Cada jogador pode comprar até 3 cartas. Você compra primeiro.",
		'de-de': "Jeder Spieler kann bis zu 3 Karten ziehen. Du ziehst als Erster."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 408569,
		tcgplayer: 201930
	}
}

export default card
