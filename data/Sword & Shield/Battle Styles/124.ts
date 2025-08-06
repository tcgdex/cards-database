import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Energy Recycler",
		fr: "Recycleur d'Énergie",
		es: "Reciclaje de Energía",
		it: "Riciclaggio di Energia",
		pt: "Reciclador de Energia",
		de: "Energieaufbereitung"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Shuffle up to 5 basic Energy cards from your discard pile into your deck.",
		fr: "Mélangez jusqu'à 5 cartes Énergie de base de votre pile de défausse avec votre deck.",
		es: "Pon hasta 5 cartas de Energía Básica de tu pila de descartes en tu baraja y barájalas todas.",
		it: "Rimischia fino a cinque carte Energia base dalla tua pila degli scarti nel tuo mazzo.",
		pt: "Embaralhe até 5 cartas de Energia básica da sua pilha de descarte no seu baralho.",
		de: "Mische bis zu 5 Basis-Energiekarten aus deinem Ablagestapel in dein Deck."
	},

	trainerType: "Item",
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 545836,
		tcgplayer: 234116
	}
}

export default card
