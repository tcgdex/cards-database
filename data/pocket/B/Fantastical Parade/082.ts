import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [104],

	name: {
		'en-us': "Cubone"
	},

	illustrator: "Mizue",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'en-us': "This Pokémon wears the skull of its deceased\nmother. Sometimes Cubone's dreams make it cry,\nbut each tear Cubone sheds makes it stronger."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Headbutt"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card