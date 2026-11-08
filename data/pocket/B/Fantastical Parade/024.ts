import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [813],

	name: {
		'en-us': "Scorbunny"
	},

	illustrator: "kirisAki",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		'en-us': "Fire energy gathers in the pads of its feet,\nraising their temperature. Once hot, Scorbunny's\nfootpads can deal heavy damage to opponents."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Flop"
		},

		damage: 20,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card