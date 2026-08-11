import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Yamper"
	},

	illustrator: "Saya Tsuruta",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [835],
	hp: 60,
	types: ["Lightning"],

	description: {
		'en-us': "This gluttonous Pokémon only assists people with\ntheir work because it wants treats. As it runs,\nit crackles with electricity."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Roar"
		},

		cost: ["Colorless"],

		effect: {
			'en-us': "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card