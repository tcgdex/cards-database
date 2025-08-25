import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Mantine"
	},

	illustrator: "0313",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		en: "While elegantly swimming in the sea, it ignores\nRemoraid that cling to its fins seeking food scraps."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Dive"
		},

		damage: 80,
		cost: ["Water", "Water", "Water", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lugia"]
}

export default card