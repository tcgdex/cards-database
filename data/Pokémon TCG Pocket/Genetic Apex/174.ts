import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Grimer"
	},

	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Poison Gas"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned."
		},

		damage: "10"
	}],

	retreat: 3,
	rarity: "One Diamond"
}

export default card
