import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Stunfisk",
		fr: "Limonde de Galar",
		es: "Stunfisk de Galar",
		de: "Galar-Flunschlik",
		it: "Stunfisk di Galar",
		pt: "Stunfisk de Galar",
		'es-mx': "Stunfisk de Galar"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Mud-Slap",
			fr: "Coud'Boue",
			es: "Bofetón Lodo",
			de: "Lehmschelle",
			it: "Fangosberla",
			pt: "Tapa de Lama",
			'es-mx': "Bofetón Lodo"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Bounding Bite",
			fr: "Morsure Bondissante",
			es: "Salto y Mordisco",
			de: "Sprungbiss",
			it: "Balzamorso",
			pt: "Mordida Saltitante",
			'es-mx': "Mordida Asaltante"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'es-mx': "Este Pokémon también se hace 30 puntos de daño a sí mismo."
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
