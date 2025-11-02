import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [1],
	set: Set,

	name: {
		fr: "Bulbizarre",
		en: "Bulbasaur",
		es: "Bulbasaur",
		it: "Bulbasaur",
		pt: "Bulbasaur",
		de: "Bisasam"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			fr: "Vampigraine",
			en: "Leech Seed",
			es: "Drenadoras",
			it: "Parassiseme",
			pt: "Semente Sanguessuga",
			de: "Egelsamen"
		},

		effect: {
			fr: "Soignez 20 dégâts de ce Pokémon.",
			en: "Heal 20 damage from this Pokémon.",
			es: "Cura 20 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 20 danni.",
			pt: "Cure 20 pontos de dano deste Pokémon.",
			de: "Heile 20 Schadenspunkte bei diesem Pokémon."
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Yuu Nishida",

	thirdParty: {
		cardmarket: 733596
	}
}

export default card