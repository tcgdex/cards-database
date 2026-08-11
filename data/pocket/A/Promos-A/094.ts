import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Horsea"
	},

	illustrator: "Taira Akitsu",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [116],
	hp: 60,
	types: ["Water"],

	description: {
		'en-us': "Horsea makes its home in oceans with gentle\ncurrents. If this Pokémon is under attack, it spits\nout pitch-black ink and escapes."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Water Arrow"
		},

		cost: ["Water"],

		effect: {
			'en-us': "This attack does 10 damage to 1 of your opponent's Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card