import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Joltik"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [595],
	hp: 30,
	types: ["Lightning"],

	description: {
		'en-us': "Joltik can be found clinging to other Pokémon.\nIt's soaking up static electricity because it can't\nproduce a charge on its own."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Attach"
		},

		damage: 20,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 0,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card