import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	set: Set,

	name: {
		en: "Mewtwo",
		fr: "Mewtwo",
		es: "Mewtwo",
		it: "Mewtwo",
		pt: "Mewtwo",
		de: "Mewtu"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Life Sucker",
			fr: "Aspire-Vie",
			es: "Sorbevidas",
			it: "Aspiravita",
			pt: "Sugador de Vida",
			de: "Lebenssauger"
		},

		effect: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts de ce Pokémon.",
			es: "Cura 20 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 20 danni.",
			pt: "Cure 20 pontos de dano deste Pokémon.",
			de: "Heile 20 Schadenspunkte bei diesem Pokémon."
		},

		damage: 20
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Psyburn",
			fr: "Brûlure Psy",
			es: "Psicoquemadura",
			it: "Psicobrucia",
			pt: "Queimadura Psíquica",
			de: "Psychoverbrennung"
		},

		damage: 110
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card