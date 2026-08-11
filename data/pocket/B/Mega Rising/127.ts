import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Hariyama"
	},

	illustrator: "Scav",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [297],
	hp: 130,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Makuhita"
	},

	description: {
		'en-us': "It stomps on the ground to build power.\nIt can send a 10-ton truck flying with a\nstraight-arm punch."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Slapping Knockdown"
		},

		damage: 110,
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"],

		effect: {
			'en-us': "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 4,

	boosters: ["mega-blaziken"]
}

export default card