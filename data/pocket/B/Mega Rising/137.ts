import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Terrakion"
	},

	illustrator: "Takeshi Nakamura",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [639],
	hp: 120,
	types: ["Fighting"],

	description: {
		'en-us': "It has phenomenal power. It will mercilessly crush\nanyone or anything that bullies small Pokémon."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Sacred Sword"
		},

		damage: 110,
		cost: ["Fighting", "Fighting", "Colorless"],

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Sacred Sword."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-gyarados"]
}

export default card