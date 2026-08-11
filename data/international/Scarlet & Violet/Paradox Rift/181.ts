import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tulip",
		'fr-fr': "Tully",
		'es-es': "Tuli",
		'it-it': "Tulipa",
		'pt-br': "Tulipa",
		'de-de': "Tulia"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Put up to 4 in any combination of {P} Pokémon and Basic {P} Energy cards from your discard pile into your hand.",
		'fr-fr': "Ajoutez à votre main une combinaison d'un maximum de 4 Pokémon {P} et cartes Énergie {P} de base de votre pile de défausse.",
		'es-es': "Pon, en cualquier combinación, hasta 4 cartas de Pokémon {P} y de Energía {P} Básica de tu pila de descartes en tu mano.",
		'it-it': "Prendi fino a quattro Pokémon {P} e carte Energia base {P} in qualsiasi combinazione dalla tua pila degli scarti e aggiungili alle carte che hai in mano.",
		'pt-br': "Coloque até 4 cartas de Pokémon {P} e de Energia {P} Básica da sua pilha de descarte na sua mão em qualquer combinação.",
		'de-de': "Nimm eine beliebige Kombination aus bis zu 4 {P}-Pokémon und Basis-{P}-Energiekarten aus deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Supporter",
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740724,
				tcgplayer: 523862,
				cardtrader: 265577
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740724,
				tcgplayer: 523862,
				cardtrader: 265577
			}
		},
	],

	illustrator: "Naoki Saito",

	
}

export default card
