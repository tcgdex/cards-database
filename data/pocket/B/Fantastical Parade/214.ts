import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [35],

	name: {
		'en-us': "Clefairy"
	},

	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'en-us': "It is said that happiness will come to those who\nsee a gathering of Clefairy dancing under a\nfull moon."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Slap"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card