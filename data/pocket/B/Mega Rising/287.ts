import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Bellsprout"
	},

	illustrator: "MAHOU",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [69],
	hp: 60,
	types: ["Grass"],

	description: {
		'en-us': "Even though its body is extremely skinny, it is\nblindingly fast when catching its prey."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Vine Whip"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-altaria"]
}

export default card