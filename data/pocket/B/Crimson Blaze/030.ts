import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [200],

	name: {
		'en-us': "Misdreavus"
	},

	illustrator: "sui",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		'en-us': "It loves to bite and yank people's hair from\nbehind without warning, just to see their\nshocked reactions."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Lead"
		},

		cost: ["Psychic"],

		effect: {
			'en-us': "Put a random Supporter card from your deck into your hand."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card