import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Bergmite"
	},

	illustrator: "Miki Tanaka",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [712],
	hp: 70,
	types: ["Water"],

	description: {
		'en-us': "They live in mountainous regions of frigid cold.\nOn rare occasions, they ride on the back of an\nAvalugg to cross seas and move to new habitats."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Icicle"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-gyarados"]
}

export default card