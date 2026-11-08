import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Bewear"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [760],
	hp: 130,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Stufful"
	},

	description: {
		'en-us': "The moves it uses to take down its prey would\nmake a martial artist jealous. It tucks subdued\nprey under its arms to carry them to its nest."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Heavy Impact"
		},

		damage: 90,
		cost: ["Fighting", "Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-blaziken"]
}

export default card