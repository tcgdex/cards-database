import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [933],
	set: Set,

	name: {
		en: "Naclstack",
		fr: "Amassel",
		es: "Naclstack",
		it: "Naclstack",
		pt: "Naclstack",
		de: "Sedisal"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Rocky Tackle",
			fr: "Tacle Rocailleux",
			es: "Placaje Rocoso",
			it: "Azione Rocciosa",
			pt: "Investida Pedregosa",
			de: "Steiniger Tackle"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 80
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "KEIICHIRO ITO"
}

export default card