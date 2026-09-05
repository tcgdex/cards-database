import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Sudowoodo"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		en: "Although it always pretends to be a tree,\nits composition appears more similar to\nrock than to vegetation."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Fighting Headbutt"
		},

		damage: 20,
		cost: ["Fighting"],

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon ex, this attack does 30 more damage."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card