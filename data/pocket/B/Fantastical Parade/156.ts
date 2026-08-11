import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [331],

	name: {
		'en-us': "Cacnea"
	},

	illustrator: "Mina Nakai",
	rarity: "One Star",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'en-us': "It lives in arid locations. Its yellow flowers bloom\nonce a year."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Corkscrew Punch"
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card