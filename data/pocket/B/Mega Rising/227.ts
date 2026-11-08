import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Beautifly"
	},

	illustrator: "tono",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [267],
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Silcoon"
	},

	description: {
		'en-us': "It has an aggressive nature. It stabs prey with its\nlong, narrow mouth to drain the prey's fluids."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Skill Dive"
		},

		cost: ["Grass"],

		effect: {
			'en-us': "This attack does 50 damage to 1 of your opponent's Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card