import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Grimer"
	},

	illustrator: "Pani Kobayashi",
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

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3,
	rarity: "One Diamond",

	description: {
		en: "Born from sludge, these Pokémon now gather in polluted places and increase the bacteria in their bodies.",
	}
}

export default card
