import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [308],

	name: {
		'en-us': "Medicham"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Meditite"
	},

	description: {
		'en-us': "It elegantly avoids attacks with dance-like\nsteps, then launches a devastating blow in\nthe same motion."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Psykick"
		},

		damage: 50,
		cost: ["Fighting", "Colorless"],

		effect: {
			'en-us': "If this Pokémon has any {P} Energy attached, this attack does 50 more damage."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card