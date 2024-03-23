import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Woobat",
		fr: "Chovsourir",
		es: "Woobat",
		it: "Woobat",
		pt: "Woobat"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Reckless Charge",
			fr: "Attaque Imprudente",
			es: "Carga Descuidada",
			it: "Carica Avventata",
			pt: "Carga Indomável"
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
	regulationMark: "G"
}

export default card