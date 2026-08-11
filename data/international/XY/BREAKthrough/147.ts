import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Reserved Ticket",
		'fr-fr': "Billet Réservé",
		'es-es': "Pase Reservado",
		'it-it': "Prenotazione",
		'pt-br': "Tíquete Reservado",
		'de-de': "Vorbestellte Fahrkarte"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Lancez une pièce. Si c'est face, cherchez une carte dans votre deck. Mélangez votre deck, puis mettez la carte sur le dessus de votre deck.",
		'en-us': "Flip a coin. If heads, search your deck for a card, shuffle your deck, then put that card on top of it.",
		'es-es': "Lanza 1 moneda. Si sale cara, busca en tu baraja 1 carta, baraja las cartas de tu baraja, y luego pon esa carta en la parte superior de tu baraja.",
		'it-it': "Lancia una moneta. Se esce testa, cerca una carta nel tuo mazzo, rimischia le carte del tuo mazzo, poi metti quella carta in cima al mazzo.",
		'pt-br': "Jogue uma moeda. Se sair cara, procure um card em seu baralho, embaralhe o seu baralho e coloque o card sobre ele.",
		'de-de': "Wirf 1 Münze. Bei \"Kopf\" durchsuche dein Deck nach 1 Karte, mische anschließend dein Deck und lege jene Karte auf dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 286393,
		tcgplayer: 107268
	}
}

export default card
