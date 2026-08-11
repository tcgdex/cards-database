import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [834],

	name: {
		'en-us': "Drednaw"
	},

	illustrator: "kodama",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Chewtle"
	},

	description: {
		'en-us': "Drednaw lurks along the shoreline. When prey\ncome to drink water, Drednaw stretches its neck\nout and chomps down on them."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Heavy Impact"
		},

		damage: 120,
		cost: ["Water", "Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3
}

export default card