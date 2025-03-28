import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Whirlipede"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		en: "Venipede"
	},

	description: {
		en: "This Pokémon spins itself rapidly and charges into its opponents. Its top speed is just over 60 mph."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Poison Sting"
		},

		damage: 20,
		cost: ["Darkness"],

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Diamond"
}

export default card
