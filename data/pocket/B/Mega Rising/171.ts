import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Doublade"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [680],
	hp: 90,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Honedge"
	},

	description: {
		'en-us': "The two swords employ a strategy of rapidly\nalternating between offense and defense to\nbring down their prey."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Slash"
		},

		damage: 40,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-blaziken"]
}

export default card