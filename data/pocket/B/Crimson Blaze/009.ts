import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [412],

	name: {
		'en-us': "Burmy"
	},

	illustrator: "Miki Tanaka",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'en-us': "If its cloak is broken in battle, it quickly remakes\nthe cloak with materials nearby."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Hang Down"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card