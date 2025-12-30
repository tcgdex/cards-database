import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Meloetta",
		fr: "Meloetta",
		de: "Meloetta",
		it: "Meloetta",
		es: "Meloetta",
		pt: "Meloetta"
	},

	illustrator: "Keisin",
	rarity: "None",
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
			de: "Beruhigende Melodie",
			it: "Melodia Calmante",
			es: "Melodía Bálsamo",
			pt: "Melodia Salutífera"
		},

		effect: {
			en: "Heal 120 damage from 1 of your Benched {P} Pokémon.",
			fr: "Soignez 120 dégâts de l'un de vos Pokémon {P} de Banc.",
			de: "Heile 120 Schadenspunkte bei 1 {P}-Pokémon auf deiner Bank.",
			it: "Cura uno dei Pokémon {P} nella tua panchina da 120 danni.",
			es: "Cura 120 puntos de daño a uno de tus Pokémon {P} en Banca.",
			pt: "Cure 120 pontos de dano de 1 dos seus Pokémon {P} no Banco."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Magical Shot",
			fr: "Coup Magique",
			de: "Magischer Schuss",
			it: "Magicolpo",
			es: "Disparo Mágico",
			pt: "Tiro Mágico"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "I",
}

export default card
