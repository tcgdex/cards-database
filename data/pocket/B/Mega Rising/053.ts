import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lotad"
	},

	illustrator: "Atsuko Nishida",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [270],
	hp: 60,
	types: ["Water"],

	description: {
		'en-us': "Its leaf grew too large for it to live on land.\nThat is how it began to live floating in the water."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Water Gun"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card