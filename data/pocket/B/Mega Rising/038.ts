import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Simisear"
	},

	illustrator: "kirisAki",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [514],
	hp: 100,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Pansear"
	},

	description: {
		'en-us': "When it gets excited, embers rise from its head\nand tail and it gets hot. For some reason, it\nloves sweets."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Fury Swipes"
		},

		damage: 40,
		cost: ["Fire", "Colorless"],

		effect: {
			'en-us': "Flip 3 coins. This attack does 40 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card