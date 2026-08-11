import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Golett"
	},

	illustrator: "Shin Nagasawa",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [622],
	hp: 80,
	types: ["Fighting"],

	description: {
		'en-us': "This Pokémon was created from clay. It received\norders from its master many thousands of years\nago, and it still follows those orders to this day."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Stampede"
		},

		damage: 20,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-blaziken"]
}

export default card