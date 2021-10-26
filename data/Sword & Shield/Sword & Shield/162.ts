import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Energy Switch",
		fr: "Échange d'Énergie",
		es: "Interruptor de Energía",
		it: "Scambio di Energia",
		pt: "Substituição de Energia",
		de: "Energie-Umschalter"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Move a basic Energy from 1 of your Pokémon to another of your Pokémon.",
		fr: "Déplacez une Énergie de base de l'un de vos Pokémon vers un autre de vos Pokémon.",
		es: "Mueve 1 Energía Básica de 1 de tus Pokémon a otro de tus Pokémon.",
		it: "Sposta un'Energia base da uno dei tuoi Pokémon a un altro.",
		pt: "Mova 1 Energia básica de 1 dos seus Pokémon para outro Pokémon seu.",
		de: "Verschiebe 1 Basis-Energie von 1 deiner Pokémon auf 1 anderes deiner Pokémon."
	},

	trainerType: "Item",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
