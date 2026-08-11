import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [664],

	name: {
		'en-us': "Scatterbug"
	},

	illustrator: "Akira Komayama",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'en-us': "This Pokémon scatters poisonous powder\nto repel enemies. It will eat different plants\ndepending on where it lives."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Bug Bite"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card