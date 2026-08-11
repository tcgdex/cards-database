import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Duskull"
	},

	illustrator: "Naoki Saito",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [355],
	hp: 50,
	types: ["Psychic"],

	description: {
		'en-us': "Making itself invisible, it silently sneaks up to\nprey. It has the ability to slip through thick walls."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Ambush"
		},

		damage: 10,
		cost: ["Psychic"],

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 30 more damage."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card