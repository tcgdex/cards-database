import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Mars",
		fr: "Mars",
		es: "Venus",
		it: "Martes",
		pt: "Marte",
		de: "Mars"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Piochez 2 cartes. Dans ce cas, défaussez au hasard une carte de la main de votre adversaire.",
		en: "Draw 2 cards. If you do, discard a random card from your opponent’s hand.",
		es: "Roba 2 cartas. Si lo haces, descarta 1 carta aleatoria de la mano de tu rival.",
		it: "Pesca due carte. Se lo fai, scarta una carta a caso dalla mano del tuo avversario.",
		pt: "Compre 2 cartas. Se fizer isto, descarte 1 carta aleatória da mão do seu oponente.",
		de: "Ziehe 2 Karten. Wenn du das machst, lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 316053,
		tcgplayer: 157745
	}
}

export default card
