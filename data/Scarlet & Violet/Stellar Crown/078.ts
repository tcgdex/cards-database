import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [307],
	set: Set,

	name: {
		en: "Meditite",
		fr: "Méditikka",
		es: "Meditite",
		it: "Meditite",
		pt: "Meditite",
		de: "Meditie"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Calm Mind",
			fr: "Plénitude",
			es: "Paz Mental",
			it: "Calmamente",
			pt: "Mente Calma",
			de: "Gedankengut"
		},

		effect: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts de ce Pokémon.",
			es: "Cura 20 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 20 danni.",
			pt: "Cure 20 pontos de dano deste Pokémon.",
			de: "Heile 20 Schadenspunkte bei diesem Pokémon."
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Chop",
			fr: "Coup Tranchant",
			es: "Cortar",
			it: "Ceffone",
			pt: "Trincar",
			de: "Hacker"
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Yuu Nishida",

	thirdParty: {
		cardmarket: 785932
	}
}

export default card
