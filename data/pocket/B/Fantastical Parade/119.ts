import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [680],

	name: {
		'en-us': "Doublade"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Honedge"
	},

	description: {
		'en-us': "The two swords employ a strategy of rapidly\nalternating between offense and defense to\nbring down their prey."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Dual Blades"
		},

		damage: 40,
		cost: ["Metal", "Metal"],

		effect: {
			'en-us': "Flip 2 coins. This attack does 40 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card