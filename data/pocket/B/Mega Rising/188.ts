import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Zigzagoon"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [263],
	hp: 60,
	types: ["Colorless"],

	description: {
		'en-us': "A Pokémon with abundant curiosity. It shows an\ninterest in everything, so it always zigzags."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Tackle"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card