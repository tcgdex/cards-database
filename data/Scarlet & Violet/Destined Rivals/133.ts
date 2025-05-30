import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Bisharp",
		fr: "Scalproie",
		de: "Caesurio",
		it: "Bisharp",
		es: "Bisharp",
		pt: "Bisharp"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Dark Cutter",
			fr: "Tranch'Obscur",
			de: "Dunkler Zerschneider",
			it: "Oscurotaglio",
			es: "Cuchilla Oscura",
			pt: "Cortador de Escuridão"
		},

		damage: 40
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Double-Edged Slash",
			fr: "Double Tranchant",
			de: "Zweischneidiger Schlitzer",
			it: "Doppio Taglio",
			es: "Cuchillada Doble Filo",
			pt: "Talho de Dois Gumes"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card