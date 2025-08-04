import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Gliscor"
	},

	illustrator: "Shiburingaru",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		en: "Gligar"
	},

	description: {
		en: "It observes prey while hanging inverted from\nbranches. When the chance presents itself,\nit swoops!"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Sharp Fang"
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card