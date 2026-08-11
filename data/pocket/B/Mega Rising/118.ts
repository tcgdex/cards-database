import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Slurpuff"
	},

	illustrator: "Mizue",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [685],
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Swirlix"
	},

	description: {
		'en-us': "Slurpuff's fur contains a lot of air, making it soft\nto the touch and lighter than it looks."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Draining Kiss"
		},

		damage: 50,
		cost: ["Psychic", "Colorless"],

		effect: {
			'en-us': "Heal 30 damage from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-altaria"]
}

export default card