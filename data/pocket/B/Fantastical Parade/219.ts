import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [107],

	name: {
		'en-us': "Hitmonchan"
	},

	illustrator: "Shigenori Negishi",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		'en-us': "Its punches slice the air. They are launched at\nsuch high speed, even a slight graze could cause\na burn."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Jab"
		},

		damage: 30,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card