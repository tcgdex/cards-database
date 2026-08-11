import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lampent"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [608],
	hp: 80,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Litwick"
	},

	description: {
		'en-us': "It lurks in cities, pretending to be a lamp.\nOnce it finds someone whose death is near,\nit will trail quietly after them."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Will-O-Wisp"
		},

		damage: 40,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card