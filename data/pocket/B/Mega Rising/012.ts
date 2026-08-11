import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Breloom"
	},

	illustrator: "Mizue",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [286],
	hp: 100,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Shroomish"
	},

	description: {
		'en-us': "The seeds on its tail are made of toxic spores.\nIt knocks out foes with quick, virtually invisible\npunches."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Seed Bomb"
		},

		damage: 40,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card