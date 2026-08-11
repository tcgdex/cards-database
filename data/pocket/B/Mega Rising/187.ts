import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Miltank"
	},

	illustrator: "saino misaki",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [241],
	hp: 100,
	types: ["Colorless"],

	description: {
		'en-us': "This Pokémon needs to be milked every day,\nor else it will fall ill. The flavor of Miltank milk\nchanges with the seasons."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Body Slam"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"],

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card