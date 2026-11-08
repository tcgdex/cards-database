import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Gyarados ex"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Four Diamond",
	category: "Pokemon",

	dexId: [130],
	hp: 210,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Magikarp"
	},

	description: {
		'en-us': "Mega Evolution also affects its brain, leaving\nno other function except its destructive instinct\nto burn everything to cinders."
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Mega Blaster"
		},

		damage: 140,
		cost: ["Water", "Water", "Water", "Colorless"],

		effect: {
			'en-us': "Discard the top 3 cards of your opponent's deck."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-gyarados"]
}

export default card