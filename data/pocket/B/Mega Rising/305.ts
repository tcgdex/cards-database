import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Drowzee"
	},

	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [96],
	hp: 70,
	types: ["Psychic"],

	description: {
		'en-us': "It remembers every dream it eats. It rarely eats\nthe dreams of adults because children's are much\ntastier."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Mumble"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-gyarados"]
}

export default card