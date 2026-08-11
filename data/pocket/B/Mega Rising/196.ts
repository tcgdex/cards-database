import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Swablu"
	},

	illustrator: "Kanako Eo",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [333],
	hp: 50,
	types: ["Colorless"],

	description: {
		'en-us': "It can't relax if it or its surroundings are not clean.\nIt wipes off dirt with its wings."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Sing"
		},

		cost: ["Colorless"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card