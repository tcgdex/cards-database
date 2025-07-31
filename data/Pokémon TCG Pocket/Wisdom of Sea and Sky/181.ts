import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Sentret"
	},

	illustrator: "saino misaki",
	rarity: "One Star",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "When acting as a lookout, it warns others of danger\nby screeching and hitting the ground with its tail."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Scratch"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card