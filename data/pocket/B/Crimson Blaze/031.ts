import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [429],

	name: {
		'en-us': "Mismagius"
	},

	illustrator: "Ligton",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Misdreavus"
	},

	description: {
		'en-us': "Its cries sound like incantations to torment the\nfoe. It appears where you least expect it."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Stored Power"
		},

		damage: 60,
		cost: ["Psychic", "Psychic"],

		effect: {
			'en-us': "Move all {P} Energy from this Pokémon to 1 of your Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card