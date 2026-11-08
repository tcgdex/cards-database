import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Combusken"
	},

	illustrator: "GOSSAN",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [256],
	hp: 80,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Torchic"
	},

	description: {
		'en-us': "During a battle, the hot flame in its body increases.\nIts kicks have outstanding destructive power."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "High Jump Kick"
		},

		damage: 50,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card