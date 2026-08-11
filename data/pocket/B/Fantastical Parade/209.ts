import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [117],

	name: {
		'en-us': "Seadra"
	},

	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Horsea"
	},

	description: {
		'en-us': "It's the males that raise the offspring. While\nSeadra are raising young, the spines on their\nbacks secrete thicker and stronger poison."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Razor Fin"
		},

		damage: 50,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card