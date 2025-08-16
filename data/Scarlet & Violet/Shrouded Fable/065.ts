import { Card } from "../../../interfaces"
import Set from "../Shrouded Fable"

const card: Card = {
	dexId: [787],
	set: Set,

	name: {
		en: "Tapu Bulu",
		fr: "Tokotoro",
		es: "Tapu Bulu",
		it: "Tapu Bulu",
		pt: "Tapu Bulu",
		de: "Kapu-Toro"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Grass", "Colorless", "Colorless"],

		name: {
			en: "Wood Hammer",
			fr: "Martobois",
			es: "Mazazo",
			it: "Mazzuolegno",
			pt: "Martelo de Madeira",
			de: "Holzhammer"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 220
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "IKEDA Saki",

	thirdParty: {
		cardmarket: 780894
	}
}

export default card
