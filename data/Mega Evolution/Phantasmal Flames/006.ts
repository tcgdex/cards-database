import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Lombre",
		fr: "Lombre",
		es: "Lombre",
		'es-mx': "Lombre",
		de: "Lombrero",
		it: "Lombre",
		pt: "Lombre"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [271],
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Mega Drain",
			fr: "Méga-Sangsue",
			es: "Megaagotar",
			'es-mx': "Megadrenado",
			de: "Megasauger",
			it: "Megassorbimento",
			pt: "Megadreno"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			'es-mx': "Cura 30 puntos de daño a este Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 857581
	}
}

export default card