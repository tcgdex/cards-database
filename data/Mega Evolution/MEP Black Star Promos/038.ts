import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Charmander",
		fr: "Salamèche"
	},

	illustrator: "Saboteri",
	rarity: "Black Star Promo",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",
	dexId: [4],

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Ember",
			fr: "Flammèche"
		},

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "J"
}

export default card
