import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Gloom"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Oddish"
	},

	description: {
		en: "Its pistils exude an incredibly foul odor.\nThe horrid stench can cause fainting at a distance\nof 1.25 miles."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Leaf Step"
		},

		damage: 40,
		cost: ["Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card