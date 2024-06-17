import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [661],
	set: Set,

	name: {
		fr: "Passerouge",
		en: "Fletchling",
		es: "Fletchling",
		it: "Fletchling",
		pt: "Fletchling",
		de: "Dartiri"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Descente en Piqué",
			en: "Nosedive",
			es: "Ataque en Picado",
			it: "Rapidiscesa",
			pt: "Mergulhar de Bico",
			de: "Sturzflugangriff"
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
	regulationMark: "G"
}

export default card