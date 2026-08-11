import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [7],

	name: {
		'en-us': "Squirtle"
	},

	illustrator: "Naoki Saito",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'en-us': "When it feels threatened, it draws its limbs inside\nits shell and sprays water from its mouth."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Tail Whap"
		},

		damage: 40,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card