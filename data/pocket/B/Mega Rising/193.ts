import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Skitty"
	},

	illustrator: "Saya Tsuruta",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [300],
	hp: 50,
	types: ["Colorless"],

	description: {
		'en-us': "It shows its cute side by chasing its own tail\nuntil it gets dizzy."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Play Rough"
		},

		damage: 10,
		cost: ["Colorless"],

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 30 more damage."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-gyarados"]
}

export default card