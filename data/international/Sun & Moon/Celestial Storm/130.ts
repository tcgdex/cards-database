import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Fisherman",
		'fr-fr': "Pêcheur",
		'es-es': "Pescador",
		'it-it': "Pescatore",
		'pt-br': "Pescador",
		'de-de': "Angler"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Ajoutez 4 cartes Énergie de base de votre pile de défausse à votre main.",
		'en-us': "Put 4 basic Energy cards from your discard pile into your hand.",
		'es-es': "Pon 4 cartas de Energía Básica de tu pila de descartes en tu mano.",
		'it-it': "Prendi quattro carte Energia base dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
		'pt-br': "Coloque 4 cartas de Energia básica da sua pilha de descarte na sua mão.",
		'de-de': "Nimm 4 Basis-Energiekarten aus deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 361368,
		tcgplayer: 170991
	}
}

export default card
