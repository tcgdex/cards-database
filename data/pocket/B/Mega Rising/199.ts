import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Patrat"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [504],
	hp: 60,
	types: ["Colorless"],

	description: {
		'en-us': "Extremely cautious, one of them will always be on\nthe lookout, but it won't notice a foe coming\nfrom behind."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Bite"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card