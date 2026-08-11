import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Energy Switch",
		'fr-fr': "Échange d'Énergie",
		'de-de': "Energie-Umschalter",
		'it-it': "Scambio di Energia",
		'es-es': "Interruptor de Energía",
		'pt-br': "Substituição de Energia",
		'es-mx': "Cambio de Energía"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Common",
	category: "Trainer",

	effect: {
		'en-us': "Move a Basic Energy from 1 of your Pokémon to another of your Pokémon.",
		'fr-fr': "Déplacez une Énergie de base de l'un de vos Pokémon vers un autre de vos Pokémon.",
		'de-de': "Verschiebe 1 Basis-Energie von 1 deiner Pokémon auf 1 anderes deiner Pokémon.",
		'it-it': "Sposta un'Energia base da uno dei tuoi Pokémon a un altro dei tuoi Pokémon.",
		'es-es': "Mueve 1 Energía Básica de uno de tus Pokémon a otro de tus Pokémon.",
		'pt-br': "Mova uma Energia Básica de 1 dos seus Pokémon para outro Pokémon seu.",
		'es-mx': "Mueve 1 Energía Básica de 1 de tus Pokémon a otro de tus Pokémon."
	},

	trainerType: "Item",
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851186,
				tcgplayer: 654454
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851186,
				tcgplayer: 654454
			}
		},
	],
}

export default card
