import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Bisharp",
		fr: "Scalproie",
		es: "Bisharp",
		it: "Bisharp",
		pt: "Bisharp",
		de: "Caesurio"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		en: "Pawniard"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Dark Cutter",
			fr: "Tranch'Obscur",
			es: "Cuchilla Oscura",
			it: "Oscurotaglio",
			pt: "Cortador de Escuridão",
			de: "Dunkler Zerschneider"
		},

		damage: 40
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Double-Edged Slash",
			fr: "Double Tranchant",
			es: "Cuchillada Doble Filo",
			it: "Doppio Taglio",
			pt: "Talho de Dois Gumes",
			de: "Zweischneidiger Schlitzer"
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

	retreat: 1,
	regulationMark: "G",
	illustrator: "Hideki Ishikawa",

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}]
}

export default card