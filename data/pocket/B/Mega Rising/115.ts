import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Spritzee"
	},

	illustrator: "MAHOU",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [682],
	hp: 60,
	types: ["Psychic"],

	description: {
		'en-us': "The scent its body gives off enraptures those\nwho smell it. Noble ladies had no shortage of\nlove for Spritzee."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Fairy Wind"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card