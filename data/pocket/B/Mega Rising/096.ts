import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Boltund"
	},

	illustrator: "chibi",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [836],
	hp: 110,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Yamper"
	},

	description: {
		'en-us': "It sends electricity through its legs to boost their\nstrength. Running at top speed, it easily breaks\n50 mph."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Zap Kick"
		},

		damage: 60,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card