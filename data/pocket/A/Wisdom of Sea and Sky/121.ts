import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Forretress",
		'fr-fr': "Foretress"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [205],
	hp: 130,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Pineco"
	},

	description: {
		'en-us': "It remains immovably rooted to its tree. It scatters\npieces of its hard shell to drive its enemies away.",
		'fr-fr': "Il est totalement fixé à son arbre. Il lance des morceaux de sa carapace pour faire fuir son ennemi."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Shell Crash",
			'fr-fr': "Collision Carapace"
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