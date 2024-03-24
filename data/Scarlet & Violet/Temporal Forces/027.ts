import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Rapidash",
		fr: "Galopa",
		es: "Rapidash",
		it: "Rapidash",
		pt: "Rapidash",
		de: "Gallopa"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Combustion",
			fr: "Fournaise",
			es: "Combustión",
			it: "Fuoco Continuo",
			pt: "Combustão",
			de: "Glühen"
		},

		damage: 20
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			en: "Inferno Onrush",
			fr: "Torrent d'Enfer",
			es: "Infierno Desatado",
			it: "Assalto Infernale",
			pt: "Investida Infernal",
			de: "Inferno-Ansturm"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 120
	}],

	retreat: 0,
	regulationMark: "H"
}

export default card