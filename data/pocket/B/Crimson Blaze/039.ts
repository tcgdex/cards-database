import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [296],

	name: {
		'en-us': "Makuhita"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		'en-us': "It toughens up by slamming into thick trees\nover and over. It gains a sturdy body and\ndauntless spirit."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Strength"
		},

		damage: 40,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2
}

export default card