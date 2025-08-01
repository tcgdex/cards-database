import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Peeking Red Card",
		fr: "Coup d’Œil au Carton Rouge",
		es: "Tarjeta Roja Vistazo",
		it: "Cartelrosso Spione",
		pt: "Cartão Vermelho Espião",
		de: "Rote Späher-Karte"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Votre adversaire dévoile sa main. Vous pouvez demander à votre adversaire de compter les cartes dans sa main, de les mélanger avec son deck, puis de piocher ce même nombre de cartes.",
		en: "Your opponent reveals their hand. You may have your opponent count the cards in their hand, shuffle those cards into their deck, then draw that many cards.",
		es: "Tu rival enseña las cartas de su mano. Puedes hacer que tu rival cuente las cartas de su mano, las ponga en su baraja y las baraje todas, y después robe la misma cantidad de cartas.",
		it: "Il tuo avversario mostra le carte che ha in mano. Puoi fargliele contare e rimischiare nel suo mazzo e poi fargli pescare lo stesso numero di carte.",
		pt: "Seu oponente revela a própria mão. Você pode fazer com que o seu oponente conte as cartas na própria mão, embaralhe aquelas cartas no baralho dele(a) e então compre aquele mesmo número de cartas.",
		de: "Dein Gegner zeigt dir seine Handkarten. Du kannst deinen Gegner dazu veranlassen, die Karten auf seiner Hand zu zählen, jene Karten in sein Deck zu mischen und anschließend dieselbe Anzahl Karten zu ziehen."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 311945
	}
}

export default card
