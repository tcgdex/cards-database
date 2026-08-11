import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Corphish"
	},

	illustrator: "Sekio",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [341],
	hp: 70,
	types: ["Water"],

	description: {
		'en-us': "It was originally a Pokémon from afar that escaped\nto the wild. It can adapt to the dirtiest river."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Water Gun"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card