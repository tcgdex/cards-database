import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cascoon"
	},

	illustrator: "GOSSAN",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [268],
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Wurmple"
	},

	description: {
		'en-us': "It never forgets any attack it endured while in the\ncocoon. After evolution, it seeks payback."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Harden"
		},

		cost: ["Grass"],

		effect: {
			'en-us': "During your opponent's next turn, prevent all damage done to this Pokémon by attacks if that damage is 40 or less."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-blaziken"]
}

export default card