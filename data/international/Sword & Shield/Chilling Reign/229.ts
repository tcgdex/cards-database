import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Urn of Vitality",
		'fr-fr': "Urne de Vitalité",
		'es-es': "Urna Vitalidad",
		'it-it': "Urna del Vigore",
		'pt-br': "Urna de Vitalidade",
		'de-de': "Urne der Vitalität"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		'en-us': "Shuffle up to 2 Single Strike Energy cards from your discard pile into your deck.",
		'fr-fr': "Mélangez avec votre deck jusqu'à 2 cartes Énergie Poing Final de votre pile de défausse.",
		'es-es': "Pon hasta 2 cartas de Energía Golpe Brusco de tu pila de descartes en tu baraja y barájalas todas.",
		'it-it': "Rimischia fino a due carte Energia Colpo Singolo dalla tua pila degli scarti nel tuo mazzo.",
		'pt-br': "Embaralhe até 2 cartas de Energia Golpe Decisivo da sua pilha de descarte no seu baralho.",
		'de-de': "Mische bis zu 2 Fokussierter-Angriff-Energiekarten aus deinem Ablagestapel in dein Deck."
	},

	trainerType: "Item",


	illustrator: "Toyste Beach",
	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 567337,
				tcgplayer: 241877
			}
		},
	],
}

export default card
