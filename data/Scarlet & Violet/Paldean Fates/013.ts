import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [479],
	set: Set,

	name: {
		en: "Heat Rotom",
		fr: "Motisma Chaleur",
		es: "Rotom Calor",
		it: "Rotom Calore",
		pt: "Rotom Calor",
		de: "Hitze-Rotom"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			en: "Heat Tackle",
			fr: "Charge Énergétique",
			es: "Placaje Ardiente",
			it: "Calorazione",
			pt: "Golpe de Colisão Aquecido",
			de: "Hitze-Tackle"
		},

		effect: {
			en: "This Pokémon also does 40 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 40 dégâts.",
			es: "Este Pokémon también se hace 40 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 40 danni a se stesso.",
			pt: "Este Pokémon também causa 40 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 40 Schadenspunkte zu."
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		normal: false
	}
}

export default card
