import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Energy Retrieval",
		fr: "Récupération d’Énergie",
		es: "Recuperación de Energía",
		it: "Recupero di Energia",
		pt: "Recuperação de Energia",
		de: "Energie-Zugewinn"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Prenez 2 cartes Énergie de base dans votre pile de défausse et ajoutez-les à votre main.",
		en: "Put 2 basic Energy cards from your discard pile into your hand.",
		es: "Pon 2 cartas de Energía Básica de tu pila de descartes en tu mano.",
		it: "Prendi due carte Energia base dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
		pt: "Coloque 2 cartas de Energia básica da sua pilha de descarte na sua mão.",
		de: "Nimm 2 Basis-Energiekarten aus deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 295429
	}
}

export default card
