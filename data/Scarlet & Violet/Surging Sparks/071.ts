import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [176],
	set: Set,

	name: {
		en: "Togetic",
		fr: "Togetic",
		es: "Togetic",
		it: "Togetic",
		pt: "Togetic",
		de: "Togetic"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	evolveFrom: {
		en: "Togepi",
		fr: "Togepi",
		es: "Togepi",
		it: "Togepi",
		pt: "Togepi",
		de: "Togepi"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Draining Kiss",
			fr: "Vampibaiser",
			es: "Beso Drenaje",
			it: "Assorbibacio",
			pt: "Beijo Drenante",
			de: "Diebeskuss"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Teeziro",

	thirdParty: {
		cardmarket: 794360
	}
}

export default card
