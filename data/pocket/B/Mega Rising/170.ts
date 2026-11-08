import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Honedge"
	},

	illustrator: "Suwama Chiaki",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [679],
	hp: 60,
	types: ["Metal"],

	description: {
		'en-us': "The blue eye on the sword's handguard is the\ntrue body of Honedge. With its old cloth, it\ndrains people's lives away."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Pierce"
		},

		damage: 20,
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card