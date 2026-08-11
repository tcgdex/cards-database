import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,


	name: {
		'en-us': "Energy Retrieval",
		'fr-fr': "Récupération d'Énergie",
		'es-es': "Recuperación de Energía",
		'es-mx': "Recuperación de Energía",
		'de-de': "Energie-Zugewinn",
		'it-it': "Recupero di Energia",
		'pt-br': "Recuperação de Energia"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Ultra Rare",
	category: "Trainer",
	trainerType: "Item",
	regulationMark: "I",

	effect: {
		'en-us': "Put up to 2 Basic Energy cards from your discard pile into your hand.",
		'fr-fr': "Ajoutez jusqu'à 2 cartes Énergie de base de votre pile de défausse à votre main.",
		'es-es': "Pon hasta 2 cartas de Energía Básica de tu pila de descartes en tu mano.",
		'es-mx': "Pon hasta 2 cartas de Energía Básica de tu pila de descartes en tu mano.",
		'de-de': "Nimm bis zu 2 Basis-Energiekarten aus deinem Ablagestapel auf deine Hand.",
		'it-it': "Prendi fino a due carte Energia base dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
		'pt-br': "Coloque até 2 cartas de Energia Básica da sua pilha de descarte na sua mão."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 886498,
				tcgplayer: 693482
			}
		},
	],
}

export default card
