import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [710],

	name: {
		'en-us': "Pumpkaboo"
	},

	illustrator: "Mousho",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'en-us': "The light that streams out from the holes in the\npumpkin can hypnotize and control the people\nand Pokémon that see it."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Ram"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card