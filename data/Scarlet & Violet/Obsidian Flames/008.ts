import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [415],
	set: Set,

	name: {
		fr: "Apitrini",
		en: "Combee",
		es: "Combee",
		it: "Combee",
		pt: "Combee",
		de: "Wadribie"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			fr: "Répartition",
			en: "Share",
			es: "Compartir",
			it: "Condiviso",
			pt: "Compartilhar",
			de: "Verteiler"
		},

		effect: {
			fr: "Soignez 20 dégâts de l'un de vos Pokémon de Banc.",
			en: "Heal 20 damage from 1 of your Benched Pokémon.",
			es: "Cura 20 puntos de daño a uno de tus Pokémon en Banca.",
			it: "Cura uno dei tuoi Pokémon in panchina da 20 danni.",
			pt: "Cure 20 pontos de dano de 1 dos seus Pokémon no Banco.",
			de: "Heile 20 Schadenspunkte bei 1 Pokémon auf deiner Bank."
		}
	}, {
		cost: ["Grass", "Grass"],

		name: {
			fr: "Collision",
			en: "Ram",
			es: "Apisonar",
			it: "Carica",
			pt: "Aríete",
			de: "Ramme"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "HYOGONOSUKE"
}

export default card