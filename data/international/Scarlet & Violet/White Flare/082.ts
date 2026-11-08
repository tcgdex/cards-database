import { Card } from "models/database/card"
import Set from "../White Flare"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Energy Retrieval",
		'fr-fr': "Récupération d'Énergie",
		'de-de': "Energie-Zugewinn",
		'it-it': "Recupero di Energia",
		'pt-br': "Recuperação de Energia",
		'es-es': "Recuperación de Energía",
		'es-mx': "Recuperación de Energía"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Put up to 2 Basic Energy cards from your discard pile into your hand.",
		'fr-fr': "Ajoutez jusqu'à 2 cartes Énergie de base de votre pile de défausse à votre main.",
		'de-de': "Nimm bis zu 2 Basis-Energiekarten aus deinem Ablagestapel auf deine Hand.",
		'it-it': "Prendi fino a due carte Energia base dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
		'pt-br': "Coloque até 2 cartas de Energia Básica da sua pilha de descarte na sua mão.",
		'es-es': "Pon hasta 2 cartas de Energía Básica de tu pila de descartes en tu mano.",
		'es-mx': "Pon hasta 2 cartas de Energía Básica de tu pila de descartes en tu mano."
	},

	trainerType: "Item",
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836054,
				tcgplayer: 642194
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 836054,
				tcgplayer: 642194
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 836643,
				tcgplayer: 644831
			}
		},
	],
}

export default card
