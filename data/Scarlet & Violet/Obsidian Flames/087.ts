import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [209],
	set: Set,

	name: {
		fr: "Snubbull",
		en: "Snubbull",
		es: "Snubbull",
		it: "Snubbull",
		pt: "Snubbull",
		de: "Snubbull"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			fr: "Ronge",
			en: "Gnaw",
			es: "Roer",
			it: "Rosicchiamento",
			pt: "Roída",
			de: "Nagen"
		},

		damage: 10
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			fr: "Damoclès",
			en: "Double-Edge",
			es: "Doble Filo",
			it: "Sdoppiatore",
			pt: "Faca de Dois Gumes",
			de: "Risikotackle"
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

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card