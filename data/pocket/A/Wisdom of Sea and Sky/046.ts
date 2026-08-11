import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Totodile",
		'fr-fr': "Kaiminus"
	},

	illustrator: "kawayoo",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [158],
	hp: 60,
	types: ["Water"],

	description: {
		'en-us': "It is small but rough and tough. It won't hesitate to\ntake a bite out of anything that moves.",
		'fr-fr': "Petit mais costaud, il n'hésite pas à mordre tout ce qui passe à portée de dents."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Wave Splash",
			'fr-fr': "Grosse Vague"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card