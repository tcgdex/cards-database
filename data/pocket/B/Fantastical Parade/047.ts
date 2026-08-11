import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [847],

	name: {
		'en-us': "Barraskewda"
	},

	illustrator: "Kouki Saitou",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Arrokuda"
	},

	description: {
		'en-us': "It spins its tail fins to propel itself, surging\nforward at speeds of over 100 knots before\nramming prey and spearing into them."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Jet Headbutt"
		},

		damage: 40,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card