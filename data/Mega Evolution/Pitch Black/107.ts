import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Energy Switch",
		fr: "Échange d'Énergie",
		es: "Interruptor de Energía",
		'es-mx': "Cambio de Energía",
		de: "Energie-Umschalter",
		it: "Scambio di Energia",
		pt: "Substituição de Energia"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Ultra Rare",
	category: "Trainer",
	trainerType: "Item",
	regulationMark: "I",

	effect: {
		en: "Move a Basic Energy from 1 of your Pokémon to another of your Pokémon.",
		fr: "Déplacez une Énergie de base de l'un de vos Pokémon vers un autre de vos Pokémon.",
		es: "Mueve 1 Energía Básica de uno de tus Pokémon a otro de tus Pokémon.",
		'es-mx': "Mueve 1 Energía Básica de 1 de tus Pokémon a otro de tus Pokémon.",
		de: "Verschiebe 1 Basis-Energie von 1 deiner Pokémon auf 1 anderes deiner Pokémon.",
		it: "Sposta un'Energia base da uno dei tuoi Pokémon a un altro dei tuoi Pokémon.",
		pt: "Mova uma Energia Básica de 1 dos seus Pokémon para outro Pokémon seu."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895892,
				tcgplayer: 704864
			}
		},
	],
}

export default card
