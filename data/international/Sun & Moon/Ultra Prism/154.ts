import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Mars",
		'fr-fr': "Mars",
		'es-es': "Venus",
		'it-it': "Martes",
		'pt-br': "Marte",
		'de-de': "Mars"
	},

	illustrator: "kodama",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Piochez 2 cartes. Dans ce cas, défaussez au hasard une carte de la main de votre adversaire.",
		'en-us': "Draw 2 cards. If you do, discard a random card from your opponent’s hand.",
		'es-es': "Roba 2 cartas. Si lo haces, descarta 1 carta aleatoria de la mano de tu rival.",
		'it-it': "Pesca due carte. Se lo fai, scarta una carta a caso dalla mano del tuo avversario.",
		'pt-br': "Compre 2 cartas. Se fizer isto, descarte 1 carta aleatória da mão do seu oponente.",
		'de-de': "Ziehe 2 Karten. Wenn du das machst, lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 316078,
		tcgplayer: 157770
	}
}

export default card
