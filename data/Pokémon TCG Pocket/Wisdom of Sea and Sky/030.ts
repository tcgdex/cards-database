import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Slugma"
	},

	illustrator: "Mékayu",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		en: "A common sight in volcanic areas, it slowly slithers\naround in a constant search for warm places."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Stampede"
		},

		damage: 30,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card