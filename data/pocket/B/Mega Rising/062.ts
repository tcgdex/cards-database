import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Simipour"
	},

	illustrator: "Shigenori Negishi",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [516],
	hp: 100,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Panpour"
	},

	description: {
		'en-us': "It prefers places with clean water. When its tuft runs\nlow, it replenishes it by siphoning up water with\nits tail."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Fury Swipes"
		},

		damage: 40,
		cost: ["Water", "Colorless"],

		effect: {
			'en-us': "Flip 3 coins. This attack does 40 damage for each heads."
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