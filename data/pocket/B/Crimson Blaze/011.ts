import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [4],

	name: {
		'en-us': "Charmander"
	},

	illustrator: "DOM",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		'en-us': "From the time it is born, a flame burns at the tip\nof its tail. Its life would end if the flame were to\ngo out."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Bite"
		},

		damage: 40,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card