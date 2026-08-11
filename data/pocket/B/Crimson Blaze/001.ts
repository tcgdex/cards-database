import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [1],

	name: {
		'en-us': "Bulbasaur"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'en-us': "While it is young, it uses the nutrients that are\nstored in the seed on its back in order to grow."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Tackle"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card