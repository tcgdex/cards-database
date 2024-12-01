import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Clobbopus",
		fr: "Poulpaf",
		es: "Clobbopus",
		it: "Clobbopus",
		pt: "Clobbopus",
		de: "Klopptopus"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Slight Intrusion",
			fr: "Légère Intrusion",
			es: "Ligera Intromisión",
			it: "Coinvolgimento",
			pt: "Leve Invasão",
			de: "Vorwagen"
		},

		effect: {
			en: "This Pokémon also does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 10 dégâts.",
			es: "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 10 danni a se stesso.",
			pt: "Este Pokémon também causa 10 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu."
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	}
}

export default card
