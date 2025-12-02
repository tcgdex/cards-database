import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Slugma",
		fr: "Limagma"
	},

	illustrator: "Mékayu",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [218],
	hp: 70,
	types: ["Fire"],

	description: {
		en: "A common sight in volcanic areas, it slowly slithers\naround in a constant search for warm places.",
		fr: "Commun dans les régions volcaniques, il se déplace sans cesse pour trouver des endroits chauds."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Stampede",
			fr: "Ruée"
		},

		damage: 30,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["ho-oh"]
}

export default card