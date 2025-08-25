import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Piloswine"
	},

	illustrator: "Midori Harada",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		en: "Swinub"
	},

	description: {
		en: "If it charges at an enemy, the hairs on its back\nstand up straight. It is very sensitive to sound."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Headbutt Bounce"
		},

		damage: 70,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["ho-oh"]
}

export default card