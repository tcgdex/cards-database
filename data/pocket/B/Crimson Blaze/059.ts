import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [396],

	name: {
		'en-us': "Starly"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'en-us': "Because they are weak individually, they form\ngroups. However, they bicker if the group grows\ntoo big."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Call for Family"
		},

		cost: ["Colorless"],

		effect: {
			'en-us': "Put 1 random Starly from your deck onto your Bench."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card