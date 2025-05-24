import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	dexId: [25],
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Pikachu V",
		fr: "Pikachu V",
		de: "Pikachu V",
		es: "Pikachu V",
		pt: "Pikachu V",
		it: "Pikachu V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			fr: "Électacle",
			de: "Volttackle",
			es: "Placaje Eléctrico",
			pt: "Investida Trovão",
			it: "Locomovolt",
			en: "Volt Tackle"
		},

		effect: {
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			en: "This Pokémon also does 30 damage to itself."
		},

		damage: 210
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card