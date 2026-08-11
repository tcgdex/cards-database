import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Sandslash"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [28],
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Sandshrew"
	},

	description: {
		'en-us': "It climbs trees by hooking on with its sharp claws.\nSandslash shares the berries it gathers, dropping\nthem down to Sandshrew waiting below the tree."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Cut"
		},

		damage: 50,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card