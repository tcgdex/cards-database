import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Meloetta",
		fr: "Meloetta",
		es: "Meloetta",
		'es-mx': "Meloetta",
		de: "Meloetta",
		it: "Meloetta",
		pt: "Meloetta"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",
	dexId: [648],

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Soothing Melody",
			fr: "Mélodie Relaxante",
			es: "Melodía Bálsamo",
			'es-mx': "Melodía Apaciguadora",
			de: "Beruhigende Melodie",
			it: "Melodia Calmante",
			pt: "Melodia Salutífera"
		},

		effect: {
			en: "Heal 120 damage from 1 of your Benched {P} Pokémon.",
			fr: "Soignez 120 dégâts de l'un de vos Pokémon {P} de Banc.",
			es: "Cura 120 puntos de daño a uno de tus Pokémon {P} en Banca.",
			'es-mx': "Cura 120 puntos de daño a 1 de tus Pokémon {P} en Banca.",
			de: "Heile 120 Schadenspunkte bei 1 {P}-Pokémon auf deiner Bank.",
			it: "Cura uno dei Pokémon {P} nella tua panchina da 120 danni.",
			pt: "Cure 120 pontos de dano de 1 dos seus Pokémon {P} no Banco."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Magical Shot",
			fr: "Coup Magique",
			es: "Disparo Mágico",
			'es-mx': "Disparo Mágico",
			de: "Magischer Schuss",
			it: "Magicolpo",
			pt: "Tiro Mágico"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857615
	}
}

export default card