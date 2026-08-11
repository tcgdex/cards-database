import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [679],

	name: {
		'en-us': "Honedge"
	},

	illustrator: "Atsuko Nishida",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		'en-us': "The blue eye on the sword's handguard is the\ntrue body of Honedge. With its old cloth, it\ndrains people's lives away."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Cut Up"
		},

		damage: 20,
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card