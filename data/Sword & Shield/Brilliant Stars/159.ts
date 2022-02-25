import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Granbull V",
		fr: "Granbull V",
		es: "Granbull V",
		it: "Granbull V",
		pt: "Granbull V",
		de: "Granbull V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Chomp",
			fr: "Mâche",
			es: "Masticar",
			it: "Biascicamento",
			pt: "Nhoc",
			de: "Mampf"
		},

		effect: {
			en: "This attack does 10 more damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts sur ce Pokémon.",
			es: "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
			it: "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
			pt: "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Bull Dash",
			fr: "Ruée Frontale",
			es: "Choque Bravo",
			it: "Corsa Bull",
			pt: "Arremetida Violenta",
			de: "Bullspurt"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 190
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card