import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [833],

	name: {
		'en-us': "Chewtle"
	},

	illustrator: "Mina Nakai",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		'en-us': "A popular game among children is to lift up sticks\nthat Chewtle have bitten onto to see whose\nChewtle can hang on the longest."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Headbutt"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card