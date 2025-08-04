import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Special Charge",
		fr: "Recharge Spéciale",
		es: "Carga Especial",
		it: "Carica Speciale",
		pt: "Carga Especial",
		de: "Spezial-Aufladung"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Mélangez 2 cartes Énergie spéciale de votre pile de défausse avec votre deck.",
		en: "Shuffle 2 Special Energy cards from your discard pile into your deck.",
		es: "Pon 2 cartas de Energía Especial de tu pila de descartes en tu baraja y barájalas todas.",
		it: "Rimischia due carte Energia speciale dalla tua pila degli scarti nel tuo mazzo.",
		pt: "Embaralhe 2 cards de Energia Especial da sua pilha de descarte em seu baralho.",
		de: "Mische 2 Basis-Energiekarten aus deinem Ablagestapel in dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 291552,
		tcgplayer: 121229
	}
}

export default card
