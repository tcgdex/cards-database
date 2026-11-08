import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Special Charge",
		'fr-fr': "Recharge Spéciale",
		'es-es': "Carga Especial",
		'it-it': "Carica Speciale",
		'pt-br': "Carga Especial",
		'de-de': "Spezial-Aufladung"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Mélangez 2 cartes Énergie spéciale de votre pile de défausse avec votre deck.",
		'en-us': "Shuffle 2 Special Energy cards from your discard pile into your deck.",
		'es-es': "Pon 2 cartas de Energía Especial de tu pila de descartes en tu baraja y barájalas todas.",
		'it-it': "Rimischia due carte Energia speciale dalla tua pila degli scarti nel tuo mazzo.",
		'pt-br': "Embaralhe 2 cards de Energia Especial da sua pilha de descarte em seu baralho.",
		'de-de': "Mische 2 Basis-Energiekarten aus deinem Ablagestapel in dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 291552,
		tcgplayer: 121229
	}
}

export default card
