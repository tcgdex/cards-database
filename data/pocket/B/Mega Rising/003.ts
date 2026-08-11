import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Wurmple"
	},

	illustrator: "kirisAki",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [265],
	hp: 50,
	types: ["Grass"],

	description: {
		'en-us': "It lives among the tall grass and in forests. It repels\nattacks by raising up the spikes on its rear."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Ram"
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