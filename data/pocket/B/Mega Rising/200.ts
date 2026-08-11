import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Watchog"
	},

	illustrator: "MAHOU",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [505],
	hp: 100,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Patrat"
	},

	description: {
		'en-us': "When they see an enemy, their tails stand high,\nand they spit the seeds of berries stored in their\ncheek pouches."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Biting Fang"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"],

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 40 more damage."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card