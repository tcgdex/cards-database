import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Ambipom",
		fr: "Capidextre"
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
		en: "It uses its tails for everything. If it wraps both\nof its tails around you and gives you a squeeze,\nthat's proof it really likes you.",
		fr: "Il utilise toujours ses deux queues pour faire la moindre tâche. Il s'en sert aussi pour enlacer les gens qu'il affectionne tout particulièrement."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Tail Jab",
			fr: "Coup d'Queue"
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