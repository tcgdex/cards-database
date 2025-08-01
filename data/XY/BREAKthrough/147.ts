import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Reserved Ticket",
		fr: "Billet Réservé",
		es: "Pase Reservado",
		it: "Prenotazione",
		pt: "Tíquete Reservado",
		de: "Vorbestellte Fahrkarte"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez une pièce. Si c'est face, cherchez une carte dans votre deck. Mélangez votre deck, puis mettez la carte sur le dessus de votre deck.",
		en: "Flip a coin. If heads, search your deck for a card, shuffle your deck, then put that card on top of it.",
		es: "Lanza 1 moneda. Si sale cara, busca en tu baraja 1 carta, baraja las cartas de tu baraja, y luego pon esa carta en la parte superior de tu baraja.",
		it: "Lancia una moneta. Se esce testa, cerca una carta nel tuo mazzo, rimischia le carte del tuo mazzo, poi metti quella carta in cima al mazzo.",
		pt: "Jogue uma moeda. Se sair cara, procure um card em seu baralho, embaralhe o seu baralho e coloque o card sobre ele.",
		de: "Wirf 1 Münze. Bei \"Kopf\" durchsuche dein Deck nach 1 Karte, mische anschließend dein Deck und lege jene Karte auf dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 286393
	}
}

export default card
