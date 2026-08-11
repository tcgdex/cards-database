import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Darkrai"
	},

	illustrator: "Uta",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [491],
	hp: 120,
	types: ["Darkness"],

	description: {
		'en-us': "It can lull people to sleep and make them dream.\nIt is active during nights of the new moon."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Shadow Cage"
		},

		damage: 70,
		cost: ["Darkness", "Darkness", "Colorless"],

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-altaria"]
}

export default card