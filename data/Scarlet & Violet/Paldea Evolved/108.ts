import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Tauros de Paldea",
		en: "Paldean Tauros",
		es: "Tauros de Paldea",
		it: "Tauros di Paldea",
		pt: "Tauros de Paldea",
		de: "Paldea-Tauros"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Cornes Furieuses",
			en: "Raging Horns",
			es: "Cuernos Embravecidos",
			it: "Corna Furiose",
			pt: "Chifres Indomáveis",
			de: "Rasende Hörner"
		},

		effect: {
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
			en: "This attack does 10 more damage for each damage counter on this Pokémon.",
			es: "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
			it: "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
			pt: "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			fr: "Offensive Combative",
			en: "Combat Tackle",
			es: "Placaje Combate",
			it: "Azione Scontro",
			pt: "Investida de Combate",
			de: "Gefechts-Tackle"
		},

		effect: {
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			en: "This Pokémon also does 30 damage to itself.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card