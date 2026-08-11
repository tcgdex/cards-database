import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [52],

	name: {
		'en-us': "Galarian Meowth"
	},

	illustrator: "0313",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		'en-us': "These daring Pokémon have coins on their\nforeheads. Darker coins are harder, and harder\ncoins garner more respect among Meowth."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Slash"
		},

		damage: 20,
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card