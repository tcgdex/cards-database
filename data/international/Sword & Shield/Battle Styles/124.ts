import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

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

	effect: {
		'en-us': "Shuffle up to 5 basic Energy cards from your discard pile into your deck.",
		'fr-fr': "Mélangez jusqu'à 5 cartes Énergie de base de votre pile de défausse avec votre deck.",
		'es-es': "Pon hasta 5 cartas de Energía Básica de tu pila de descartes en tu baraja y barájalas todas.",
		'it-it': "Rimischia fino a cinque carte Energia base dalla tua pila degli scarti nel tuo mazzo.",
		'pt-br': "Embaralhe até 5 cartas de Energia básica da sua pilha de descarte no seu baralho.",
		'de-de': "Mische bis zu 5 Basis-Energiekarten aus deinem Ablagestapel in dein Deck."
	},

	trainerType: "Item",
	regulationMark: "E",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545836,
				tcgplayer: 234116
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545836,
				tcgplayer: 234116
			}
		},
	],
}

export default card
