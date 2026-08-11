import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [848],

	name: {
		'en-us': "Toxel"
	},

	illustrator: "Akira Komayama",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'en-us': "This selfish, attention-seeking Pokémon stores\npoison and electricity in two different sacs inside\nits body."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Static Shock"
		},

		damage: 30,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card