import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Forretress"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	evolveFrom: {
		en: "Pineco"
	},

	description: {
		en: "It remains immovably rooted to its tree. It scatters\npieces of its hard shell to drive its enemies away."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Shell Crash"
		},

		damage: 80,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["ho-oh", "lugia"]
}

export default card