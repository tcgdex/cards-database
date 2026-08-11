import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Popplio"
	},

	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [728],
	hp: 60,
	types: ["Water"],

	description: {
		'en-us': "The balloons it inflates with its nose grow\nlarger and larger as it practices day by day."
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