import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [81],
	set: Set,

	name: {
		fr: "Magnéti",
		en: "Magnemite",
		es: "Magnemite",
		it: "Magnemite",
		pt: "Magnemite",
		de: "Magnetilo"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			fr: "Décharge Mineure",
			en: "Tiny Charge",
			es: "Carga Diminuta",
			it: "Sottocarica Minuscola",
			pt: "Carga Pequenina",
			de: "Mini-Stromstoß"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			fr: "Grosse Explosion",
			en: "Big Explosion",
			es: "Gran Explosión",
			it: "Grande Esplosione",
			pt: "Grande Explosão",
			de: "Große Explosion"
		},

		effect: {
			fr: "Ce Pokémon s'inflige aussi 60 dégâts.",
			en: "This Pokémon also does 60 damage to itself.",
			es: "Este Pokémon también se hace 60 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 60 danni a se stesso.",
			pt: "Este Pokémon também causa 60 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 60 Schadenspunkte zu."
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card