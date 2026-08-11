import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [88],

	name: {
		'en-us': "Alolan Grimer"
	},

	illustrator: "Sekio",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		'en-us': "Alolan Grimer will gladly gobble up any kind\nof trash, making it a widely used and popular\nPokémon at garbage disposal facilities."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Pound"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card