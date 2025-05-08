import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Charmander",
		fr: "Salamèche"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Ember",
			fr: "Flammèche"
		},

		effect: {
			en: "Discard a R Energy from this Pokémon.",
			fr: "Défaussez une Énergie R de ce Pokémon."
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
		fr: "Il préfère ce qui est chaud. En cas de pluie, de la vapeur se forme autour de queue."
	}
}

export default card
