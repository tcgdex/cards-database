import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Dialga, Palkia } from "./Boosters"

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
		en: "Its pistils exude an incredibly foul odor.<br />The horrid stench can cause fainting at a distance<br />of 1.25 miles."
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

	retreat: 2,
	
	boosters: [Dialga, Palkia]
}

export default card