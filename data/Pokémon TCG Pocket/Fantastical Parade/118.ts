import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Honedge"
	},

	illustrator: "Atsuko Nishida",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		en: "The blue eye on the sword's handguard is the\ntrue body of Honedge. With its old cloth, it\ndrains people's lives away."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Cut Up"
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