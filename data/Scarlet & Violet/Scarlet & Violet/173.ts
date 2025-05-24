import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Energy Switch",
		fr: "Échange d'Énergie",
		es: "Interruptor de Energía",
		it: "Scambio di Energia",
		pt: "Substituição de Energia",
		de: "Energie-Umschalter"
	},

	rarity: "Common",
	category: "Trainer",

	effect: {
		en: "Move a Basic Energy from 1 of your Pokémon to another of your Pokémon.",
		fr: "Déplacez une Énergie de base de l'un de vos Pokémon vers un autre de vos Pokémon.",
		es: "Mueve 1 Energía Básica de uno de tus Pokémon a otro de tus Pokémon.",
		it: "Sposta un'Energia base da uno dei tuoi Pokémon a un altro.",
		pt: "Mova uma Energia Básica de 1 dos seus Pokémon para outro Pokémon seu.",
		de: "Verschiebe 1 Basis-Energie von 1 deiner Pokémon auf 1 anderes deiner Pokémon."
	},

	trainerType: "Item",
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Studio Bora Inc."
}

export default card