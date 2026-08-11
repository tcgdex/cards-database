import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mareep"
	},

	illustrator: "saino misaki",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [179],
	hp: 70,
	types: ["Lightning"],

	description: {
		'en-us': "Its fleece grows continually. In the summer,\nthe fleece is fully shed, but it grows back in\na week."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Rear Kick"
		},

		damage: 10,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card