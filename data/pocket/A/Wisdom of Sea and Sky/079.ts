import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Togetic",
		'fr-fr': "Togetic"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [176],
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Togepi"
	},

	description: {
		'en-us': "They say that it will appear before kindhearted,\ncaring people and shower them with happiness.",
		'fr-fr': "On dit qu'il se montre aux personnes dotées d'un cœur pur pour leur apporter joie et bonheur."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Speed Dive",
			'fr-fr': "Plongée Rapide"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card