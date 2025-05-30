import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Shroomish",
		fr: "Balignon",
		de: "Knilz",
		it: "Shroomish",
		es: "Shroomish",
		pt: "Shroomish"
	},

	illustrator: "kurumitsu",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Absorb",
			fr: "Vole-Vie",
			de: "Absorber",
			it: "Assorbimento",
			es: "Absorber",
			pt: "Absorção"
		},

		effect: {
			en: "Heal 10 damage from this Pokémon.",
			fr: "Soignez 10 dégâts de ce Pokémon.",
			de: "Heile 10 Schadenspunkte bei diesem Pokémon.",
			it: "Cura questo Pokémon da 10 danni.",
			es: "Cura 10 puntos de daño a este Pokémon.",
			pt: "Cure 10 pontos de dano deste Pokémon."
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card