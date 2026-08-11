import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Gyarados"
	},

	illustrator: "kawayoo",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [130],
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Magikarp"
	},

	description: {
		'en-us': "It appears whenever there is world conflict,\nburning down any place it travels through."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Hammering Tail"
		},

		damage: 100,
		cost: ["Water", "Water", "Water", "Colorless"],

		effect: {
			'en-us': "Discard the top card of your opponent's deck."
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