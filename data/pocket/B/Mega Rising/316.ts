import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Bidoof"
	},

	illustrator: "MAHOU",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [399],
	hp: 60,
	types: ["Colorless"],

	description: {
		'en-us': "With nerves of steel, nothing can perturb it. It is\nmore agile and active than it appears."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Super Fang"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			'en-us': "Halve your opponent's Active Pokémon's remaining HP, rounded down."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-altaria"]
}

export default card