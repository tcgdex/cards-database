import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Applin",
		fr: "Verpom",
		de: "Knapfel",
		it: "Applin",
		es: "Applin",
		pt: "Applin",
		'es-mx': "Applin"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Mini Drain",
			fr: "Mini-Assèchement",
			de: "Minisauger",
			it: "Miniassorbimento",
			es: "Minidrenaje",
			pt: "Minidreno",
			'es-mx': "Minidrenado"
		},

		effect: {
			en: "Heal 10 damage from this Pokémon.",
			fr: "Soignez 10 dégâts de ce Pokémon.",
			de: "Heile 10 Schadenspunkte bei diesem Pokémon.",
			it: "Cura questo Pokémon da 10 danni.",
			es: "Cura 10 puntos de daño a este Pokémon.",
			pt: "Cure 10 pontos de dano deste Pokémon.",
			'es-mx': "Cura 10 puntos de daño a este Pokémon."
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		holo: false
	}
}

export default card