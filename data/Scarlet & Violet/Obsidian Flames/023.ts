import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [951],
	set: Set,

	name: {
		fr: "Pimito",
		en: "Capsakid",
		es: "Capsakid",
		it: "Capsakid",
		pt: "Capsakid",
		de: "Chilingel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Attaque Imprudente",
			en: "Reckless Charge",
			es: "Carga Descuidada",
			it: "Carica Avventata",
			pt: "Carga Indomável",
			de: "Waghalsiger Sturmangriff"
		},

		effect: {
			fr: "Ce Pokémon s'inflige aussi 10 dégâts.",
			en: "This Pokémon also does 10 damage to itself.",
			es: "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 10 danni a se stesso.",
			pt: "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Shin Nagasawa"
}

export default card