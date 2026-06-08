import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Energy Retrieval",
		fr: "Récupération d'Énergie",
		es: "Recuperación de Energía",
		'es-mx': "Recuperación de Energía",
		de: "Energie-Zugewinn",
		it: "Recupero di Energia",
		pt: "Recuperação de Energia"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Ultra Rare",
	category: "Trainer",
	trainerType: "Item",
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 693482,
		cardmarket: 886498
	},

	effect: {
		en: "Put up to 2 Basic Energy cards from your discard pile into your hand.",
		fr: "Ajoutez jusqu'à 2 cartes Énergie de base de votre pile de défausse à votre main.",
		es: "Pon hasta 2 cartas de Energía Básica de tu pila de descartes en tu mano.",
		'es-mx': "Pon hasta 2 cartas de Energía Básica de tu pila de descartes en tu mano.",
		de: "Nimm bis zu 2 Basis-Energiekarten aus deinem Ablagestapel auf deine Hand.",
		it: "Prendi fino a due carte Energia base dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
		pt: "Coloque até 2 cartas de Energia Básica da sua pilha de descarte na sua mão."
	}
}

export default card
