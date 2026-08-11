import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [116],

	name: {
		'en-us': "Horsea"
	},

	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		'en-us': "Horsea makes its home in oceans with gentle\ncurrents. If this Pokémon is under attack, it spits\nout pitch-black ink and escapes."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Hook"
		},

		damage: 30,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card