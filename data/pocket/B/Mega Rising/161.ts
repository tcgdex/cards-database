import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mareanie"
	},

	illustrator: "Aya Kusube",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [747],
	hp: 60,
	types: ["Darkness"],

	description: {
		'en-us': "It has excellent regenerative capabilities. Legs\nthat a Mareanie has lost have a very bitter,\nastringent flavor—they're not suitable as food."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Poison Sting"
		},

		cost: ["Darkness"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Poisoned."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card