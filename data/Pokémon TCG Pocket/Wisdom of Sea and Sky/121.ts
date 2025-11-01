import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Forretress",
		fr: "Foretress"
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
		en: "It remains immovably rooted to its tree. It scatters\npieces of its hard shell to drive its enemies away.",
		fr: "Il est totalement fixé à son arbre. Il lance des morceaux de sa carapace pour faire fuir son ennemi."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Shell Crash",
			fr: "Collision Carapace"
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