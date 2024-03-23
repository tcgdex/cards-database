import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Bisharp",
		fr: "Scalproie",
		es: "Bisharp",
		it: "Bisharp",
		pt: "Bisharp"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Dark Cutter",
			fr: "Tranch'Obscur",
			es: "Cuchilla Oscura",
			it: "Oscurotaglio",
			pt: "Cortador de Escuridão"
		},

		damage: 40
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Double-Edged Slash",
			fr: "Double Tranchant",
			es: "Cuchillada Doble Filo",
			it: "Doppio Taglio",
			pt: "Talho de Dois Gumes"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo."
		},

		damage: 120
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card