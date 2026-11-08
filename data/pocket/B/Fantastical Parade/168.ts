import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [209],

	name: {
		'en-us': "Snubbull"
	},

	illustrator: "OKUBO",
	rarity: "One Star",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'en-us': "Its growls make its opponents uneasy. This\nlaid-back Pokémon tends to sleep half the day."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Sharp Fang"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card