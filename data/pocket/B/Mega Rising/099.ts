import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Misdreavus"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [200],
	hp: 60,
	types: ["Psychic"],

	description: {
		'en-us': "It loves to bite and yank people's hair from\nbehind without warning, just to see their\nshocked reactions."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Double Spin"
		},

		damage: 20,
		cost: ["Psychic"],

		effect: {
			'en-us': "Flip 2 coins. This attack does 20 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card