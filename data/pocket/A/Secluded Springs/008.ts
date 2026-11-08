import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Slugma",
		'fr-fr': "Limagma"
	},

	illustrator: "Yukiko Baba",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [218],
	hp: 80,
	types: ["Fire"],

	description: {
		'en-us': "A common sight in volcanic areas, it slowly slithers\naround in a constant search for warm places.",
		'fr-fr': "Commun dans les régions volcaniques, il se déplace sans cesse pour trouver des endroits chauds."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Combustion",
			'fr-fr': "Fournaise"
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