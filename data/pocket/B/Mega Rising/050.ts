import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Magikarp"
	},

	illustrator: "Yukiko Baba",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [129],
	hp: 30,
	types: ["Water"],

	description: {
		'en-us': "In the distant past, it was somewhat stronger than\nthe horribly weak descendants that exist today."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Waterfall Evolution"
		},

		cost: ["Water", "Water", "Colorless"],

		effect: {
			'en-us': "Put a random card from your deck that evolves from this Pokémon onto this Pokémon to evolve it."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-gyarados"]
}

export default card