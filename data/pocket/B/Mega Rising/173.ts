import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Meltan"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [808],
	hp: 70,
	types: ["Metal"],

	description: {
		'en-us': "It dissolves and eats metal. Circulating liquid\nmetal within its body is how it generates energy."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Beam"
		},

		damage: 20,
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-gyarados"]
}

export default card