import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Sunkern"
	},

	illustrator: "0313",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		en: "It suddenly falls out of the sky in the morning.\nKnowing it's weak, it simply feeds until it evolves."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Blot"
		},

		damage: 20,
		cost: ["Grass"],

		effect: {
			en: "Heal 10 damage from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh", "lugia"]
}

export default card