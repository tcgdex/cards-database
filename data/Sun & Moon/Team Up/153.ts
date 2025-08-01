import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Return Label",
		fr: "Adresse de Retour",
		es: "Etiqueta de Retorno",
		it: "Ricevuta di Ritorno",
		pt: "Etiqueta de Retorno",
		de: "Rücksendeetikett"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Placez une carte de la pile de défausse de votre adversaire en dessous de son deck.",
		en: "Put a card from your opponent’s discard pile on the bottom of their deck.",
		es: "Pon 1 carta de la pila de descartes de tu rival en la parte inferior de su baraja.",
		it: "Prendi una carta dalla pila degli scarti del tuo avversario e mettila in fondo al suo mazzo.",
		pt: "Coloque 1 carta da pilha de descarte do seu oponente como a última carta do baralho dele(a).",
		de: "Lege 1 Karte aus dem Ablagestapel deines Gegners unter sein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 369078
	}
}

export default card
