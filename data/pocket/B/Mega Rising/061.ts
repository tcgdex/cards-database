import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Panpour"
	},

	illustrator: "Jerky",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [515],
	hp: 60,
	types: ["Water"],

	description: {
		'en-us': "The water stored inside the tuft on its head is full of\nnutrients. Plants that receive its water grow large."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Beat"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card