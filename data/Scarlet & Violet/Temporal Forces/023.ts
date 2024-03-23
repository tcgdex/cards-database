import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Rellor",
		fr: "Léboulérou",
		es: "Rellor",
		it: "Rellor",
		pt: "Rellor"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Slight Intrusion",
			fr: "Légère Intrusion",
			es: "Ligera Intromisión",
			it: "Coinvolgimento",
			pt: "Leve Invasão"
		},

		effect: {
			en: "This Pokémon also does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 10 dégâts.",
			es: "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 10 danni a se stesso.",
			pt: "Este Pokémon também causa 10 pontos de dano a si mesmo."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card