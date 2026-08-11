import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [258],

	name: {
		'en-us': "Mudkip"
	},

	illustrator: "Aya Kusube",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'en-us': "When it uses its large tail fin, it picks up speed\nrapidly in the water. It is strong in spite of its\nsmall size."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Tackle"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card