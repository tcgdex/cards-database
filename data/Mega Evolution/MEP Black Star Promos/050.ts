import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Tepig",
		fr: "Gruikui"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",
	dexId: [498],

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			en: "Ember",
			fr: "Flammèche"
		},

		damage: 40,

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
