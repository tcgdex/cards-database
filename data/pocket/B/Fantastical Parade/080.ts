import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [67],

	name: {
		'en-us': "Machoke"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Machop"
	},

	description: {
		'en-us': "Its formidable body never gets tired. It helps\npeople by doing work such as the moving of\nheavy goods."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Chop"
		},

		damage: 40,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2
}

export default card