import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Oddish"
	},

	illustrator: "Miranda Branley",
	rarity: "None",
	category: "Pokemon",
	dexId: [43],
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Razor Leaf"
		},

		damage: 10
	}, {
		cost: ["Grass", "Grass"],

		name: {
			en: "Grass Knot"
		},

		effect: {
			en: "This attack does 20 damage for each {C} in your opponent's Active Pokémon's Retreat Cost.",
		},

		damage: "20×"
	}],

	weaknesses: [{
		type: "Fire",
		value: "x2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card
