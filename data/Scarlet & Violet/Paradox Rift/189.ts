import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [458],
	set: Set,

	name: {
		en: "Mantyke",
		fr: "Babimanta",
		es: "Mantyke",
		it: "Mantyke",
		pt: "Mantyke",
		de: "Mantirps"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Buoyant Healing",
			fr: "Soin Flottant",
			es: "Curación Boyante",
			it: "Galleggiacura",
			pt: "Cura Flutuante",
			de: "Treibende Heilung"
		},

		effect: {
			en: "Heal 120 damage from 1 of your Benched Pokémon.",
			fr: "Soignez 120 dégâts de l'un de vos Pokémon de Banc.",
			es: "Cura 120 puntos de daño a uno de tus Pokémon en Banca.",
			it: "Cura uno dei tuoi Pokémon in panchina da 120 danni.",
			pt: "Cure 120 pontos de dano de 1 dos seus Pokémon no Banco.",
			de: "Heile 120 Schadenspunkte bei 1 Pokémon auf deiner Bank."
		}
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card