import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [509],

	name: {
		'en-us': "Purrloin"
	},

	illustrator: "Yoriyuki Ikegami",
	rarity: "One Star",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'en-us': "Opponents that get drawn in by its adorable\nbehavior come away with stinging scratches from\nits claws and stinging pride from its laughter."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Whiny Voice"
		},

		cost: ["Darkness"],

		effect: {
			'en-us': "Flip a coin. If heads, look at a random card from your opponent's hand and shuffle it into their deck."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card