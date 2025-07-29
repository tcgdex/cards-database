import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Energy Recycler",
		fr: "Recycleur d’Énergie",
		es: "Reciclaje de Energía",
		it: "Riciclaggio di Energia",
		pt: "Reciclador de Energia",
		de: "Energieaufbereitung"
	},

	illustrator: "Toyste Beach",
	rarity: "Secret Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Mélangez 5 cartes Énergie de base de votre pile de défausse avec votre deck.",
		en: "Shuffle 5 basic Energy cards from your discard pile into your deck.",
		es: "Pon 5 cartas de Energía Básica de tu pila de descartes en tu baraja y barájalas todas.",
		it: "Rimischia cinque carte Energia base dalla tua pila degli scarti nel tuo mazzo.",
		pt: "Embaralhe 5 cartas de Energia básica da sua pilha de descarte no seu baralho.",
		de: "Mische 5 Basis-Energiekarten aus deinem Ablagestapel in dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 355654
	}
}

export default card
