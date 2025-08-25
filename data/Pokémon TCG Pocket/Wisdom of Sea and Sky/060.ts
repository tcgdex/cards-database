import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Corphish"
	},

	illustrator: "chibi",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		en: "No matter how dirty the water in the river, it will\nadapt and thrive. It has a strong will to survive."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Vise Grip"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card