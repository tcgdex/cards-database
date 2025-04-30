import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Grimer"
	},

	illustrator: "Naoki Saito",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		en: "There are a hundred or so of them living in Alola's waste-disposal site. They're all hard workers who eat a lot of trash."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Poison Gas"
		},

		cost: ["Darkness"],

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card