import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Bulbasaur",
		fr: "Bulbizarre"
	},

	illustrator: "Saboteri",
	rarity: "Black Star Promo",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Basic",
	dexId: [1],

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Leech Seed",
			fr: "Vampigraine"
		},

		effect: {
			en: "Heal 10 damage from this Pokémon.",
			fr: "Soignez 10 dégâts de ce Pokémon."
		},

		damage: 10
	}],

	retreat: 2,
	regulationMark: "J"
}

export default card
