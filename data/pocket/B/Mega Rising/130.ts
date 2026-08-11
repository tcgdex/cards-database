import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Sandile"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [551],
	hp: 60,
	types: ["Fighting"],

	description: {
		'en-us': "They live hidden under hot desert sands in order\nto keep their body temperature from dropping."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Gnaw"
		},

		damage: 20,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-gyarados"]
}

export default card