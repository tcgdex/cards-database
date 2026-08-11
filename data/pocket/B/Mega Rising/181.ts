import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pidgeotto"
	},

	illustrator: "Mizue",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [17],
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Pidgey"
	},

	description: {
		'en-us': "Very protective of its sprawling territorial area,\nthis Pokémon will fiercely peck at any intruder."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Speed Wing"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card