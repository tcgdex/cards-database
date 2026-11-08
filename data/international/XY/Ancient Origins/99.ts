import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Energy Retrieval",
		'fr-fr': "Récupération d'Énergie",
		'es-es': "Recuperación de Energía",
		'it-it': "Recupero di Energia",
		'pt-br': "Recuperação de Energia",
		'de-de': "EnergieZugewinn"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Prenez 2 cartes Énergie de base dans votre pile de défausse et ajoutez-les à votre main.",
		'en-us': "Put 2 basic Energy cards from your discard pile into your hand.",
		'es-es': "Pon 2 cartas de Energía Básica de tu pila de descartes en tu mano.",
		'it-it': "Prendi due carte Energia base dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
		'pt-br': "Coloque 2 cards de Energias básicas da pilha de descarte em sua mão.",
		'de-de': "Nimm 2 Basis-Energiekarten von deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 284280,
		tcgplayer: 101521
	}
}

export default card
