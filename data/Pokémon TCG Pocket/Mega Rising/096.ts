import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Boltund"
	},

	illustrator: "chibi",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [836],
	hp: 110,
	types: ["Lightning"],

	evolveFrom: {
		en: "Yamper"
	},

	description: {
		en: "It sends electricity through its legs to boost their\nstrength. Running at top speed, it easily breaks\n50 mph."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Zap Kick"
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