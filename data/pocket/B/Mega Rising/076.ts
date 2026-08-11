import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Chewtle"
	},

	illustrator: "Nurikabe",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [833],
	hp: 80,
	types: ["Water"],

	description: {
		'en-us': "A popular game among children is to lift up sticks\nthat Chewtle have bitten onto to see whose\nChewtle can hang on the longest."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Wave Splash"
		},

		damage: 40,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-gyarados"]
}

export default card