import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [814],

	name: {
		'en-us': "Raboot"
	},

	illustrator: "Mizue",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Scorbunny"
	},

	description: {
		'en-us': "While it prides itself on its varied kicking moves,\nit can also deliver powerful headbutts once its\nflames have heated up its forehead."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Kick"
		},

		damage: 40,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card