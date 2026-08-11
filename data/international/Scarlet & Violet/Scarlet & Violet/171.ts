import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Energy Retrieval",
		'fr-fr': "Récupération d'Énergie",
		'es-es': "Recuperación de Energía",
		'it-it': "Recupero di Energia",
		'pt-br': "Recuperação de Energia",
		'de-de': "Energie-Zugewinn"
	},

	rarity: "Common",
	category: "Trainer",

	effect: {
		'en-us': "Put up to 2 Basic Energy cards from your discard pile into your hand.",
		'fr-fr': "Ajoutez jusqu'à 2 cartes Énergie de base de votre pile de défausse à votre main.",
		'es-es': "Pon hasta 2 cartas de Energía Básica de tu pila de descartes en tu mano.",
		'it-it': "Prendi fino a due carte Energia base dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
		'pt-br': "Coloque até 2 cartas de Energia Básica da sua pilha de descarte na sua mão.",
		'de-de': "Nimm bis zu 2 Basis-Energiekarten aus deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Item",
	regulationMark: "G",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "Studio Bora Inc.",

	thirdParty: {
        cardmarket: 702467,
        tcgplayer: 488076
    }
}

export default card