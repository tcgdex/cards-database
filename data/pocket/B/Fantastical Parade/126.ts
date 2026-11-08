import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [115],

	name: {
		'en-us': "Kangaskhan"
	},

	illustrator: "kawayoo",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		'en-us': "There are records of a lost human child being\nraised by a childless Kangaskhan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Steady Punch"
		},

		damage: 60,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 30 more damage."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card