import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Grimmsnarl"
	},

	illustrator: "DOM",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [861],
	hp: 160,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Morgrem"
	},

	description: {
		'en-us': "It lives deep within the forest. Even after evolving\ninto this splendid form, it hasn't given up on its\npetty misdeeds and pranks."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Wrack Down"
		},

		damage: 100,
		cost: ["Darkness", "Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-altaria"]
}

export default card