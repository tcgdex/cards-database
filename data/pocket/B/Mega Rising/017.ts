import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Petilil"
	},

	illustrator: "Naoki Saito",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [548],
	hp: 60,
	types: ["Grass"],

	description: {
		'en-us': "If the leaves on its head are pruned with\nregularity, this Pokémon can be grown into\na fine plump shape."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Flop"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card