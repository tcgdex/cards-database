import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Energy Recycler",
		'fr-fr': "Recycleur d'Énergie",
		'de-de': "Energieaufbereitung",
		'it-it': "Riciclaggio di Energia",
		'es-es': "Reciclaje de Energía",
		'pt-br': "Reciclador de Energia",
		'es-mx': "Reciclaje de Energía"
	},


	illustrator: "Toyste Beach",

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Shuffle up to 5 Basic Energy cards from your discard pile into your deck.",
		'fr-fr': "Mélangez jusqu'à 5 cartes Énergie de base de votre pile de défausse avec votre deck.",
		'de-de': "Mische bis zu 5 Basis-Energiekarten aus deinem Ablagestapel in dein Deck.",
		'it-it': "Rimischia fino a cinque carte Energia base dalla tua pila degli scarti nel tuo mazzo.",
		'es-es': "Pon hasta 5 cartas de Energía Básica de tu pila de descartes en tu baraja y barájalas todas.",
		'pt-br': "Embaralhe até 5 cartas de Energia Básica da sua pilha de descarte no seu baralho.",
		'es-mx': "Pon hasta 5 cartas de Energía Básica de tu pila de descartes en tu mazo y barájalas todas."
	},

	trainerType: "Item",
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 826038,
				tcgplayer: 632966
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 826038,
				tcgplayer: 632966
			}
		},
	],
}

export default card
