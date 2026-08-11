import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Sudowoodo"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [185],
	hp: 90,
	types: ["Fighting"],

	description: {
		'en-us': "To avoid being attacked, it does nothing but\nmimic a tree. It hates water and flees from rain."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Fight Back"
		},

		damage: 30,
		cost: ["Fighting", "Fighting"],

		effect: {
			'en-us': "If this Pokémon has damage on it, this attack does 50 more damage."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card