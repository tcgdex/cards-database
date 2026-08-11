import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Energy Retrieval",
		'fr-fr': "Récupération d'Énergie",
		'es-es': "Recuperación de Energía",
		'it-it': "Recupero di Energia",
		'pt-br': "Recuperação de Energia",
		'de-de': "Energie-Zugewinn"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Put up to 2 basic Energy cards from your discard pile into your hand.",
		'fr-fr': "Ajoutez à votre main jusqu'à 2 cartes Énergie de base de votre pile de défausse.",
		'es-es': "Pon hasta 2 cartas de Energía Básica de tu pila de descartes en tu mano.",
		'it-it': "Prendi fino a due carte Energia base dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
		'pt-br': "Coloque até 2 cartas de Energia básica da sua pilha de descarte na sua mão.",
		'de-de': "Nimm bis zu 2 Basis-Energiekarten aus deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Item",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 436894,
		tcgplayer: 208486
	}
}

export default card
