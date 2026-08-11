import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [582],

	name: {
		'en-us': "Vanillite"
	},

	illustrator: "Orca",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'en-us': "Supposedly, this Pokémon was born from an\nicicle. It spews out freezing air at −58 degrees\nFahrenheit to make itself more comfortable."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Chilly"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card