import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [297],

	name: {
		'en-us': "Hariyama"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Makuhita"
	},

	description: {
		'en-us': "It stomps on the ground to build power.\nIt can send a 10-ton truck flying with a\nstraight-arm punch."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Megaton Slap Push"
		},

		damage: 90,
		cost: ["Fighting", "Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 3
}

export default card