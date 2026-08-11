import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [282],

	name: {
		'en-us': "Mega Gardevoir ex"
	},

	illustrator: "DOM",
	rarity: "Three Star",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Kirlia"
	},

	description: {
		'en-us': "When it opens the red plate on its chest and\nunleashes its heart, its strongest psychic power\nis released."
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Fantasia Force"
		},

		damage: 110,
		cost: ["Psychic", "Psychic"],

		effect: {
			'en-us': "Take 3 {P} Energy from your Energy Zone and attach it to your {P} Pokémon in any way you like."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card