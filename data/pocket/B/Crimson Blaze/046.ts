import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [89],

	name: {
		'en-us': "Muk"
	},

	illustrator: "Scav",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Grimer"
	},

	description: {
		'en-us': "They love to gather in smelly areas where sludge\naccumulates, making the stench around\nthem worse."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Gunk Shot"
		},

		damage: 70,
		cost: ["Darkness", "Darkness", "Darkness"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card