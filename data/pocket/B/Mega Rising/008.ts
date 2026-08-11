import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Seedot"
	},

	illustrator: "Naoyo Kimura",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [273],
	hp: 50,
	types: ["Grass"],

	description: {
		'en-us': "It attaches itself to a tree branch using the top of\nits head. Strong winds can sometimes make it fall."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Rollout"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card