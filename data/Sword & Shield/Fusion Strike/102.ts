import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [807],
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
	retreat: 1,
	regulationMark: "E",
	illustrator: "Teeziro",

	description: {
		en: "It approaches its enemies at the speed of lightning, then tears them limb from limb with its sharp claws."
	},

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Wild Charge",
			fr: "Éclair Fou",
			de: "Stromstoß",
			es: "Voltio Cruel",
			pt: "Ataque Selvagem",
			it: "Sprizzalampo"
		},

		damage: 70,

		effect: {
			en: "This Pokémon also does 20 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 20 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 20 Schadenspunkte zu.",
			es: "Este Pokémon también se hace 20 puntos de daño a sí mismo.",
			pt: "Este Pokémon também causa 20 pontos de dano a si mesmo.",
			it: "Questo Pokémon infligge anche 20 danni a se stesso."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card