import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Energy Retrieval",
		fr: "Récupération d'Énergie",
		es: "Recuperación de Energía",
		it: "Recupero di Energia",
		pt: "Recuperação de Energia",
		de: "Energie-Zugewinn"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Put up to 2 basic Energy cards from your discard pile into your hand.",
		fr: "Ajoutez à votre main jusqu'à 2 cartes Énergie de base de votre pile de défausse.",
		es: "Pon hasta 2 cartas de Energía Básica de tu pila de descartes en tu mano.",
		it: "Prendi fino a due carte Energia base dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
		pt: "Coloque até 2 cartas de Energia básica da sua pilha de descarte na sua mão.",
		de: "Nimm bis zu 2 Basis-Energiekarten aus deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Item",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
