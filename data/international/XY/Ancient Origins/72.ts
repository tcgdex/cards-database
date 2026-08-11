import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Energy Recycler",
		'fr-fr': "Recycleur d'Énergie",
		'es-es': "Reciclaje de Energía",
		'it-it': "Riciclaggio di Energia",
		'pt-br': "Reciclador de Energia",
		'de-de': "Energieaufbereitung"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Mélangez 5 cartes Énergie de base de votre pile de défausse avec votre deck.",
		'en-us': "Shuffle 5 basic Energy cards from your discard pile into your deck.",
		'es-es': "Pon 5 cartas de Energía Básica de tu pila de descartes en tu baraja y barájalas todas.",
		'it-it': "Rimischia cinque carte Energia base dalla tua pila degli scarti nel tuo mazzo.",
		'pt-br': "Embaralhe 5 cards de Energia básica da sua pilha de descarte no seu baralho.",
		'de-de': "Mische 5 Basis-Energiekarten aus deinem Ablagestapel in dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 284253,
		tcgplayer: 101494
	}
}

export default card
