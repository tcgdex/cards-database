import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Houndour"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		en: "It is smart enough to hunt in packs. It uses a\nvariety of cries for communicating with others."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Bite"
		},

		damage: 40,
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh", "lugia"]
}

export default card