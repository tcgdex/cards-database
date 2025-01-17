import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu ex",
		fr: "Pikachu-ex",
		es: "Pikachu ex",
		pt: "Pikachu ex",
		it: "Pikachu-ex",
		de: "Pikachu-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Tail Whap",
			fr: "Queue Battoir",
			es: "Coletón",
			pt: "Surra de Cauda",
			it: "Codabotta",
			de: "Schweifvertrimmer"
		},

		damage: 30
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Thunder",
			fr: "Fatal-Foudre",
			es: "Trueno",
			pt: "Trovão",
			it: "Tuono",
			de: "Donner"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 220
	}],

	retreat: 1,
	regulationMark: "H",
	variants: {
		holo: true,
		normal: false
	}
}

export default card