import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [525],

	name: {
		'en-us': "Boldore"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Roggenrola"
	},

	description: {
		'en-us': "It relies on sound in order to monitor what's in its\nvicinity. When angered, it will attack without ever\nchanging the direction it's facing."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Power Gem"
		},

		damage: 70,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3
}

export default card