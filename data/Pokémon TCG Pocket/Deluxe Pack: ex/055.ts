import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Charmander"
	},

	illustrator: "Teeziro",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		en: "It has a preference for hot things. When it rains,\nsteam is said to spout from the tip of its tail."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Ember"
		},

		damage: 30,
		cost: ["Fire"],

		effect: {
			en: "Discard a {R} Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card