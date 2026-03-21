import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Slugma",
		fr: "Limagma"
	},

	illustrator: "Yukiko Baba",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [218],
	hp: 80,
	types: ["Fire"],

	description: {
		en: "A common sight in volcanic areas, it slowly slithers\naround in a constant search for warm places.",
		fr: "Commun dans les régions volcaniques, il se déplace sans cesse pour trouver des endroits chauds."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Combustion",
			fr: "Fournaise"
		},

		damage: 40,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card