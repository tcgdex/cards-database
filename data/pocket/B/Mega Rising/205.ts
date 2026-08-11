import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Braviary"
	},

	illustrator: "chibi",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [628],
	hp: 120,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Rufflet"
	},

	description: {
		'en-us': "For the sake of its friends, this brave warrior of\nthe sky will not stop battling, even if injured."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Slash"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card