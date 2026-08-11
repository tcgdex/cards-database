import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Marill"
	},

	illustrator: "Shibuzoh.",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [183],
	hp: 60,
	types: ["Water"],

	description: {
		'en-us': "The fur on its body naturally repels water. It can\nstay dry even when it plays in the water."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Tackle"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card