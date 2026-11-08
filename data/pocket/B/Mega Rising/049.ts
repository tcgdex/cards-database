import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Golduck"
	},

	illustrator: "Hasuno",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [55],
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Psyduck"
	},

	description: {
		'en-us': "It swims gracefully along on the quiet, slow-\nmoving rivers and lakes of which it is so fond."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Wave Splash"
		},

		damage: 50,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card