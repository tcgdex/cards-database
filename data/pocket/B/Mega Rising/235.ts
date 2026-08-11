import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Keldeo"
	},

	illustrator: "Narumi Sato",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [647],
	hp: 100,
	types: ["Water"],

	description: {
		'en-us': "It crosses the world, running over the surfaces of\noceans and rivers. It appears at scenic waterfronts."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Sacred Sword"
		},

		damage: 110,
		cost: ["Water", "Water", "Colorless"],

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Sacred Sword."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card