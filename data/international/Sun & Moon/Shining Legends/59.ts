import { Card } from 'models/database/card'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		'en-us': "Energy Retrieval",
		'fr-fr': "Récupération d’Énergie",
		'es-es': "Recuperación de Energía",
		'it-it': "Recupero di Energia",
		'pt-br': "Recuperação de Energia",
		'de-de': "Energie-Zugewinn"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Ajoutez 2 cartes Énergie de base de votre pile de défausse à votre main.",
		'en-us': "Put 2 basic Energy cards from your discard pile into your hand.",
		'es-es': "Pon 2 cartas de Energía Básica de tu pila de descartes en tu mano.",
		'it-it': "Prendi due carte Energia base dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
		'pt-br': "Coloque 2 cartas de Energia básica da sua pilha de descarte na sua mão.",
		'de-de': "Nimm 2 Basis-Energiekarten aus deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 302196,
		tcgplayer: 146722
	}
}

export default card
