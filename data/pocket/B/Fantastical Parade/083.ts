import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [307],

	name: {
		'en-us': "Meditite"
	},

	illustrator: "sui",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		'en-us': "It meditates to heighten its inner energy and to\nfloat in the air. It eats one berry a day."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Smack"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card