import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Zeraora",
		fr: "Zeraora",
		es: "Zeraora",
		it: "Zeraora",
		pt: "Zeraora",
		de: "Zeraora"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Wild Charge",
			fr: "Éclair Fou",
			es: "Voltio Cruel",
			it: "Sprizzalampo",
			pt: "Ataque Selvagem",
			de: "Stromstoß"
		},

		effect: {
			en: "This Pokémon also does 20 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 20 dégâts.",
			es: "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 20 danni a se stesso.",
			pt: "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu."
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card