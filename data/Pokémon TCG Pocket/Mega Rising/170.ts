import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Honedge"
	},

	illustrator: "Suwama Chiaki",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		en: "The blue eye on the sword's handguard is the\ntrue body of Honedge. With its old cloth, it\ndrains people's lives away."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Pierce"
		},

		damage: 20,
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card