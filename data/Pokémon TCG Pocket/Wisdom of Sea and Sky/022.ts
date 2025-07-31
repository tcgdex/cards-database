import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Heracross"
	},

	illustrator: "Naoki Saito",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		en: "It loves sweet nectar. To keep all the nectar to\nitself, it hurls rivals away with its prized horn."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Single Lunge"
		},

		damage: 40,
		cost: ["Grass", "Grass"],

		effect: {
			en: "If this Pokémon has no damage on it, this attack does 40 more damage."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card