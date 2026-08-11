import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lycanroc ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [745],
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Rockruff"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Lycanfang"
		},

		damage: 130,
		cost: ["Fighting", "Fighting", "Colorless"],

		effect: {
			'en-us': "Discard a {F} Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-gyarados"]
}

export default card