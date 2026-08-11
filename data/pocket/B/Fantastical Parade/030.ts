import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [122],

	name: {
		'en-us': "Galarian Mr. Mime"
	},

	illustrator: "Misa Tsutsui",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'en-us': "It can radiate chilliness from the bottoms of its\nfeet. It'll spend the whole day tap-dancing on a\nfrozen floor."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Icy Snow"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card