import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [434],

	name: {
		'en-us': "Stunky"
	},

	illustrator: "Naoyo Kimura",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'en-us': "The foul fluid from its rear is so revolting that it\ncan make people feel queasy up to a mile and a\nquarter away."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Spray Fluid"
		},

		damage: 30,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card