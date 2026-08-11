import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Galvantula"
	},

	illustrator: "Yumi",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [596],
	hp: 80,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Joltik"
	},

	description: {
		'en-us': "It lays traps of electrified threads near the nests\nof bird Pokémon, aiming to snare chicks that are\nnot yet good at flying."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Electro Ball"
		},

		damage: 50,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 0,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card