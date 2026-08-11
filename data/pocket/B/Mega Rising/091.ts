import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Zebstrika"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [523],
	hp: 100,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Blitzle"
	},

	description: {
		'en-us': "They have lightning-like movements.\nWhen Zebstrika run at full speed, the sound of\nthunder reverberates."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Electric Ball"
		},

		damage: 90,
		cost: ["Lightning", "Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card