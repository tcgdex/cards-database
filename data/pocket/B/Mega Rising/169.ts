import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cobalion"
	},

	illustrator: "Takeshi Nakamura",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [638],
	hp: 110,
	types: ["Metal"],

	description: {
		'en-us': "It has a body and heart of steel. It worked with its\nallies to punish people when they hurt Pokémon."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Sacred Sword"
		},

		damage: 110,
		cost: ["Metal", "Metal", "Colorless"],

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Sacred Sword."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-blaziken"]
}

export default card