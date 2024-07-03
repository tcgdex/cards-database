import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Virovent",
		en: "Bramblin",
		es: "Bramblin",
		it: "Bramblin",
		pt: "Bramblin",
		de: "Weherba"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			fr: "Pâté",
			en: "Blot",
			es: "Absorción",
			it: "Macchia",
			pt: "Borrão",
			de: "Klecks"
		},

		effect: {
			fr: "Soignez 10 dégâts de ce Pokémon.",
			en: "Heal 10 damage from this Pokémon.",
			es: "Cura 10 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 10 danni.",
			pt: "Cure 10 pontos de dano deste Pokémon.",
			de: "Heile 10 Schadenspunkte bei diesem Pokémon."
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card