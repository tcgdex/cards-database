import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Luvdisc"
	},

	illustrator: "sui",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [370],
	hp: 70,
	types: ["Water"],

	description: {
		'en-us': "During the spawning season, countless Luvdisc\ncongregate at coral reefs, turning the waters pink."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Paired Tackle"
		},

		damage: 30,
		cost: ["Water", "Water"],

		effect: {
			'en-us': "If you have exactly 2, 4, or 6 cards in your hand, this attack does 30 more damage."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card