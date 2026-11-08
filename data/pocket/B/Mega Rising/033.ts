import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Torchic"
	},

	illustrator: "GOSSAN",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [255],
	hp: 60,
	types: ["Fire"],

	description: {
		'en-us': "A fire burns inside, so it feels very warm to hug.\nIt launches fireballs of 1,800 degrees Fahrenheit."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Peck"
		},

		damage: 20,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card