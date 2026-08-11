import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [8],

	name: {
		'en-us': "Wartortle"
	},

	illustrator: "Taiga Kasai",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Squirtle"
	},

	description: {
		'en-us': "It cleverly controls its furry ears and tail to\nmaintain its balance while swimming."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Shell Shield"
		},

		effect: {
			'en-us': "As long as this Pokémon is on your Bench, prevent all damage done to this Pokémon by attacks."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Waterfall"
		},

		damage: 60,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card