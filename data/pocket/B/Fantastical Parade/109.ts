import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [799],

	name: {
		'en-us': "Guzzlord"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Darkness"],

	description: {
		'en-us': "An unknown life-form called a UB. It may be\nconstantly hungry—it is certainly always\ndevouring something."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Breakcore"
		},

		cost: ["Darkness", "Darkness", "Darkness", "Colorless"],

		effect: {
			'en-us': "Flip a coin. If heads, discard your opponent's Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 4
}

export default card