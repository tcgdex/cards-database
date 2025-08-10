import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Ambipom"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	evolveFrom: {
		en: "Aipom"
	},

	description: {
		en: "It uses its tails for everything. If it wraps both\nof its tails around you and gives you a squeeze,\nthat's proof it really likes you."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Tail Jab"
		},

		damage: 40,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh", "lugia"]
}

export default card