import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Energy Recycle System",
		'fr-fr': "Recyclage d’Énergie",
		'es-es': "Sistema de Reciclaje de Energía",
		'it-it': "Sistema di Riciclo dell’Energia",
		'pt-br': "Sistema de Reciclagem de Energias",
		'de-de': "Energie-Wiederverwertung"
	},

	illustrator: "Zu-Ka",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Choisissez l’une de ces options :\n\n• Ajoutez une carte Énergie de base de votre pile de défausse à votre main.\n• Mélangez 3 cartes Énergie de base de votre pile de défausse avec votre deck.",
		'en-us': "Choose 1:\n\n•Put a basic Energy card from your discard pile into your hand.\n•Shuffle 3 basic Energy cards from your discard pile into your deck.",
		'es-es': "Elige 1 opción:\n\n• Pon 1 carta de Energía Básica de tu pila de descartes en tu mano.\n• Pon 3 cartas de Energía Básica de tu pila de descartes en tu baraja y barájalas todas.",
		'it-it': "Scegli:\n\n• Prendi una carta Energia base dalla tua pila degli scarti e aggiungila alle carte che hai in mano.\n• Rimischia tre carte Energia base dalla tua pila degli scarti nel tuo mazzo.",
		'pt-br': "Escolha 1:\n\n• Coloque 1 carta de Energia básica da sua pilha de descarte na sua mão.\n• Embaralhe 3 cartas de Energia básica da sua pilha de descarte no seu baralho.",
		'de-de': "Wähle 1 aus:\n\n•Nimm 1 Basis-Energiekarte aus deinem Ablagestapel auf deine Hand.\n•Mische 3 Basis-Energiekarten aus deinem Ablagestapel in dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 361366,
		tcgplayer: 170989
	}
}

export default card
