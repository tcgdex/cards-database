import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [232],

	name: {
		'en-us': "Donphan ex"
	},

	illustrator: "PLANETA Yamashita",
	rarity: "Two Shiny",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Phanpy"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Gigantic Press"
		},

		damage: 50,
		cost: ["Fighting"],

		effect: {
			'en-us': "If this Pokémon has at least 2 extra {F} Energy attached, this attack does 60 more damage."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3
}

export default card