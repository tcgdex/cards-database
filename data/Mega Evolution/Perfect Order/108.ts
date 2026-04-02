import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Energy Recycler",
		fr: "Recycleur d'Énergie",
		es: "Reciclaje de Energía",
		'es-mx': "Reciclaje de Energía",
		de: "Energieaufbereitung",
		it: "Riciclaggio di Energia",
		pt: "Reciclador de Energia"
	},

	illustrator: "Toyste Beach",
	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		en: "Shuffle up to 5 Basic Energy cards from your discard pile into your deck.",
		fr: "Mélangez jusqu'à 5 cartes Énergie de base de votre pile de défausse avec votre deck.",
		es: "Pon hasta 5 cartas de Energía Básica de tu pila de descartes en tu baraja y barájalas todas.",
		'es-mx': "Baraja hasta 5 cartas de Energía Básica de tu pila de descartes en tu mazo.",
		de: "Mische bis zu 5 Basis-Energiekarten aus deinem Ablagestapel in dein Deck.",
		it: "Rimischia fino a cinque carte Energia base dalla tua pila degli scarti nel tuo mazzo.",
		pt: "Embaralhe até 5 cartas de Energia Básica da sua pilha de descarte no seu baralho."
	},

	trainerType: "Item",
	regulationMark: "I",

	variants: [
		{
			type: "holo"
		}
	],

	thirdParty: {
		tcgplayer: 684327,
		cardmarket: 877525
	}
}

export default card
