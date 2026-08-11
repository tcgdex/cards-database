import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [694],

	name: {
		'en-us': "Helioptile"
	},

	illustrator: "Miki Tanaka",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'en-us': "The sun powers this Pokémon's electricity\ngeneration. Interruption of that process\nstresses Helioptile to the point of weakness."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Thunder Shock"
		},

		damage: 10,
		cost: ["Lightning"],

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card