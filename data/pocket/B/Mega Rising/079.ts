import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Barraskewda"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [847],
	hp: 90,
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
			'en-us': "Double-Edge"
		},

		damage: 80,
		cost: ["Water", "Colorless"],

		effect: {
			'en-us': "This Pokémon also does 20 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-gyarados"]
}

export default card