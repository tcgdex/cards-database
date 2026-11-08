import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Growlithe"
	},

	illustrator: "Yuu Nishida",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [58],
	hp: 70,
	types: ["Fire"],

	description: {
		'en-us': "It's very friendly and faithful to people. It will try\nto repel enemies by barking and biting."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Dig Claws"
		},

		damage: 20,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-blaziken"]
}

export default card