import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Energy Switch",
		'fr-fr': "Échange d'Énergie",
		'es-es': "Interruptor de Energía",
		'it-it': "Scambio di Energia",
		'pt-br': "Substituição de Energia",
		'de-de': "Energie-Umschalter"
	},

	rarity: "Common",
	category: "Trainer",

	effect: {
		'en-us': "Move a Basic Energy from 1 of your Pokémon to another of your Pokémon.",
		'fr-fr': "Déplacez une Énergie de base de l'un de vos Pokémon vers un autre de vos Pokémon.",
		'es-es': "Mueve 1 Energía Básica de uno de tus Pokémon a otro de tus Pokémon.",
		'it-it': "Sposta un'Energia base da uno dei tuoi Pokémon a un altro.",
		'pt-br': "Mova uma Energia Básica de 1 dos seus Pokémon para outro Pokémon seu.",
		'de-de': "Verschiebe 1 Basis-Energie von 1 deiner Pokémon auf 1 anderes deiner Pokémon."
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
        cardmarket: 702469,
        tcgplayer: 488078
    }
}

export default card