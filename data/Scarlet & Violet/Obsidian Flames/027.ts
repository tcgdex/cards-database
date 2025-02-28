import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [5],
	set: Set,

	name: {
		fr: "Reptincel",
		en: "Charmeleon",
		es: "Charmeleon",
		it: "Charmeleon",
		pt: "Charmeleon",
		de: "Glutexo"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			fr: "Charge Énergétique",
			en: "Heat Tackle",
			es: "Placaje Ardiente",
			it: "Calorazione",
			pt: "Golpe de Colisão Aquecido",
			de: "Hitze-Tackle"
		},

		effect: {
			fr: "Ce Pokémon s'inflige aussi 20 dégâts.",
			en: "This Pokémon also does 20 damage to itself.",
			es: "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 20 danni a se stesso.",
			pt: "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu."
		},

		damage: 70
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: true,
		reverse: true,
		holo: true,
	}
}

export default card