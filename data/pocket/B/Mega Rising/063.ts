import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tympole"
	},

	illustrator: "Mina Nakai",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [535],
	hp: 60,
	types: ["Water"],

	description: {
		'en-us': "It uses sound waves to communicate with\nothers of its kind. People and other Pokémon\nspecies can't hear its cries of warning."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Mud-Slap"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card