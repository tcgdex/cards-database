import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tarragon",
		'fr-fr': "Taragon",
		'es-es': "Estragón",
		'es-mx': "Estragón",
		'de-de': "Tarragon",
		'it-it': "Tarragon",
		'pt-br': "Tarragon"
	},

	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Put up to 4 in any combination of {F} Pokémon and Basic {F} Energy cards from your discard pile into your hand.",
		'fr-fr': "Ajoutez à votre main une combinaison d'un maximum de 4 Pokémon {F} et/ou cartes Énergie {F} de base de votre pile de défausse.",
		'es-es': "Pon, en cualquier combinación, hasta 4 cartas de Pokémon {F} y de Energía {F} Básica de tu pila de descartes en tu mano.",
		'es-mx': "Pon, en cualquier combinación, hasta 4 cartas de Pokémon {F} y de Energía {F} Básica de tu pila de descartes en tu mano.",
		'de-de': "Nimm eine beliebige Kombination aus bis zu 4 {F}-Pokémon und Basis-{F}-Energiekarten aus deinem Ablagestapel auf deine Hand.",
		'it-it': "Prendi fino a quattro fra Pokémon {F} e carte Energia base {F} in qualsiasi combinazione dalla tua pila degli scarti e aggiungili alle carte che hai in mano.",
		'pt-br': "Coloque até 4 cartas de Pokémon {F} e de Energia {F} Básica da sua pilha de descarte na sua mão em qualquer combinação."
	},

	trainerType: "Supporter",
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684344,
				cardmarket: 877502
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684344,
				cardmarket: 877502
			}
		}
	],

}

export default card
