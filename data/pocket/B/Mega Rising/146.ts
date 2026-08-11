import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Carkol"
	},

	illustrator: "Uta",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [838],
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Rolycoly"
	},

	description: {
		'en-us': "Due to the coal tar created inside it, the heap of\ncoal on Carkol's back never falls apart, even\nwhen the Pokémon rolls around at high speeds."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Heat Crash"
		},

		damage: 50,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-gyarados"]
}

export default card