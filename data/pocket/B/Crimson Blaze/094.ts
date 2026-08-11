import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [27],

	name: {
		'en-us': "Sandshrew"
	},

	illustrator: "MAHOU",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		'en-us': "It burrows into the ground to create its nest. If\nhard stones impede its tunneling, it uses its sharp\nclaws to shatter them and then carries on digging."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Sand Spray"
		},

		damage: 20,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card