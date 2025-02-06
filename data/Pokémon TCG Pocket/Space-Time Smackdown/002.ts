import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Gloom"
	},

	illustrator: "Shibuzoh.",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Oddish"
	},

	description: {
		en: "Its pistils exude an incredibly foul odor. The horrid stench can cause fainting at a distance of 1.25 miles."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Razor Leaf"
		},

		damage: 30,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card
